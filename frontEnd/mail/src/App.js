import "./App.css";
import { Home } from "./component/Mail";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mail" component={Mail} />
      </Switch>
    </div>
  );
}

export default App;
