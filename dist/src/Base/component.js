//base core component
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ComponentBase = void 0;
    class ComponentBase {
        element;
        constructor(element) {
            this.element = element;
            if (element) {
                this.element = element;
            }
        }
        appendTo(Id) {
            this.render();
            const componentElement = document.getElementById(Id);
            componentElement.appendChild(this.element);
        }
    }
    exports.ComponentBase = ComponentBase;
});
