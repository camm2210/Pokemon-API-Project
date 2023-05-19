import { Landing, Home, Detail, Form } from "./views";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" render={() => <Landing />} />
      <Route path="/home" render={() => <Home />} />
      <Route exact path="/detail" render={() => <Detail />} />
      <Route exact path="/create" render={() => <Form />} />
    </div>
  );
}

export default App;
