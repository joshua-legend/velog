type Video = {
    title:string,
    author:string;
};

type Optional<Type> = {
    [Property in keyof Type]?: Type[Property]; // for...in
};

type VideoOptional = Optional<Video>

type Animal = {
    name : string;
    age: number;
};

const animal : Optional<Animal> = {
    name: 'dog',
}



// type VideoOp = {
//     title?:string,
//     author?:string;
//     description?:string;
// }
//
// type VideoReadOnly = {
//     readonly title:string,
//     readonly author:string;
// }