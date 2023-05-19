/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/*import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Landing = () => (
  <div>
    <h3>This is landing page with Foo and Bar</h3>
    <Foo />
    <Bar />
  </div>
)
const Foo = () => <div>This is component Foo.</div>;
const Bar = () => <div>This is component Bar.</div>;
const About = () => <div>This is component About.</div>;
const Header = () => (
  <div style={{height: "30px", background: "gray"}}>Header | 
  <Link to="/about"> Go to about</Link>
  </div>
);
const Footer = () => (
  <div style={{ height: "30px", background: "gray" }}>Footer |
  <Link to="/about"> Go to about</Link>
  </div>
);

const NotFound = () => <div>Not found</div>

class App extends React.Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root")); */