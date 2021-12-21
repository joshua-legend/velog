import PageComponent, {Composable, PageItemComponent} from "./page.js";
import {ImageComponent} from "./image.js";
import {NoteComponent} from "./note.js";
import {TodoComponent} from "./todo.js";
import {VideoComponent} from "./video.js";
import {InputDialog, MediaData, TextData} from "./dialog.js";
import {MediaSectionInput} from "./media-input.js";
import {TextSectionInput} from "./text-input";
import {Component} from "./component";

type InputComponentConstructor<Type = (MediaData | TextData) & Component> = {
    new () :Type;
}

class App {
    private readonly page: PageComponent & Composable;
    constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot)

        this.bindElementToDialog<MediaSectionInput>(
            '#new-image',
            MediaSectionInput,
            (input:MediaSectionInput) => new ImageComponent(input.title, input.url)
        );
        this.bindElementToDialog<MediaSectionInput>(
            '#new-video',
            MediaSectionInput,
            (input:MediaSectionInput) => new VideoComponent(input.title, input.url)
        );
        this.bindElementToDialog<MediaSectionInput>(
            '#new-note',
            MediaSectionInput,
            (input:MediaSectionInput) => new NoteComponent(input.title, input.url)
        );
        this.bindElementToDialog<MediaSectionInput>(
            '#new-todo',
            MediaSectionInput,
            (input:MediaSectionInput) => new TodoComponent(input.title, input.url)
        );
    }

    private bindElementToDialog<Type extends  (MediaData | TextData) & Component>(selector: string, InputComponent: InputComponentConstructor<Type>,makeSection: (input:Type )=> Component){
        const element = document.querySelector(selector)! as HTMLButtonElement;
        element.addEventListener('click', () =>{
            const dialog = new InputDialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);
            dialog.setOnCloseListener(() =>{
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListener(() =>{
                const image = makeSection(input);
                this.page.addChild(image)
                dialog.removeFrom(this.dialogRoot);
            });

            dialog.attachTo(document.body);
        });
    }

}

//not null
new App(document.querySelector('.document')! as HTMLElement, document.body);