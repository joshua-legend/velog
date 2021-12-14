{
    // Array
    const fruits: string[] = ['🍎','🍅'];
    const scores: Array<number> = [1,2,3];
    function printArray(fruits: readonly string[]) {}

    // Tuple 지양한다 -> interface, type alias, class
    let student: [string,number];
    student = ['name',123];
    student[0];
    student[1];

}