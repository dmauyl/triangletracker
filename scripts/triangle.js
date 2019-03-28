function pushData(){
    var userInputs = document.getElementsByTagName("input");
    var triangleSides = [];
    for (var i=0;i<userInputs.length;i++){
        triangleSides.push(document.getElementById("userInput").value);
        
    }
    alert(triangleSides);
    triangleSides.sort((a, b) => b - a);
    
}
