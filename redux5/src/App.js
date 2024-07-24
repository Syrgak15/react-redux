
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserCard from "./components/UserCard";
import UserOpenedPage from "./pages/UserOpenedPage/UserOpenedPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<UsersPage/>}/>
          <Route path='/user' element={<UserOpenedPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
