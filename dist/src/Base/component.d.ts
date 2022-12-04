export declare class ComponentBase {
    element?: HTMLElement | undefined;
    constructor(element?: HTMLElement | undefined);
    tempId: string | undefined;
    appendTo(elementDetail: string | HTMLElement): void;
    addClassList(classList: string[]): void;
    appendChild(element: HTMLElement | ComponentBase): void;
    isNullOrUndefined(variable: any): boolean;
}
