// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import HomePage from './components/HomePage';

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <NavBar />
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/login" element={<Login />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;






















import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';
import AdminDashboard from './components/AdminDashboard';
import CulturalEnthusiastDashboard from './components/CulturalEnthusiastDashboard';
import ContentCreatorDashboard from './components/ContentCreatorDashboard';
import TourGuideDashboard from './components/TourGuideDashboard';
import Attractions from './components/Attractions';
import Contact from './components/Contact';
import HolidaysCalendar from './components/HolidaysCalendar';
import Festivals from './components/Festivals';
import Uttarakhand from './components/states/Uttarakhand';
import BlogList from './components/BlogList';
import PostBlog from './components/PostBlog';
import  { useState } from 'react';

import DiwaliPage from "./components/festivals/DiwaliPage";
import Holi from "./components/festivals/HoliFestival";
import Dussehra from "./components/festivals/DussehraFestival";
import Eid from "./components/festivals/EidFestivalPage";
import  Christmas from "./components/festivals/ChristmasFestival";
import  Pongal from "./components/festivals/PongalFestivalPage";
import Ganesha from "./components/festivals/GaneshChaturthiPage";
import Durga from "./components/festivals/DurgaPujaPage";
import Baisakhi from "./components/festivals/BaisakhiFestivalPage";
import Lohri from "./components/festivals/LohriFestivalPage";
import Easter from "./components/festivals/EasterFestivalPage";
import Onam from "./components/festivals/OnamFestivalPage";




import Foodpost from "./components/FoodPost"

import Fooddisplay from "./components/FoodDisplay"


import Stat from "./components/UserStatistics"


import Char from "./components/monuments/Charminar";
import Taj from "./components/monuments/TajMahal";
import Qut from "./components/monuments/QutubMinar";
import Red from "./components/monuments/RedFort";
import Gat from "./components/monuments/GatewayOfIndia";
import Ame from "./components/monuments/AmerFort";


function App() {
    const [userRole, setUserRole] = useState(localStorage.getItem('role') || null); // Get role from localStorage or context
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/attractions" element={<Attractions />} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/calendar" element={<HolidaysCalendar/>} />
                    <Route path="/festivals" element={<Festivals/>} />
                    <Route path="/states/Uttarakhand" element={<Uttarakhand/>} />
                    
                    <Route path="/pongal" element={<Pongal/>} />
                    <Route path="/durga-puja" element={<Durga/>} />
                    <Route path="/baisakhi" element={<Baisakhi/>} />
                    <Route path="/lohri" element={<Lohri/>} />
                    <Route path="/easter" element={<Easter/>} />
                    <Route path="/onam" element={<Onam/>} />
                    
                     <Route path="/blog" element={<BlogList />} />
                    {userRole === 'Admin' &&  <Route path="/blogpost" element={<PostBlog/>} />}





                    <Route path="/dashboard/admin" element={<AdminDashboard />} />
                    <Route path="/dashboard/cultural-enthusiast" element={<CulturalEnthusiastDashboard />} />
                    <Route path="/dashboard/content-creator" element={<ContentCreatorDashboard />} />
                    <Route path="/dashboard/tour-guide" element={<TourGuideDashboard />} />

                    <Route path="/stat" element={<Stat/>} />

                    {/* festivals */}
                     <Route path="/diwali" element={<DiwaliPage/>} />
                     <Route path="/holi" element={<Holi/>} />
                     <Route path="/dussehra" element={<Dussehra/>} />
                     <Route path="/eid" element={<Eid/>} />
                     <Route path="/christmas" element={<Christmas/>} />
                     <Route path="/ganesh-chaturthi" element={<Ganesha/>} />

                     {/* monuments */}
                     <Route path="/1" element={<Taj/>} />
                     <Route path="/2" element={<Qut/>} />
                     <Route path="/3" element={<Red/>} />
                     <Route path="/4" element={<Gat/>} />
                     <Route path="/5" element={<Ame/>} />
                     <Route path="/6" element={<Char/>} />
                     


                     
                     
                     
                     <Route path="/foodpost" element={<Foodpost/>} />
                     <Route path="/food" element={<Fooddisplay/>} />
                    

                </Routes>
            </div>
        </Router>
    );
}

export default App;

