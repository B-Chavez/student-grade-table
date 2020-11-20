class App{
    constructor(){
      this.handleGetGradesError = this.handleGetGradesError.bind(this);
      this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    }
    handleGetGradesError (error){
      console.error(error)
    }
    handleGetGradesSuccess (grades){
      console.log(grades)
    }
    getGrades () {
      $.ajax({
        method: 'GET',
        URL: 'https://github.com/Learning-Fuze/api/grades',
        success: function () {
          handleGetGradesSuccess()
        },
        error: function () {
          handleGetGradesError()
        }
      })
    }

    start(){
      this.getGrades()
    }
}
