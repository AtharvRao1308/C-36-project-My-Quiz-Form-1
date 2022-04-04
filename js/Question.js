class Question {

  constructor() {
    
    //creating elements for quiz
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){

    //what to hide
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    
   //question of the quiz
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    
    //position of the question
    this.question.position(150, 80);

    //what option 1 is and its position
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);

    //what option 2 is and its position
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);

    //what option 3 is and its position
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);

    //what option 4 is and its position
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
      this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(350, 350);
});
  }
}





