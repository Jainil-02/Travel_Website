import "./Footer.css"
import Photo1 from "./Rectangle 37.png"
import Icon1 from "./Rectangle 26.png"
import Icon2 from "./Rectangle 27.png"
import Icon3 from "./Rectangle 28.png"
import Photo2 from "./Rectangle 3 (1).png"



function Footer(){
    return(
        <>
        <div className="Footer">

            <div className="fComponent row container">
                <div className="col">
                    <p className="Heading">About</p>
                    <p className="head">Our Educator</p>
                    <p className="head">Privacy Policy</p>
                    <p className="head">Terms & Condition</p>
                </div>
                <div className="col">
                    <p className="Heading">Tours & Course</p>
                    <p className="head">Our Passes</p>
                    <p className="head">FAQ's</p>
                </div>
                <div className="col">
                    <p className="Heading">Learn</p>
                    <p className="head">Article</p>
                    <p className="head">School Programmes</p>
                </div>
                <div className="col">
                    <p className="Heading">Contact us</p>
                    <p className="head">1169 Ponatahi Road,Ponatahi 5792</p>
                    <p className="head">0247 555 555</p>
                    <p className="head">star.safari@space.nz</p>
                </div>
            </div>
            <hr className="container"></hr>

            <div className="fComponent2">
                <div>
                    <img src={Photo1} alt="P1"></img>
                </div>
                <div className="Icons">
                    <a href="https://www.facebook.com/"><img src={Icon1} alt="I1"></img></a>
                    <a href="https://www.instagram.com/?hl=en"><img src={Icon2} alt="I2"></img></a>
                    <a href="https://www.youtube.com/results?search_query=rick+roll"><img src={Icon3} alt="I3"></img></a>
                </div>
                <div>
                    <img src={Photo2} alt="P2"></img>
                </div>
            </div>

            <hr className="container"></hr>

            <div className="Copyright">
                <p> &#xA9; 2023 Star Safari a product of Milky-way</p>
            </div>
        </div>
        </>
    );
}

export default Footer;