export interface Component{
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
    removeFrom(parent: HTMLElement): void;
}

export class BaseComponent<Type extends  HTMLElement> implements Component{
    protected readonly element: Type;
    constructor(htmlString: string) {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild! as Type;
    }

    attachTo(parent: HTMLElement, position:InsertPosition='afterbegin'){
        parent.insertAdjacentElement(position, this.element);
    }

    removeFrom(parent: HTMLElement){
        if(parent !== this.element.parentElement) throw new Error('Parent mismatch')
        parent.removeChild(this.element);
    }
}