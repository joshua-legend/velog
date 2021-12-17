{
    interface Stack<Type>{
        readonly size:number
        push(value:Type):void
        pop():Type
    }

    type node<Type> ={
        readonly value:Type,
        readonly next?: node<Type>,
    }

    class StackImpl<Type> implements Stack<Type> {
        private _size: number=0;
        private headNode:node<Type>;
        get size(): number {return this._size;}
        push(value: Type): void {
            const newNode:node<Type> ={
                value:value,
                next: this.headNode
            };
            this.headNode = newNode;
            this._size++;
        }
        pop() {
            if(this.headNode == null) throw new Error(`Stack is empty!`)
            const deletedNode = this.headNode;
            this.headNode = deletedNode.next;
            this._size--;
            return deletedNode.value;
        }
    }
}