class GradeTable{
    constructor(tableElement){
        this.tableElement = tableElement;
    }
    updateGrades(grades){
        var tbody = document.querySelector("tbody");
        for(var i = 0; i < grades.length; i++){
             var createTR = document.createElement("tr");
             var createTDCol1 = document.createElement("td");
             var createTDCol2 = document.createElement("td");
             var createTDCol3 = document.createElement("td");
             createTDCol1.append(grades[i].name);
             createTDCol2.append(grades[i].course);
             createTDCol3.append(grades[i].grade)
             createTR.append(createTDCol1, createTDCol2, createTDCol3);
             tbody.append(createTR)
        }
    }
    onDeleteClick(deleteGrade){
        this.deleteGrade = deleteGrade;
    }

    renderGradeRow(data, deleteGrade){
            var createTR = document.createElement("tr");
            var createTDCol1 = document.createElement("td");
            var createTDCol2 = document.createElement("td");
            var createTDCol3 = document.createElement("td");
            var createTDCol4 = document.createElement("td");
            var createButton = document.createElement("button");

            createButton.classList = "btn-danger"
            createTDCol4.append(createButton);
            createTR.append(createTDCol1, createTDCol2, createTDCol3, createTDCol4);
    }
}