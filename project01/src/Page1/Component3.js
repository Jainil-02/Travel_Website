import Card from "./Rectangle 13.png"
import Card1 from "./Rectangle 13 (1).png"
import Card2 from "./Rectangle 13 (2).png"
import Arrow1 from "./Vector (4).png"
import Arrow from "./Vector (5).png"
import { Link } from "react-router-dom"
import "./Component3.css"


function Component3() {
    return (
        <>
            <div className="container-fluid Comp2">
                <div className="row justify-content-evenly">
                    <div class="card" >
                        <img src={Card} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Night Sky</h5>
                            <p class="card-content-1">$30 per person</p>
                            <p class="card-content-2">(90 minutes approx)</p>
                            <p class="card-text">See the universe through Wairarapa's largest public telescopes while we talk science <span>read more...</span></p>
                            <Link to="/Tours"><a href="/" class="btn">BOOK NOW</a></Link>
                        </div>
                    </div>

                    <div class="card" >
                        <img src={Card1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Celestial Escape</h5>
                            <p class="card-content-1">$25 per person</p>
                            <p class="card-content-2">(120 minutes approx)</p>
                            <p class="card-text">Experience a private tour where we will delve into our constellations and take you on a journey into the... </p>
                            <Link to="/Tours"><a href="/" class="btn">BOOK NOW</a></Link>
                        </div>
                    </div>

                    <div class="card" >
                        <img src={Card2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Virtual Reality</h5>
                            <p class="card-content-1">$25 per person</p>
                            <p class="card-content-2">(90 minutes approx)</p>
                            <p class="card-text">Visit the International Space Station (ISS) fly through the rings of Saturn, hold Jupiter in your hands and learn...</p>
                            <Link to="/Tours"><a href="/" class="btn">BOOK NOW</a></Link>
                        </div>
                    </div>
                </div>
                    <br></br>
                    <br></br>
                    <br></br>
                <div className="row justify-content-evenly">
                    <div class="card" >
                        <img src={Card} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Night Sky</h5>
                            <p class="card-content-1">$30 per person</p>
                            <p class="card-content-2">(90 minutes approx)</p>
                            <p class="card-text">See the universe through Wairarapa's largest public telescopes while we talk science <span>read more...</span></p>
                            <a href="/" class="btn">BOOK NOW</a>
                        </div>
                    </div>

                    <div class="card" >
                        <img src={Card1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Celestial Escape</h5>
                            <p class="card-content-1">$25 per person</p>
                            <p class="card-content-2">(120 minutes approx)</p>
                            <p class="card-text">Experience a private tour where we will delve into our constellations and take you on a journey into the... </p>
                            <a href="/" class="btn">BOOK NOW</a>
                        </div>
                    </div>

                    <div class="card" >
                        <img src={Card2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Virtual Reality</h5>
                            <p class="card-content-1">$25 per person</p>
                            <p class="card-content-2">(90 minutes approx)</p>
                            <p class="card-text">Visit the International Space Station (ISS) fly through the rings of Saturn, hold Jupiter in your hands and learn...</p>
                            <a href="/" class="btn">BOOK NOW</a>
                        </div>
                    </div>
                </div>

                <div className="Part3">
                    <h1 className="Discover">Discover More <img src={Arrow1} alt="arrow"></img></h1>
                    <div className="Back">
                        <img src={Arrow} alt="arrow"></img>
                        <p className="Top">Back to top</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Component3;