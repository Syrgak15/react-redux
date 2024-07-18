
import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import {BrowserRouter, BrowserRouter as Router, Link} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import styles from './pages/UsersPage/UsersPage.modules.css'
import UserCardOpen from "./components/UserCardOpen";
import {useSelector} from "react-redux";

function App() {
    const users=useSelector(state=>state.usersPageReducer.users)
    return (
      <BrowserRouter>
          <Routes>
              <Route index element={<UsersPage/>}/>
              <Route path='/usercard' element={<UserCardOpen/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
