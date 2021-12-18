// Javascript : error
/*
* error: expected
* exception:  unexpected
* */

/* Error handling: try -> catch -> finally */

function readFile(fileName:string):string{
    if(fileName===undefined) throw new Error(`file not exist`);
    return `file content`;
}

function closeFile(fileName:string){
    
}
