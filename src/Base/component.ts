//base core component

export class ComponentBase {
    constructor(public element?: HTMLElement) {
      if (element) {
          this.element = element;
      }
    }
    public appendTo(Id: string) {
      (this as any).render();
      const componentElement: HTMLElement = document.getElementById(Id) as HTMLElement;
      componentElement.appendChild((this as any).element as HTMLElement);
    }
  }