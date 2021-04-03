                var input = document.getElementById("bd");
                input.addEventListener('keypress',function 
                    (event) {
                        if(event.which==13)
                    {
                    validate(); }})

                function validate()
{

                let java = document.getElementById('java').value;
                let ds = document.getElementById('ds').value;
                let net = document.getElementById('net').value;
                let oose = document.getElementById('oose').value;
                let os = document.getElementById('os').value;
                if(java>100 ||ds>100||net>100||oose>100||os>100||java<0||ds<0||net<0||oose<0||os<0)
                {
                    alert("Marks should not exceed 100 or should not be negative");
                }
                else
                {
               let totalGrades = parseFloat(java) + parseFloat(ds) + parseFloat(net) + parseFloat(oose) + parseFloat(os);
                alert(totalGrades);

                let perc = (totalGrades / 500) * 100;
                perc=perc.toFixed(2);
                alert(perc);

                debugger;

                if (perc <= 100 && perc >= 80) {
                    grades = 'A';
                } else if (perc <= 79 && perc >= 60) {
                    grades = 'B';
                } else if (perc <= 59 && perc >= 40) {
                    grades = 'C';
                } else {
                    grades = 'F';
                }
                if (perc >= 39.5) {
                    document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Passsed. `
                }
                else {
                    document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}.%. <br> Your grade is ${grades}. You are Failed. `
                    }
            }
}
