import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/home/home';
import LoginPage from './Pages/authentication/login';
import { Outlet } from 'react-router';
import SubscriptionPage from './Pages/other/subscription/subscription';
import BasicNavbar from './componements/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeveloperPage from './Pages/developer/developer';
import TesterPage from './Pages/tester/tester';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={< LoginPage />}/>
        <Route path='/' element= {< HomePage />} />  */}
        <Route
          element={
            <>
              <BasicNavbar />
              <Outlet />
            </>
          }
        >
          <Route path='/' element= {< HomePage />} /> 
          <Route path='/pricing' element= {< SubscriptionPage />} /> 
          <Route path='/developer' element= {< DeveloperPage />} /> 
          <Route path='/tester' element= {< TesterPage />} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
