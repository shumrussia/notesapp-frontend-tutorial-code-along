import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddNote from "./components/AddNote";
import Navbar from "./components/Navbar";
import NotesList from './components/NotesList';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={NotesList} />
            <Route path="/add" component={AddNote} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
