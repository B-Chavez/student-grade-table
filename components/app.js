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
        url: 'https://sgt.lfzprototypes.com/api/grades',
        headers: { 'x-access-token': 'VNjHTYBy' },
        success: function (data) {
          mySelfApp.handleGetGradesSuccess(data)
          console.log(data)
        },
        error: function (data) {
          mySelfApp.handleGetGradesError(data)
        }
      })
    }

    start(){
      this.getGrades()
    }
}

let mySelfApp = new App;