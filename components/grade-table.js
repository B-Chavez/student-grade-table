class GradeTable{
    constructor(tableElement, noGradesElement){
        this.tableElement = tableElement;
        this.noGradesElement = noGradesElement;
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
             createTDCol3.append(grades[i].grade);
             createTR.append(createTDCol1, createTDCol2, createTDCol3);
             tbody.append(createTR);
<<<<<<< HEAD
             this.renderGradeRow(grades[i].grade, this.deleteGrade());
             
=======
            var row = this.renderGradeRow(grades[i], this.deleteGrade)


>>>>>>> 250ff78368369970420ddb552787774e9bd1b9eb
        }
        if(grades === false){
            document.querySelector("p").classList = "";
        } else {
            document.querySelector("p").classList = "d-none";
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


            createTDCol1.textContent = data.name;
            createTDCol2.textContent = data.course;
            createTDCol3.textContent = data.grade;
            createButton.textContent = "Delete"
            createButton.classList.add("btn-danger");
            createTDCol4.append(createButton);
            createTR.append(createTDCol1, createTDCol2, createTDCol3, createTDCol4);

<<<<<<< HEAD
            createButton.addEventListener('click', function(){
                deleteGrade(data.id)
            });
=======
        createButton.addEventListener('click', function () {
            deleteGrade(data.id)
        });
>>>>>>> 250ff78368369970420ddb552787774e9bd1b9eb
            return createTR;
    }


}
