define(['exports'], (function (exports) { 'use strict';

    //base core component
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

}));
