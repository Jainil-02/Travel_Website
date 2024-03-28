import LearnPhoto2 from "./Rectangle 11 (1).png"
import LearnPhoto3 from "./Rectangle 13 (10).png"
import { useEffect } from "react"
import "./Learn1.css"


const Learn2= () => {
    useEffect(() => {
      // Scroll to the top when the component mounts
      window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <div className="First" id="Load">
            <div className="One">
                <div>
                    <h1 className="py-5">Dark Sky Reserve</h1>
                    <p className="py-3">I grew up in an enchanted garden where the sky descended upon the world every night
                        bringing ripe heavenly summer fagrance as the stars were watching from above
                    </p>
                    <img src={LearnPhoto2} alt="..."></img>
                    <p className="py-5">There was no border to seperate the sky from the earth and simply to create that magic is a great reason to have a moon garden.</p>

                </div>
                <div className="Two">
                    <div className="LearnIm d-flex justify-content-between">
                    <img src={LearnPhoto3} alt="..."></img>
                    <img src={LearnPhoto3} alt="..."></img>
                    </div>
                    <p className="py-5">There was no border to seperate the sky from the earth and simply to create that magic is great reason to have moon garden.</p>
                    <p className="aa">Posted by Admin</p>
                    <p className="aa">Date</p>
                </div>
                <br></br>
            </div>
        </div>
        </>
    );
}

export default Learn2;