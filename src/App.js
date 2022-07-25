import "font-awesome/css/font-awesome.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import './assets/css/adminlte.min.css';
import "./assets/custom.css";
import Flow from './Flow';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Flow} exact />
        </Switch>
      </Router>
    </>
  );
}
export default App;
