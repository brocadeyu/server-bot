/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.124
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  PrimitivePipeline_default
} from "./chunk-KI2KE3WX.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-VYFHOQXN.js";
import "./chunk-5ESGPVVW.js";
import "./chunk-EQIS4NBH.js";
import "./chunk-FSPC2A3N.js";
import "./chunk-BRS5REKJ.js";
import "./chunk-5JM7DF42.js";
import "./chunk-XVOMRIBN.js";
import "./chunk-XIMQUTNC.js";
import "./chunk-22NU5WU5.js";
import "./chunk-7TL42OHT.js";
import "./chunk-ZY3WWD2U.js";
import "./chunk-O4YP53YX.js";
import "./chunk-REPJWXFE.js";
import "./chunk-QUARZA5Q.js";
import "./chunk-R4H7YNUU.js";
import "./chunk-ZIWULRRD.js";
import "./chunk-CXFGYA3C.js";
import "./chunk-BLTSMJIP.js";
import "./chunk-OQLFGJP7.js";
import "./chunk-QQDQD7S3.js";

// packages/engine/Source/Workers/combineGeometry.js
function combineGeometry(packedParameters, transferableObjects) {
  const parameters = PrimitivePipeline_default.unpackCombineGeometryParameters(packedParameters);
  const results = PrimitivePipeline_default.combineGeometry(parameters);
  return PrimitivePipeline_default.packCombineGeometryResults(
    results,
    transferableObjects
  );
}
var combineGeometry_default = createTaskProcessorWorker_default(combineGeometry);
export {
  combineGeometry_default as default
};
