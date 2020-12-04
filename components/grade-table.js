class GradeTable{
    constructor(tableElement, noGradesElement){
        this.tableElement = tableElement;
        this.noGradesElement = noGradesElement;
    }
    updateGrades(grades){
        var tbody = document.querySelector("tbody");
        for(var i = 0; i < grades.length; i++){
             let row = this.renderGradeRow(grades[i], this.deleteGrade);
             tbody.append(row);

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

    deleteGrade(data){
        console.log(data)
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
            
            createButton.addEventListener('click', function(){
                deleteGrade(data.id)
            });
            

            createButton.addEventListener('click', function(){
                deleteGrade(data.id)
            });
            return createTR;
    }


}
