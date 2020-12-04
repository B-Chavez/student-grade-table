var TableEl = document.getElementsByName("table");
var HeaderEl = document.querySelector("span");
var createGradeFormElement = document.querySelector("form");
var hiddenElementP = document.querySelector("p")

var gradeForm = new GradeForm(createGradeFormElement);
var myPageHeader = new PageHeader(HeaderEl);
var myGradeTable = new GradeTable(TableEl, hiddenElementP);
var myApp = new App(myGradeTable, myPageHeader);

myApp.start()
