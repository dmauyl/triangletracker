function pushData(){
    var userInputs = document.getElementsByTagName("input");
    var triangleSides = [];
    for (var i=0;i<userInputs.length;i++){
        triangleSides.push(document.getElementById("userInput").value);
        
    }
    alert(triangleSides);
    triangleSides.sort((a, b) => b - a);
    var changeTriangleSides = triangleSides.map(Number);
    tmp = new Set(changeTriangleSides);
    if (tmp.size === 1) {
        alert("Perfecto!!! That's equilateral");
    }
    else if (tmp.size === 2) {
        if(changeTriangleSides[0] >= (changeTriangleSides[1] + changeTriangleSides[2]))
        {
            alert("side0: "+ changeTriangleSides[0] +  " side 1: "+ (changeTriangleSides[1] + changeTriangleSides[2]));
            alert("Ouch, that can't form a triangle");
        }else 
        // if(Math.max(...triangleSides) <= Math.sum(triangleSides[1] , triangleSides[2])) 
        {
            alert("side0: "+ changeTriangleSides[0] + " side 1: "+ (changeTriangleSides[1]+changeTriangleSides[2]));
            alert("Yippee!!That's an isosceles triangle.");
        }
    }
    else if(tmp.size === 3){
        if(changeTriangleSides[0] >= (changeTriangleSides[1] + changeTriangleSides[2])){
            alert("Ouch, that can't form a triangle");
        }
        else{
            alert("Wow, that  a scalene triangle");
        }
    
    }    
}
