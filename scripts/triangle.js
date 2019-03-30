function reloadPage() {
    location.reload();
  }
function pushData(){
    // get data from the input
    var userInputs = document.getElementsByTagName("input");
    var side1 = document.getElementById("userInputSide1").value;
    var side2 = document.getElementById("userInputSide2").value;
    var side3 = document.getElementById("userInputSide1").value;
    //perform validation if empty string
    if(side1 !== ""  && side2 !== ""  && side3 !== "" )

    {
        //check if user has entered invalid values like negative & zeros
        if (side1 > 0 && side2 > 0 && side3 > 0){
            {
                //declare  empty array
                var triangleSides = [];
                //update array from user inputs
                   triangleSides.push(document.getElementById("userInputSide1").value);
                    triangleSides.push(document.getElementById("userInputSide2").value);
                    triangleSides.push(document.getElementById("userInputSide3").value);
            //sort the array for quick check
                triangleSides.sort((a, b) => b - a);
                
                var changeTriangleSides = triangleSides.map(Number);
            
                tmp = new Set(changeTriangleSides);
                //check equilateral
                if (tmp.size === 1) {
                    document.getElementById("results").innerHTML = "Perfecto!!  That's equilateral triangle";
                }
                //check no triangle
                else if (changeTriangleSides[0] >= (changeTriangleSides[1] + changeTriangleSides[2]))
                    {
                        document.getElementById("results").innerHTML = "Ouch, that can't form a triangle";
                        
                    }else if (changeTriangleSides[1]===changeTriangleSides[2])
                    
                    {
                        document.getElementById("results").innerHTML = "Yippee!!That's an isosceles triangle.";
                    }
                    else if(changeTriangleSides[0] < (changeTriangleSides[1] + changeTriangleSides[2]))
                    {
                        document.getElementById("results").innerHTML = "Yes, that's a scalene triangle";
                    }
                
                else {
                        document.getElementById("results").innerHTML = "Ouch, that can't form a triangle";
                        }
                
        }
        //invalid values by user    
    }else{
        document.getElementById("results").innerHTML = "Error!!The Length cannot be zero or negative";
    }
   }    
else{
    document.getElementById("results").innerHTML = "Error!!Invalid input.";
}
}