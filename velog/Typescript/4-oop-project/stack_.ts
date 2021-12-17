{

    interface stack{
        size:number;
        push(value:string):void
        pop():string
    }

    type Node = {
        readonly value:string,
        readonly nextNode:Node,
    }


    class Stack implements stack{
        private _size: number = 0;
        private start?: Node;

        get size(){return this._size;}

        push(value: string): void {
            const newNode : Node ={
                value:value,
                nextNode: this.start
            }
            this.start = newNode;
            this._size++;
        }

        pop(): string {
            if(!this.start) throw new Error(`Stack is empty!`)
            const node = this.start;
            this.start = node.nextNode;
            this._size--;
            return node.value;
        }
    }



}