class App{
    constructor(gradeTable, pageHeader, gradeForm){
      this.handleGetGradesError = this.handleGetGradesError.bind(this);
      this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
      this.gradeTable = gradeTable;
      this.pageHeader = pageHeader;
      this.gradeForm = gradeForm;

      this.createGrade = this.createGrade.bind(this);
      this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
      this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    }
    handleGetGradesError (error){
      console.error(error);
    }
    handleGetGradesSuccess (grades){
      this.gradeTable.updateGrades(grades)
      var gradesSum = 0;
      for(var i = 0; i < grades.length; i++){
          gradesSum += grades[i].grade
      }
      var gradesAvg = gradesSum / grades.length;
      this.pageHeader.updateAverage(gradesAvg);
    }
    getGrades () {
      $.ajax({
        method: 'GET',
        url: 'https://sgt.lfzprototypes.com/api/grades',
        headers: { 'x-access-token': 'VNjHTYBy' },
        success: this.handleGetGradesSuccess,
        error: this.handleGetGradesError
      })
    }

    start(){
      this.getGrades()
      gradeForm.onSubmit(this.gradeForm);
    }

    createGrade(name, course, grade){
      console.log(name + " " + course + " " + grade);
      $.ajax({
        method: 'POST',
        url: 'https://github.com/Learning-Fuze/sgt_api',
        headers: {
          'x-access-token': 'VNjHTYBy',
        },
        data: {
          'name': name,
          'course': course,
          'grade': grade
        },
        success: function (){
          console.log("Success!")
        },
        error: function (){
          console.log("Error!")
        }
      })
    }

    handleCreateGradeError(error){
        console.error(error);
    }

    handleCreateGradeSuccess(){
      this.getGrades()
    }
}
