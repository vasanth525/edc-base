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
        tempId;
        appendTo(elementDetail) {
            let componentElement;
            let parentElement;
            if (this.constructor.name === "DropDownList" && typeof elementDetail === "string" && document.getElementById(elementDetail) instanceof HTMLSelectElement) {
                parentElement = document.getElementById(elementDetail).parentElement;
                this.tempId = elementDetail;
            }
            this.render();
            if (typeof elementDetail === "string") {
                if (this.constructor.name === "DropDownList" && !this.isNullOrUndefined(this.tempId) && parentElement && this.tempId !== elementDetail) {
                    componentElement = parentElement;
                }
                else {
                    componentElement = document.getElementById(elementDetail);
                }
                componentElement?.appendChild(this.element);
            }
            else if (elementDetail instanceof HTMLElement && elementDetail !== this.element) {
                elementDetail.appendChild(this.element);
            }
        }
        addClassList(classList) {
            this.element?.classList.add(...classList);
        }
        appendChild(element) {
            if (element instanceof HTMLElement) {
                this.element?.appendChild(element);
            }
        }
        isNullOrUndefined(variable) {
            return variable === null || variable === undefined;
        }
    }

    exports.ComponentBase = ComponentBase;

}));
