import React from "react";

const Footer = () => {
    return (
    <footer className="bg-custom text-white mt-5 pt-4">
        <div className="container" >
            <div className="row mb-4">
                
                <div className="col-sm-8">Learn first About Discount</div>
                <div className="col-sm-4">
                    <form className="d-flex" style={{ backgroundColor: '#dec836ff' }}>
                        <input 
                            className="form-control me-2 rounded-2" 
                            type="email" 
                            placeholder="Enter your Email Address" 
                            aria-label="Email subscription" 
                        />
                        <button className="btn btn-outline-warn" type="submit">Send</button>
                    </form>  
                </div>
                <hr className="mt-3 " />
            </div>  

            <div className="row mb-4 mt-5">
                <div className="col">lets us help You</div>
                <div className="col">Makes Money with us</div>
                <div className="col">Get to know us</div>
                <div className="col">For Buyers</div>
            </div>
            


            <div className="row justify-content-md-center mb-4 mt-5">
                <div className="col col-lg-2"> +92 1345677</div>
                <div className="col-md-auto">Send Mail</div>
                <div className="col col-lg-2">Write to us</div>
            </div>   


            <hr className=""></hr>
            <div className="text-center mb-3 pb-5">
                <p className="text-black ">Copyrights</p>
            </div>
        </div>  
    </footer>
    );
}

export default Footer;
