{

    //only number
    function checkNotNullBad(arg:number):number {
        if(arg==null) throw new Error(`This is not valid.`)
        return arg;
    }

    //type is not sure
    function checkNotNullAnyBad(arg:any):any {
        if(arg==null) throw new Error(`This is not valid.`)
        return arg;
    }


    //so we use generic
    function checkNotNull<Type>(arg:Type | null):Type {
        if(arg==null) throw new Error(`This is not valid.`)
        return arg;
    }

    //number
    const number = checkNotNull(123);

    //boolean
    const boal: boolean = checkNotNull(true);

    
}