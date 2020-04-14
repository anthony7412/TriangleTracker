

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
    if  (this.sideOne +  this.sideTwo <= this.sideThree || this.sideOne + this.sideThree <= this.sideTwo || this.sideTwo + this.sideThree <= this.sideOne){
        alert("this sides can't construct trianlge")
        return;
    }

    this.finalResult();
}
function finalResult(){
    // var result = parseInt(calculateEriName());
   
        if  (this.sideOne === this.sideTwo && sideTwo === sideThree){
            alert("Triangle is equilateral triangle")
    }
    
    else if (this.sideOne === this.sideTwo && this.sideTwo !== this.sideThree){
        alert("Triangle is isosceles triangle" )
    }
    else{
        alert("Triangle is scalne Triangle")
    }
}

// function calculateEriName(){
//     return (((this.century / 4) - 2 * this.century - 1) + ((5 * this.year / 4)) + ((26 * (this.month + 1) / 10)) + this.day) % 7;
// }

