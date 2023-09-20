/* Dennis Morgan Game innerHtml  */
function functAlert()
{
    alert("Let The Craps Begin!");
    var randNum1 = Math.ceil(Math.random()*6);
    var randNum2 = Math.ceil(Math.random()*6);
    var sum = randNum1+randNum2
    document.getElementById("sumTag").innerHTML = "sum = " + sum;

    document.getElementById("rand1").innerHTML = "random num 1 = " + randNum1;
    document.getElementById("rand2").innerHTML = "random num 2 = " + randNum1;

       alert("First num = " +  randNum1 + " Second num " + randNum2);

    if (randNum1 % 2 ==0)
    {
        alert("randNum1 = " + randNum1 + "  and this # is a WIN!");
    }
    else
    {
        alert("randNum1 = " + randNum1 + "  and this # is CrapOut!");
    }

    if (sum >5)
    {
     alert("If not 6 Its game point or CrapOut");
    }

    else if (sum <1)
    {
     alert("Snake Eyes!")
    }

    else if (sum ==5)
    {
     alert("you lose!");
    }

    else if (sum ==3)
    {
     alert("you lose!")
    }
    
}    

