//callback function: this is a function that is passed as an argument in another function

//normal func
function calculate(){
function volumeOfCuboid(l,w,h,rectangle){
    console.log(l*w*h);
    rectangle(l,w);
}
function areaOfRectangle(l,w){
    console.log(l*w);
}
volumeOfCuboid(1,4,6,areaOfRectangle);
}
calculate()

