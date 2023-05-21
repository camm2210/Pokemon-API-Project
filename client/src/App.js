import { Home, Form, Detail, Landing } from "./views/index";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" render={() => <Landing />} />
      <Route path="/home" render={() => <Home />} />
      <Route exact path="/pokemon/:id" render={() => <Detail />} />
      <Route exact path="/create" render={() => <Form />} />
    </div>
  );
}

export default App;
