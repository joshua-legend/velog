{
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    };

    type FailState ={
        result: 'fail';
        reason: string;
    };

    type LoginState = SuccessState | FailState;

    function login():LoginState {
        return{
            result : 'success',
            response :{
                body: 'logged in!',
            },
        };
    }

    function printLoginState(state:LoginState):void {

        if(state.result === 'success'){
            console.log(`good`)
        }
        else
            console.log(`bad`)
    }


}