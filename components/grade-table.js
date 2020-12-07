class GradeTable{
    constructor(tableElement, noGradesElement){
        this.tableElement = tableElement;
        this.noGradesElement = noGradesElement;
    }
    updateGrades(grades){
        var tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
        for(var i = 0; i < grades.length; i++){
             let row = this.renderGradeRow(grades[i], this.deleteGrade);

             tbody.append(row);

        }
        if (grades.length){
            this.noGradesElement.classList.add("d-none");
        } else {
            this.noGradesElement.classList.remove("d-none");

        }

    }

    onDeleteClick(deleteGrade){
        this.deleteGrade = deleteGrade;
    }

    deleteGrade(data){
        console.error('ID:', data, ' Error called out of sequence')
    }

    renderGradeRow(data, deleteGrade){
            var createTR = document.createElement("tr");
            var createTDCol1 = document.createElement("td");
            var createTDCol2 = document.createElement("td");
            var createTDCol3 = document.createElement("td");
            var createTDCol4 = document.createElement("td");
            var createButton = document.createElement("button");
            let createButton2 = document.createElement("button");

            createTDCol1.textContent = data.name;
            createTDCol2.textContent = data.course;
            createTDCol3.textContent = data.grade;
            createButton.textContent = "Delete";
            createButton2.textContent = "Edit";
            createButton.classList.add("btn-danger");
            createButton2.classList.add("btn-info");
            createTDCol4.append(createButton2, createButton);
            createTR.append(createTDCol1, createTDCol2, createTDCol3, createTDCol4);

            createButton.addEventListener('click', function(){
                deleteGrade(data.id)
            });

            return createTR;
    }


}
