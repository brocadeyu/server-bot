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
  EllipsoidOutlineGeometry_default
} from "./chunk-77CEXU36.js";
import "./chunk-KRCUHV7P.js";
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
import {
  defined_default
} from "./chunk-QQDQD7S3.js";

// packages/engine/Source/Workers/createEllipsoidOutlineGeometry.js
function createEllipsoidOutlineGeometry(ellipsoidGeometry, offset) {
  if (defined_default(ellipsoidGeometry.buffer, offset)) {
    ellipsoidGeometry = EllipsoidOutlineGeometry_default.unpack(
      ellipsoidGeometry,
      offset
    );
  }
  return EllipsoidOutlineGeometry_default.createGeometry(ellipsoidGeometry);
}
var createEllipsoidOutlineGeometry_default = createEllipsoidOutlineGeometry;
export {
  createEllipsoidOutlineGeometry_default as default
};
