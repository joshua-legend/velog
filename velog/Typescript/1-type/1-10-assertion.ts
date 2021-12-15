{
    /*
    * Type Assertion 지양
    *
    * */

    function jsStrFunc(): any {
        return 'hello';
    }

    // 정말정말정말 100% 장담하때
    const result = jsStrFunc();
    console.log((result as string).length);

    function findNubmer(): number[] | undefined {
        return undefined;
    }

}