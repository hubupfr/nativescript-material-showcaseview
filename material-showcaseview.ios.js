"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShapeStyle;
(function (ShapeStyle) {
    ShapeStyle[ShapeStyle["CIRCLE"] = 0] = "CIRCLE";
    ShapeStyle[ShapeStyle["RECTANGLE"] = 1] = "RECTANGLE";
    ShapeStyle[ShapeStyle["NONE"] = 2] = "NONE";
})(ShapeStyle = exports.ShapeStyle || (exports.ShapeStyle = {}));
var NSMaterialShowcaseView = (function () {
    function NSMaterialShowcaseView() {
        this.createSequence = function (items, showcaseConfig) {
        };
        this.startSequence = function () {
        };
        this.reset = function () {
        };
        this.setConfig = function (showcaseConfig) {
            return "";
        };
    }
    Object.defineProperty(NSMaterialShowcaseView.prototype, "materialShowcaseSequence", {
        get: function () {
            return this._materialShowcaseSequence;
        },
        set: function (materialShowcaseSequence) {
            this._materialShowcaseSequence = materialShowcaseSequence;
        },
        enumerable: true,
        configurable: true
    });
    return NSMaterialShowcaseView;
}());
exports.NSMaterialShowcaseView = NSMaterialShowcaseView;
//# sourceMappingURL=material-showcaseview.ios.js.map