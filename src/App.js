import React from 'react';
import * as Services from './modules/services';
import * as Components from './modules/components'

class App extends React.Component{
    constructor(props){
        super(props);
        this.API = new Services.API();
        this.onSkip = this.onSkip.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            question:"",
            answers:[],
            isCorrect:false,
            visible:false
        };
        this.correct = "Correct";
        this.incorrect = "Incorrect";
        this.chosenAnswer = "";
        this.correct_answer = "";

    }
    async componentDidMount(){
        this.token = await this.API.getSessionToken();
        //this just starts the app with a question
        this.onSkip();
    }
    onChange(e){
        this.chosenAnswer = e.target.value;
    }
    onSubmit(e){
        let checkTrue = (this.chosenAnswer === this.correct_answer[0]);
        this.setState({
            visible:true,
            isCorrect:checkTrue
        });
    }
    onSkip(e){
        (async () => {
            let r = await this.API.getNewPanel(this.token);
            let quest = r.results[0].question.replace(/&quot;/g,"'");
            let correct_answer = [r.results[0].correct_answer];
            this.correct_answer = correct_answer;
            let incorrect_answers = r.results[0].incorrect_answers;
            let ans = correct_answer.concat(incorrect_answers);
            this.setState({
                question:quest,
                answers:ans,
                visible:false
            });
        })(); 
    }

    render(){
        return (
            <div className="App">
                <Components.QuestionPanel 
                    question={this.state.question}
                    answers={this.state.answers}
                    onSkip={this.onSkip}
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}/>
                {   
                    this.state.visible && 

                    ((this.state.isCorrect && <h1 className="CorrectStatus">{this.correct}</h1>) || 
                        <h1>{this.incorrect}</h1>)
                }
            </div>
        );        
    }
}

export{App};