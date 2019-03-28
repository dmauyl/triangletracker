function pushData(){
    var userInputs = document.getElementsByTagName("input");
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
    else if (tmp.size === 2) {
        if(changeTriangleSides[0] >= (changeTriangleSides[1] + changeTriangleSides[2]))
        {
            document.getElementById("results").innerHTML = "Ouch, that can't form a triangle";
        }else 
        
        {
            document.getElementById("results").innerHTML = "Yippee!!That's an isosceles triangle.";
        }
    }
    else if(tmp.size === 3){
        if(changeTriangleSides[0] >= (changeTriangleSides[1] + changeTriangleSides[2])){
            document.getElementById("results").innerHTML = "Ouch, that can't form a triangle";
            }
        else{
            
            document.getElementById("results").innerHTML = "Wow, that  a scalene triangle";
        }
    
    }    
}
