//base core component

export class ComponentBase {
  constructor(public element?: HTMLElement) {
    if (element) {
      this.element = element;
    }
  }
  
  public tempId: string | undefined;
  public appendTo(elementDetail: string | HTMLElement) {
    let componentElement: HTMLElement | undefined;
    let parentElement: HTMLElement | undefined;
    if (this.constructor.name === "DropDownList" && typeof elementDetail === "string" && document.getElementById(elementDetail) instanceof HTMLSelectElement) {
      parentElement = (document.getElementById(elementDetail as string) as HTMLElement).parentElement as HTMLElement;
      this.tempId = elementDetail as string;
    }
    (this as any).render();
    if (typeof elementDetail === "string") {
      if (this.constructor.name === "DropDownList" && !this.isNullOrUndefined(this.tempId) && parentElement && this.tempId !== elementDetail) {
        componentElement = parentElement;
      }
      else {
        componentElement = document.getElementById(elementDetail as string) as HTMLElement;
      }
      componentElement?.appendChild((this as any).element as HTMLElement);
    }
    else if (elementDetail instanceof HTMLElement && elementDetail !== (this as any).element as HTMLElement) {
      elementDetail.appendChild((this as any).element as HTMLElement);
    }
    
  }

  public addClassList(classList: string[]) {
    this.element?.classList.add(...classList)
  }

  public appendChild(element: HTMLElement | ComponentBase) {
    if (element instanceof HTMLElement) {
      this.element?.appendChild(element as HTMLElement);
    }
  }

  public isNullOrUndefined(variable: any): boolean {
    return variable === null || variable === undefined;
  }
}