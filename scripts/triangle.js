function pushData(){
    
    var userInputs = document.getElementsByTagName("input");
    var side1 = document.getElementById("userInputSide1").value;
    var side2 = document.getElementById("userInputSide2").value;
    var side3 = document.getElementById("userInputSide1").value;
    if(side1 !== ""  && side2 !== ""  && side3 !== "" )
    {
        if (side1 > 0 && side2 > 0 && side3 > 0){
            {
                var triangleSides = [];
                   triangleSides.push(document.getElementById("userInputSide1").value);
                    triangleSides.push(document.getElementById("userInputSide2").value);
                    triangleSides.push(document.getElementById("userInputSide3").value);
            
                triangleSides.sort((a, b) => b - a);
                
                var changeTriangleSides = triangleSides.map(Number);
            
                tmp = new Set(changeTriangleSides);
                if (tmp.size === 1) {
                    document.getElementById("results").innerHTML = "Perfecto!!  That's equilateral triangle";
                }
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
    }else{
        document.getElementById("results").innerHTML = "Error!!The Length cannot be zero or negative";
    }
   }    
else{
    document.getElementById("results").innerHTML = "Error!!Invalid input.";
}
}