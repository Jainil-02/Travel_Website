import LearnPhoto from "./Rectangle 11.png"
import LearnPhoto1 from "./Rectangle 13 (9).png"
import "./Learn1.css"


function Learn1() {
    return (
        <>
        <div className="First">
            <div className="One">
                <div>
                    <h1 className="py-5">A Moon Garden for you</h1>
                    <p className="py-3">I grew up in an enchanted garden where the sky descended upon the world every night
                        bringing ripe heavenly summer fagrance as the stars were watching from above
                    </p>
                    <img src={LearnPhoto} alt="..."></img>
                    <p className="py-5">There was no border to seperate the sky from the earth and simply to create that magic is a great reason to have a moon garden.</p>

                </div>
                <div className="Two">
                    <div className="LearnIm d-flex justify-content-between">
                    <img src={LearnPhoto1} alt="..."></img>
                    <img src={LearnPhoto1} alt="..."></img>
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

export default Learn1;