import About from "../About/About";
import Home from "../Home";
import Tours from "../Tours/Tours";
import Logo from "./Rectangle 30.png"
import Learn1 from "../Learn/Learn1";
import Learn2 from "../Learn/Learn2";
import Learn3 from "../Learn/Learn3";
import Learn from "../Learn/Learn";
import Contact from "../Contact/Contact";
import "./Navbar.css"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import SignInPopup from "../SignInPopUp";
import "../SignInPopUp.css"
// import { useState } from "react";

function Navbar(){
//     const [showLogin, setShowLogin] = useState(false);

//   const handleLoginClick = () => {
//     setShowLogin(true);
//   };
    return(
        <>
    <BrowserRouter>
        <div className="Navbar">

            <div className="Logo">
                <img src={Logo} alt="Logo"></img>
            </div>

            <div className="PageName">

                    <div className="list">
                        <nav>
                        <ul className="ul">
                            <li className="li"  >
                            <Link to="/Home">HOME</Link>
                            </li>
                            <li className="li">
                            <Link to="/About" activeClassName="highlited">ABOUT</Link>
                            </li>
                            <li className="li">
                            <Link to="/Tours">TOURS</Link>
                            </li>
                            <li className="li">
                            <Link to="/Learn">LEARN</Link>
                            </li>
                            <li className="li">
                            <Link to="/Contact">CONTACT</Link>
                            </li>
                         </ul>
                         <SignInPopup/>
                         </nav>  
                     </div>
                     <div>
                        {/* <Link to="/SignIn"><button onClick={handleLoginClick}>Sign In</button></Link>
                        {showLogin && <SignIn onClose={() => setShowLogin(false)} />} */}
                              {/* <button onClick={togglePopup} className='btn' id='button'>Sign In</button> */}
                     </div>
            </div>
        </div>

                        <Routes>
                            <Route index element={<Home/>} />  
                            <Route path="/Home" element={<Home/>} />
                            <Route path="/About" element={<About/>} />
                            <Route path="/Tours" element={<Tours/>} />
                            <Route path="/Learn" element={<Learn/>} />
                            <Route path="/Learn1" component={<Learn1/>} />
                            <Route path="/Learn2" element={<Learn2/>} />
                            <Route path="/Learn3" element={<Learn3/>} />
                            <Route path="/Contact" element={<Contact/>} />
                            {/* <Route path="/SignIn" element={<SignIn/>} /> */}
                         </Routes>

    </BrowserRouter>
        </>
    );
}

export default Navbar;