import Home from "./home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "./components/AppBar";
import { useSelector, useDispatch } from "react-redux";
import store from "./store";
import { Provider } from "react-redux";
import Auth from "./auth/oauth";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Main />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

function Main() {
  const auth = useSelector((state) => state.auth.value);
  console.log(auth);
  if (auth !== false) {
    return <AppBar />;
  }
  return (
    <div>
      <Route exact path="/auth" component={Auth} />
      <Home />
    </div>
  );
}
