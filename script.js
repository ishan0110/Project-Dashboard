document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });
  
  var listView = document.querySelector('.list-view');
  var gridView = document.querySelector('.grid-view');
  var projectsList = document.querySelector('.project-boxes');
  
  listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
  });
  
  gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
  });
  
  document.querySelector('.messages-btn').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.add('show');
  });
  
  document.querySelector('.messages-close').addEventListener('click', function() {
    document.querySelector('.messages-section').classList.remove('show');
  });
});



// Displaying current date and Month
const display = document.querySelectorAll('.time');
console.log(display);
const date = new Date();
const year = date.getFullYear();
const day = date.getDate();
const monthNumber = date.getMonth() + 1;
let month = "";

switch(monthNumber)
{
  case 1: month = "January";
  break;
  case 2: month = "February";
  break;
  case 3: month = "March";
  break;
  case 4: month = "April";
  break;
  case 5: month = "May";
  break;
  case 6: month = "June";
  break;
  case 7: month = "July";
  break;
  case 8: month = "August";
  break;
  case 9: month = "September";
  break;
  case 10: month = "October";
  break;
  case 11: month = "November";
  break;
  case 12: month = "December";
  break;
  default: month = "January";
  break;
}


display[0].innerHTML = month + " " + day + ", " + year;
display[1].innerHTML = month + " " + day + ", " + year;
display[2].innerHTML = month + " " + day + ", " + year;
display[3].innerHTML = month + " " + day + ", " + year;
display[4].innerHTML = month + " " + day + ", " + year;
display[5].innerHTML = month + " " + day + ", " + year;
display[6].innerHTML = month + " " + day + ", " + year;


