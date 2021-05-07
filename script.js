                var count = 5;
                var totalMarks;
                var input = document.getElementById("bd");
                input.addEventListener('keypress',function 
                    (event) {
                        if(event.which==13)
                    {
                    validate(); }})

                // Function to add subject
                function addsub() 
{
                    count++;
                    let appform = document.getElementById("app-form");
                    var div = document.createElement("div")
                    var sub = document.createElement("input");
                    var rmvbtn = document.createElement('button');
                    sub.type="number";
                    sub.placeholder= "Subject" + " " + count;
                    sub.setAttribute('id','sub'+ count);
                    sub.max=100;
                    div.appendChild(sub);
                    div.appendChild(rmvbtn)
                    rmvbtn.innerText = "X";
                    rmvbtn.setAttribute('onclick','removesub()');
                    rmvbtn.setAttribute('id','btn'+count);
                    rmvbtn.classList.add("rmvbtn");
                    div.classList.add("app-form-group");
                    sub.classList.add("app-form-control");
                    appform.appendChild(div);
                }

                console.log(count)

                // Function to remove subject
                function removesub(){
                
                document.getElementById('sub'+count).remove();
                document.getElementById('btn'+count).remove();
                count--;
                console.log(count);

                }


                function validate()
    {
        //  Subjects = 5  

               if(count==5) 
{               totalMarks=500;
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
               var totalGrades = parseFloat(java) + parseFloat(ds) + parseFloat(net) + parseFloat(oose) + parseFloat(os);
                alert(totalGrades);

                var perc = (totalGrades / 500) * 100;
                perc=perc.toFixed(2);
                alert(perc);
                percentage(perc)
 }
 } 

//  Subjects = 6  
             if(count==6) {
                 totalMarks=600;
                    var totalGrades = parseFloat(document.getElementById('java').value) + parseFloat( document.getElementById('ds').value) + parseFloat( document.getElementById('net').value) + parseFloat(document.getElementById('oose').value )+ parseFloat (document.getElementById('os').value) + parseFloat( document.getElementById('sub6').value);

                    var perc = (totalGrades / 600) * 100;
                     perc=perc.toFixed(2);
                     alert(perc);
                       percentage(perc)
                }

                //  Subjects = 7  

                if(count==7) {
                    totalMarks=700;
                    var totalGrades = parseFloat(document.getElementById('java').value) + parseFloat( document.getElementById('ds').value) + parseFloat( document.getElementById('net').value) + parseFloat(document.getElementById('oose').value )+ parseFloat (document.getElementById('os').value) + parseFloat( document.getElementById('sub6').value) + parseFloat(document.getElementById("sub7").value);

                    var perc = (totalGrades / 700) * 100;
                     perc=perc.toFixed(2);
                     alert(perc);
                       percentage(perc)
                }

//  Subjects = 8   
                  if(count==8) {
                    totalMarks=800;
                    var totalGrades = parseFloat(document.getElementById('java').value) + parseFloat( document.getElementById('ds').value) + parseFloat( document.getElementById('net').value) + parseFloat(document.getElementById('oose').value )+ parseFloat (document.getElementById('os').value) + parseFloat( document.getElementById('sub6').value) + parseFloat(document.getElementById("sub7").value) + parseFloat(document.getElementById("sub8").value);

                    var perc = (totalGrades / 800) * 100;
                     perc=perc.toFixed(2);
                     alert(perc);
                       percentage(perc)
                }
//  Subjects = 9  

                 if(count==9) {
                    totalMarks=900;
                    var totalGrades = parseFloat(document.getElementById('java').value) + parseFloat( document.getElementById('ds').value) + parseFloat( document.getElementById('net').value) + parseFloat(document.getElementById('oose').value )+ parseFloat (document.getElementById('os').value) + parseFloat( document.getElementById('sub6').value) + parseFloat(document.getElementById("sub7").value) + parseFloat(document.getElementById("sub8").value)+ parseFloat(document.getElementById("sub9").value);

                    var perc = (totalGrades / 900) * 100;
                     perc=perc.toFixed(2);
                     alert(perc);
                       percentage(perc)
                }

