{
    /*
    * Union Types
    * */

    type Direction = 'left' | 'right' | 'down' | 'up'
    function move(direction:Direction) {
        console.log(direction)
    }

    move('down');

    type TileSize = 8 | 16 | 32;
    const tile:TileSize= 16;


    type SuccessState = {
        response: {
            body: string;
        };
    };

    type FailState ={
        reason: string;
    };

    type LoginState = SuccessState | FailState;

    function login():LoginState {
        return{
            response :{
                body: 'logged in!',
            },
        };
    }

    function printLoginState(state:LoginState):void {
        if('response' in state){
            console.log(`good`)
        }
        else
            console.log(`bad`)


    }

}