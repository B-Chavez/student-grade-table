var TableEl = document.getElementsByName("table");
var HeaderEl = document.querySelector("span");
var createGradeFormElement = document.querySelector("form");

var gradeForm = new GradeForm(createGradeFormElement);
var myPageHeader = new PageHeader(HeaderEl);
var myGradeTable = new GradeTable(TableEl);
var myApp = new App(myGradeTable, myPageHeader);

myApp.start()