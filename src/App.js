import logo from './logo.svg';
import './App.css';
import UserProfilePage from './components/UserProfilePage';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <NavLink to="/userProfile"></NavLink>
      <Routes>
        <Route path='userProfile' element={<UserProfilePage/>}></Route>
      </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
