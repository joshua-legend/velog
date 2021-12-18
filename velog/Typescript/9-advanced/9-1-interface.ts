type PositionType = {
    x: number;
    y: number;
};

interface PositionInterface {
    x: number;
    y: number;
}

const obj1 : PositionType = {
    x: 1,
    y: 1,
};

const obj2: PositionInterface ={
    x: 1,
    y: 1,
}

/*
*
* Interface는 spec
* Types alias는 구조체 
*
* */