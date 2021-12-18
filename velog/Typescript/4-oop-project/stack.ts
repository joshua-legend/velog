{
    interface Stack{
        readonly size:number;
        push(value:string):void
        pop():string
    }

    type StackNode = {
        readonly value : string;
        readonly next?: StackNode;
    }


    class JsStack implements Stack{
        private _size: number = 0;
        private head?: StackNode;

        get size(){
            return this._size;
        }

        push(value: string): void {
            const node : StackNode = {
                value,
                next : this.head,
            }
            this.head = node;
            this._size++;
        }

        pop(): string {
            if(this.head == null) throw new Error(`Stack is empty!`)
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }

    }


}