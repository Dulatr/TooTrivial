import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import App from './App.js';
import Home from './modules/home.js';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/trivia/:category" component={App}/>   
    </Router>, 
    document.getElementById('root')
); 
