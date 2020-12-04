var TableEl = document.getElementsByName("table");
var HeaderEl = document.querySelector("span");
var createGradeFormElement = document.querySelector("form");
<<<<<<< HEAD
var hiddenElementP = document.querySelector("p")
=======
var hiddenElementP = document.querySelector("p");
>>>>>>> ade690f333ba48f434f4a57813a07f221d101e4a

var gradeForm = new GradeForm(createGradeFormElement);
var myPageHeader = new PageHeader(HeaderEl);
var myGradeTable = new GradeTable(TableEl, hiddenElementP);
var myApp = new App(myGradeTable, myPageHeader);

myApp.start()
