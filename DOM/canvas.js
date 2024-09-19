
// //creating a circle
let circle=document.getElementById("circle");
let Circle=circle.getContext("2d");
Circle.fillStyle="lightblue";
Circle.strokeStyle="darkblue";
Circle.lineWidth=10;
Circle.beginPath();
Circle.arc(250,250,200,0,2* Math.PI);
Circle.stroke();
Circle.fill();

// //creating a rectangle
let rectangle=document.getElementById("rectangle");
let Rectangle=rectangle.getContext("2d");
Rectangle.lineWidth=10;
Rectangle.fillStyle="orange"
Rectangle.fillRect(0,0,280,250);
Rectangle.strokeStyle="block"
Rectangle.strockRect(0,0,250,250)

//creating a triangle
let triangle=document.getElementById("triangle");
let Triangle=triangle.getContext("2d");
Triangle.fillStyle="blue";
Triangle.lineWidth=10;
Triangle.beginPath();
Triangle.moveTo(250,0);
Triangle.lineTo(0,250);
Triangle.lineTo(500,250);
Triangle.lineTo(250,0);
Triangle.stroke();
Triangle.fill();


//4 squares
let squares=document.getElementById("squares")
let Squares=squares.getContext("2d");
// Squares.lineWidth=10;
Squares.fillStyle="black"
Squares.fillRect(0,0,250,250);
Squares.strokeStyle="black"
Squares.strockRect(0,0,250,250)

// Squares.lineWidth=10;
Squares.fillStyle="red"
Squares.fillRect(0,250,250,250);
Squares.strokeStyle="black"
Squares.strockRect(0,250,250,250)

// Squares.lineWidth=10;
Squares.fillStyle="green"
Squares.fillRect(250,250,250,250);
Squares.strokeStyle="black";
Squares.strockRect(250,250,250,250) ;

// Squares.lineWidth=10;
Squares.fillStyle="white"
Squares.fillRect(250,0,250,250);
Squares.strokeStyle="black"
Squares.strockRect(250,0,250,250)


// adding a name to the canvas
let name=document.getElementById("name")
let Name=Name.getContext("2d");
Name.font= "50px MV Boli"
Name.fillStyle= "red";
Name.textAlign= "center";
Name.fillText("hello there....",100,100);