import React from 'react';
import {withRouter} from 'react-router-dom';
import {CategoryList} from './components';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.categories = ["any",9,15];
    }
    onClick(e) {
        this.props.history.push(`/trivia/${e.target.textContent}`);
    }
    render() {
        return (
            <div>
                <CategoryList content={this.categories}
                    onClick={this.onClick}/>
            </div>
        );
    }
}

export default withRouter(Home);