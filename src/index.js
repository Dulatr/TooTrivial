import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './app.js';

ReactDOM.render(
    <Router>
        <Route exact path="/"></Route>
        <Route exact path="/trivia" component={App}/>   
    </Router>, 
    document.getElementById('root')
); 