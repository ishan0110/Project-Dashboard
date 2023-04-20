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


// Displaying days left for the project
const dayLeft = document.querySelector('.task-1');
const targetDate = 22;
dayLeft.innerHTML = (targetDate - day) + " Days Left";

const dayLeft2 = document.querySelector('.task-2');
const targetDate2 = 22;
dayLeft2.innerHTML = (targetDate2 - day) + " Days Left";

const dayLeft3 = document.querySelector('.task-3');
const targetDate3 = 26;
dayLeft3.innerHTML = (targetDate3 - day) + " Days Left";

const dayLeft4 = document.querySelector('.task-4');
const targetDate4 = 24;
dayLeft4.innerHTML = (targetDate4 - day) + " Days Left";

const dayLeft5 = document.querySelector('.task-5');
const targetDate5 = 25;
dayLeft5.innerHTML = (targetDate5 - day) + " Days Left"; 

const dayLeft6 = document.querySelector('.task-6');
const targetDate6 = 27;
dayLeft6.innerHTML = (targetDate6 - day) + " Days Left";