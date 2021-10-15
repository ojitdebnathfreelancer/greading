
function great(){
    var cusValue =document.getElementById("number").value;
    switch(true){
        case (cusValue >= 80 && cusValue <= 100 ):
            document.getElementById("great").innerHTML = "You Got A+";
            break;
    
        case (cusValue >= 70 && cusValue <= 79):
            document.getElementById("great").innerHTML = "You Got A"
            break;
        
        case (cusValue >= 60 && cusValue <= 69):
            document.getElementById("great").innerHTML = "You Got A-";
            break;

        case (cusValue >= 50 && cusValue <= 59):
            document.getElementById("great").innerHTML = "You Got B";
            break;

        case (cusValue >= 40 && cusValue <= 49):
            document.getElementById("great").innerHTML = "You Got C";
            break;

        case (cusValue >= 33 && cusValue <= 39):
            document.getElementById("great").innerHTML = "You Got D";
            break;

        case (cusValue >= 0 && cusValue <= 32):
            document.getElementById("great").innerHTML = "Your Got F";
            break;


        default:
            document.getElementById("great").innerHTML = "Write your number 0 - 100";
    }
}

// first function done


function allsubj(){
    var inputOne= parseInt(document.getElementById("input1").value);
    var inputTow = parseInt(document.getElementById("input2").value);
    var inputThree = parseInt(document.getElementById("input3").value);
    var inputFour = parseInt(document.getElementById("input4").value);
    var inputFive = parseInt(document.getElementById("input5").value);
    
    var alladd = inputOne + inputTow + inputThree + inputFour + inputFive;
    var avg = alladd / 5;
    document.getElementById("all").innerHTML = alladd;
    document.getElementById("avg").innerHTML = avg;
}

