"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("application");
var MaterialShowcaseSequence = uk.co.deanwild.materialshowcaseview.MaterialShowcaseSequence;
var MaterialShowcaseView = uk.co.deanwild.materialshowcaseview.MaterialShowcaseView;
var ShowcaseConfig = uk.co.deanwild.materialshowcaseview.ShowcaseConfig;
var CircleShape = uk.co.deanwild.materialshowcaseview.shape.CircleShape;
var NoShape = uk.co.deanwild.materialshowcaseview.shape.NoShape;
var RectangleShape = uk.co.deanwild.materialshowcaseview.shape.RectangleShape;
var ShapeStyle;
(function (ShapeStyle) {
    ShapeStyle[ShapeStyle["CIRCLE"] = 0] = "CIRCLE";
    ShapeStyle[ShapeStyle["RECTANGLE"] = 1] = "RECTANGLE";
    ShapeStyle[ShapeStyle["NONE"] = 2] = "NONE";
})(ShapeStyle = exports.ShapeStyle || (exports.ShapeStyle = {}));
var NSMaterialShowcaseView = (function () {
    function NSMaterialShowcaseView() {
        var _this = this;
        this.createSequence = function (items, showcaseConfig) {
            var config = _this.setConfig(showcaseConfig);
            _this.materialShowcaseSequence = new MaterialShowcaseSequence(application.android.foregroundActivity, "showcase sequence");
            _this.materialShowcaseSequence.setConfig(config);
            items.forEach(function (item) {
                _this.materialShowcaseSequence.addSequenceItem(new MaterialShowcaseView.Builder(application.android.foregroundActivity)
                    .setTarget(item.target.android)
                    .setDismissText(item.dismissText)
                    .setContentText(item.contentText)
                    .withRectangleShape(item.withRectangleShape)
                    .build());
            });
        };
        this.startSequence = function () {
            if (_this.materialShowcaseSequence) {
                _this.materialShowcaseSequence.start();
            }
            else {
                console.log('Sequence cannot start: undefined sequence');
            }
        };
        this.reset = function () {
            if (_this.materialShowcaseSequence) {
                MaterialShowcaseView.resetSingleUse(application.android.foregroundActivity, 'showcase sequence');
            }
            else {
                console.log('Sequence cannot restart: undefined sequence');
            }
        };
        this.setConfig = function (showcaseConfig) {
            var config = new ShowcaseConfig();
            if (showcaseConfig) {
                var delay = showcaseConfig.delay, fadeDuration = showcaseConfig.fadeDuration, shapePadding = showcaseConfig.shapePadding;
                var shape = showcaseConfig.shape;
                var renderOverNav = showcaseConfig.renderOverNav;
                var maskColour = showcaseConfig.maskColour, contentTextColour = showcaseConfig.contentTextColour, dismissTextColour = showcaseConfig.dismissTextColour;
                if (delay)
                    config.setDelay(delay);
                if (fadeDuration)
                    config.setFadeDuration(fadeDuration);
                switch (shape) {
                    case ShapeStyle.CIRCLE:
                        config.setShape(new CircleShape());
                        break;
                    case ShapeStyle.RECTANGLE:
                        config.setShape(new RectangleShape());
                        break;
                    case ShapeStyle.NONE:
                        config.setShape(new NoShape());
                        break;
                    default:
                        break;
                }
                if (shapePadding)
                    config.setShapePadding(shapePadding);
                if (renderOverNav)
                    config.setRenderOverNavigationBar(renderOverNav);
                if (maskColour)
                    config.setMaskColor(maskColour);
                if (contentTextColour)
                    config.setContentTextColor(contentTextColour);
                if (dismissTextColour)
                    config.setDismissTextColor(dismissTextColour);
            }
            return config;
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
//# sourceMappingURL=material-showcaseview.android.js.map