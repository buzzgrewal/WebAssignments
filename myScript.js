function calculate()
{
    var num1 = document.getElementById('input1').value;
    var num2 = document.getElementById('input2').value;


    let add = parseInt(num1) + parseInt(num2);
    let sub = parseInt(num1) - parseInt(num2);
    let mul = parseInt(num1) * parseInt(num2);
    let div = parseInt(num1) / parseInt(num2);

    document.getElementById('add').innerHTML = add;
    document.getElementById('sub').innerHTML = sub;
    document.getElementById('mul').innerHTML = mul;
    document.getElementById('div').innerHTML = div;


}

function giveNoofDays()
{
    const Days= [31,28,31,30,31,30,31,31,30,31,30,31];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let month = document.getElementById('month').value;

    for(let i=0;i<months.length;i++)
    {
        if(months[i] === month)
        {
            document.getElementById('dem').innerHTML = months[i];
            document.getElementById('days').innerHTML = Days[i];
            break;
        }
    }


}

function printTable()
{
    let temp = document.getElementById('number1').value;
    let num = parseInt(temp);


    for(let i=1;i<=10;i++)
    {
        document.getElementById('tab').innerHTML += num + " * " + i + " = " + num*i + "<br>";
    }

    
}
