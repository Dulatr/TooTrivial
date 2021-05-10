import React from 'react';
import {withRouter} from 'react-router-dom';
import {CategoryList} from './components';
import './home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.categories = ["any",9,15];
    }
    onClick(e) {
        this.props.history.push(`/trivia/${e.target.id}`);
    }
    render() {
        return (
            <div>
                <div class="HomeHeader">
                    <h1 class="Title">TooTrivial</h1>
                    <h3 class="Description">A trivia application to test your knowledge!</h3>
                    <h4 class="Instruction">Select a category below by clicking on it:</h4>
                </div>
                <CategoryList content={this.categories}
                    onClick={this.onClick}/>
            </div>
        );
    }
}

export default withRouter(Home);