// Challenge1 : Your age in days
//DOM - Document Object Model 
function ageinDays() {
    var birthYear = prompt("what year were you born... Good friend?");
    var age = (2020-birthYear) * 365;
    var h3 = document.createElement('h3');
    var textAnswer = document.createTextNode ('Yor are' + age + 'days old ')
  h3.setAttribute ('id','ageinDays');
  h3.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h3);
    // console.log(age);
}

function reset () {
    document.getElementById('ageinDays').remove();
}