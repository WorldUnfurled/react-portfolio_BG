import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Bio from "./components/Sections/Bio";
import Contact from "./components/Sections/Contact";
import Work from "./components/Sections/Work";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/bio">
              <Bio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/work">
              <Work />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
