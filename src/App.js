import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";
import MoviesScreen from "./screens/MoviesScreen";
import MoviesPlayingScreen from "./screens/MoviesPlayingScreen";
import UpcommingMoviesScreen from "./screens/UpcommingMoviesScreen";
import TopMoviesScreen from "./screens/TopMoviesScreen";
import TvShowsScreen from "./screens/TvShowsScreen";
import TvAiringTodayScreen from "./screens/TvAiringTodayScreen";
import TvOnScreen from "./screens/TvOnScreen";
import TvTopRatedScreen from "./screens/TvTopRatedScreen";
import PeoplesScreen from "./screens/PeoplesScreen";
import TvScreen from "./screens/TvScreen";
import PeopleScreen from "./screens/PeopleScreen";

function App() {
   return (
      <Router>
         <Header />
         <main className="py-3">
            <Container fluid>
               <Route path="/" component={HomeScreen} exact />
               <Route path="/movies" component={MoviesScreen} exact />
               <Route path="/m-playing" component={MoviesPlayingScreen} exact />
               <Route
                  path="/m-upcomming"
                  component={UpcommingMoviesScreen}
                  exact
               />
               <Route path="/top-movies" component={TopMoviesScreen} exact />
               <Route path="/movie/:id" component={MovieScreen} exact />
               <Route path="/tvshows" component={TvShowsScreen} exact />
               <Route path="/tvshow/:id" component={TvScreen} exact />
               <Route
                  path="/airing-today"
                  component={TvAiringTodayScreen}
                  exact
               />
               <Route path="/on-tv" component={TvOnScreen} exact />
               <Route path="/top-rated" component={TvTopRatedScreen} exact />
               <Route path="/peoples" component={PeoplesScreen} exact />
               <Route path="/people/:id" component={PeopleScreen} exact />
            </Container>
         </main>
      </Router>
   );
}

export default App;
