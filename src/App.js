//Import pages
import AboutUs from "./pages/AboutUs"; //
// IMPORT GLOBAL STYLE
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
//PAGES
import Work from "./pages/Work";
//IMPORT ROUTER, switch and route
import { Switch, Route, useLocation } from "react-router-dom";
//IMPORT MOVIE DETAIL
import MovieDetail from "./pages/MovieDetail";
//animation
import { AnimatePresence } from "framer-motion";

//SPREADING ARRAYS AND OBJECTS
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <Work />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
