//  way to do it without enums
// type Direc = "up" | "down" | "right" | "left";

enum Direction {
    Up,     // 0  Default values can be changed -> Up = 1
    Down,   // 1     
    Right,  // 2
    Left    // 3
}

// assigning custom values to enums
// enum Direction {
//     Up = "UP",
//     Down = "Down",
//     Left = "Left",
//     Right = 'Right'
// }

doSomething(Direction.Down)


function doSomething(keyPressed: Direction) {
    if(keyPressed === Direction.Down){
        console.log("get down on your knees") 
    }
}

doSomething(Direction.Down)
doSomething(Direction.Right)

console.log(Direction.Down)


//  Common usecase of enums in express
const express = require('express')
const app = express()

// standard status codes 
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/" , (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})