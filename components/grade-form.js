class GradeForm{
    constructor(formElement){
        this.formElement = formElement;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formElement.addEventListener('submit', this.handleSubmit)
    }
    onSubmit(createGrade){
        this.createGrade = createGrade;
    }
    handleSubmit(event){
        event.preventDefault();
        var formData = new FormData(event.target);
        var myName = formData.get('name');
        var myCourse = formData.get('course');
        var myGrade = formData.get('grade');
        myApp.createGrade(myName, myCourse, myGrade);
        event.target.reset()
    }
}
