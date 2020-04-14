

var sideOne, sideTwo, sideThree;



function getdata(){
  
    this.sideOne= document.getElementById("sideOne").value;
    this.sideTwo=document.getElementById('sideTwo').value;
    this.sideThree=document.getElementById("sideThree").value;
    this.validateData();
}
function validateData(){
    if(this.sideOne <= 0 || this.sideTwo <= 0){
        alert("Invalid Triangle");
        return;
    }
    if(this.sideThree <=0 || this.sideOne <=0 ){
        alert("Invalid Triangle");
        return;
    }
  
         
    this.finalResult();
}
function finalResult(){
   
   
    if  (this.sideOne === this.sideTwo && sideTwo === sideThree){
            alert("Triangle is equilateral triangle")
    }
    
    else if (this.sideOne === this.sideTwo && this.sideTwo !== this.sideThree){
        alert("Triangle is isosceles triangle" )
    }
    else if((this.sideOne + this.sideTwo) <= this.sideThree|| (this.sideOne + this.sideThree) <= this.sideTwo || (this.sideTwo + this.sideThree) <= this.sideOne) {
        alert("Not a definite triangle");
        }
    else{
        alert("Triangle is scalne Triangle")
    }
}


