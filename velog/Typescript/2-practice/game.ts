{
    type direction = 'up' | 'down' | 'right' | 'left';

    const position = {x:0,y:0};

    function move(direction:direction):void {
        switch (direction){
            case "up": position.y++;
            case "down": position.y--;
            case "right": position.x++;
            case "left" : position.x--;
            default: throw Error('unknown command');
        }
    }
    

}