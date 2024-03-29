import { useState } from "react";
import buyPhoto from "./Rectangle 30 (2).png"
import './Buy1.css'

const handleClick = () => {

    let Ad = document.getElementById('Adult').value;
    Ad = Number(Ad);

    let Ch = document.getElementById('Child').value;
    Ch = Number(Ch);

    document.getElementById('price').innerHTML = ("Rs.",50*Ad + 20*Ch);
};

const handleClick1 = () => {
    document.getElementById('Adult').value = (0)

    document.getElementById('Child').value = (0)

    document.getElementById('price').innerHTML = (`Rs. 0`);
};


const Buy1 = () => {
    const [isVisible, setIsVisible] = useState(false);

    const togglePopup = () => {
        setIsVisible(!isVisible);
    };
    return (
        <>
            <button onClick={togglePopup} className='btn b1' id='buy1'>Book Now</button>

            {isVisible && (
                <>
                    <div className="popup1">
                        <div className="popup-content1">
                            <div className='back'>
                                <button onClick={togglePopup} className='back1'> Close  X</button>
                            </div>
                            <div className="theMain">
                                <div className="main">
                                    <div className="Div1">
                                        <img src={buyPhoto} alt=".."></img><br></br><br></br>
                                        <button className="btn my-3">CONFIRM BOOKING</button><br></br><br></br>
                                        <p>* Prices are in Indian Rupee excluding GST</p>
                                        <p className="py-4">To confirm booking click "CONFIRM BOOKING" or <br></br>Close if you donot wish to continue at this stage.</p>
                                    </div>
                                </div>
                                    <div className="main2">
                                        <div>
                                            <h1 className="pb-2">Thank you for selecting our tour.</h1>
                                            <h4 className="py-2">Night Sky Tour</h4>
                                            <h2 className="py-2">Select number of:</h2>
                                            <h6 className="py-2 me-4">Adults</h6><input id="Adult" type="number" min={1} className="me-5"></input>
                                            <br></br>
                                            <h6 className="py-2 ">Children (under 15 yrs)</h6><input id="Child" type="number" min={1} ></input>
                                            <br></br>
                                            <br></br>
                                            <h6 className="d-inline">Date:</h6><input type="date" id="date"></input><br></br>
                                            <br></br>
                                            <br></br>
                                            <button id="OK" onClick={handleClick} >OK</button><button id="Not" onClick={handleClick1}>Reset</button>
                                            <br></br>
                                            <br></br>
                                            <h6 className="py-3">Total Cost is:</h6><h6 id="price">Rs. 0</h6>
                                            <br></br>


                                            {/* <p>Hiii</p> */}
                                        </div>


                                    </div>
                                

                            </div>
                            {/* <p>Buy1</p> */}
                        </div>
                    </div>
                </>
            )

            }

        </>
    );
}

export default Buy1;