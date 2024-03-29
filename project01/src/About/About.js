import './About.css';
import Image from './Rectangle 30 (1).png'

function About(){
    return(
        <>
        <div className='About'>
            <div className="BgImg">
                <p>About Star Safari website</p>
            </div>
        
            <div>
                <p className='container para'>At Star Safari, our mission is to make the wonders of the night sky accessible to everyone. Located in one of the best stargazing spots in New Zealand, we offer a range of unforgettable experiences.</p>
            </div>

            <br></br>
            <br></br>
            <hr className='container'></hr>
            {/* <br></br>
            <br></br> */}
            
            <div className='container C1'>
                <h1>Observatory perched on a hill</h1>
                <h6>Our observatory is situated atop a picturesque hill, providing optimal viewing conditions for observing phenomena in the New Zealand sky.</h6>
                <br></br>
                <br></br>
                <p>Whether you're gazing through our refractor or reflector telescopes, you'll witness the celestial wonders in all their glory.</p>
                <br></br>

            </div>

            <div className='container'>
                <img src={Image} alt='...'></img>
            </div>

            <div className='container C1'>
                <h1>Accessible and affordable Stargazing for all</h1>
                <h6>We are comitted to providing affordable access to our stargazing experiences.</h6>
                <br></br>
                {/* <br></br> */}
                <p>We understand that cost should not be a barrier to witnessing the wonders of the universe.</p>
                <br></br>
                {/* <br></br> */}
                <p>We strive to create an inclusive environment for all visitors.</p>
            </div>

            <div className='container C1'>
                <h1>Professional Space Science Educators</h1>
                <h6>At Star Safari, our team consists of accredited space sciences educators.</h6>
                <br></br>
                {/* <br></br> */}
                <p>Recognised by the Ministry of Education as Professional Learning Development (PLD) providers for teachers.</p>
                <br></br>
                {/* <br></br> */}
                <p>Our knowledgeable experts will guide you through the mysteries of the cosmos, enhancing your understanding and appreciation of the universe.</p>
            </div>
            <br></br>
        </div>
        </>
    );
}
export default About;