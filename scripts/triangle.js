function pushData(){
    var userInputs = document.getElementsByTagName("input");
    var triSides = [];
    for (var i=0;i<userInputs.length;i++){
        triSides.push(document.getElementById("userInput").value);
        
    }
    alert(triSides);
    
}
