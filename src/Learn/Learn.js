import "./Learn.css"
// import Learn1 from "./Learn1"
import myphoto from "./Rectangle 13 (6).png"
import myphoto1 from "./Rectangle 13 (7).png"
import myphoto2 from "./Rectangle 13 (8).png"
import Arrow from "./Vector (5).png"
import Arrow11 from './Vector (6).png';
import { Link} from "react-router-dom"
import { useEffect } from "react"
// import Learn1 from "./Learn1"




const Learn= () => {
    useEffect(() => {
      // Scroll to the top when the component mounts
      window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="Learn">
                <div className="LbgImg">
                    <p>Learn with us </p>
                </div>


                <div className="LearnH">
                    <h1>Our Mission</h1>
                    <p>Our goal is to inspire people to think about our collective future and how they can activelt contribute to it.</p>
                    <br></br><br></br>
                    <p>We believe that quality science education with an added cosmic perspective can achieve that and should be available for everyone.</p>
                </div>
                <br></br>
                <br></br>

                <div className="LearnH2">
                    <h1 >See our latest art</h1>
                    <br></br>
                    <br></br>
                    <div className="row justify-content-evenly">
                        <div class="card" >
                            <img src={myphoto} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Moon Garden</h5>
                                <p class="card-text">‘Sit velit deleniti vel assumenda quisquam ea tempora fuga et harum voluptas et porro possimus.’</p>
                                <br></br>
                                <Link to="/Learn2"><a href="/" class="learnBtn">Learn More <img src={Arrow11} alt="arrow"></img></a></Link>
                            </div>
                        </div>

                        <div class="card" >
                            <img src={myphoto1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Dark Sky Reserve</h5>
                                <p class="card-text">‘Sit velit deleniti vel assumenda quisquam ea tempora fuga et harum voluptas et porro possimus.’</p>
                                <br></br>
                                <Link to="/Learn2"><a href="/" class="learnBtn">Learn More <img src={Arrow11} alt="arrow"></img></a></Link>
                            </div>
                        </div>

                        <div class="card" >
                            <img src={myphoto2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Sam & Pluto</h5>
                                <p class="card-text">‘Sit velit deleniti vel assumenda quisquam ea tempora fuga et harum voluptas et porro possimus.’</p>
                                <br></br>
                                <Link to="/Learn3"><a href="/" class="learnBtn">Learn More <img src={Arrow11} alt="arrow"></img></a></Link>
                            </div>
                        </div>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="row justify-content-evenly">
                        <div class="card" >
                            <img src={myphoto} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Moon Garden</h5>
                                <p class="card-text">‘Sit velit deleniti vel assumenda quisquam ea tempora fuga et harum voluptas et porro possimus.’</p>
                                <br></br>
                                <a href="/" class="learnBtn">Learn More <img src={Arrow11} alt="arrow"></img></a>
                            </div>
                        </div>

                        <div class="card" >
                            <img src={myphoto1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Dark Sky Reserve</h5>
                                <p class="card-text">‘Sit velit deleniti vel assumenda quisquam ea tempora fuga et harum voluptas et porro possimus.’</p>
                                <br></br>
                                <a href="/" class="learnBtn">Learn More <img src={Arrow11} alt="arrow"></img></a>
                            </div>
                        </div>

                        <div class="card" >
                            <img src={myphoto2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Sam & Pluto</h5>
                                <p class="card-text">‘Sit velit deleniti vel assumenda quisquam ea tempora fuga et harum voluptas et porro possimus.’</p>
                                <br></br>
                                <a href="/" class="learnBtn">Learn More <img src={Arrow11} alt="arrow"></img></a>
                            </div>
                        </div>
                    </div>

                    <div className="Back">
                        <img src={Arrow} alt="arrow"></img>
                        <p className="Top">Back to top</p>
                    </div>


                </div>



                <br></br>
            </div>
        </>
    );
}

export default Learn;