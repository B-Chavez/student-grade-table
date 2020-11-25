var myTableEl = document.getElementsByName("table");
var myHeaderEl = document.querySelector("span");
var myForm = document.querySelector("form");

var gradeForm = new GradeForm(myForm);
var myPageHeader = new PageHeader(myHeaderEl);
var myGradeTable = new GradeTable(myTableEl);
var myApp = new App(myGradeTable, myPageHeader);

myApp.start()