type Check<Type> = Type extends string ? boolean : number;

type Type = Check<string>; // boolean