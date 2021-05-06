// Imports
import React from 'react';

/////////////////////////////////////////////////////////////
// a holder for the trivia question
class QuestionBox extends React.Component{
    render(){
        return (
            <h1 className="QuestionBox">
                {this.props.content}
            </h1>
        );
    }
}

// A radio button group of questions
class AnswersList extends React.Component{
    render(){
        return (
            <div className="AnswersList"
                onChange={this.props.onClick}>
                <input type="radio"
                    name="answer" id="A1"
                    value={this.props.content[0]}/>
                <label>
                    {this.props.content[0]}
                </label><br/>    
                <input type="radio"
                    name="answer" id="A2"
                    value={this.props.content[1]}/>
                <label>
                    {this.props.content[1]}
                </label><br/>
                <input type="radio"
                    name="answer" id="A3"
                    value={this.props.content[2]}/>
                <label>
                    {this.props.content[2]}
                </label><br/>
                <input type="radio"
                    name="answer" id="A4"
                    value={this.props.content[3]}/>
                <label>
                    {this.props.content[3]}
                </label><br/>
            </div>
        );
    }
}

//
class QuestionPanel extends React.Component{
    render(){
        return(
            <div className="QuestionPanel">
                <QuestionBox content={this.props.question}/>
                <AnswersList content={this.props.answers}
                    onClick={this.props.onChange}/>
                <div>
                    <button onClick={this.props.onSubmit}>Submit</button>
                    <button onClick={this.props.onSkip}>Skip</button>
                </div>
            </div>
        );
    }
}
/////////////////////////////////////////////////////////////

// what components should be visible from the module
export {
    QuestionBox,
    AnswersList,
    QuestionPanel
};