//  Subjects = 10  

                 if(count==10) {
                    totalMarks=1000;
                    var totalGrades = parseFloat(document.getElementById('java').value) + parseFloat( document.getElementById('ds').value) + parseFloat( document.getElementById('net').value) + parseFloat(document.getElementById('oose').value )+ parseFloat (document.getElementById('os').value) + parseFloat( document.getElementById('sub6').value) + parseFloat(document.getElementById("sub7").value) + parseFloat(document.getElementById("sub8").value)+ parseFloat(document.getElementById("sub9").value)+ parseFloat(document.getElementById("sub10").value);

                    var perc = (totalGrades / 1000) * 100;
                     perc=perc.toFixed(2);
                     alert(perc);
                       percentage(perc)
                }

//  Subjects = 11  

                if(count==11) {
                    totalMarks=1100;
                    var totalGrades = parseFloat(document.getElementById('java').value) + parseFloat( document.getElementById('ds').value) + parseFloat( document.getElementById('net').value) + parseFloat(document.getElementById('oose').value )+ parseFloat (document.getElementById('os').value) + parseFloat( document.getElementById('sub6').value) + parseFloat(document.getElementById("sub7").value) + parseFloat(document.getElementById("sub8").value)+ parseFloat(document.getElementById("sub9").value)+ parseFloat(document.getElementById("sub10").value)+ parseFloat(document.getElementById("sub11").value);

                    var perc = (totalGrades / 1100) * 100;
                     perc=perc.toFixed(2);
                     alert(perc);
                       percentage(perc)
                }
                //  Subjects = 12  

                 if(count==12) {
                    totalMarks=1200;
                    var totalGrades = parseFloat(document.getElementById('java').value) + parseFloat( document.getElementById('ds').value) + parseFloat( document.getElementById('net').value) + parseFloat(document.getElementById('oose').value )+ parseFloat (document.getElementById('os').value) + parseFloat( document.getElementById('sub6').value) + parseFloat(document.getElementById("sub7").value) + parseFloat(document.getElementById("sub8").value)+ parseFloat(document.getElementById("sub9").value)+ parseFloat(document.getElementById("sub10").value)+ parseFloat(document.getElementById("sub11").value)+ parseFloat(document.getElementById("sub12").value);

                    var perc = (totalGrades / 1200) * 100;
                     perc=perc.toFixed(2);
                     alert(perc);
                       percentage(perc)
                }
                //  Subjects = 13  

                 if(count==13) {
                    totalMarks=1300;
                    var totalGrades = parseFloat(document.getElementById('java').value) + parseFloat( document.getElementById('ds').value) + parseFloat( document.getElementById('net').value) + parseFloat(document.getElementById('oose').value )+ parseFloat (document.getElementById('os').value) + parseFloat( document.getElementById('sub6').value) + parseFloat(document.getElementById("sub7").value) + parseFloat(document.getElementById("sub8").value)+ parseFloat(document.getElementById("sub9").value)+ parseFloat(document.getElementById("sub10").value)+ parseFloat(document.getElementById("sub11").value)+ parseFloat(document.getElementById("sub12").value)+ parseFloat(document.getElementById("sub13").value);

                    var perc = (totalGrades / 1300) * 100;
                     perc=perc.toFixed(2);
                     alert(perc);
                       percentage(perc)
                }

                //  Subjects = 14  

          if(count==14) {
                    totalMarks=1400;
                    var totalGrades = parseFloat(document.getElementById('java').value) + parseFloat( document.getElementById('ds').value) + parseFloat( document.getElementById('net').value) + parseFloat(document.getElementById('oose').value )+ parseFloat (document.getElementById('os').value) + parseFloat( document.getElementById('sub6').value) + parseFloat(document.getElementById("sub7").value) + parseFloat(document.getElementById("sub8").value)+ parseFloat(document.getElementById("sub9").value)+ parseFloat(document.getElementById("sub10").value)+ parseFloat(document.getElementById("sub11").value)+ parseFloat(document.getElementById("sub12").value)+ parseFloat(document.getElementById("sub13").value)+ parseFloat(document.getElementById("sub14").value);

                    var perc = (totalGrades / 1400) * 100;
                     perc=perc.toFixed(2);
                     alert(perc);
                       percentage(perc)
                }
         
                // debugger;
               




//  Function to calculate
                function percentage(perc) {
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
                    document.getElementById('showData').innerHTML = ` Out of ${totalMarks} your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Passsed. `
                }
                else {
                    document.getElementById('showData').innerHTML = ` Out of ${totalMarks} your total is  ${totalGrades} and percentage is ${perc}.%. <br> Your grade is ${grades}. You are Failed. `
                    }
                
            }
        }
    

