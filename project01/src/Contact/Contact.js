
import "./Contact.css"

function Contact(){
    return(
        <>
        <div className="Contact ">
            <div className="ContactBG">
                <h1>Contact Us</h1>

            </div>
            <div className="Co1 container">
                <h1 className="">Opening Times</h1>
                <h3 className="pb-5">Star Safari is open all months of the year</h3>
                <p className="pt-5">Buisness hours vary throughout the years.<br></br>Usually we run 3 sessions starting every two hours around sunset on<br></br>Friday , Saturday and Sunday evenings.</p>
                <p>Weather permitting, we always stargaze!</p>
                <br></br>
                <hr></hr><br></br>

            </div>
            <div className="d-flex">
                <div className="Co1 container ContactC1">
                    <h1>Our Location</h1>
                    <p><address>1169 Ponatahi Road,<br></br>Ponatahi, Wairarapa 5792</address></p>
                    <p>Phone +91 95864 03666</p>
                    <p><u>star.safari@space.in</u></p>
                </div>
                <div className="Map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.797337072696!2d72.99910647470156!3d21.71059348011486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be020b105c6d7d1%3A0xaf488bedf63b33aa!2sShri%20S&#39;ad%20Vidya%20Mandal%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1709128480575!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="..."></iframe>
                </div>
            </div>
            <div className="Co2 container pt-5">
                <h3>Message Us</h3>
                <label>Your Name :</label>
                <input></input>
                <br></br>
                <label>Your Email :</label>
                <input></input>
                <br></br>
                <label>Send us a message</label>
                <br></br>
                <textarea rows="4" cols="100"></textarea>
                <br></br>
                <br></br>
                <button className="btn" type="submit">Submit</button>
            </div>
            <div className="Co2 container">
                <h3>Proximity to:</h3>
                <br></br>
                <br></br>
                <p>Airport: <span>102 km to Wellington International Airport</span></p>
                <p>Coach terminal: <span>33 km to Masterton</span></p>
                <div className="d-flex">
                <p >Towns:</p>
                <p className="d-inline px-5"><span>11km to Martinborough</span><br></br><span> 19km to Carterton</span><br></br><span> 90km to Wellington</span> <br></br><span>24km to Greytown</span></p>
                </div>
            </div>
            <br></br>
        </div>
        </>
    );
}

export default Contact;