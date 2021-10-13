
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
    var input1 = document.getElementById("input1").innerHTML.value;
    var input2 = document.getElementById("input2").innerHTML.value;
    var input3 = document.getElementById("input3").innerHTML.value;
    var input4 = document.getElementById("input4").innerHTML.value;
    var input5 = document.getElementById("input5").innerHTML.value;
    
    var alladd = input1+input2+input3+input4+input5;
    document.getElementById("all").innerHTML = alladd;
    // var average = alldd / 5;

    // var a= 2;
    // var b = 2;
    // var c = 2;
    // var d = 2;
    // var e = 2;
    // var all = a+b+c+d+e;
}

