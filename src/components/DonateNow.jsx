import "../styles/DonateNow.css"
import React from 'react';
import Footer from './Footer';
import Navbar from './Nav'

function DonateNow() {
    return (
        <>
            <Navbar />
            <div className="donate-icon">
                <img src="src/assets/donatePage/donateIcon.png" alt="" width="80" />
            </div>
            <div className="text-container">
                {/* <div><h1 className="kkk-heading" id="kkk-h">काबिल, कमाऊ, कामयाब -</h1></div> */}
                <div><h1 className="kkk-heading">Support young rural women to Learn, Earn & Excel</h1></div>
                <div><p className="donate-to-start">Donate to start a Kaabil, Kamau Kamyab campaign in your state Change the fabric of career choices for young rural women. </p><br /></div>
                <p className="donate-to-starts">We’ve made big bold bets because our community bets on big, bold hopes.  </p>
                <div><button className="join-community-button">Join our community of hope!</button> </div>
            </div>
            <div>
                <form action="" id="getinvolved-form">
                    <label htmlFor="myInput"></label>
                    <input list="options" id="myInput" name="myInput" placeholder="Select your citizenship" />

                    <datalist id="options">
                        <option value="Indian Citizen" />
                        <option value="Foreign Citizen/NRI" />
                    </datalist>

                    <label htmlFor="myInput"></label>
                    <input list="amount" id="myInput" name="myInput" placeholder="Choose your amount" />
                    <datalist id="amount">
                        <option value="+5000" />
                        <option value="+10,000" />
                        <option value="+20,000" />
                    </datalist>

                    <label htmlFor="myInput"></label>
                    <input list="giventimes" id="myInput" name="myInput" placeholder="Give Monthly" />
                    <datalist id="giventimes">
                        <option value="Give Once" />
                        <option value="Give Monthly" />
                    </datalist>

                    <div className="input-div">
                        <input type="number" id="otheramount" placeholder="₹ Other amount" required />
                        <label htmlFor="otheramount"></label>
                    </div>

                    <div className="input-div">
                        <input type="text" id="fullname" placeholder="Full Name" required />
                        <label htmlFor="fullname"><span style={{ color: "red" }}>*</span></label>
                    </div>

                    <div className="input-div">
                        <input type="date" id="dob-input" placeholder="DOB" required />
                        <label id="dob" htmlFor="dob">DOB<span style={{ color: "red" }}>*</span></label>
                    </div>

                    <div className="input-div">
                        <input type="email" id="email" placeholder="Email" required />
                        <label htmlFor="email"><span style={{ color: "red" }}>*</span></label>
                    </div>

                    <div className="input-div">
                        <input type="number" id="phone-num" placeholder="Phone No." required />
                        <label htmlFor="phone-num"><span style={{ color: "red" }}>*</span></label>
                    </div>

                    <div className="input-div">
                        <input type="text" id="address" placeholder="Address" required />
                        <label htmlFor="address" ><span style={{ color: "red" }}>*</span></label>
                    </div>

                    <div className="input-div">
                        <input type="text" id="pincode" placeholder="Pincode" required />
                        <label htmlFor="pincode"><span style={{ color: "red" }}>*</span></label>
                    </div>

                    <div className="input-div">
                        <input type="text" id="city" placeholder="City" required />
                        <label htmlFor="city"><span style={{ color: "red" }}>*</span></label>
                    </div>

                    <div className="input-div">
                        <input type="text" id="state" placeholder="State" required />
                        <label htmlFor="state"><span style={{ color: "red" }}>*</span></label>
                    </div>

                    <div className="input-div">
                        <input type="text" id="country" placeholder="Country" required />
                        <label htmlFor="country"><span style={{ color: "red" }}>*</span></label>
                    </div>

                    <div className="input-div">
                        <input type="number" id="pan-num" placeholder="PAN No." required />
                        <label htmlFor="pan-num"><span style={{ color: "red" }}>*</span></label>
                    </div>

                    <p id="small-info">
                        Information is being collected to comply with government regulations and shall be treated as confidential. These details shall not be divulged for any other purpose. By sharing your details, you agree to receive stories and updates from Sajhe Sapne via mobile, Whatsapp, landline, email and post. <br /> If you’d like to change this, please send us an email on sapnewaalis@gmail.com.
                    </p>
                    <div id="checkbox-tick">
                        <input id="check" type="checkbox" />
                        <label id="check-label" htmlFor="check">I hereby declare that I am a citizen of India, making this donation out of my own funds. The information provided above is correct to the best of my knowledge. I know that all further communications will be done on contact details provided above.</label>
                    </div>

                    <button className="continue-to-payment">Continue to payment</button>

                </form>
            </div>
            <Footer />
        </>
    )
}

export default DonateNow;