import "./Tours.css"
import Buy1 from "../Buy/Buy1"
import myphoto from "./Rectangle 13 (3).png"
import myphoto1 from "./Rectangle 13 (4).png"
import myphoto2 from "./Rectangle 13 (5).png"
import Buy2 from "../Buy/Buy2"
import Buy3 from "../Buy/Buy3"


function Tours() {
    return (
        <>
            <div className="Tours">
                <div className="BackGround">
                    <p className="head1">Safari Tours & Course</p>
                </div>

                <div className="para1">
                    <h1 id="h1">Our Tours</h1>
                    <p  className="container c1" id="h2">Stargaze through large telescopes, use VR headsets for virtual tours, and engage in scientific discussions with expert guides Hari and Sam, offering an immersive and educational experience.</p>
                </div>

                <div class="row mb-2 tt">
                    <div class="c">
                        <div class=" cc row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col-auto d-none d-lg-block py-4 px-3">
                                <img src={myphoto} alt="abc"></img>
                            </div>
                            <div class="col p-4 d-flex flex-column position-static" id="MainCard">
                                <h1 id="cardH">Night Sky Tour</h1>
                                <h3 id="cardh3" className="py-2">Ticket $30 per adult</h3>
                                <p id="cardp1" className="pb-5">Duration: 90 minutes (approx.)</p>
                                {/* <button className="btn" id="buy1">BOOK NOW</button> */}
                                <Buy1/>

                            </div>
                            <div className=" px-4 cardInfo">
                                <p class="card-text mb-auto cardp2">Star Safari is a 90 minutes night sky experience where we talk about astronomy, space, astrophysics, astrobiology, telescopes, Mars, life in the universe and even aliens.</p>
                                
                            </div>

                        </div>
                    </div>
                </div>

                <div class="row mb-2 tt">
                    <div class="c">
                        <div class=" cc row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col-auto d-none d-lg-block py-4 px-3">
                                <img src={myphoto1} alt="abc"></img>
                            </div>
                            <div class="col p-4 d-flex flex-column position-static" id="MainCard">
                                <h1 id="cardH">Celestial Escapades Tour</h1>
                                <h3 id="cardh3 " className="py-2">Ticket $55 per adult</h3>
                                <p id="cardp1" className="pb-5">Duration: 120 minutes (approx.)</p>
                                {/* <button className="btn">BOOK NOW</button> */}
                                <Buy2/>

                            </div>
                            <div className="px-4">
                                <p class="card-text mb-auto py-4" id="cardh3">Celestial Escapades: Exclusive Stargazing and Night Sky Experience</p>
                                <p className="cardp2 py-4">Embark on an intimate celestial adventure tailored just for you and your group as our expert guides, Hari and Sam, personally unveil Wairarapa's awe-inspiring night skies.</p>
                                <p className="cardp2 py-4">The private experience is at Star Safari Observatory, nestled within the world's 21st Dark Sky Reserve, which offers an exclusive retreat from light pollution, revealing a dazzling array of celestial wonders.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="row mb-2 tt">
                    <div class="c">
                        <div class=" cc row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col-auto d-none d-lg-block py-4 px-3">
                                <img src={myphoto2} alt="abc"></img>
                            </div>
                            <div class="col p-4 d-flex flex-column position-static " id="MainCard">
                                <h1 id="cardH">Virtual Reality Tour</h1>
                                <h3 id="cardh3" className="py-2">Ticket $25 per adult</h3>
                                <p id="cardp1" className="pb-5">Duration: 90 minutes (approx.)</p>
                                {/* <button className="btn">BOOK NOW</button> */}
                                <Buy3/>

                            </div>
                            <div className="px-4">
                                <p class="card-text mb-auto py-4" id="cardh3">Virtual Reality , Hot Chocolate and Astronomy Tour</p>
                                <p className="cardp2 py-4">Experience space in virtual reality. Visit the International Space Station (ISS), fly through the rings of Saturn, hold Jupiter in your hands and learn how big our Sun is.</p>
                                <p className="cardp2 py-4">Fresh air, fabulous location and delicious hot chocolate are a plus.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <br></br>
            </div>
        </>

    );
}

export default Tours;