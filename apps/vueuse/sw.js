try {
  self["workbox:core:7.0.0"] && _();
} catch (e) {
}
const fallback = (code, ...args) => {
  let msg = code;
  if (args.length > 0) {
    msg += ` :: ${JSON.stringify(args)}`;
  }
  return msg;
};
const messageGenerator = fallback;
class WorkboxError extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(errorCode, details) {
    const message = messageGenerator(errorCode, details);
    super(message);
    this.name = errorCode;
    this.details = details;
  }
}
const getFriendlyURL = (url) => {
  const urlObj = new URL(String(url), location.href);
  return urlObj.href.replace(new RegExp(`^${location.origin}`), "");
};
const logger = null;
try {
  self["workbox:cacheable-response:7.0.0"] && _();
} catch (e) {
}
class CacheableResponse {
  /**
   * To construct a new CacheableResponse instance you must provide at least
   * one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(config = {}) {
    this._statuses = config.statuses;
    this._headers = config.headers;
  }
  /**
   * Checks a response to see whether it's cacheable or not, based on this
   * object's configuration.
   *
   * @param {Response} response The response whose cacheability is being
   * checked.
   * @return {boolean} `true` if the `Response` is cacheable, and `false`
   * otherwise.
   */
  isResponseCacheable(response) {
    let cacheable = true;
    if (this._statuses) {
      cacheable = this._statuses.includes(response.status);
    }
    if (this._headers && cacheable) {
      cacheable = Object.keys(this._headers).some((headerName) => {
        return response.headers.get(headerName) === this._headers[headerName];
      });
    }
    return cacheable;
  }
}
class CacheableResponsePlugin {
  /**
   * To construct a new CacheableResponsePlugin instance you must provide at
   * least one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(config) {
    this.cacheWillUpdate = async ({ response }) => {
      if (this._cacheableResponse.isResponseCacheable(response)) {
        return response;
      }
      return null;
    };
    this._cacheableResponse = new CacheableResponse(config);
  }
}
function dontWaitFor(promise) {
  void promise.then(() => {
  });
}
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const cursorRequestMap = /* @__PURE__ */ new WeakMap();
const transactionDoneMap = /* @__PURE__ */ new WeakMap();
const transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
const transformCache = /* @__PURE__ */ new WeakMap();
const reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "objectStoreNames") {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event.newVersion,
      event
    ));
  }
  openPromise.then((db) => {
    if (terminated)
      db.addEventListener("close", () => terminated());
    if (blocking) {
      db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {
  });
  return openPromise;
}
function deleteDB(name, { blocked } = {}) {
  const request = indexedDB.deleteDatabase(name);
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event
    ));
  }
  return wrap(request).then(() => void 0);
}
const readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
const writeMethods = ["put", "add", "delete", "clear"];
const cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
try {
  self["workbox:expiration:7.0.0"] && _();
} catch (e) {
}
const DB_NAME = "workbox-expiration";
const CACHE_OBJECT_STORE = "cache-entries";
const normalizeURL = (unNormalizedUrl) => {
  const url = new URL(unNormalizedUrl, location.href);
  url.hash = "";
  return url.href;
};
class CacheTimestampsModel {
  /**
   *
   * @param {string} cacheName
   *
   * @private
   */
  constructor(cacheName) {
    this._db = null;
    this._cacheName = cacheName;
  }
  /**
   * Performs an upgrade of indexedDB.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDb(db) {
    const objStore = db.createObjectStore(CACHE_OBJECT_STORE, { keyPath: "id" });
    objStore.createIndex("cacheName", "cacheName", { unique: false });
    objStore.createIndex("timestamp", "timestamp", { unique: false });
  }
  /**
   * Performs an upgrade of indexedDB and deletes deprecated DBs.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDbAndDeleteOldDbs(db) {
    this._upgradeDb(db);
    if (this._cacheName) {
      void deleteDB(this._cacheName);
    }
  }
  /**
   * @param {string} url
   * @param {number} timestamp
   *
   * @private
   */
  async setTimestamp(url, timestamp) {
    url = normalizeURL(url);
    const entry = {
      url,
      timestamp,
      cacheName: this._cacheName,
      // Creating an ID from the URL and cache name won't be necessary once
      // Edge switches to Chromium and all browsers we support work with
      // array keyPaths.
      id: this._getId(url)
    };
    const db = await this.getDb();
    const tx = db.transaction(CACHE_OBJECT_STORE, "readwrite", {
      durability: "relaxed"
    });
    await tx.store.put(entry);
    await tx.done;
  }
  /**
   * Returns the timestamp stored for a given URL.
   *
   * @param {string} url
   * @return {number | undefined}
   *
   * @private
   */
  async getTimestamp(url) {
    const db = await this.getDb();
    const entry = await db.get(CACHE_OBJECT_STORE, this._getId(url));
    return entry === null || entry === void 0 ? void 0 : entry.timestamp;
  }
  /**
   * Iterates through all the entries in the object store (from newest to
   * oldest) and removes entries once either `maxCount` is reached or the
   * entry's timestamp is less than `minTimestamp`.
   *
   * @param {number} minTimestamp
   * @param {number} maxCount
   * @return {Array<string>}
   *
   * @private
   */
  async expireEntries(minTimestamp, maxCount) {
    const db = await this.getDb();
    let cursor = await db.transaction(CACHE_OBJECT_STORE).store.index("timestamp").openCursor(null, "prev");
    const entriesToDelete = [];
    let entriesNotDeletedCount = 0;
    while (cursor) {
      const result = cursor.value;
      if (result.cacheName === this._cacheName) {
        if (minTimestamp && result.timestamp < minTimestamp || maxCount && entriesNotDeletedCount >= maxCount) {
          entriesToDelete.push(cursor.value);
        } else {
          entriesNotDeletedCount++;
        }
      }
      cursor = await cursor.continue();
    }
    const urlsDeleted = [];
    for (const entry of entriesToDelete) {
      await db.delete(CACHE_OBJECT_STORE, entry.id);
      urlsDeleted.push(entry.url);
    }
    return urlsDeleted;
  }
  /**
   * Takes a URL and returns an ID that will be unique in the object store.
   *
   * @param {string} url
   * @return {string}
   *
   * @private
   */
  _getId(url) {
    return this._cacheName + "|" + normalizeURL(url);
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    if (!this._db) {
      this._db = await openDB(DB_NAME, 1, {
        upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
      });
    }
    return this._db;
  }
}
class CacheExpiration {
  /**
   * To construct a new CacheExpiration instance you must provide at least
   * one of the `config` properties.
   *
   * @param {string} cacheName Name of the cache to apply restrictions to.
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   */
  constructor(cacheName, config = {}) {
    this._isRunning = false;
    this._rerunRequested = false;
    this._maxEntries = config.maxEntries;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._matchOptions = config.matchOptions;
    this._cacheName = cacheName;
    this._timestampModel = new CacheTimestampsModel(cacheName);
  }
  /**
   * Expires entries for the given cache and given criteria.
   */
  async expireEntries() {
    if (this._isRunning) {
      this._rerunRequested = true;
      return;
    }
    this._isRunning = true;
    const minTimestamp = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0;
    const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
    const cache = await self.caches.open(this._cacheName);
    for (const url of urlsExpired) {
      await cache.delete(url, this._matchOptions);
    }
    this._isRunning = false;
    if (this._rerunRequested) {
      this._rerunRequested = false;
      dontWaitFor(this.expireEntries());
    }
  }
  /**
   * Update the timestamp for the given URL. This ensures the when
   * removing entries based on maximum entries, most recently used
   * is accurate or when expiring, the timestamp is up-to-date.
   *
   * @param {string} url
   */
  async updateTimestamp(url) {
    await this._timestampModel.setTimestamp(url, Date.now());
  }
  /**
   * Can be used to check if a URL has expired or not before it's used.
   *
   * This requires a look up from IndexedDB, so can be slow.
   *
   * Note: This method will not remove the cached entry, call
   * `expireEntries()` to remove indexedDB and Cache entries.
   *
   * @param {string} url
   * @return {boolean}
   */
  async isURLExpired(url) {
    if (!this._maxAgeSeconds) {
      return false;
    } else {
      const timestamp = await this._timestampModel.getTimestamp(url);
      const expireOlderThan = Date.now() - this._maxAgeSeconds * 1e3;
      return timestamp !== void 0 ? timestamp < expireOlderThan : true;
    }
  }
  /**
   * Removes the IndexedDB object store used to keep track of cache expiration
   * metadata.
   */
  async delete() {
    this._rerunRequested = false;
    await this._timestampModel.expireEntries(Infinity);
  }
}
const _cacheNameDetails = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration !== "undefined" ? registration.scope : ""
};
const _createCacheName = (cacheName) => {
  return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter((value) => value && value.length > 0).join("-");
};
const eachCacheNameDetail = (fn) => {
  for (const key of Object.keys(_cacheNameDetails)) {
    fn(key);
  }
};
const cacheNames = {
  updateDetails: (details) => {
    eachCacheNameDetail((key) => {
      if (typeof details[key] === "string") {
        _cacheNameDetails[key] = details[key];
      }
    });
  },
  getGoogleAnalyticsName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
  },
  getPrecacheName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.precache);
  },
  getPrefix: () => {
    return _cacheNameDetails.prefix;
  },
  getRuntimeName: (userCacheName) => {
    return userCacheName || _createCacheName(_cacheNameDetails.runtime);
  },
  getSuffix: () => {
    return _cacheNameDetails.suffix;
  }
};
const quotaErrorCallbacks = /* @__PURE__ */ new Set();
function registerQuotaErrorCallback(callback) {
  quotaErrorCallbacks.add(callback);
}
class ExpirationPlugin {
  /**
   * @param {ExpirationPluginOptions} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
   * automatic deletion if the available storage quota has been exceeded.
   */
  constructor(config = {}) {
    this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
      if (!cachedResponse) {
        return null;
      }
      const isFresh = this._isResponseDateFresh(cachedResponse);
      const cacheExpiration = this._getCacheExpiration(cacheName);
      dontWaitFor(cacheExpiration.expireEntries());
      const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
      if (event) {
        try {
          event.waitUntil(updateTimestampDone);
        } catch (error) {
        }
      }
      return isFresh ? cachedResponse : null;
    };
    this.cacheDidUpdate = async ({ cacheName, request }) => {
      const cacheExpiration = this._getCacheExpiration(cacheName);
      await cacheExpiration.updateTimestamp(request.url);
      await cacheExpiration.expireEntries();
    };
    this._config = config;
    this._maxAgeSeconds = config.maxAgeSeconds;
    this._cacheExpirations = /* @__PURE__ */ new Map();
    if (config.purgeOnQuotaError) {
      registerQuotaErrorCallback(() => this.deleteCacheAndMetadata());
    }
  }
  /**
   * A simple helper method to return a CacheExpiration instance for a given
   * cache name.
   *
   * @param {string} cacheName
   * @return {CacheExpiration}
   *
   * @private
   */
  _getCacheExpiration(cacheName) {
    if (cacheName === cacheNames.getRuntimeName()) {
      throw new WorkboxError("expire-custom-caches-only");
    }
    let cacheExpiration = this._cacheExpirations.get(cacheName);
    if (!cacheExpiration) {
      cacheExpiration = new CacheExpiration(cacheName, this._config);
      this._cacheExpirations.set(cacheName, cacheExpiration);
    }
    return cacheExpiration;
  }
  /**
   * @param {Response} cachedResponse
   * @return {boolean}
   *
   * @private
   */
  _isResponseDateFresh(cachedResponse) {
    if (!this._maxAgeSeconds) {
      return true;
    }
    const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
    if (dateHeaderTimestamp === null) {
      return true;
    }
    const now = Date.now();
    return dateHeaderTimestamp >= now - this._maxAgeSeconds * 1e3;
  }
  /**
   * This method will extract the data header and parse it into a useful
   * value.
   *
   * @param {Response} cachedResponse
   * @return {number|null}
   *
   * @private
   */
  _getDateHeaderTimestamp(cachedResponse) {
    if (!cachedResponse.headers.has("date")) {
      return null;
    }
    const dateHeader = cachedResponse.headers.get("date");
    const parsedDate = new Date(dateHeader);
    const headerTime = parsedDate.getTime();
    if (isNaN(headerTime)) {
      return null;
    }
    return headerTime;
  }
  /**
   * This is a helper method that performs two operations:
   *
   * - Deletes *all* the underlying Cache instances associated with this plugin
   * instance, by calling caches.delete() on your behalf.
   * - Deletes the metadata from IndexedDB used to keep track of expiration
   * details for each Cache instance.
   *
   * When using cache expiration, calling this method is preferable to calling
   * `caches.delete()` directly, since this will ensure that the IndexedDB
   * metadata is also cleanly removed and open IndexedDB instances are deleted.
   *
   * Note that if you're *not* using cache expiration for a given cache, calling
   * `caches.delete()` and passing in the cache's name should be sufficient.
   * There is no Workbox-specific method needed for cleanup in that case.
   */
  async deleteCacheAndMetadata() {
    for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
      await self.caches.delete(cacheName);
      await cacheExpiration.delete();
    }
    this._cacheExpirations = /* @__PURE__ */ new Map();
  }
}
function waitUntil(event, asyncFn) {
  const returnPromise = asyncFn();
  event.waitUntil(returnPromise);
  return returnPromise;
}
try {
  self["workbox:precaching:7.0.0"] && _();
} catch (e) {
}
const REVISION_SEARCH_PARAM = "__WB_REVISION__";
function createCacheKey(entry) {
  if (!entry) {
    throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
  }
  if (typeof entry === "string") {
    const urlObject = new URL(entry, location.href);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href
    };
  }
  const { revision, url } = entry;
  if (!url) {
    throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
  }
  if (!revision) {
    const urlObject = new URL(url, location.href);
    return {
      cacheKey: urlObject.href,
      url: urlObject.href
    };
  }
  const cacheKeyURL = new URL(url, location.href);
  const originalURL = new URL(url, location.href);
  cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
  return {
    cacheKey: cacheKeyURL.href,
    url: originalURL.href
  };
}
class PrecacheInstallReportPlugin {
  constructor() {
    this.updatedURLs = [];
    this.notUpdatedURLs = [];
    this.handlerWillStart = async ({ request, state }) => {
      if (state) {
        state.originalRequest = request;
      }
    };
    this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse }) => {
      if (event.type === "install") {
        if (state && state.originalRequest && state.originalRequest instanceof Request) {
          const url = state.originalRequest.url;
          if (cachedResponse) {
            this.notUpdatedURLs.push(url);
          } else {
            this.updatedURLs.push(url);
          }
        }
      }
      return cachedResponse;
    };
  }
}
class PrecacheCacheKeyPlugin {
  constructor({ precacheController: precacheController2 }) {
    this.cacheKeyWillBeUsed = async ({ request, params }) => {
      const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) || this._precacheController.getCacheKeyForURL(request.url);
      return cacheKey ? new Request(cacheKey, { headers: request.headers }) : request;
    };
    this._precacheController = precacheController2;
  }
}
let supportStatus;
function canConstructResponseFromBodyStream() {
  if (supportStatus === void 0) {
    const testResponse = new Response("");
    if ("body" in testResponse) {
      try {
        new Response(testResponse.body);
        supportStatus = true;
      } catch (error) {
        supportStatus = false;
      }
    }
    supportStatus = false;
  }
  return supportStatus;
}
async function copyResponse(response, modifier) {
  let origin = null;
  if (response.url) {
    const responseURL = new URL(response.url);
    origin = responseURL.origin;
  }
  if (origin !== self.location.origin) {
    throw new WorkboxError("cross-origin-copy-response", { origin });
  }
  const clonedResponse = response.clone();
  const responseInit = {
    headers: new Headers(clonedResponse.headers),
    status: clonedResponse.status,
    statusText: clonedResponse.statusText
  };
  const modifiedResponseInit = responseInit;
  const body = canConstructResponseFromBodyStream() ? clonedResponse.body : await clonedResponse.blob();
  return new Response(body, modifiedResponseInit);
}
function stripParams(fullURL, ignoreParams) {
  const strippedURL = new URL(fullURL);
  for (const param of ignoreParams) {
    strippedURL.searchParams.delete(param);
  }
  return strippedURL.href;
}
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
  const strippedRequestURL = stripParams(request.url, ignoreParams);
  if (request.url === strippedRequestURL) {
    return cache.match(request, matchOptions);
  }
  const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
  const cacheKeys = await cache.keys(request, keysOptions);
  for (const cacheKey of cacheKeys) {
    const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
    if (strippedRequestURL === strippedCacheKeyURL) {
      return cache.match(cacheKey, matchOptions);
    }
  }
  return;
}
class Deferred {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
async function executeQuotaErrorCallbacks() {
  for (const callback of quotaErrorCallbacks) {
    await callback();
  }
}
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
try {
  self["workbox:strategies:7.0.0"] && _();
} catch (e) {
}
function toRequest(input) {
  return typeof input === "string" ? new Request(input) : input;
}
class StrategyHandler {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(strategy, options) {
    this._cacheKeys = {};
    Object.assign(this, options);
    this.event = options.event;
    this._strategy = strategy;
    this._handlerDeferred = new Deferred();
    this._extendLifetimePromises = [];
    this._plugins = [...strategy.plugins];
    this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const plugin of this._plugins) {
      this._pluginStateMap.set(plugin, {});
    }
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(input) {
    const { event } = this;
    let request = toRequest(input);
    if (request.mode === "navigate" && event instanceof FetchEvent && event.preloadResponse) {
      const possiblePreloadResponse = await event.preloadResponse;
      if (possiblePreloadResponse) {
        return possiblePreloadResponse;
      }
    }
    const originalRequest = this.hasCallback("fetchDidFail") ? request.clone() : null;
    try {
      for (const cb of this.iterateCallbacks("requestWillFetch")) {
        request = await cb({ request: request.clone(), event });
      }
    } catch (err) {
      if (err instanceof Error) {
        throw new WorkboxError("plugin-error-request-will-fetch", {
          thrownErrorMessage: err.message
        });
      }
    }
    const pluginFilteredRequest = request.clone();
    try {
      let fetchResponse;
      fetchResponse = await fetch(request, request.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
      if (false) ;
      for (const callback of this.iterateCallbacks("fetchDidSucceed")) {
        fetchResponse = await callback({
          event,
          request: pluginFilteredRequest,
          response: fetchResponse
        });
      }
      return fetchResponse;
    } catch (error) {
      if (originalRequest) {
        await this.runCallbacks("fetchDidFail", {
          error,
          event,
          originalRequest: originalRequest.clone(),
          request: pluginFilteredRequest.clone()
        });
      }
      throw error;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(input) {
    const response = await this.fetch(input);
    const responseClone = response.clone();
    void this.waitUntil(this.cachePut(input, responseClone));
    return response;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(key) {
    const request = toRequest(key);
    let cachedResponse;
    const { cacheName, matchOptions } = this._strategy;
    const effectiveRequest = await this.getCacheKey(request, "read");
    const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
    cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
    for (const callback of this.iterateCallbacks("cachedResponseWillBeUsed")) {
      cachedResponse = await callback({
        cacheName,
        matchOptions,
        cachedResponse,
        request: effectiveRequest,
        event: this.event
      }) || void 0;
    }
    return cachedResponse;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(key, response) {
    const request = toRequest(key);
    await timeout(0);
    const effectiveRequest = await this.getCacheKey(request, "write");
    if (!response) {
      throw new WorkboxError("cache-put-with-no-response", {
        url: getFriendlyURL(effectiveRequest.url)
      });
    }
    const responseToCache = await this._ensureResponseSafeToCache(response);
    if (!responseToCache) {
      return false;
    }
    const { cacheName, matchOptions } = this._strategy;
    const cache = await self.caches.open(cacheName);
    const hasCacheUpdateCallback = this.hasCallback("cacheDidUpdate");
    const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      cache,
      effectiveRequest.clone(),
      ["__WB_REVISION__"],
      matchOptions
    ) : null;
    try {
      await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "QuotaExceededError") {
          await executeQuotaErrorCallbacks();
        }
        throw error;
      }
    }
    for (const callback of this.iterateCallbacks("cacheDidUpdate")) {
      await callback({
        cacheName,
        oldResponse,
        newResponse: responseToCache.clone(),
        request: effectiveRequest,
        event: this.event
      });
    }
    return true;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(request, mode) {
    const key = `${request.url} | ${mode}`;
    if (!this._cacheKeys[key]) {
      let effectiveRequest = request;
      for (const callback of this.iterateCallbacks("cacheKeyWillBeUsed")) {
        effectiveRequest = toRequest(await callback({
          mode,
          request: effectiveRequest,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      }
      this._cacheKeys[key] = effectiveRequest;
    }
    return this._cacheKeys[key];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(name) {
    for (const plugin of this._strategy.plugins) {
      if (name in plugin) {
        return true;
      }
    }
    return false;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(name, param) {
    for (const callback of this.iterateCallbacks(name)) {
      await callback(param);
    }
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(name) {
    for (const plugin of this._strategy.plugins) {
      if (typeof plugin[name] === "function") {
        const state = this._pluginStateMap.get(plugin);
        const statefulCallback = (param) => {
          const statefulParam = Object.assign(Object.assign({}, param), { state });
          return plugin[name](statefulParam);
        };
        yield statefulCallback;
      }
    }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(promise) {
    this._extendLifetimePromises.push(promise);
    return promise;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let promise;
    while (promise = this._extendLifetimePromises.shift()) {
      await promise;
    }
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(response) {
    let responseToCache = response;
    let pluginsUsed = false;
    for (const callback of this.iterateCallbacks("cacheWillUpdate")) {
      responseToCache = await callback({
        request: this.request,
        response: responseToCache,
        event: this.event
      }) || void 0;
      pluginsUsed = true;
      if (!responseToCache) {
        break;
      }
    }
    if (!pluginsUsed) {
      if (responseToCache && responseToCache.status !== 200) {
        responseToCache = void 0;
      }
    }
    return responseToCache;
  }
}
class Strategy {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(options = {}) {
    this.cacheName = cacheNames.getRuntimeName(options.cacheName);
    this.plugins = options.plugins || [];
    this.fetchOptions = options.fetchOptions;
    this.matchOptions = options.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(options) {
    const [responseDone] = this.handleAll(options);
    return responseDone;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(options) {
    if (options instanceof FetchEvent) {
      options = {
        event: options,
        request: options.request
      };
    }
    const event = options.event;
    const request = typeof options.request === "string" ? new Request(options.request) : options.request;
    const params = "params" in options ? options.params : void 0;
    const handler = new StrategyHandler(this, { event, request, params });
    const responseDone = this._getResponse(handler, request, event);
    const handlerDone = this._awaitComplete(responseDone, handler, request, event);
    return [responseDone, handlerDone];
  }
  async _getResponse(handler, request, event) {
    await handler.runCallbacks("handlerWillStart", { event, request });
    let response = void 0;
    try {
      response = await this._handle(request, handler);
      if (!response || response.type === "error") {
        throw new WorkboxError("no-response", { url: request.url });
      }
    } catch (error) {
      if (error instanceof Error) {
        for (const callback of handler.iterateCallbacks("handlerDidError")) {
          response = await callback({ error, event, request });
          if (response) {
            break;
          }
        }
      }
      if (!response) {
        throw error;
      }
    }
    for (const callback of handler.iterateCallbacks("handlerWillRespond")) {
      response = await callback({ event, request, response });
    }
    return response;
  }
  async _awaitComplete(responseDone, handler, request, event) {
    let response;
    let error;
    try {
      response = await responseDone;
    } catch (error2) {
    }
    try {
      await handler.runCallbacks("handlerDidRespond", {
        event,
        request,
        response
      });
      await handler.doneWaiting();
    } catch (waitUntilError) {
      if (waitUntilError instanceof Error) {
        error = waitUntilError;
      }
    }
    await handler.runCallbacks("handlerDidComplete", {
      event,
      request,
      response,
      error
    });
    handler.destroy();
    if (error) {
      throw error;
    }
  }
}
class PrecacheStrategy extends Strategy {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(options = {}) {
    options.cacheName = cacheNames.getPrecacheName(options.cacheName);
    super(options);
    this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true;
    this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const response = await handler.cacheMatch(request);
    if (response) {
      return response;
    }
    if (handler.event && handler.event.type === "install") {
      return await this._handleInstall(request, handler);
    }
    return await this._handleFetch(request, handler);
  }
  async _handleFetch(request, handler) {
    let response;
    const params = handler.params || {};
    if (this._fallbackToNetwork) {
      const integrityInManifest = params.integrity;
      const integrityInRequest = request.integrity;
      const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
      response = await handler.fetch(new Request(request, {
        integrity: request.mode !== "no-cors" ? integrityInRequest || integrityInManifest : void 0
      }));
      if (integrityInManifest && noIntegrityConflict && request.mode !== "no-cors") {
        this._useDefaultCacheabilityPluginIfNeeded();
        await handler.cachePut(request, response.clone());
      }
    } else {
      throw new WorkboxError("missing-precache-entry", {
        cacheName: this.cacheName,
        url: request.url
      });
    }
    return response;
  }
  async _handleInstall(request, handler) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const response = await handler.fetch(request);
    const wasCached = await handler.cachePut(request, response.clone());
    if (!wasCached) {
      throw new WorkboxError("bad-precaching-response", {
        url: request.url,
        status: response.status
      });
    }
    return response;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let defaultPluginIndex = null;
    let cacheWillUpdatePluginCount = 0;
    for (const [index, plugin] of this.plugins.entries()) {
      if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
        continue;
      }
      if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
        defaultPluginIndex = index;
      }
      if (plugin.cacheWillUpdate) {
        cacheWillUpdatePluginCount++;
      }
    }
    if (cacheWillUpdatePluginCount === 0) {
      this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
    } else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
      this.plugins.splice(defaultPluginIndex, 1);
    }
  }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response }) {
    if (!response || response.status >= 400) {
      return null;
    }
    return response;
  }
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response }) {
    return response.redirected ? await copyResponse(response) : response;
  }
};
class PrecacheController {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map();
    this._urlsToCacheModes = /* @__PURE__ */ new Map();
    this._cacheKeysToIntegrities = /* @__PURE__ */ new Map();
    this._strategy = new PrecacheStrategy({
      cacheName: cacheNames.getPrecacheName(cacheName),
      plugins: [
        ...plugins,
        new PrecacheCacheKeyPlugin({ precacheController: this })
      ],
      fallbackToNetwork
    });
    this.install = this.install.bind(this);
    this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(entries2) {
    this.addToCacheList(entries2);
    if (!this._installAndActiveListenersAdded) {
      self.addEventListener("install", this.install);
      self.addEventListener("activate", this.activate);
      this._installAndActiveListenersAdded = true;
    }
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(entries2) {
    const urlsToWarnAbout = [];
    for (const entry of entries2) {
      if (typeof entry === "string") {
        urlsToWarnAbout.push(entry);
      } else if (entry && entry.revision === void 0) {
        urlsToWarnAbout.push(entry.url);
      }
      const { cacheKey, url } = createCacheKey(entry);
      const cacheMode = typeof entry !== "string" && entry.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(url) && this._urlsToCacheKeys.get(url) !== cacheKey) {
        throw new WorkboxError("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(url),
          secondEntry: cacheKey
        });
      }
      if (typeof entry !== "string" && entry.integrity) {
        if (this._cacheKeysToIntegrities.has(cacheKey) && this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
          throw new WorkboxError("add-to-cache-list-conflicting-integrities", {
            url
          });
        }
        this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
      }
      this._urlsToCacheKeys.set(url, cacheKey);
      this._urlsToCacheModes.set(url, cacheMode);
      if (urlsToWarnAbout.length > 0) {
        const warningMessage = `Workbox is precaching URLs without revision info: ${urlsToWarnAbout.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        {
          console.warn(warningMessage);
        }
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(event) {
    return waitUntil(event, async () => {
      const installReportPlugin = new PrecacheInstallReportPlugin();
      this.strategy.plugins.push(installReportPlugin);
      for (const [url, cacheKey] of this._urlsToCacheKeys) {
        const integrity = this._cacheKeysToIntegrities.get(cacheKey);
        const cacheMode = this._urlsToCacheModes.get(url);
        const request = new Request(url, {
          integrity,
          cache: cacheMode,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey },
          request,
          event
        }));
      }
      const { updatedURLs, notUpdatedURLs } = installReportPlugin;
      return { updatedURLs, notUpdatedURLs };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(event) {
    return waitUntil(event, async () => {
      const cache = await self.caches.open(this.strategy.cacheName);
      const currentlyCachedRequests = await cache.keys();
      const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
      const deletedURLs = [];
      for (const request of currentlyCachedRequests) {
        if (!expectedCacheKeys.has(request.url)) {
          await cache.delete(request);
          deletedURLs.push(request.url);
        }
      }
      return { deletedURLs };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(url) {
    const urlObject = new URL(url, location.href);
    return this._urlsToCacheKeys.get(urlObject.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(cacheKey) {
    return this._cacheKeysToIntegrities.get(cacheKey);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(request) {
    const url = request instanceof Request ? request.url : request;
    const cacheKey = this.getCacheKeyForURL(url);
    if (cacheKey) {
      const cache = await self.caches.open(this.strategy.cacheName);
      return cache.match(cacheKey);
    }
    return void 0;
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(url) {
    const cacheKey = this.getCacheKeyForURL(url);
    if (!cacheKey) {
      throw new WorkboxError("non-precached-url", { url });
    }
    return (options) => {
      options.request = new Request(url);
      options.params = Object.assign({ cacheKey }, options.params);
      return this.strategy.handle(options);
    };
  }
}
let precacheController;
const getOrCreatePrecacheController = () => {
  if (!precacheController) {
    precacheController = new PrecacheController();
  }
  return precacheController;
};
try {
  self["workbox:routing:7.0.0"] && _();
} catch (e) {
}
const defaultMethod = "GET";
const normalizeHandler = (handler) => {
  if (handler && typeof handler === "object") {
    return handler;
  } else {
    return { handle: handler };
  }
};
class Route {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(match, handler, method = defaultMethod) {
    this.handler = normalizeHandler(handler);
    this.match = match;
    this.method = method;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(handler) {
    this.catchHandler = normalizeHandler(handler);
  }
}
class RegExpRoute extends Route {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(regExp, handler, method) {
    const match = ({ url }) => {
      const result = regExp.exec(url.href);
      if (!result) {
        return;
      }
      if (url.origin !== location.origin && result.index !== 0) {
        return;
      }
      return result.slice(1);
    };
    super(match, handler, method);
  }
}
class Router {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map();
    this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (event) => {
      const { request } = event;
      const responsePromise = this.handleRequest({ request, event });
      if (responsePromise) {
        event.respondWith(responsePromise);
      }
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (event) => {
      if (event.data && event.data.type === "CACHE_URLS") {
        const { payload } = event.data;
        const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
          if (typeof entry === "string") {
            entry = [entry];
          }
          const request = new Request(...entry);
          return this.handleRequest({ request, event });
        }));
        event.waitUntil(requestPromises);
        if (event.ports && event.ports[0]) {
          void requestPromises.then(() => event.ports[0].postMessage(true));
        }
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request, event }) {
    const url = new URL(request.url, location.href);
    if (!url.protocol.startsWith("http")) {
      return;
    }
    const sameOrigin = url.origin === location.origin;
    const { params, route } = this.findMatchingRoute({
      event,
      request,
      sameOrigin,
      url
    });
    let handler = route && route.handler;
    const method = request.method;
    if (!handler && this._defaultHandlerMap.has(method)) {
      handler = this._defaultHandlerMap.get(method);
    }
    if (!handler) {
      return;
    }
    let responsePromise;
    try {
      responsePromise = handler.handle({ url, request, event, params });
    } catch (err) {
      responsePromise = Promise.reject(err);
    }
    const catchHandler = route && route.catchHandler;
    if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
      responsePromise = responsePromise.catch(async (err) => {
        if (catchHandler) {
          try {
            return await catchHandler.handle({ url, request, event, params });
          } catch (catchErr) {
            if (catchErr instanceof Error) {
              err = catchErr;
            }
          }
        }
        if (this._catchHandler) {
          return this._catchHandler.handle({ url, request, event });
        }
        throw err;
      });
    }
    return responsePromise;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url, sameOrigin, request, event }) {
    const routes = this._routes.get(request.method) || [];
    for (const route of routes) {
      let params;
      const matchResult = route.match({ url, sameOrigin, request, event });
      if (matchResult) {
        params = matchResult;
        if (Array.isArray(params) && params.length === 0) {
          params = void 0;
        } else if (matchResult.constructor === Object && // eslint-disable-line
        Object.keys(matchResult).length === 0) {
          params = void 0;
        } else if (typeof matchResult === "boolean") {
          params = void 0;
        }
        return { route, params };
      }
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(handler, method = defaultMethod) {
    this._defaultHandlerMap.set(method, normalizeHandler(handler));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(handler) {
    this._catchHandler = normalizeHandler(handler);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(route) {
    if (!this._routes.has(route.method)) {
      this._routes.set(route.method, []);
    }
    this._routes.get(route.method).push(route);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(route) {
    if (!this._routes.has(route.method)) {
      throw new WorkboxError("unregister-route-but-not-found-with-method", {
        method: route.method
      });
    }
    const routeIndex = this._routes.get(route.method).indexOf(route);
    if (routeIndex > -1) {
      this._routes.get(route.method).splice(routeIndex, 1);
    } else {
      throw new WorkboxError("unregister-route-route-not-registered");
    }
  }
}
let defaultRouter;
const getOrCreateDefaultRouter = () => {
  if (!defaultRouter) {
    defaultRouter = new Router();
    defaultRouter.addFetchListener();
    defaultRouter.addCacheListener();
  }
  return defaultRouter;
};
function registerRoute(capture, handler, method) {
  let route;
  if (typeof capture === "string") {
    const captureUrl = new URL(capture, location.href);
    const matchCallback = ({ url }) => {
      return url.href === captureUrl.href;
    };
    route = new Route(matchCallback, handler, method);
  } else if (capture instanceof RegExp) {
    route = new RegExpRoute(capture, handler, method);
  } else if (typeof capture === "function") {
    route = new Route(capture, handler, method);
  } else if (capture instanceof Route) {
    route = capture;
  } else {
    throw new WorkboxError("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  }
  const defaultRouter2 = getOrCreateDefaultRouter();
  defaultRouter2.registerRoute(route);
  return route;
}
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
  for (const paramName of [...urlObject.searchParams.keys()]) {
    if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
      urlObject.searchParams.delete(paramName);
    }
  }
  return urlObject;
}
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = "index.html", cleanURLs = true, urlManipulation } = {}) {
  const urlObject = new URL(url, location.href);
  urlObject.hash = "";
  yield urlObject.href;
  const urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching);
  yield urlWithoutIgnoredParams.href;
  if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith("/")) {
    const directoryURL = new URL(urlWithoutIgnoredParams.href);
    directoryURL.pathname += directoryIndex;
    yield directoryURL.href;
  }
  if (cleanURLs) {
    const cleanURL = new URL(urlWithoutIgnoredParams.href);
    cleanURL.pathname += ".html";
    yield cleanURL.href;
  }
  if (urlManipulation) {
    const additionalURLs = urlManipulation({ url: urlObject });
    for (const urlToAttempt of additionalURLs) {
      yield urlToAttempt.href;
    }
  }
}
class PrecacheRoute extends Route {
  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  constructor(precacheController2, options) {
    const match = ({ request }) => {
      const urlsToCacheKeys = precacheController2.getURLsToCacheKeys();
      for (const possibleURL of generateURLVariations(request.url, options)) {
        const cacheKey = urlsToCacheKeys.get(possibleURL);
        if (cacheKey) {
          const integrity = precacheController2.getIntegrityForCacheKey(cacheKey);
          return { cacheKey, integrity };
        }
      }
      return;
    };
    super(match, precacheController2.strategy);
  }
}
function addRoute(options) {
  const precacheController2 = getOrCreatePrecacheController();
  const precacheRoute = new PrecacheRoute(precacheController2, options);
  registerRoute(precacheRoute);
}
const SUBSTRING_TO_FIND = "-precache-";
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
  const cacheNames2 = await self.caches.keys();
  const cacheNamesToDelete = cacheNames2.filter((cacheName) => {
    return cacheName.includes(substringToFind) && cacheName.includes(self.registration.scope) && cacheName !== currentPrecacheName;
  });
  await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
  return cacheNamesToDelete;
};
function cleanupOutdatedCaches() {
  self.addEventListener("activate", (event) => {
    const cacheName = cacheNames.getPrecacheName();
    event.waitUntil(deleteOutdatedCaches(cacheName).then((cachesDeleted) => {
    }));
  });
}
function createHandlerBoundToURL(url) {
  const precacheController2 = getOrCreatePrecacheController();
  return precacheController2.createHandlerBoundToURL(url);
}
function precache(entries2) {
  const precacheController2 = getOrCreatePrecacheController();
  precacheController2.precache(entries2);
}
function precacheAndRoute(entries2, options) {
  precache(entries2);
  addRoute(options);
}
class NavigationRoute extends Route {
  /**
   * If both `denylist` and `allowlist` are provided, the `denylist` will
   * take precedence and the request will not match this route.
   *
   * The regular expressions in `allowlist` and `denylist`
   * are matched against the concatenated
   * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
   * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
   * portions of the requested URL.
   *
   * *Note*: These RegExps may be evaluated against every destination URL during
   * a navigation. Avoid using
   * [complex RegExps](https://github.com/GoogleChrome/workbox/issues/3077),
   * or else your users may see delays when navigating your site.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {Object} options
   * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
   * the route will not handle the request (even if a allowlist RegExp matches).
   * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
   * match the URL's pathname and search parameter, the route will handle the
   * request (assuming the denylist doesn't match).
   */
  constructor(handler, { allowlist: allowlist2 = [/./], denylist = [] } = {}) {
    super((options) => this._match(options), handler);
    this._allowlist = allowlist2;
    this._denylist = denylist;
  }
  /**
   * Routes match handler.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {Request} options.request
   * @return {boolean}
   *
   * @private
   */
  _match({ url, request }) {
    if (request && request.mode !== "navigate") {
      return false;
    }
    const pathnameAndSearch = url.pathname + url.search;
    for (const regExp of this._denylist) {
      if (regExp.test(pathnameAndSearch)) {
        return false;
      }
    }
    if (this._allowlist.some((regExp) => regExp.test(pathnameAndSearch))) {
      return true;
    }
    return false;
  }
}
const cacheOkAndOpaquePlugin = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: async ({ response }) => {
    if (response.status === 200 || response.status === 0) {
      return response;
    }
    return null;
  }
};
class NetworkFirst extends Strategy {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will fallback to the cache.
   *
   * This option can be used to combat
   * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
   * scenarios.
   */
  constructor(options = {}) {
    super(options);
    if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
      this.plugins.unshift(cacheOkAndOpaquePlugin);
    }
    this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const logs = [];
    const promises = [];
    let timeoutId;
    if (this._networkTimeoutSeconds) {
      const { id, promise } = this._getTimeoutPromise({ request, logs, handler });
      timeoutId = id;
      promises.push(promise);
    }
    const networkPromise = this._getNetworkPromise({
      timeoutId,
      request,
      logs,
      handler
    });
    promises.push(networkPromise);
    const response = await handler.waitUntil((async () => {
      return await handler.waitUntil(Promise.race(promises)) || // If Promise.race() resolved with null, it might be due to a network
      // timeout + a cache miss. If that were to happen, we'd rather wait until
      // the networkPromise resolves instead of returning null.
      // Note that it's fine to await an already-resolved promise, so we don't
      // have to check to see if it's still "in flight".
      await networkPromise;
    })());
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url });
    }
    return response;
  }
  /**
   * @param {Object} options
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs array
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  _getTimeoutPromise({ request, logs, handler }) {
    let timeoutId;
    const timeoutPromise = new Promise((resolve) => {
      const onNetworkTimeout = async () => {
        resolve(await handler.cacheMatch(request));
      };
      timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1e3);
    });
    return {
      promise: timeoutPromise,
      id: timeoutId
    };
  }
  /**
   * @param {Object} options
   * @param {number|undefined} options.timeoutId
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs Array.
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  async _getNetworkPromise({ timeoutId, request, logs, handler }) {
    let error;
    let response;
    try {
      response = await handler.fetchAndCachePut(request);
    } catch (fetchError) {
      if (fetchError instanceof Error) {
        error = fetchError;
      }
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (error || !response) {
      response = await handler.cacheMatch(request);
    }
    return response;
  }
}
class NetworkOnly extends Strategy {
  /**
   * @param {Object} [options]
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will result in a network error.
   */
  constructor(options = {}) {
    super(options);
    this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    let error = void 0;
    let response;
    try {
      const promises = [
        handler.fetch(request)
      ];
      if (this._networkTimeoutSeconds) {
        const timeoutPromise = timeout(this._networkTimeoutSeconds * 1e3);
        promises.push(timeoutPromise);
      }
      response = await Promise.race(promises);
      if (!response) {
        throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`);
      }
    } catch (err) {
      if (err instanceof Error) {
        error = err;
      }
    }
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url, error });
    }
    return response;
  }
}
class StaleWhileRevalidate extends Strategy {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  constructor(options = {}) {
    super(options);
    if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
      this.plugins.unshift(cacheOkAndOpaquePlugin);
    }
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(request, handler) {
    const fetchAndCachePromise = handler.fetchAndCachePut(request).catch(() => {
    });
    void handler.waitUntil(fetchAndCachePromise);
    let response = await handler.cacheMatch(request);
    let error;
    if (response) ;
    else {
      try {
        response = await fetchAndCachePromise;
      } catch (err) {
        if (err instanceof Error) {
          error = err;
        }
      }
    }
    if (!response) {
      throw new WorkboxError("no-response", { url: request.url, error });
    }
    return response;
  }
}
const entries = [{"revision":"f5a06a68d2a6687ebf279937102d7299","url":"404.html"},{"revision":"57666e310ea1a420002c407f9408b85a","url":"add-ons.html"},{"revision":"92fcd6e3fad3355cdca56cd66f106831","url":"apple-touch-icon.png"},{"revision":null,"url":"assets/add-ons.md.OTxlKfwj.js"},{"revision":null,"url":"assets/add-ons.md.OTxlKfwj.lean.js"},{"revision":null,"url":"assets/app.CdQ84tMV.js"},{"revision":null,"url":"assets/chunks/axios.upsvKRUO.js"},{"revision":null,"url":"assets/chunks/BooleanDisplay.vue_vue_type_script_setup_true_lang.owu95yBy.js"},{"revision":null,"url":"assets/chunks/CodeToggle.vue_vue_type_style_index_0_lang.Cpi1l5_w.js"},{"revision":null,"url":"assets/chunks/commonjsHelpers.CqkleIqs.js"},{"revision":null,"url":"assets/chunks/configurable.C7TV9RQd.js"},{"revision":null,"url":"assets/chunks/CourseLink.vue_vue_type_script_setup_true_lang.BTK1GcAC.js"},{"revision":null,"url":"assets/chunks/demo.client.BLEKaqlE.js"},{"revision":null,"url":"assets/chunks/demo.client.Bm5aZQp7.js"},{"revision":null,"url":"assets/chunks/demo.client.Bs5eLEVp.js"},{"revision":null,"url":"assets/chunks/demo.client.ClLk6q4D.js"},{"revision":null,"url":"assets/chunks/DemoContainer.vue_vue_type_script_setup_true_lang.B3GoC75D.js"},{"revision":null,"url":"assets/chunks/favicon.B1w23DGS.js"},{"revision":null,"url":"assets/chunks/filters.DuwCkQ5C.js"},{"revision":null,"url":"assets/chunks/FunctionInfo.vue_vue_type_script_setup_true_lang.CqAlsCcT.js"},{"revision":null,"url":"assets/chunks/fuse.CrITxDw8.js"},{"revision":null,"url":"assets/chunks/index._Xu8Z1If.js"},{"revision":null,"url":"assets/chunks/index.7M7IIqtg.js"},{"revision":null,"url":"assets/chunks/index.85S8dhZf.js"},{"revision":null,"url":"assets/chunks/index.AfXtI2mI.js"},{"revision":null,"url":"assets/chunks/index.B_SWa2Z4.js"},{"revision":null,"url":"assets/chunks/index.B-tG6lB3.js"},{"revision":null,"url":"assets/chunks/index.B0A4pIXY.js"},{"revision":null,"url":"assets/chunks/index.B0Xb53oQ.js"},{"revision":null,"url":"assets/chunks/index.B1hhgVnn.js"},{"revision":null,"url":"assets/chunks/index.B1l7Z0JG.js"},{"revision":null,"url":"assets/chunks/index.B2dVMgp8.js"},{"revision":null,"url":"assets/chunks/index.B7cSWOT3.js"},{"revision":null,"url":"assets/chunks/index.B7e7u-DM.js"},{"revision":null,"url":"assets/chunks/index.BaH89Rsy.js"},{"revision":null,"url":"assets/chunks/index.BaP1Ew-9.js"},{"revision":null,"url":"assets/chunks/index.BfGr30TV.js"},{"revision":null,"url":"assets/chunks/index.BgjxJmys.js"},{"revision":null,"url":"assets/chunks/index.BitqYDNK.js"},{"revision":null,"url":"assets/chunks/index.Bjyz82cM.js"},{"revision":null,"url":"assets/chunks/index.BkbEq_u5.js"},{"revision":null,"url":"assets/chunks/index.Boaly0LA.js"},{"revision":null,"url":"assets/chunks/index.BPbUKZEG.js"},{"revision":null,"url":"assets/chunks/index.BQhAzNz4.js"},{"revision":null,"url":"assets/chunks/index.BtWz-NsG.js"},{"revision":null,"url":"assets/chunks/index.BuMXiDLm.js"},{"revision":null,"url":"assets/chunks/index.BwaZzxun.js"},{"revision":null,"url":"assets/chunks/index.BWUmrpiq.js"},{"revision":null,"url":"assets/chunks/index.BZhC5QYF.js"},{"revision":null,"url":"assets/chunks/index.BZyJOCpL.js"},{"revision":null,"url":"assets/chunks/index.C2bU4x7s.js"},{"revision":null,"url":"assets/chunks/index.C30WNOV3.js"},{"revision":null,"url":"assets/chunks/index.C5OycP7F.js"},{"revision":null,"url":"assets/chunks/index.CfcCVByD.js"},{"revision":null,"url":"assets/chunks/index.CFNV0gKa.js"},{"revision":null,"url":"assets/chunks/index.CFoihoJv.js"},{"revision":null,"url":"assets/chunks/index.CGnDy86n.js"},{"revision":null,"url":"assets/chunks/index.CJAoIDM-.js"},{"revision":null,"url":"assets/chunks/index.CkJWXyHu.js"},{"revision":null,"url":"assets/chunks/index.ClJO6o9Y.js"},{"revision":null,"url":"assets/chunks/index.CsvHjFxW.js"},{"revision":null,"url":"assets/chunks/index.CUrOcz8e.js"},{"revision":null,"url":"assets/chunks/index.CweokXA1.js"},{"revision":null,"url":"assets/chunks/index.Cyv-wcoR.js"},{"revision":null,"url":"assets/chunks/index.Cyy5s2IY.js"},{"revision":null,"url":"assets/chunks/index.DjB8f8Dt.js"},{"revision":null,"url":"assets/chunks/index.DKsP1ive.js"},{"revision":null,"url":"assets/chunks/index.dnJP40w_.js"},{"revision":null,"url":"assets/chunks/index.DR5ZGkEJ.js"},{"revision":null,"url":"assets/chunks/index.DRIJlSxF.js"},{"revision":null,"url":"assets/chunks/index.DsT-7kv0.js"},{"revision":null,"url":"assets/chunks/index.DZQ0OGEG.js"},{"revision":null,"url":"assets/chunks/index.HhnJSijj.js"},{"revision":null,"url":"assets/chunks/index.hkt0C_DH.js"},{"revision":null,"url":"assets/chunks/index.pKwFGHLN.js"},{"revision":null,"url":"assets/chunks/index.RaJregKa.js"},{"revision":null,"url":"assets/chunks/index.sHUUJ0RR.js"},{"revision":null,"url":"assets/chunks/index.UIyF2MES.js"},{"revision":null,"url":"assets/chunks/index.xg-CtWbU.js"},{"revision":null,"url":"assets/chunks/index.YaRFe_A9.js"},{"revision":null,"url":"assets/chunks/js-yaml.mbYHt68G.js"},{"revision":null,"url":"assets/chunks/Key.vue_vue_type_script_setup_true_lang.DCPKLTZj.js"},{"revision":null,"url":"assets/chunks/LearnMoreComponents.p2Ff83Kq.js"},{"revision":null,"url":"assets/chunks/LearnMoreDirectives.BRzn4Y8T.js"},{"revision":null,"url":"assets/chunks/Note.vZPJI0IQ.js"},{"revision":null,"url":"assets/chunks/plugin-vue_export-helper.DlAUqK2U.js"},{"revision":null,"url":"assets/chunks/preload-helper.D7HrI6pR.js"},{"revision":null,"url":"assets/chunks/RequiresProxy.D3IuevU_.js"},{"revision":null,"url":"assets/chunks/resolve-element.CjOR-mWi.js"},{"revision":null,"url":"assets/chunks/Scrubber.vue_vue_type_script_setup_true_lang.BTv10IyL.js"},{"revision":null,"url":"assets/chunks/utils.B5e_uQLX.js"},{"revision":null,"url":"assets/chunks/utils.CjPqU7dS.js"},{"revision":null,"url":"assets/chunks/VPAlgoliaSearchBox.BuO16Bq9.js"},{"revision":null,"url":"assets/chunks/vue.CliZxonC.js"},{"revision":null,"url":"assets/components_README.md.CnNlwcPG.js"},{"revision":null,"url":"assets/components_README.md.CnNlwcPG.lean.js"},{"revision":null,"url":"assets/contributing.md.BVgL2Dze.js"},{"revision":null,"url":"assets/contributing.md.BVgL2Dze.lean.js"},{"revision":null,"url":"assets/core__template_index.md.DnoidlwO.js"},{"revision":null,"url":"assets/core__template_index.md.DnoidlwO.lean.js"},{"revision":null,"url":"assets/core_computedAsync_index.md.Bbgil7qR.js"},{"revision":null,"url":"assets/core_computedAsync_index.md.Bbgil7qR.lean.js"},{"revision":null,"url":"assets/core_computedInject_index.md.DSYUl24A.js"},{"revision":null,"url":"assets/core_computedInject_index.md.DSYUl24A.lean.js"},{"revision":null,"url":"assets/core_createReusableTemplate_index.md.CCBsvEVT.js"},{"revision":null,"url":"assets/core_createReusableTemplate_index.md.CCBsvEVT.lean.js"},{"revision":null,"url":"assets/core_createTemplatePromise_index.md.CcBqbwYN.js"},{"revision":null,"url":"assets/core_createTemplatePromise_index.md.CcBqbwYN.lean.js"},{"revision":null,"url":"assets/core_createUnrefFn_index.md.e2c6WJ0y.js"},{"revision":null,"url":"assets/core_createUnrefFn_index.md.e2c6WJ0y.lean.js"},{"revision":null,"url":"assets/core_onClickOutside_index.md.BzDkSwdo.js"},{"revision":null,"url":"assets/core_onClickOutside_index.md.BzDkSwdo.lean.js"},{"revision":null,"url":"assets/core_onKeyStroke_index.md.B-zl0Y_d.js"},{"revision":null,"url":"assets/core_onKeyStroke_index.md.B-zl0Y_d.lean.js"},{"revision":null,"url":"assets/core_onLongPress_index.md.HJQV8eMj.js"},{"revision":null,"url":"assets/core_onLongPress_index.md.HJQV8eMj.lean.js"},{"revision":null,"url":"assets/core_onStartTyping_index.md.Ay59sCpB.js"},{"revision":null,"url":"assets/core_onStartTyping_index.md.Ay59sCpB.lean.js"},{"revision":null,"url":"assets/core_README.md.CWKcct8V.js"},{"revision":null,"url":"assets/core_README.md.CWKcct8V.lean.js"},{"revision":null,"url":"assets/core_templateRef_index.md.BA6zBnYb.js"},{"revision":null,"url":"assets/core_templateRef_index.md.BA6zBnYb.lean.js"},{"revision":null,"url":"assets/core_unrefElement_index.md.D_WXClvM.js"},{"revision":null,"url":"assets/core_unrefElement_index.md.D_WXClvM.lean.js"},{"revision":null,"url":"assets/core_useActiveElement_index.md.s60gd4Ov.js"},{"revision":null,"url":"assets/core_useActiveElement_index.md.s60gd4Ov.lean.js"},{"revision":null,"url":"assets/core_useAnimate_index.md.mWqPDfi7.js"},{"revision":null,"url":"assets/core_useAnimate_index.md.mWqPDfi7.lean.js"},{"revision":null,"url":"assets/core_useAsyncQueue_index.md.BMKcW8Q8.js"},{"revision":null,"url":"assets/core_useAsyncQueue_index.md.BMKcW8Q8.lean.js"},{"revision":null,"url":"assets/core_useAsyncState_index.md.CgNEbMJ4.js"},{"revision":null,"url":"assets/core_useAsyncState_index.md.CgNEbMJ4.lean.js"},{"revision":null,"url":"assets/core_useBase64_index.md.C2yfBVug.js"},{"revision":null,"url":"assets/core_useBase64_index.md.C2yfBVug.lean.js"},{"revision":null,"url":"assets/core_useBattery_index.md.CfO3bdf9.js"},{"revision":null,"url":"assets/core_useBattery_index.md.CfO3bdf9.lean.js"},{"revision":null,"url":"assets/core_useBluetooth_index.md.D_1Xw2au.js"},{"revision":null,"url":"assets/core_useBluetooth_index.md.D_1Xw2au.lean.js"},{"revision":null,"url":"assets/core_useBreakpoints_index.md.BdA61ogB.js"},{"revision":null,"url":"assets/core_useBreakpoints_index.md.BdA61ogB.lean.js"},{"revision":null,"url":"assets/core_useBroadcastChannel_index.md.DKt6wevd.js"},{"revision":null,"url":"assets/core_useBroadcastChannel_index.md.DKt6wevd.lean.js"},{"revision":null,"url":"assets/core_useBrowserLocation_index.md.B5Wh2tV-.js"},{"revision":null,"url":"assets/core_useBrowserLocation_index.md.B5Wh2tV-.lean.js"},{"revision":null,"url":"assets/core_useCached_index.md.C-G3y3Vt.js"},{"revision":null,"url":"assets/core_useCached_index.md.C-G3y3Vt.lean.js"},{"revision":null,"url":"assets/core_useClipboard_index.md.CgZlGkDL.js"},{"revision":null,"url":"assets/core_useClipboard_index.md.CgZlGkDL.lean.js"},{"revision":null,"url":"assets/core_useClipboardItems_index.md.CllwWwnx.js"},{"revision":null,"url":"assets/core_useClipboardItems_index.md.CllwWwnx.lean.js"},{"revision":null,"url":"assets/core_useCloned_index.md.BnYuToza.js"},{"revision":null,"url":"assets/core_useCloned_index.md.BnYuToza.lean.js"},{"revision":null,"url":"assets/core_useColorMode_index.md.EpaDjT63.js"},{"revision":null,"url":"assets/core_useColorMode_index.md.EpaDjT63.lean.js"},{"revision":null,"url":"assets/core_useConfirmDialog_index.md.BeG330Tk.js"},{"revision":null,"url":"assets/core_useConfirmDialog_index.md.BeG330Tk.lean.js"},{"revision":null,"url":"assets/core_useCssVar_index.md.DhodQi60.js"},{"revision":null,"url":"assets/core_useCssVar_index.md.DhodQi60.lean.js"},{"revision":null,"url":"assets/core_useCurrentElement_index.md.CLAc5FbV.js"},{"revision":null,"url":"assets/core_useCurrentElement_index.md.CLAc5FbV.lean.js"},{"revision":null,"url":"assets/core_useCycleList_index.md.CgfNlTYk.js"},{"revision":null,"url":"assets/core_useCycleList_index.md.CgfNlTYk.lean.js"},{"revision":null,"url":"assets/core_useDark_index.md.BQTziKOB.js"},{"revision":null,"url":"assets/core_useDark_index.md.BQTziKOB.lean.js"},{"revision":null,"url":"assets/core_useDebouncedRefHistory_index.md.h901wmts.js"},{"revision":null,"url":"assets/core_useDebouncedRefHistory_index.md.h901wmts.lean.js"},{"revision":null,"url":"assets/core_useDeviceMotion_index.md.BFkScejL.js"},{"revision":null,"url":"assets/core_useDeviceMotion_index.md.BFkScejL.lean.js"},{"revision":null,"url":"assets/core_useDeviceOrientation_index.md.C3BZGtQz.js"},{"revision":null,"url":"assets/core_useDeviceOrientation_index.md.C3BZGtQz.lean.js"},{"revision":null,"url":"assets/core_useDevicePixelRatio_index.md.DzOkR3v_.js"},{"revision":null,"url":"assets/core_useDevicePixelRatio_index.md.DzOkR3v_.lean.js"},{"revision":null,"url":"assets/core_useDevicesList_index.md.-779zp3N.js"},{"revision":null,"url":"assets/core_useDevicesList_index.md.-779zp3N.lean.js"},{"revision":null,"url":"assets/core_useDisplayMedia_index.md.BX8xMJK3.js"},{"revision":null,"url":"assets/core_useDisplayMedia_index.md.BX8xMJK3.lean.js"},{"revision":null,"url":"assets/core_useDocumentVisibility_index.md.Cat6hJ5f.js"},{"revision":null,"url":"assets/core_useDocumentVisibility_index.md.Cat6hJ5f.lean.js"},{"revision":null,"url":"assets/core_useDraggable_index.md.DuDYdzE4.js"},{"revision":null,"url":"assets/core_useDraggable_index.md.DuDYdzE4.lean.js"},{"revision":null,"url":"assets/core_useDropZone_index.md.DqY7RZ2t.js"},{"revision":null,"url":"assets/core_useDropZone_index.md.DqY7RZ2t.lean.js"},{"revision":null,"url":"assets/core_useElementBounding_index.md.CbcFdASu.js"},{"revision":null,"url":"assets/core_useElementBounding_index.md.CbcFdASu.lean.js"},{"revision":null,"url":"assets/core_useElementByPoint_index.md.CrJLxUmF.js"},{"revision":null,"url":"assets/core_useElementByPoint_index.md.CrJLxUmF.lean.js"},{"revision":null,"url":"assets/core_useElementHover_index.md.LMD1nLpB.js"},{"revision":null,"url":"assets/core_useElementHover_index.md.LMD1nLpB.lean.js"},{"revision":null,"url":"assets/core_useElementSize_index.md.DZ_T99Wd.js"},{"revision":null,"url":"assets/core_useElementSize_index.md.DZ_T99Wd.lean.js"},{"revision":null,"url":"assets/core_useElementVisibility_index.md.CRgRDw2h.js"},{"revision":null,"url":"assets/core_useElementVisibility_index.md.CRgRDw2h.lean.js"},{"revision":null,"url":"assets/core_useEventBus_index.md.C5jMwERf.js"},{"revision":null,"url":"assets/core_useEventBus_index.md.C5jMwERf.lean.js"},{"revision":null,"url":"assets/core_useEventListener_index.md.ClJ99ZXV.js"},{"revision":null,"url":"assets/core_useEventListener_index.md.ClJ99ZXV.lean.js"},{"revision":null,"url":"assets/core_useEventSource_index.md.BSy6SvRq.js"},{"revision":null,"url":"assets/core_useEventSource_index.md.BSy6SvRq.lean.js"},{"revision":null,"url":"assets/core_useEyeDropper_index.md.CKxz6Cdj.js"},{"revision":null,"url":"assets/core_useEyeDropper_index.md.CKxz6Cdj.lean.js"},{"revision":null,"url":"assets/core_useFavicon_index.md.BtUv8Jn8.js"},{"revision":null,"url":"assets/core_useFavicon_index.md.BtUv8Jn8.lean.js"},{"revision":null,"url":"assets/core_useFetch_index.md.Buub3X_o.js"},{"revision":null,"url":"assets/core_useFetch_index.md.Buub3X_o.lean.js"},{"revision":null,"url":"assets/core_useFileDialog_index.md.C197hTUB.js"},{"revision":null,"url":"assets/core_useFileDialog_index.md.C197hTUB.lean.js"},{"revision":null,"url":"assets/core_useFileSystemAccess_index.md.DDsh1ZCm.js"},{"revision":null,"url":"assets/core_useFileSystemAccess_index.md.DDsh1ZCm.lean.js"},{"revision":null,"url":"assets/core_useFocus_index.md.509gG0sp.js"},{"revision":null,"url":"assets/core_useFocus_index.md.509gG0sp.lean.js"},{"revision":null,"url":"assets/core_useFocusWithin_index.md.Brjo01O3.js"},{"revision":null,"url":"assets/core_useFocusWithin_index.md.Brjo01O3.lean.js"},{"revision":null,"url":"assets/core_useFps_index.md.Bme9Qyfs.js"},{"revision":null,"url":"assets/core_useFps_index.md.Bme9Qyfs.lean.js"},{"revision":null,"url":"assets/core_useFullscreen_index.md.BHDFiLYc.js"},{"revision":null,"url":"assets/core_useFullscreen_index.md.BHDFiLYc.lean.js"},{"revision":null,"url":"assets/core_useGamepad_index.md.DpnYl3yq.js"},{"revision":null,"url":"assets/core_useGamepad_index.md.DpnYl3yq.lean.js"},{"revision":null,"url":"assets/core_useGeolocation_index.md.Ddgs88Sv.js"},{"revision":null,"url":"assets/core_useGeolocation_index.md.Ddgs88Sv.lean.js"},{"revision":null,"url":"assets/core_useIdle_index.md.HSiVpU4g.js"},{"revision":null,"url":"assets/core_useIdle_index.md.HSiVpU4g.lean.js"},{"revision":null,"url":"assets/core_useImage_index.md.BJFENKso.js"},{"revision":null,"url":"assets/core_useImage_index.md.BJFENKso.lean.js"},{"revision":null,"url":"assets/core_useInfiniteScroll_index.md.H6rfEmPs.js"},{"revision":null,"url":"assets/core_useInfiniteScroll_index.md.H6rfEmPs.lean.js"},{"revision":null,"url":"assets/core_useIntersectionObserver_index.md.CtWnIReh.js"},{"revision":null,"url":"assets/core_useIntersectionObserver_index.md.CtWnIReh.lean.js"},{"revision":null,"url":"assets/core_useKeyModifier_index.md.Buk1qqp-.js"},{"revision":null,"url":"assets/core_useKeyModifier_index.md.Buk1qqp-.lean.js"},{"revision":null,"url":"assets/core_useLocalStorage_index.md.bCOpZykL.js"},{"revision":null,"url":"assets/core_useLocalStorage_index.md.bCOpZykL.lean.js"},{"revision":null,"url":"assets/core_useMagicKeys_index.md.CZBHcrMO.js"},{"revision":null,"url":"assets/core_useMagicKeys_index.md.CZBHcrMO.lean.js"},{"revision":null,"url":"assets/core_useManualRefHistory_index.md.C6BDMcYP.js"},{"revision":null,"url":"assets/core_useManualRefHistory_index.md.C6BDMcYP.lean.js"},{"revision":null,"url":"assets/core_useMediaControls_index.md.mew1m9Tj.js"},{"revision":null,"url":"assets/core_useMediaControls_index.md.mew1m9Tj.lean.js"},{"revision":null,"url":"assets/core_useMediaQuery_index.md.CykNk55I.js"},{"revision":null,"url":"assets/core_useMediaQuery_index.md.CykNk55I.lean.js"},{"revision":null,"url":"assets/core_useMemoize_index.md.CgFFdPOH.js"},{"revision":null,"url":"assets/core_useMemoize_index.md.CgFFdPOH.lean.js"},{"revision":null,"url":"assets/core_useMemory_index.md.DqnYTP0d.js"},{"revision":null,"url":"assets/core_useMemory_index.md.DqnYTP0d.lean.js"},{"revision":null,"url":"assets/core_useMounted_index.md.CqmwoLs1.js"},{"revision":null,"url":"assets/core_useMounted_index.md.CqmwoLs1.lean.js"},{"revision":null,"url":"assets/core_useMouse_index.md.BCa3E1hw.js"},{"revision":null,"url":"assets/core_useMouse_index.md.BCa3E1hw.lean.js"},{"revision":null,"url":"assets/core_useMouseInElement_index.md.BqYAnnee.js"},{"revision":null,"url":"assets/core_useMouseInElement_index.md.BqYAnnee.lean.js"},{"revision":null,"url":"assets/core_useMousePressed_index.md.CQiDV8-C.js"},{"revision":null,"url":"assets/core_useMousePressed_index.md.CQiDV8-C.lean.js"},{"revision":null,"url":"assets/core_useMutationObserver_index.md.BHqO140-.js"},{"revision":null,"url":"assets/core_useMutationObserver_index.md.BHqO140-.lean.js"},{"revision":null,"url":"assets/core_useNavigatorLanguage_index.md.Dc7WDDM2.js"},{"revision":null,"url":"assets/core_useNavigatorLanguage_index.md.Dc7WDDM2.lean.js"},{"revision":null,"url":"assets/core_useNetwork_index.md.CyvN9ti6.js"},{"revision":null,"url":"assets/core_useNetwork_index.md.CyvN9ti6.lean.js"},{"revision":null,"url":"assets/core_useNow_index.md.WYDmZ_iC.js"},{"revision":null,"url":"assets/core_useNow_index.md.WYDmZ_iC.lean.js"},{"revision":null,"url":"assets/core_useObjectUrl_index.md.B4W1kQzZ.js"},{"revision":null,"url":"assets/core_useObjectUrl_index.md.B4W1kQzZ.lean.js"},{"revision":null,"url":"assets/core_useOffsetPagination_index.md.DSR5r6Pb.js"},{"revision":null,"url":"assets/core_useOffsetPagination_index.md.DSR5r6Pb.lean.js"},{"revision":null,"url":"assets/core_useOnline_index.md.Bb9GILAu.js"},{"revision":null,"url":"assets/core_useOnline_index.md.Bb9GILAu.lean.js"},{"revision":null,"url":"assets/core_usePageLeave_index.md.CTDeBHaU.js"},{"revision":null,"url":"assets/core_usePageLeave_index.md.CTDeBHaU.lean.js"},{"revision":null,"url":"assets/core_useParallax_index.md.BqXrx8IE.js"},{"revision":null,"url":"assets/core_useParallax_index.md.BqXrx8IE.lean.js"},{"revision":null,"url":"assets/core_useParentElement_index.md.DaBZei8T.js"},{"revision":null,"url":"assets/core_useParentElement_index.md.DaBZei8T.lean.js"},{"revision":null,"url":"assets/core_usePerformanceObserver_index.md.BBpgODTH.js"},{"revision":null,"url":"assets/core_usePerformanceObserver_index.md.BBpgODTH.lean.js"},{"revision":null,"url":"assets/core_usePermission_index.md.CNBHaEaV.js"},{"revision":null,"url":"assets/core_usePermission_index.md.CNBHaEaV.lean.js"},{"revision":null,"url":"assets/core_usePointer_index.md.Bxda5QmK.js"},{"revision":null,"url":"assets/core_usePointer_index.md.Bxda5QmK.lean.js"},{"revision":null,"url":"assets/core_usePointerLock_index.md.B0a1XaAa.js"},{"revision":null,"url":"assets/core_usePointerLock_index.md.B0a1XaAa.lean.js"},{"revision":null,"url":"assets/core_usePointerSwipe_index.md.BiHbRFUS.js"},{"revision":null,"url":"assets/core_usePointerSwipe_index.md.BiHbRFUS.lean.js"},{"revision":null,"url":"assets/core_usePreferredColorScheme_index.md.B1jRBeHE.js"},{"revision":null,"url":"assets/core_usePreferredColorScheme_index.md.B1jRBeHE.lean.js"},{"revision":null,"url":"assets/core_usePreferredContrast_index.md.BXa2mxOe.js"},{"revision":null,"url":"assets/core_usePreferredContrast_index.md.BXa2mxOe.lean.js"},{"revision":null,"url":"assets/core_usePreferredDark_index.md.CiieT1-V.js"},{"revision":null,"url":"assets/core_usePreferredDark_index.md.CiieT1-V.lean.js"},{"revision":null,"url":"assets/core_usePreferredLanguages_index.md.B7fWq92t.js"},{"revision":null,"url":"assets/core_usePreferredLanguages_index.md.B7fWq92t.lean.js"},{"revision":null,"url":"assets/core_usePreferredReducedMotion_index.md.BO4bzA2r.js"},{"revision":null,"url":"assets/core_usePreferredReducedMotion_index.md.BO4bzA2r.lean.js"},{"revision":null,"url":"assets/core_usePreferredReducedTransparency_index.md.BETKfQya.js"},{"revision":null,"url":"assets/core_usePreferredReducedTransparency_index.md.BETKfQya.lean.js"},{"revision":null,"url":"assets/core_usePrevious_index.md.Dj2MsuTG.js"},{"revision":null,"url":"assets/core_usePrevious_index.md.Dj2MsuTG.lean.js"},{"revision":null,"url":"assets/core_useRafFn_index.md.BK7yHnNd.js"},{"revision":null,"url":"assets/core_useRafFn_index.md.BK7yHnNd.lean.js"},{"revision":null,"url":"assets/core_useRefHistory_index.md.C1B3lMWB.js"},{"revision":null,"url":"assets/core_useRefHistory_index.md.C1B3lMWB.lean.js"},{"revision":null,"url":"assets/core_useResizeObserver_index.md.J5WCjFOH.js"},{"revision":null,"url":"assets/core_useResizeObserver_index.md.J5WCjFOH.lean.js"},{"revision":null,"url":"assets/core_useScreenOrientation_index.md.CStUrGug.js"},{"revision":null,"url":"assets/core_useScreenOrientation_index.md.CStUrGug.lean.js"},{"revision":null,"url":"assets/core_useScreenSafeArea_index.md.DkjrAA9i.js"},{"revision":null,"url":"assets/core_useScreenSafeArea_index.md.DkjrAA9i.lean.js"},{"revision":null,"url":"assets/core_useScriptTag_index.md.B_S7Axqc.js"},{"revision":null,"url":"assets/core_useScriptTag_index.md.B_S7Axqc.lean.js"},{"revision":null,"url":"assets/core_useScroll_index.md.EEbLB5Jk.js"},{"revision":null,"url":"assets/core_useScroll_index.md.EEbLB5Jk.lean.js"},{"revision":null,"url":"assets/core_useScrollLock_index.md.ChuMY6eV.js"},{"revision":null,"url":"assets/core_useScrollLock_index.md.ChuMY6eV.lean.js"},{"revision":null,"url":"assets/core_useSessionStorage_index.md.Cz7qCoGd.js"},{"revision":null,"url":"assets/core_useSessionStorage_index.md.Cz7qCoGd.lean.js"},{"revision":null,"url":"assets/core_useShare_index.md.B1eifrgY.js"},{"revision":null,"url":"assets/core_useShare_index.md.B1eifrgY.lean.js"},{"revision":null,"url":"assets/core_useSorted_index.md.BcMBUYTf.js"},{"revision":null,"url":"assets/core_useSorted_index.md.BcMBUYTf.lean.js"},{"revision":null,"url":"assets/core_useSpeechRecognition_index.md.DCqAuPQL.js"},{"revision":null,"url":"assets/core_useSpeechRecognition_index.md.DCqAuPQL.lean.js"},{"revision":null,"url":"assets/core_useSpeechSynthesis_index.md.DsUbwZpY.js"},{"revision":null,"url":"assets/core_useSpeechSynthesis_index.md.DsUbwZpY.lean.js"},{"revision":null,"url":"assets/core_useSSRWidth_index.md.DPlal5B8.js"},{"revision":null,"url":"assets/core_useSSRWidth_index.md.DPlal5B8.lean.js"},{"revision":null,"url":"assets/core_useStepper_index.md.BAMltJMR.js"},{"revision":null,"url":"assets/core_useStepper_index.md.BAMltJMR.lean.js"},{"revision":null,"url":"assets/core_useStorage_index.md.DsJV469q.js"},{"revision":null,"url":"assets/core_useStorage_index.md.DsJV469q.lean.js"},{"revision":null,"url":"assets/core_useStorageAsync_index.md.QqTsFxT5.js"},{"revision":null,"url":"assets/core_useStorageAsync_index.md.QqTsFxT5.lean.js"},{"revision":null,"url":"assets/core_useStyleTag_index.md.0pLbRch8.js"},{"revision":null,"url":"assets/core_useStyleTag_index.md.0pLbRch8.lean.js"},{"revision":null,"url":"assets/core_useSupported_index.md.Dau9RMGc.js"},{"revision":null,"url":"assets/core_useSupported_index.md.Dau9RMGc.lean.js"},{"revision":null,"url":"assets/core_useSwipe_index.md.BDlY_GLq.js"},{"revision":null,"url":"assets/core_useSwipe_index.md.BDlY_GLq.lean.js"},{"revision":null,"url":"assets/core_useTemplateRefsList_index.md.BK6bAihM.js"},{"revision":null,"url":"assets/core_useTemplateRefsList_index.md.BK6bAihM.lean.js"},{"revision":null,"url":"assets/core_useTextareaAutosize_index.md.Dychpcrv.js"},{"revision":null,"url":"assets/core_useTextareaAutosize_index.md.Dychpcrv.lean.js"},{"revision":null,"url":"assets/core_useTextDirection_index.md.BoYYScb_.js"},{"revision":null,"url":"assets/core_useTextDirection_index.md.BoYYScb_.lean.js"},{"revision":null,"url":"assets/core_useTextSelection_index.md.BqdPZmwD.js"},{"revision":null,"url":"assets/core_useTextSelection_index.md.BqdPZmwD.lean.js"},{"revision":null,"url":"assets/core_useThrottledRefHistory_index.md.BIW3Bw-I.js"},{"revision":null,"url":"assets/core_useThrottledRefHistory_index.md.BIW3Bw-I.lean.js"},{"revision":null,"url":"assets/core_useTimeAgo_index.md.BZB3ohIG.js"},{"revision":null,"url":"assets/core_useTimeAgo_index.md.BZB3ohIG.lean.js"},{"revision":null,"url":"assets/core_useTimeoutPoll_index.md.8W8dRvMV.js"},{"revision":null,"url":"assets/core_useTimeoutPoll_index.md.8W8dRvMV.lean.js"},{"revision":null,"url":"assets/core_useTimestamp_index.md.hLqbeFQQ.js"},{"revision":null,"url":"assets/core_useTimestamp_index.md.hLqbeFQQ.lean.js"},{"revision":null,"url":"assets/core_useTitle_index.md.DpeofimW.js"},{"revision":null,"url":"assets/core_useTitle_index.md.DpeofimW.lean.js"},{"revision":null,"url":"assets/core_useTransition_index.md.gMMwI6eX.js"},{"revision":null,"url":"assets/core_useTransition_index.md.gMMwI6eX.lean.js"},{"revision":null,"url":"assets/core_useUrlSearchParams_index.md.C4rUZHiT.js"},{"revision":null,"url":"assets/core_useUrlSearchParams_index.md.C4rUZHiT.lean.js"},{"revision":null,"url":"assets/core_useUserMedia_index.md.Bp9bVsYF.js"},{"revision":null,"url":"assets/core_useUserMedia_index.md.Bp9bVsYF.lean.js"},{"revision":null,"url":"assets/core_useVibrate_index.md.Z6ihvrR6.js"},{"revision":null,"url":"assets/core_useVibrate_index.md.Z6ihvrR6.lean.js"},{"revision":null,"url":"assets/core_useVirtualList_index.md.CWnt5zRh.js"},{"revision":null,"url":"assets/core_useVirtualList_index.md.CWnt5zRh.lean.js"},{"revision":null,"url":"assets/core_useVModel_index.md.Bcn59yQq.js"},{"revision":null,"url":"assets/core_useVModel_index.md.Bcn59yQq.lean.js"},{"revision":null,"url":"assets/core_useVModels_index.md.DeYyt25n.js"},{"revision":null,"url":"assets/core_useVModels_index.md.DeYyt25n.lean.js"},{"revision":null,"url":"assets/core_useWakeLock_index.md.K2GkQylX.js"},{"revision":null,"url":"assets/core_useWakeLock_index.md.K2GkQylX.lean.js"},{"revision":null,"url":"assets/core_useWebNotification_index.md.5kQN7ury.js"},{"revision":null,"url":"assets/core_useWebNotification_index.md.5kQN7ury.lean.js"},{"revision":null,"url":"assets/core_useWebSocket_index.md.DPR_eCKZ.js"},{"revision":null,"url":"assets/core_useWebSocket_index.md.DPR_eCKZ.lean.js"},{"revision":null,"url":"assets/core_useWebWorker_index.md.DbRQtbBZ.js"},{"revision":null,"url":"assets/core_useWebWorker_index.md.DbRQtbBZ.lean.js"},{"revision":null,"url":"assets/core_useWebWorkerFn_index.md.Be6S4Oq_.js"},{"revision":null,"url":"assets/core_useWebWorkerFn_index.md.Be6S4Oq_.lean.js"},{"revision":null,"url":"assets/core_useWindowFocus_index.md.BRsvBbKU.js"},{"revision":null,"url":"assets/core_useWindowFocus_index.md.BRsvBbKU.lean.js"},{"revision":null,"url":"assets/core_useWindowScroll_index.md.BWNpIM7g.js"},{"revision":null,"url":"assets/core_useWindowScroll_index.md.BWNpIM7g.lean.js"},{"revision":null,"url":"assets/core_useWindowSize_index.md.hEKQ2TT8.js"},{"revision":null,"url":"assets/core_useWindowSize_index.md.hEKQ2TT8.lean.js"},{"revision":null,"url":"assets/ecosystem.md.CUBA0Tx6.js"},{"revision":null,"url":"assets/ecosystem.md.CUBA0Tx6.lean.js"},{"revision":null,"url":"assets/electron_README.md.Cttf4MGu.js"},{"revision":null,"url":"assets/electron_README.md.Cttf4MGu.lean.js"},{"revision":null,"url":"assets/electron_useIpcRenderer_index.md.BlLDOBd_.js"},{"revision":null,"url":"assets/electron_useIpcRenderer_index.md.BlLDOBd_.lean.js"},{"revision":null,"url":"assets/electron_useIpcRendererInvoke_index.md.CiqC87bv.js"},{"revision":null,"url":"assets/electron_useIpcRendererInvoke_index.md.CiqC87bv.lean.js"},{"revision":null,"url":"assets/electron_useIpcRendererOn_index.md.C9bdWrIi.js"},{"revision":null,"url":"assets/electron_useIpcRendererOn_index.md.C9bdWrIi.lean.js"},{"revision":null,"url":"assets/electron_useZoomFactor_index.md.DCT2KVi4.js"},{"revision":null,"url":"assets/electron_useZoomFactor_index.md.DCT2KVi4.lean.js"},{"revision":null,"url":"assets/electron_useZoomLevel_index.md.B1ZTKGyV.js"},{"revision":null,"url":"assets/electron_useZoomLevel_index.md.B1ZTKGyV.lean.js"},{"revision":null,"url":"assets/export-size.md.BtFbEuVU.js"},{"revision":null,"url":"assets/export-size.md.BtFbEuVU.lean.js"},{"revision":null,"url":"assets/firebase_README.md.rYsbPOK8.js"},{"revision":null,"url":"assets/firebase_README.md.rYsbPOK8.lean.js"},{"revision":null,"url":"assets/firebase_useAuth_index.md.Coo5d80g.js"},{"revision":null,"url":"assets/firebase_useAuth_index.md.Coo5d80g.lean.js"},{"revision":null,"url":"assets/firebase_useFirestore_index.md.CJAXSqcZ.js"},{"revision":null,"url":"assets/firebase_useFirestore_index.md.CJAXSqcZ.lean.js"},{"revision":null,"url":"assets/firebase_useRTDB_index.md.BN2cKH45.js"},{"revision":null,"url":"assets/firebase_useRTDB_index.md.BN2cKH45.lean.js"},{"revision":null,"url":"assets/functions.md.CAwoRChI.js"},{"revision":null,"url":"assets/functions.md.CAwoRChI.lean.js"},{"revision":null,"url":"assets/guide_best-practice.md.BdBsV0k4.js"},{"revision":null,"url":"assets/guide_best-practice.md.BdBsV0k4.lean.js"},{"revision":null,"url":"assets/guide_components.md.CONW2EtD.js"},{"revision":null,"url":"assets/guide_components.md.CONW2EtD.lean.js"},{"revision":null,"url":"assets/guide_config.md.C0Qn-_TL.js"},{"revision":null,"url":"assets/guide_config.md.C0Qn-_TL.lean.js"},{"revision":null,"url":"assets/guide_index.md.CtsjLgXV.js"},{"revision":null,"url":"assets/guide_index.md.CtsjLgXV.lean.js"},{"revision":null,"url":"assets/guidelines.md.Cxz-JsDg.js"},{"revision":null,"url":"assets/guidelines.md.Cxz-JsDg.lean.js"},{"revision":null,"url":"assets/index.md.CYrc8JI9.js"},{"revision":null,"url":"assets/index.md.CYrc8JI9.lean.js"},{"revision":null,"url":"assets/integrations_README.md.yzjewFdG.js"},{"revision":null,"url":"assets/integrations_README.md.yzjewFdG.lean.js"},{"revision":null,"url":"assets/integrations_useAsyncValidator_index.md.Bl7zmWQv.js"},{"revision":null,"url":"assets/integrations_useAsyncValidator_index.md.Bl7zmWQv.lean.js"},{"revision":null,"url":"assets/integrations_useAxios_index.md.B7dsdqDx.js"},{"revision":null,"url":"assets/integrations_useAxios_index.md.B7dsdqDx.lean.js"},{"revision":null,"url":"assets/integrations_useChangeCase_index.md.B05kDGtB.js"},{"revision":null,"url":"assets/integrations_useChangeCase_index.md.B05kDGtB.lean.js"},{"revision":null,"url":"assets/integrations_useCookies_index.md.C6s9-AWY.js"},{"revision":null,"url":"assets/integrations_useCookies_index.md.C6s9-AWY.lean.js"},{"revision":null,"url":"assets/integrations_useDrauu_index.md.BLR8U_i9.js"},{"revision":null,"url":"assets/integrations_useDrauu_index.md.BLR8U_i9.lean.js"},{"revision":null,"url":"assets/integrations_useFocusTrap_index.md.Wzy0BCo4.js"},{"revision":null,"url":"assets/integrations_useFocusTrap_index.md.Wzy0BCo4.lean.js"},{"revision":null,"url":"assets/integrations_useFuse_index.md.B7ak3FYL.js"},{"revision":null,"url":"assets/integrations_useFuse_index.md.B7ak3FYL.lean.js"},{"revision":null,"url":"assets/integrations_useIDBKeyval_index.md.C9dfN626.js"},{"revision":null,"url":"assets/integrations_useIDBKeyval_index.md.C9dfN626.lean.js"},{"revision":null,"url":"assets/integrations_useJwt_index.md.DIvmerCS.js"},{"revision":null,"url":"assets/integrations_useJwt_index.md.DIvmerCS.lean.js"},{"revision":null,"url":"assets/integrations_useNProgress_index.md.BIDUhHbJ.js"},{"revision":null,"url":"assets/integrations_useNProgress_index.md.BIDUhHbJ.lean.js"},{"revision":null,"url":"assets/integrations_useQRCode_index.md.Dr2SDn83.js"},{"revision":null,"url":"assets/integrations_useQRCode_index.md.Dr2SDn83.lean.js"},{"revision":null,"url":"assets/integrations_useSortable_index.md.BTfbUbPm.js"},{"revision":null,"url":"assets/integrations_useSortable_index.md.BTfbUbPm.lean.js"},{"revision":null,"url":"assets/inter-italic-cyrillic-ext.r48I6akx.woff2"},{"revision":null,"url":"assets/inter-italic-cyrillic.By2_1cv3.woff2"},{"revision":null,"url":"assets/inter-italic-greek-ext.1u6EdAuj.woff2"},{"revision":null,"url":"assets/inter-italic-greek.DJ8dCoTZ.woff2"},{"revision":null,"url":"assets/inter-italic-latin-ext.CN1xVJS-.woff2"},{"revision":null,"url":"assets/inter-italic-latin.C2AdPX0b.woff2"},{"revision":null,"url":"assets/inter-italic-vietnamese.BSbpV94h.woff2"},{"revision":null,"url":"assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2"},{"revision":null,"url":"assets/inter-roman-cyrillic.C5lxZ8CY.woff2"},{"revision":null,"url":"assets/inter-roman-greek-ext.CqjqNYQ-.woff2"},{"revision":null,"url":"assets/inter-roman-greek.BBVDIX6e.woff2"},{"revision":null,"url":"assets/inter-roman-latin-ext.4ZJIpNVo.woff2"},{"revision":null,"url":"assets/inter-roman-latin.Di8DUHzh.woff2"},{"revision":null,"url":"assets/inter-roman-vietnamese.BjW4sHH5.woff2"},{"revision":null,"url":"assets/math_createGenericProjection_index.md.D3wKbocP.js"},{"revision":null,"url":"assets/math_createGenericProjection_index.md.D3wKbocP.lean.js"},{"revision":null,"url":"assets/math_createProjection_index.md.2udPnpaN.js"},{"revision":null,"url":"assets/math_createProjection_index.md.2udPnpaN.lean.js"},{"revision":null,"url":"assets/math_logicAnd_index.md.DXHWLhwr.js"},{"revision":null,"url":"assets/math_logicAnd_index.md.DXHWLhwr.lean.js"},{"revision":null,"url":"assets/math_logicNot_index.md.UvhIsRQK.js"},{"revision":null,"url":"assets/math_logicNot_index.md.UvhIsRQK.lean.js"},{"revision":null,"url":"assets/math_logicOr_index.md.CoN4b5u3.js"},{"revision":null,"url":"assets/math_logicOr_index.md.CoN4b5u3.lean.js"},{"revision":null,"url":"assets/math_README.md.DlLsCgHQ.js"},{"revision":null,"url":"assets/math_README.md.DlLsCgHQ.lean.js"},{"revision":null,"url":"assets/math_useAbs_index.md.Bk3m1-UF.js"},{"revision":null,"url":"assets/math_useAbs_index.md.Bk3m1-UF.lean.js"},{"revision":null,"url":"assets/math_useAverage_index.md.7dQ6zVj_.js"},{"revision":null,"url":"assets/math_useAverage_index.md.7dQ6zVj_.lean.js"},{"revision":null,"url":"assets/math_useCeil_index.md.C6qVoAK5.js"},{"revision":null,"url":"assets/math_useCeil_index.md.C6qVoAK5.lean.js"},{"revision":null,"url":"assets/math_useClamp_index.md.DCcyYC6k.js"},{"revision":null,"url":"assets/math_useClamp_index.md.DCcyYC6k.lean.js"},{"revision":null,"url":"assets/math_useFloor_index.md.B73PJj7k.js"},{"revision":null,"url":"assets/math_useFloor_index.md.B73PJj7k.lean.js"},{"revision":null,"url":"assets/math_useMath_index.md.D_ySnvN4.js"},{"revision":null,"url":"assets/math_useMath_index.md.D_ySnvN4.lean.js"},{"revision":null,"url":"assets/math_useMax_index.md.CAZlbEbO.js"},{"revision":null,"url":"assets/math_useMax_index.md.CAZlbEbO.lean.js"},{"revision":null,"url":"assets/math_useMin_index.md.DLO2oW0w.js"},{"revision":null,"url":"assets/math_useMin_index.md.DLO2oW0w.lean.js"},{"revision":null,"url":"assets/math_usePrecision_index.md.CvsnTClM.js"},{"revision":null,"url":"assets/math_usePrecision_index.md.CvsnTClM.lean.js"},{"revision":null,"url":"assets/math_useProjection_index.md.rbMlKS0D.js"},{"revision":null,"url":"assets/math_useProjection_index.md.rbMlKS0D.lean.js"},{"revision":null,"url":"assets/math_useRound_index.md.Ds42LuHG.js"},{"revision":null,"url":"assets/math_useRound_index.md.Ds42LuHG.lean.js"},{"revision":null,"url":"assets/math_useSum_index.md.8HyUjDEg.js"},{"revision":null,"url":"assets/math_useSum_index.md.8HyUjDEg.lean.js"},{"revision":null,"url":"assets/math_useTrunc_index.md.CAplmZ5Q.js"},{"revision":null,"url":"assets/math_useTrunc_index.md.CAplmZ5Q.lean.js"},{"revision":null,"url":"assets/nuxt_README.md.C-6ckZLC.js"},{"revision":null,"url":"assets/nuxt_README.md.C-6ckZLC.lean.js"},{"revision":null,"url":"assets/router_README.md.DGkk1v52.js"},{"revision":null,"url":"assets/router_README.md.DGkk1v52.lean.js"},{"revision":null,"url":"assets/router_useRouteHash_index.md.DVPfWOHE.js"},{"revision":null,"url":"assets/router_useRouteHash_index.md.DVPfWOHE.lean.js"},{"revision":null,"url":"assets/router_useRouteParams_index.md.BfKLcgXJ.js"},{"revision":null,"url":"assets/router_useRouteParams_index.md.BfKLcgXJ.lean.js"},{"revision":null,"url":"assets/router_useRouteQuery_index.md.N1Ff_tsS.js"},{"revision":null,"url":"assets/router_useRouteQuery_index.md.N1Ff_tsS.lean.js"},{"revision":null,"url":"assets/rxjs_from_index.md.DLgQyc0q.js"},{"revision":null,"url":"assets/rxjs_from_index.md.DLgQyc0q.lean.js"},{"revision":null,"url":"assets/rxjs_README.md.DVsRZraD.js"},{"revision":null,"url":"assets/rxjs_README.md.DVsRZraD.lean.js"},{"revision":null,"url":"assets/rxjs_toObserver_index.md.CPuKYqQv.js"},{"revision":null,"url":"assets/rxjs_toObserver_index.md.CPuKYqQv.lean.js"},{"revision":null,"url":"assets/rxjs_useExtractedObservable_index.md.Cry5bq_n.js"},{"revision":null,"url":"assets/rxjs_useExtractedObservable_index.md.Cry5bq_n.lean.js"},{"revision":null,"url":"assets/rxjs_useObservable_index.md.CrEg_7mX.js"},{"revision":null,"url":"assets/rxjs_useObservable_index.md.CrEg_7mX.lean.js"},{"revision":null,"url":"assets/rxjs_useSubject_index.md.B3lea4Fw.js"},{"revision":null,"url":"assets/rxjs_useSubject_index.md.B3lea4Fw.lean.js"},{"revision":null,"url":"assets/rxjs_useSubscription_index.md.fg7Tnwqk.js"},{"revision":null,"url":"assets/rxjs_useSubscription_index.md.fg7Tnwqk.lean.js"},{"revision":null,"url":"assets/rxjs_watchExtractedObservable_index.md.BeETXC-c.js"},{"revision":null,"url":"assets/rxjs_watchExtractedObservable_index.md.BeETXC-c.lean.js"},{"revision":null,"url":"assets/shared_computedEager_index.md.DSc5qfU4.js"},{"revision":null,"url":"assets/shared_computedEager_index.md.DSc5qfU4.lean.js"},{"revision":null,"url":"assets/shared_computedWithControl_index.md.CI6Rqhz-.js"},{"revision":null,"url":"assets/shared_computedWithControl_index.md.CI6Rqhz-.lean.js"},{"revision":null,"url":"assets/shared_createEventHook_index.md.DY_GWEQ6.js"},{"revision":null,"url":"assets/shared_createEventHook_index.md.DY_GWEQ6.lean.js"},{"revision":null,"url":"assets/shared_createGlobalState_index.md.thbHKwzQ.js"},{"revision":null,"url":"assets/shared_createGlobalState_index.md.thbHKwzQ.lean.js"},{"revision":null,"url":"assets/shared_createInjectionState_index.md.CuZsjOpY.js"},{"revision":null,"url":"assets/shared_createInjectionState_index.md.CuZsjOpY.lean.js"},{"revision":null,"url":"assets/shared_createSharedComposable_index.md.BDazqnRY.js"},{"revision":null,"url":"assets/shared_createSharedComposable_index.md.BDazqnRY.lean.js"},{"revision":null,"url":"assets/shared_extendRef_index.md.DHKDI_sF.js"},{"revision":null,"url":"assets/shared_extendRef_index.md.DHKDI_sF.lean.js"},{"revision":null,"url":"assets/shared_get_index.md.B_yMQMYl.js"},{"revision":null,"url":"assets/shared_get_index.md.B_yMQMYl.lean.js"},{"revision":null,"url":"assets/shared_injectLocal_index.md.C1_OShEo.js"},{"revision":null,"url":"assets/shared_injectLocal_index.md.C1_OShEo.lean.js"},{"revision":null,"url":"assets/shared_isDefined_index.md.BEcau6RA.js"},{"revision":null,"url":"assets/shared_isDefined_index.md.BEcau6RA.lean.js"},{"revision":null,"url":"assets/shared_makeDestructurable_index.md.CW9UyCpo.js"},{"revision":null,"url":"assets/shared_makeDestructurable_index.md.CW9UyCpo.lean.js"},{"revision":null,"url":"assets/shared_provideLocal_index.md.Bh_qfEtg.js"},{"revision":null,"url":"assets/shared_provideLocal_index.md.Bh_qfEtg.lean.js"},{"revision":null,"url":"assets/shared_reactify_index.md.rKNbMYrJ.js"},{"revision":null,"url":"assets/shared_reactify_index.md.rKNbMYrJ.lean.js"},{"revision":null,"url":"assets/shared_reactifyObject_index.md.szK_N7zB.js"},{"revision":null,"url":"assets/shared_reactifyObject_index.md.szK_N7zB.lean.js"},{"revision":null,"url":"assets/shared_reactiveComputed_index.md.N7BHVzKT.js"},{"revision":null,"url":"assets/shared_reactiveComputed_index.md.N7BHVzKT.lean.js"},{"revision":null,"url":"assets/shared_reactiveOmit_index.md.CW22XDDg.js"},{"revision":null,"url":"assets/shared_reactiveOmit_index.md.CW22XDDg.lean.js"},{"revision":null,"url":"assets/shared_reactivePick_index.md.B-Qb0wsE.js"},{"revision":null,"url":"assets/shared_reactivePick_index.md.B-Qb0wsE.lean.js"},{"revision":null,"url":"assets/shared_refAutoReset_index.md.Di69LEki.js"},{"revision":null,"url":"assets/shared_refAutoReset_index.md.Di69LEki.lean.js"},{"revision":null,"url":"assets/shared_refDebounced_index.md.BQyeveXU.js"},{"revision":null,"url":"assets/shared_refDebounced_index.md.BQyeveXU.lean.js"},{"revision":null,"url":"assets/shared_refDefault_index.md.BVeATOi1.js"},{"revision":null,"url":"assets/shared_refDefault_index.md.BVeATOi1.lean.js"},{"revision":null,"url":"assets/shared_refThrottled_index.md.BsUTgOq1.js"},{"revision":null,"url":"assets/shared_refThrottled_index.md.BsUTgOq1.lean.js"},{"revision":null,"url":"assets/shared_refWithControl_index.md.CYQAf2do.js"},{"revision":null,"url":"assets/shared_refWithControl_index.md.CYQAf2do.lean.js"},{"revision":null,"url":"assets/shared_set_index.md.Cbg2At8M.js"},{"revision":null,"url":"assets/shared_set_index.md.Cbg2At8M.lean.js"},{"revision":null,"url":"assets/shared_syncRef_index.md.5gI06lrB.js"},{"revision":null,"url":"assets/shared_syncRef_index.md.5gI06lrB.lean.js"},{"revision":null,"url":"assets/shared_syncRefs_index.md.DhnJ3gQz.js"},{"revision":null,"url":"assets/shared_syncRefs_index.md.DhnJ3gQz.lean.js"},{"revision":null,"url":"assets/shared_toReactive_index.md.DuB3UJZR.js"},{"revision":null,"url":"assets/shared_toReactive_index.md.DuB3UJZR.lean.js"},{"revision":null,"url":"assets/shared_toRef_index.md.0ZBAsIKN.js"},{"revision":null,"url":"assets/shared_toRef_index.md.0ZBAsIKN.lean.js"},{"revision":null,"url":"assets/shared_toRefs_index.md.DclGqpqr.js"},{"revision":null,"url":"assets/shared_toRefs_index.md.DclGqpqr.lean.js"},{"revision":null,"url":"assets/shared_toValue_index.md.Au1FoDwJ.js"},{"revision":null,"url":"assets/shared_toValue_index.md.Au1FoDwJ.lean.js"},{"revision":null,"url":"assets/shared_tryOnBeforeMount_index.md.DcpbYg7D.js"},{"revision":null,"url":"assets/shared_tryOnBeforeMount_index.md.DcpbYg7D.lean.js"},{"revision":null,"url":"assets/shared_tryOnBeforeUnmount_index.md.DMKC5V0A.js"},{"revision":null,"url":"assets/shared_tryOnBeforeUnmount_index.md.DMKC5V0A.lean.js"},{"revision":null,"url":"assets/shared_tryOnMounted_index.md.Bw6exL3q.js"},{"revision":null,"url":"assets/shared_tryOnMounted_index.md.Bw6exL3q.lean.js"},{"revision":null,"url":"assets/shared_tryOnScopeDispose_index.md.BgaM49Tq.js"},{"revision":null,"url":"assets/shared_tryOnScopeDispose_index.md.BgaM49Tq.lean.js"},{"revision":null,"url":"assets/shared_tryOnUnmounted_index.md.CwtoonpU.js"},{"revision":null,"url":"assets/shared_tryOnUnmounted_index.md.CwtoonpU.lean.js"},{"revision":null,"url":"assets/shared_until_index.md.3ymUmG5a.js"},{"revision":null,"url":"assets/shared_until_index.md.3ymUmG5a.lean.js"},{"revision":null,"url":"assets/shared_useArrayDifference_index.md.CkhvJRKF.js"},{"revision":null,"url":"assets/shared_useArrayDifference_index.md.CkhvJRKF.lean.js"},{"revision":null,"url":"assets/shared_useArrayEvery_index.md.Bp5Y2f3p.js"},{"revision":null,"url":"assets/shared_useArrayEvery_index.md.Bp5Y2f3p.lean.js"},{"revision":null,"url":"assets/shared_useArrayFilter_index.md.6P5zAvtc.js"},{"revision":null,"url":"assets/shared_useArrayFilter_index.md.6P5zAvtc.lean.js"},{"revision":null,"url":"assets/shared_useArrayFind_index.md.jghqaIXP.js"},{"revision":null,"url":"assets/shared_useArrayFind_index.md.jghqaIXP.lean.js"},{"revision":null,"url":"assets/shared_useArrayFindIndex_index.md.Cza7mSgR.js"},{"revision":null,"url":"assets/shared_useArrayFindIndex_index.md.Cza7mSgR.lean.js"},{"revision":null,"url":"assets/shared_useArrayFindLast_index.md.vWxuAfvr.js"},{"revision":null,"url":"assets/shared_useArrayFindLast_index.md.vWxuAfvr.lean.js"},{"revision":null,"url":"assets/shared_useArrayIncludes_index.md.C7RiVqCN.js"},{"revision":null,"url":"assets/shared_useArrayIncludes_index.md.C7RiVqCN.lean.js"},{"revision":null,"url":"assets/shared_useArrayJoin_index.md.IyGNyIXP.js"},{"revision":null,"url":"assets/shared_useArrayJoin_index.md.IyGNyIXP.lean.js"},{"revision":null,"url":"assets/shared_useArrayMap_index.md.Bdeo805f.js"},{"revision":null,"url":"assets/shared_useArrayMap_index.md.Bdeo805f.lean.js"},{"revision":null,"url":"assets/shared_useArrayReduce_index.md.CTSw09vO.js"},{"revision":null,"url":"assets/shared_useArrayReduce_index.md.CTSw09vO.lean.js"},{"revision":null,"url":"assets/shared_useArraySome_index.md.sn34fyf8.js"},{"revision":null,"url":"assets/shared_useArraySome_index.md.sn34fyf8.lean.js"},{"revision":null,"url":"assets/shared_useArrayUnique_index.md.BEsUwbMD.js"},{"revision":null,"url":"assets/shared_useArrayUnique_index.md.BEsUwbMD.lean.js"},{"revision":null,"url":"assets/shared_useCounter_index.md.BU_0jZd2.js"},{"revision":null,"url":"assets/shared_useCounter_index.md.BU_0jZd2.lean.js"},{"revision":null,"url":"assets/shared_useDateFormat_index.md.BHe7Q5et.js"},{"revision":null,"url":"assets/shared_useDateFormat_index.md.BHe7Q5et.lean.js"},{"revision":null,"url":"assets/shared_useDebounceFn_index.md.DDH37SJ6.js"},{"revision":null,"url":"assets/shared_useDebounceFn_index.md.DDH37SJ6.lean.js"},{"revision":null,"url":"assets/shared_useInterval_index.md.Cl2UF_TO.js"},{"revision":null,"url":"assets/shared_useInterval_index.md.Cl2UF_TO.lean.js"},{"revision":null,"url":"assets/shared_useIntervalFn_index.md.Bi5k9s0M.js"},{"revision":null,"url":"assets/shared_useIntervalFn_index.md.Bi5k9s0M.lean.js"},{"revision":null,"url":"assets/shared_useLastChanged_index.md.Bg2bZH2g.js"},{"revision":null,"url":"assets/shared_useLastChanged_index.md.Bg2bZH2g.lean.js"},{"revision":null,"url":"assets/shared_useThrottleFn_index.md.DSZUCBaD.js"},{"revision":null,"url":"assets/shared_useThrottleFn_index.md.DSZUCBaD.lean.js"},{"revision":null,"url":"assets/shared_useTimeout_index.md.KRY_KLMk.js"},{"revision":null,"url":"assets/shared_useTimeout_index.md.KRY_KLMk.lean.js"},{"revision":null,"url":"assets/shared_useTimeoutFn_index.md.B6uM35EP.js"},{"revision":null,"url":"assets/shared_useTimeoutFn_index.md.B6uM35EP.lean.js"},{"revision":null,"url":"assets/shared_useToggle_index.md.BbXK7ZeC.js"},{"revision":null,"url":"assets/shared_useToggle_index.md.BbXK7ZeC.lean.js"},{"revision":null,"url":"assets/shared_useToNumber_index.md.Cn8fJqKf.js"},{"revision":null,"url":"assets/shared_useToNumber_index.md.Cn8fJqKf.lean.js"},{"revision":null,"url":"assets/shared_useToString_index.md.B0m26Qot.js"},{"revision":null,"url":"assets/shared_useToString_index.md.B0m26Qot.lean.js"},{"revision":null,"url":"assets/shared_watchArray_index.md.CBMlTsKU.js"},{"revision":null,"url":"assets/shared_watchArray_index.md.CBMlTsKU.lean.js"},{"revision":null,"url":"assets/shared_watchAtMost_index.md.gCia1jzh.js"},{"revision":null,"url":"assets/shared_watchAtMost_index.md.gCia1jzh.lean.js"},{"revision":null,"url":"assets/shared_watchDebounced_index.md.Cg4uDfCI.js"},{"revision":null,"url":"assets/shared_watchDebounced_index.md.Cg4uDfCI.lean.js"},{"revision":null,"url":"assets/shared_watchDeep_index.md.DLzUTWzA.js"},{"revision":null,"url":"assets/shared_watchDeep_index.md.DLzUTWzA.lean.js"},{"revision":null,"url":"assets/shared_watchIgnorable_index.md.BJsvzq9l.js"},{"revision":null,"url":"assets/shared_watchIgnorable_index.md.BJsvzq9l.lean.js"},{"revision":null,"url":"assets/shared_watchImmediate_index.md.CN1Mm9nJ.js"},{"revision":null,"url":"assets/shared_watchImmediate_index.md.CN1Mm9nJ.lean.js"},{"revision":null,"url":"assets/shared_watchOnce_index.md.DceSMnzQ.js"},{"revision":null,"url":"assets/shared_watchOnce_index.md.DceSMnzQ.lean.js"},{"revision":null,"url":"assets/shared_watchPausable_index.md.Zbgi0ECw.js"},{"revision":null,"url":"assets/shared_watchPausable_index.md.Zbgi0ECw.lean.js"},{"revision":null,"url":"assets/shared_watchThrottled_index.md.p_tVBUcu.js"},{"revision":null,"url":"assets/shared_watchThrottled_index.md.p_tVBUcu.lean.js"},{"revision":null,"url":"assets/shared_watchTriggerable_index.md.CVi_8Yjg.js"},{"revision":null,"url":"assets/shared_watchTriggerable_index.md.CVi_8Yjg.lean.js"},{"revision":null,"url":"assets/shared_watchWithFilter_index.md.p8u_lInS.js"},{"revision":null,"url":"assets/shared_watchWithFilter_index.md.p8u_lInS.lean.js"},{"revision":null,"url":"assets/shared_whenever_index.md.P1NjoRNU.js"},{"revision":null,"url":"assets/shared_whenever_index.md.P1NjoRNU.lean.js"},{"revision":null,"url":"assets/style.CH_8knKy.css"},{"revision":null,"url":"assets/why-no-translations.md.DI-SxvOG.js"},{"revision":null,"url":"assets/why-no-translations.md.DI-SxvOG.lean.js"},{"revision":"b657c479bf8352e239024be8d3bc3619","url":"badge-function-count.svg"},{"revision":"88bed10207eeb77066d768e2edbbe352","url":"components/README.html"},{"revision":"097fd68d252d25a7f654e9224280add0","url":"contributing.html"},{"revision":"c23152d00bb2cbd435bea42edc796960","url":"core/_template/index.html"},{"revision":"60c3d712ece18c217ff509ece0eb3edf","url":"core/computedAsync/index.html"},{"revision":"1129582546fc59dc22947b543b4cf311","url":"core/computedInject/index.html"},{"revision":"19033241da86731a20ceaeebf84ee65f","url":"core/createReusableTemplate/index.html"},{"revision":"c7f40ce5896c21d897aad1c56bde2567","url":"core/createTemplatePromise/index.html"},{"revision":"9e78f807491d04afec51cd9b6a4b42c7","url":"core/createUnrefFn/index.html"},{"revision":"453ca1dae1c613cec0c85dc59aa96dc5","url":"core/onClickOutside/index.html"},{"revision":"9c59944ebeae0def2579cadf5806ac28","url":"core/onKeyStroke/index.html"},{"revision":"e0eb7c479202d707c6653885848dc792","url":"core/onLongPress/index.html"},{"revision":"f619b9f95170254ea0ea57e9f8ed99a4","url":"core/onStartTyping/index.html"},{"revision":"2239b2798a9061836e2262312c0926e9","url":"core/README.html"},{"revision":"3684998c239efd6c20f2d2ce27fd87f7","url":"core/templateRef/index.html"},{"revision":"c38537d083df4249b812fbb4fc90cb08","url":"core/unrefElement/index.html"},{"revision":"18886ce63d78aaf0bf1e2e16f269d311","url":"core/useActiveElement/index.html"},{"revision":"29c5f01fa2430760a34eabb8063eba34","url":"core/useAnimate/index.html"},{"revision":"d8174f7b7d7f5067f07809470713c6be","url":"core/useAsyncQueue/index.html"},{"revision":"3756975688868e73c295d0e5905c4dc4","url":"core/useAsyncState/index.html"},{"revision":"c976afc40e1fdb36fcd61a7fcf6b4afd","url":"core/useBase64/index.html"},{"revision":"ff74345b007fd099b3f11898144fdccb","url":"core/useBattery/index.html"},{"revision":"8168986f9926a8b6aaadc66ede38322b","url":"core/useBluetooth/index.html"},{"revision":"490574049025ca8d9e7da382267fa96f","url":"core/useBreakpoints/index.html"},{"revision":"57b843176fe0944508c1f6e901cf66c3","url":"core/useBroadcastChannel/index.html"},{"revision":"7b9118f0314f37c052de7d5f5e0810fd","url":"core/useBrowserLocation/index.html"},{"revision":"50720995d074ec91a7acbe1f42363ad6","url":"core/useCached/index.html"},{"revision":"be4031025db2f170efb0b0d3212ab3c3","url":"core/useClipboard/index.html"},{"revision":"c847a56ac5fff8c55e8ef8e90cdfc0ab","url":"core/useClipboardItems/index.html"},{"revision":"dce42985d16f44cac4f75376b025518e","url":"core/useCloned/index.html"},{"revision":"858b171868bc2bc14fe1320a9f7ee404","url":"core/useColorMode/index.html"},{"revision":"7dcf017f0c040b416118b9469d2297b8","url":"core/useConfirmDialog/index.html"},{"revision":"4a89e8980282d8fc33e99aaa0bd00440","url":"core/useCssVar/index.html"},{"revision":"5a0e81e1a53f03725c3c9b283a392d5b","url":"core/useCurrentElement/index.html"},{"revision":"8560e2d314dfc634f4c836b283b1da9b","url":"core/useCycleList/index.html"},{"revision":"4d38c8bc705afcf8aac6867f316ec22d","url":"core/useDark/index.html"},{"revision":"f926016f21508df45dcfc6f771b06c16","url":"core/useDebouncedRefHistory/index.html"},{"revision":"34ccd385eea92f088f4be501e46f40bc","url":"core/useDeviceMotion/index.html"},{"revision":"bcd3165edc56011f31e59fb1f3129a83","url":"core/useDeviceOrientation/index.html"},{"revision":"c673e03a1f2937e4205402bf7593c92c","url":"core/useDevicePixelRatio/index.html"},{"revision":"4d5519603350785d90225e22668848eb","url":"core/useDevicesList/index.html"},{"revision":"199a2853a1320126fd035d65440dcffe","url":"core/useDisplayMedia/index.html"},{"revision":"37d44a820d087bcdc3bcc579c705126b","url":"core/useDocumentVisibility/index.html"},{"revision":"99969dcba4f8b3662bd9486219d1e56b","url":"core/useDraggable/index.html"},{"revision":"f7da20d2f87efce9baed5e983fa6f789","url":"core/useDropZone/index.html"},{"revision":"c7d6dcc8d60eaef873fe2f571cb3a0ba","url":"core/useElementBounding/index.html"},{"revision":"41fdb141d8788f15dcff89933fa1e7ca","url":"core/useElementByPoint/index.html"},{"revision":"08940ab2598167acfcfe27775b7158a1","url":"core/useElementHover/index.html"},{"revision":"926af410c56ebaffa0ffc384c39df6b1","url":"core/useElementSize/index.html"},{"revision":"0259019363c9ff06ff9e7afb65fcf19a","url":"core/useElementVisibility/index.html"},{"revision":"5567abcc6e5c070b01d9135b69433cb6","url":"core/useEventBus/index.html"},{"revision":"f0a591855a6893dc2d90e3bf018912c3","url":"core/useEventListener/index.html"},{"revision":"85785f46104b1c8af300bfa89e68ce2a","url":"core/useEventSource/index.html"},{"revision":"0f2c9e6827b8de0732c2b0b74d7863e6","url":"core/useEyeDropper/index.html"},{"revision":"38a6ac49b63c614160e0a0875cb8ce89","url":"core/useFavicon/index.html"},{"revision":"98fae4b568632c066ccff8398cdfb8f2","url":"core/useFetch/index.html"},{"revision":"7b96137d99dff6ecac6efb635b0b1edd","url":"core/useFileDialog/index.html"},{"revision":"7c1c1f4b2fa5e81a6a0374046158b264","url":"core/useFileSystemAccess/index.html"},{"revision":"3aa395ac581cc7a8d5c5ab4860a9f2e6","url":"core/useFocus/index.html"},{"revision":"a27a1e51a766b25d0f71dc8716ce21c9","url":"core/useFocusWithin/index.html"},{"revision":"864059acb29fab2f14987faf3935068e","url":"core/useFps/index.html"},{"revision":"a1ca1ff3878a3690a0bb5a4e4bcf9038","url":"core/useFullscreen/index.html"},{"revision":"3cf22ee123a0886f02607f043142eeeb","url":"core/useGamepad/index.html"},{"revision":"0f669c407a68089ace332ec516d22919","url":"core/useGeolocation/index.html"},{"revision":"0b2c01064a85f3004d014f2e894e6a58","url":"core/useIdle/index.html"},{"revision":"56a59e8bf4556a9e657f511c8c9d8be1","url":"core/useImage/index.html"},{"revision":"4a8bb9ee88989bba29cbae7334c8b4f7","url":"core/useInfiniteScroll/index.html"},{"revision":"ae6f36dae60b4a3a469e1522e430409c","url":"core/useIntersectionObserver/index.html"},{"revision":"fd41a841fb57817b737d1567aa98cbbc","url":"core/useKeyModifier/index.html"},{"revision":"e4baad168baecaf58a462a1582ca49e6","url":"core/useLocalStorage/index.html"},{"revision":"8ae4f37356371873ca2eed9c9f05f9c8","url":"core/useMagicKeys/index.html"},{"revision":"eb4bce3d2155a3be147613b54b2be9d3","url":"core/useManualRefHistory/index.html"},{"revision":"a358dca05103b857d249762cf3585bc9","url":"core/useMediaControls/index.html"},{"revision":"692d118a254418832d6606dc2e55ed16","url":"core/useMediaQuery/index.html"},{"revision":"a012c9f5b5bf67e42ecdc4e1ef4cff67","url":"core/useMemoize/index.html"},{"revision":"4829b8becc2781c8bf907a17cfdae3a1","url":"core/useMemory/index.html"},{"revision":"4dbcc0462f62cf6fe05893077d7eb369","url":"core/useMounted/index.html"},{"revision":"a8883eecda8683ec38cf4c6ff686ce76","url":"core/useMouse/index.html"},{"revision":"064e83340417b7bbc25759ea181b4c2d","url":"core/useMouseInElement/index.html"},{"revision":"b1f460f9f51b2cf38fbcf8173d603b2e","url":"core/useMousePressed/index.html"},{"revision":"b3526a6b090fc33b55467635f80a7e07","url":"core/useMutationObserver/index.html"},{"revision":"685fba9ffde681bdfbe5e8e49c930dfa","url":"core/useNavigatorLanguage/index.html"},{"revision":"60e7715b0916e2a2e9d7a653e12f84c3","url":"core/useNetwork/index.html"},{"revision":"cf40191925a78e8706c639b417fbb810","url":"core/useNow/index.html"},{"revision":"9d9950575a3b96970a866c1a447448a1","url":"core/useObjectUrl/index.html"},{"revision":"1253c6a848caae49e5b1377ddd702466","url":"core/useOffsetPagination/index.html"},{"revision":"84472fd2ab07d67ae45edec50f537a15","url":"core/useOnline/index.html"},{"revision":"20a9c396c44b5a5384f4e56e93c978ab","url":"core/usePageLeave/index.html"},{"revision":"d897e2ff603211ed134a8c0e74c3ec1d","url":"core/useParallax/index.html"},{"revision":"f46c27ff8bd96e63ebae594ff3b692ef","url":"core/useParentElement/index.html"},{"revision":"409694cba8984067a7528b72af17db27","url":"core/usePerformanceObserver/index.html"},{"revision":"656ed7a8029d65b463709f0d50fca7fc","url":"core/usePermission/index.html"},{"revision":"8ce56849efa751cb14372e4834a9a62d","url":"core/usePointer/index.html"},{"revision":"00e24c09b24e8ed7c7a37cfc8b66f858","url":"core/usePointerLock/index.html"},{"revision":"35718f7d85e1c77798dcddcf0242c3e6","url":"core/usePointerSwipe/index.html"},{"revision":"da74a6c6713406faadb2e88c648d74da","url":"core/usePreferredColorScheme/index.html"},{"revision":"6994e0c25e0047dfec2513092c25bcb7","url":"core/usePreferredContrast/index.html"},{"revision":"bbad155e0a7e198514df543dac97c432","url":"core/usePreferredDark/index.html"},{"revision":"6075ee704cb57fdfd600305444833ccb","url":"core/usePreferredLanguages/index.html"},{"revision":"de5a7ad9127559eb31fef9ff7eb0ec76","url":"core/usePreferredReducedMotion/index.html"},{"revision":"8555aa2e2779586ea0f91ee52eb51c72","url":"core/usePreferredReducedTransparency/index.html"},{"revision":"80ad3dba04e7826c7591f5d100d2d212","url":"core/usePrevious/index.html"},{"revision":"7ddb29797c12e737a0a97d23f4c7dea7","url":"core/useRafFn/index.html"},{"revision":"afc8c6cae0d7a1b5df407cf3f6f75875","url":"core/useRefHistory/index.html"},{"revision":"eb9b8f748f07474c1b40c31741a530b2","url":"core/useResizeObserver/index.html"},{"revision":"b83e8e8775b5d2c16f57cc8d8ee1e0e4","url":"core/useScreenOrientation/index.html"},{"revision":"ed5ab449cde1cde4aaf974de0e558e88","url":"core/useScreenSafeArea/index.html"},{"revision":"6ea686743f57efc4661554b1b81d0436","url":"core/useScriptTag/index.html"},{"revision":"fd89835f033614dc510ba20947e8e2cb","url":"core/useScroll/index.html"},{"revision":"88f18a2868d43800eeb811e89d704f46","url":"core/useScrollLock/index.html"},{"revision":"166a04cd0548ba7b512962d5374af1b1","url":"core/useSessionStorage/index.html"},{"revision":"da3a19fc43e2b2e79bd8225420d7fa70","url":"core/useShare/index.html"},{"revision":"8934c545e38fae24d3fb9a587759a431","url":"core/useSorted/index.html"},{"revision":"efd2f83de7844bcb1532c3a463a77d26","url":"core/useSpeechRecognition/index.html"},{"revision":"1e6d5f9e8deb3447cece30422d44f63c","url":"core/useSpeechSynthesis/index.html"},{"revision":"3246b74269e10cb635e91835c390cfc8","url":"core/useSSRWidth/index.html"},{"revision":"fbe1de18451a11cf8e8fff8bd3cba29d","url":"core/useStepper/index.html"},{"revision":"4077e5873fd53b2b028de2bf57911fe4","url":"core/useStorage/index.html"},{"revision":"b804bc2f13eedb8e854a82586f2b9f34","url":"core/useStorageAsync/index.html"},{"revision":"6ff350d62c36c370522e23614751bee0","url":"core/useStyleTag/index.html"},{"revision":"bc71e5d86f9a629a891828762d5e544f","url":"core/useSupported/index.html"},{"revision":"5681e7ca4dbd68c2788cbf7803032af4","url":"core/useSwipe/index.html"},{"revision":"8941c2ae92e690d37b3025d55e7292f7","url":"core/useTemplateRefsList/index.html"},{"revision":"0b9549f3172143a0f8f00a56cf4e5e7e","url":"core/useTextareaAutosize/index.html"},{"revision":"6968426c325ba380e5d8d183570f0b90","url":"core/useTextDirection/index.html"},{"revision":"6c141391be77b57461b7720c24d4e38e","url":"core/useTextSelection/index.html"},{"revision":"f76b6ad2b843cb8cf79f79002d0e7a76","url":"core/useThrottledRefHistory/index.html"},{"revision":"6fff06e6eda5a6c7e704512528d8f7e2","url":"core/useTimeAgo/index.html"},{"revision":"6ee4a6a1fa0ed80f23b6318eda69e593","url":"core/useTimeoutPoll/index.html"},{"revision":"92daa6202e41b4af024b94897b86d82d","url":"core/useTimestamp/index.html"},{"revision":"665ccc97ced02031d1c94ecc50f35828","url":"core/useTitle/index.html"},{"revision":"15d8d4357b12eed1dad2be33160106d8","url":"core/useTransition/index.html"},{"revision":"cb403ead5dcf2a5345e326aae596c462","url":"core/useUrlSearchParams/index.html"},{"revision":"44243acd0bc2f5c2de057adf67e8b638","url":"core/useUserMedia/index.html"},{"revision":"60e4e34879b3578d8750360ae6be4b63","url":"core/useVibrate/index.html"},{"revision":"e861e473256580c619eac373f3864a29","url":"core/useVirtualList/index.html"},{"revision":"3585bc37786e598652046d435d88b69a","url":"core/useVModel/index.html"},{"revision":"670cbd46196a37399c40bebb0df2cce7","url":"core/useVModels/index.html"},{"revision":"6cd4c105c0b9ae5dec70f1fb5392c111","url":"core/useWakeLock/index.html"},{"revision":"4af92b26a5cee1b72fa9f94f5427c088","url":"core/useWebNotification/index.html"},{"revision":"90810bf28c70e7439e35cf60af319da6","url":"core/useWebSocket/index.html"},{"revision":"ba2820e81d8c88d444dcc734d1da0f81","url":"core/useWebWorker/index.html"},{"revision":"dbaccfc5647968285fca8120bd71df4b","url":"core/useWebWorkerFn/index.html"},{"revision":"f7b6977a545a7eda107376787ca53433","url":"core/useWindowFocus/index.html"},{"revision":"1f04ba790c34011ceabe6b4e2bdbd971","url":"core/useWindowScroll/index.html"},{"revision":"594bc4dcf498f02ea0cc1176ccace379","url":"core/useWindowSize/index.html"},{"revision":"ef25b10f9dbf310b19e5ccd0abcd89ff","url":"ecosystem.html"},{"revision":"73b0b06ae8908cae3b9fd510e4d6b14a","url":"electron/README.html"},{"revision":"abd984fb1c372451f04e056da98bd169","url":"electron/useIpcRenderer/index.html"},{"revision":"9f09b7a44a0179bc6fe0357fc23c6ebf","url":"electron/useIpcRendererInvoke/index.html"},{"revision":"9e5da6c08d089e9bd3eabc30b9c5cfd8","url":"electron/useIpcRendererOn/index.html"},{"revision":"f351f20dda6c023ea9660ed9d0a69ce3","url":"electron/useZoomFactor/index.html"},{"revision":"fec818cdd561b82c0e1919bb61d4535e","url":"electron/useZoomLevel/index.html"},{"revision":"e1147d507f3a6524ef6ab9a0531e4d37","url":"export-size.html"},{"revision":"985261a9cd1ce4b1fdea403faac1e119","url":"favicon-16x16.png"},{"revision":"8556a0b6568697f1c8d76df245d676b9","url":"favicon-32x32.png"},{"revision":"fba46f9c76ff8cfb8c7e88710cab4892","url":"favicon.ico"},{"revision":"0f8c1cea3c233be4fb6ddfe3dd8f919b","url":"favicon.svg"},{"revision":"edb462c9d4bc4151b328c263ea3eda82","url":"firebase/README.html"},{"revision":"9f016bb47acb2c3517ec6078e797cf50","url":"firebase/useAuth/index.html"},{"revision":"d40a2a661e5ad2aecb8d42ba22ff4b34","url":"firebase/useFirestore/index.html"},{"revision":"f0456dc46f297c75e4a129cf8f33da01","url":"firebase/useRTDB/index.html"},{"revision":"248beea287d121cd0f23fe4535062a79","url":"functions.html"},{"revision":"5bdbc42b2fb233f8438ba630bbbd61fc","url":"guide/best-practice.html"},{"revision":"a6071eaa3faf3e8cf7bd8967de5e5221","url":"guide/components.html"},{"revision":"20919161f677c3842659743c8293b460","url":"guide/config.html"},{"revision":"f6d477205ff11adcb8d3eb32efe7ede0","url":"guide/index.html"},{"revision":"0c0983e32799e8e83392a113bd6ea1ff","url":"guidelines.html"},{"revision":"32181d675dc0f4b8e5b18ef7e2aceb59","url":"index.html"},{"revision":"2f644f359019f0546dbf3e53ba8ddf07","url":"integrations/README.html"},{"revision":"2addc61702c321ec44579580763c0d61","url":"integrations/useAsyncValidator/index.html"},{"revision":"dd5f417c8cc268d92be5b0aadb4a678b","url":"integrations/useAxios/index.html"},{"revision":"c214b5f44d4779fe771d6a975022526c","url":"integrations/useChangeCase/index.html"},{"revision":"5bda41784c6832daf056c02e050f005f","url":"integrations/useCookies/index.html"},{"revision":"513856a9f537c5d0652ede33e983a263","url":"integrations/useDrauu/index.html"},{"revision":"8eea28f6efd982e7c75aee1a038e2d2e","url":"integrations/useFocusTrap/index.html"},{"revision":"ab022f451ca40ed764a1e68b62af239d","url":"integrations/useFuse/index.html"},{"revision":"fb34c182b5582eb2633eb1c09409797d","url":"integrations/useIDBKeyval/index.html"},{"revision":"df10bae301c809b4bd7b38c09455fb69","url":"integrations/useJwt/index.html"},{"revision":"ab06f88e669609c6fc0aac5d4d1a26b6","url":"integrations/useNProgress/index.html"},{"revision":"c7f19b2edfd2f332a5e2ee64b2b16e9d","url":"integrations/useQRCode/index.html"},{"revision":"139a2fd646f8b510d8bbb64a34b0c9cb","url":"integrations/useSortable/index.html"},{"revision":"593a7e67c051b2ea0b109724fe2904c7","url":"logo-horizontal-dark.png"},{"revision":"9b3d7c4f6167d5ba8336961b9ed9f1cf","url":"logo-horizontal.png"},{"revision":"9816609c9d426f02bf6e87689108bcc2","url":"logo-vertical-dark.png"},{"revision":"ca8a4a4f2f6c8da2b3c8dc91c588f01c","url":"logo-vertical.png"},{"revision":"795dd8766cdee862b1f8b2a1b861ac89","url":"maskable-icon.png"},{"revision":"3d8daf2d7a5d7db468949b337d534c7f","url":"math/createGenericProjection/index.html"},{"revision":"17dc6c0056e1f09af712fe507d692763","url":"math/createProjection/index.html"},{"revision":"ef84a487bb60a3f622ee227be66163fa","url":"math/logicAnd/index.html"},{"revision":"b3948cbdef25d26d4963e54a70da6fa1","url":"math/logicNot/index.html"},{"revision":"c3e8b9d48d1f8ca484ee111eef0ac53e","url":"math/logicOr/index.html"},{"revision":"0d2f9b3a875fc5736f3f3c6f2ef20814","url":"math/README.html"},{"revision":"bc74bb7920164433babb3e52ebd7cbcc","url":"math/useAbs/index.html"},{"revision":"09789e972d746290600752e5ad46d1e9","url":"math/useAverage/index.html"},{"revision":"d9d1d787b842dd66fbdd185d8a186b3b","url":"math/useCeil/index.html"},{"revision":"935dbe55273c55e31ef82df0e14b59c9","url":"math/useClamp/index.html"},{"revision":"7b871e1e67838dac225d91924fba9ef8","url":"math/useFloor/index.html"},{"revision":"01d1428fa8a14a5ece044be2da25aa92","url":"math/useMath/index.html"},{"revision":"1c6c652f152d4ffe5e43d4126adb357f","url":"math/useMax/index.html"},{"revision":"1d04346fa2fc2c98b5a50cfee83123a8","url":"math/useMin/index.html"},{"revision":"c8594aded811a91ea35cadd3f06995c2","url":"math/usePrecision/index.html"},{"revision":"e0c159d0d8d5b63eb81a6bf8779bf04b","url":"math/useProjection/index.html"},{"revision":"3f35e9ad7bf2c8d18ffe2b55e6383867","url":"math/useRound/index.html"},{"revision":"391cbd6df6218500bf76dcfd06e5a76a","url":"math/useSum/index.html"},{"revision":"c8f6358f1213e92bb8df942c142a6c25","url":"math/useTrunc/index.html"},{"revision":"33af3b5f156956e8772b0acaace1452f","url":"netlify.svg"},{"revision":"8a74df7aa315410c9247ff5c8ad24785","url":"nuxt/README.html"},{"revision":"c0048fd2f2c0fc2668f411b5061a9864","url":"og.png"},{"revision":"3d946139dd7335cd95bad54f54fb5e3e","url":"pwa-192x192.png"},{"revision":"044d2455c529e3d1872d7c2dcc0835cf","url":"pwa-512x512.png"},{"revision":"e9f21b945a4d1b3ce239cefd5a579bf3","url":"pwa-64x64.png"},{"revision":"f0c0821a591e20ef89f796ef2503b8c7","url":"router/README.html"},{"revision":"c33f8998053e14e0b165732c7845a8a4","url":"router/useRouteHash/index.html"},{"revision":"bdf2e1e472d7544fdde66a06eed7240d","url":"router/useRouteParams/index.html"},{"revision":"a0b232a85b6ea6d7518fc6ad27e40361","url":"router/useRouteQuery/index.html"},{"revision":"41cb95446665cfff83dd0ce914d38d1f","url":"rxjs/from/index.html"},{"revision":"b0114075fd217f07557e5d1983e039a4","url":"rxjs/README.html"},{"revision":"9dbbb4a63124b0eae3b4ed7d995d4561","url":"rxjs/toObserver/index.html"},{"revision":"062eb3e8762569692ea12270626048df","url":"rxjs/useExtractedObservable/index.html"},{"revision":"4c211d117cb572d822cd580f6b13be5d","url":"rxjs/useObservable/index.html"},{"revision":"10753b1f1d226b99251d6d70b6f2cb01","url":"rxjs/useSubject/index.html"},{"revision":"4090a2a93595cd4649b32396bb2724d2","url":"rxjs/useSubscription/index.html"},{"revision":"008deede07ea3da25ef59187d00b4d4d","url":"rxjs/watchExtractedObservable/index.html"},{"revision":"0e46f98804c02f681d472f80ea1cfab5","url":"shared/computedEager/index.html"},{"revision":"be5b726f7a364378bf4aae8bb25e1c5e","url":"shared/computedWithControl/index.html"},{"revision":"7696663724683586642055002a93f095","url":"shared/createEventHook/index.html"},{"revision":"8a85743a58a1eca35111d2fa5a845dbb","url":"shared/createGlobalState/index.html"},{"revision":"c12db522e5276b2aec42b9df01adc945","url":"shared/createInjectionState/index.html"},{"revision":"816a069795670d578a2e57a26d8e6da3","url":"shared/createSharedComposable/index.html"},{"revision":"9d6c907424ed22141cf614c1278730d7","url":"shared/extendRef/index.html"},{"revision":"7125e25854173f56d7c50a91c3e9bff4","url":"shared/get/index.html"},{"revision":"da3bf3464514d620930b3a3bb5b7124b","url":"shared/injectLocal/index.html"},{"revision":"b79415870af12d1d4d4806dd024e8e00","url":"shared/isDefined/index.html"},{"revision":"3319eb69121b13e87d7cfec93abf95cc","url":"shared/makeDestructurable/index.html"},{"revision":"2ee4286a26502a5e4a45fb904b5a5251","url":"shared/provideLocal/index.html"},{"revision":"2ab5351be8cf3d3ab11f54c08f9fb2da","url":"shared/reactify/index.html"},{"revision":"c1227dc76f6bf0b50c4da5162faabe3d","url":"shared/reactifyObject/index.html"},{"revision":"68c263a0560bb035e053cd8d0bf099ef","url":"shared/reactiveComputed/index.html"},{"revision":"a07399f0015e54f324fba50468c6a195","url":"shared/reactiveOmit/index.html"},{"revision":"f171aee543439c25ab82f285df191be4","url":"shared/reactivePick/index.html"},{"revision":"e18542d43400134b56154e54bf3a0fee","url":"shared/refAutoReset/index.html"},{"revision":"242564443f5d67e5d3550788d966e5a8","url":"shared/refDebounced/index.html"},{"revision":"495714f3599a2cddefff101288e43398","url":"shared/refDefault/index.html"},{"revision":"c7b1217fae2c71aca161a0ba72572bb8","url":"shared/refThrottled/index.html"},{"revision":"2b2a753e90d9ec331778fc7d75be357b","url":"shared/refWithControl/index.html"},{"revision":"91de7e03dde3b38c1d1b36021113d9eb","url":"shared/set/index.html"},{"revision":"ee2c2729f5bd3263cccadb912a94a356","url":"shared/syncRef/index.html"},{"revision":"700b0e6e25d4fdc6d10de79d6d7d31f4","url":"shared/syncRefs/index.html"},{"revision":"28a9e083408de7a9dec5088fd59f50dd","url":"shared/toReactive/index.html"},{"revision":"dc337e88d1c198ee6b03c25b25d9ef91","url":"shared/toRef/index.html"},{"revision":"65e29523d15b583b7d768b90fbd17fa0","url":"shared/toRefs/index.html"},{"revision":"e4d627aa9f426f9618eee8128405ad76","url":"shared/toValue/index.html"},{"revision":"504cf95c72aadef066768aeae1ed949e","url":"shared/tryOnBeforeMount/index.html"},{"revision":"4fb39f947b32526fcbd6721ec12f2e06","url":"shared/tryOnBeforeUnmount/index.html"},{"revision":"eab003bead8b35470cebd0c012fbda56","url":"shared/tryOnMounted/index.html"},{"revision":"975815f2f85d01caf95607d75bd4096d","url":"shared/tryOnScopeDispose/index.html"},{"revision":"c1e5bb2d49bc41e0f00c024ab2a063d5","url":"shared/tryOnUnmounted/index.html"},{"revision":"4b17e48b0576b16f6e3800c5921f3322","url":"shared/until/index.html"},{"revision":"dc7c97e020f69d9bcb6591493ac8b127","url":"shared/useArrayDifference/index.html"},{"revision":"a933c461a596f4e20d4311b06ca1eaee","url":"shared/useArrayEvery/index.html"},{"revision":"1c8cc2626fc2bb0033d259a5ae8b5346","url":"shared/useArrayFilter/index.html"},{"revision":"4ebe2cd1be99df2b922e9b0ee9f5d523","url":"shared/useArrayFind/index.html"},{"revision":"1635afc4bf6192a18fe1ef0f31ed75ee","url":"shared/useArrayFindIndex/index.html"},{"revision":"6ecd02f8789e4033e2da66e73048ed6e","url":"shared/useArrayFindLast/index.html"},{"revision":"2d1f426ac9a0f9535c2f57b9bf859dfd","url":"shared/useArrayIncludes/index.html"},{"revision":"75386e4b2cd360541dec56ed6f207bcb","url":"shared/useArrayJoin/index.html"},{"revision":"7c013de32156091679fdde37ebc931f1","url":"shared/useArrayMap/index.html"},{"revision":"52931844fd02533a209b76f9a1221e12","url":"shared/useArrayReduce/index.html"},{"revision":"db3cf861453e210f60ea7bd51c36714c","url":"shared/useArraySome/index.html"},{"revision":"c6081e2bf327d51a1db3b9a652256424","url":"shared/useArrayUnique/index.html"},{"revision":"99695b29b172d08e5a90dfeb69780fc1","url":"shared/useCounter/index.html"},{"revision":"d9a6e4c4ba06c604947d3e42473d6b04","url":"shared/useDateFormat/index.html"},{"revision":"c8f6cb40f3fa64743edc04aa2df9ec3e","url":"shared/useDebounceFn/index.html"},{"revision":"1b76b5b718c4c2eb8dd9e9565bfd82ab","url":"shared/useInterval/index.html"},{"revision":"98207f74cd5ea156b95b1cb7759ef01c","url":"shared/useIntervalFn/index.html"},{"revision":"40a0bc5554cd2b311b441ed416ef2459","url":"shared/useLastChanged/index.html"},{"revision":"8da4187f1631d9d418e4412a6e798721","url":"shared/useThrottleFn/index.html"},{"revision":"d68c8a90749498e732a3e68be58f59b7","url":"shared/useTimeout/index.html"},{"revision":"931d1b01695d158ccfaee0b9d516dc62","url":"shared/useTimeoutFn/index.html"},{"revision":"20bdb3a1c512ad58047934cb0cade474","url":"shared/useToggle/index.html"},{"revision":"03873ff7a8f9aee46b0506f0cc60fff2","url":"shared/useToNumber/index.html"},{"revision":"d8a25c0a81cf13faafba7ea78989810a","url":"shared/useToString/index.html"},{"revision":"3107e527050862fd21d2b2ee0edeb43e","url":"shared/watchArray/index.html"},{"revision":"116dcd0610ad939e5d6b0980b918655d","url":"shared/watchAtMost/index.html"},{"revision":"b714cbdbcabd63be26af51cda6a068d3","url":"shared/watchDebounced/index.html"},{"revision":"d970a76d28cd45ff9c26911ad0aa7bda","url":"shared/watchDeep/index.html"},{"revision":"b3f2f81fd9d61b026cdda14c1ef053df","url":"shared/watchIgnorable/index.html"},{"revision":"f328e1aa2afc392a8a8687722c47a593","url":"shared/watchImmediate/index.html"},{"revision":"58ff1da146fbe4f50d276d712bdd623d","url":"shared/watchOnce/index.html"},{"revision":"067bbc55a930de4975e66c5ef424b225","url":"shared/watchPausable/index.html"},{"revision":"0718ecfbef0233354b7e589cb76b249a","url":"shared/watchThrottled/index.html"},{"revision":"fadd4a1a0b2cdf64c9e6ec559d6cea50","url":"shared/watchTriggerable/index.html"},{"revision":"faba1726dc5509f810c77107f5b78a69","url":"shared/watchWithFilter/index.html"},{"revision":"fe07efbfe088313980e4e88c5825da8c","url":"shared/whenever/index.html"},{"revision":"ace7ab6bc932be145115857c39f7d63a","url":"vp-icons.css"},{"revision":"3d60db0d77303b2414ddd50cf2472bf7","url":"vue.png"},{"revision":"69cedcf3d2b148bdce953a480caa57b1","url":"vue.svg"},{"revision":"53c898dad07ca442b9cca6f483cc301a","url":"why-no-translations.html"},{"revision":"fdfac7fa505dd51e705aea3e2defafc5","url":"hashmap.json"},{"revision":"e9f21b945a4d1b3ce239cefd5a579bf3","url":"pwa-64x64.png"},{"revision":"3d946139dd7335cd95bad54f54fb5e3e","url":"pwa-192x192.png"},{"revision":"044d2455c529e3d1872d7c2dcc0835cf","url":"pwa-512x512.png"},{"revision":"795dd8766cdee862b1f8b2a1b861ac89","url":"maskable-icon.png"},{"revision":"18953edc964cf3aea02bbae3645a3225","url":"manifest.webmanifest"}];
precacheAndRoute(entries);
cleanupOutdatedCaches();
let allowlist;
{
  let escapeStringRegexp = function(value) {
    return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  };
  const swPath = self.location.pathname.lastIndexOf("/");
  const base = swPath === 0 ? "/" : self.location.pathname.slice(0, swPath + 1);
  allowlist = entries.filter((page) => {
    return typeof page === "string" ? page.endsWith(".html") : page.url.endsWith(".html");
  }).map((page) => {
    const url = typeof page === "string" ? page : page.url;
    const regex = url === "index.html" ? escapeStringRegexp(base) : escapeStringRegexp(`${base}${url.replace(/\.html$/, "")}`);
    return new RegExp(`^${regex}(\\.html)?$`);
  });
  registerRoute(
    ({ request, sameOrigin }) => {
      return sameOrigin && request.mode === "navigate";
    },
    new NetworkOnly({
      plugins: [{
        /* this callback will be called when the fetch call fails */
        handlerDidError: async () => Response.redirect("404", 302),
        /* this callback will prevent caching the response */
        cacheWillUpdate: async () => null
      }]
    }),
    "GET"
  );
  registerRoute(
    /^https:\/\/fonts\.googleapis\.com\/.*/i,
    new NetworkFirst({
      cacheName: "google-fonts-cache",
      plugins: [
        new CacheableResponsePlugin({ statuses: [0, 200] }),
        // we only need a few entries
        new ExpirationPlugin({
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365
          // <== 365 days
        })
      ]
    })
  );
  registerRoute(
    /^https:\/\/fonts\.gstatic\.com\/.*/i,
    new StaleWhileRevalidate({
      cacheName: "google-fonts-cache",
      plugins: [
        new CacheableResponsePlugin({ statuses: [0, 200] }),
        // we only need a few entries
        new ExpirationPlugin({
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365
          // <== 365 days
        })
      ]
    })
  );
  registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
    new NetworkFirst({
      cacheName: "jsdelivr-images-cache",
      plugins: [
        new CacheableResponsePlugin({ statuses: [0, 200] }),
        // we only need a few entries
        new ExpirationPlugin({
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 7
          // <== 7 days
        })
      ]
    })
  );
}
registerRoute(new NavigationRoute(
  createHandlerBoundToURL("index.html"),
  { allowlist }
));
self.addEventListener("activate", async () => {
  const clients = await self.clients.matchAll({ type: "window" });
  clients.forEach((client) => {
    client.navigate(client.url);
  });
});
self.skipWaiting();
