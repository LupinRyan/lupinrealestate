const Footer = () => {
    return (
    <div>
        <section className="row  mt-4 footer-background-color">
            <div className="col-md-4 text-left text-light">
                <h5 className="p-2 text-center text-primary">About Us</h5>
                <p>​Lupin's Crest Luxury Real Estate is a distinguished boutique real estate company in Kenya, renowned for its commitment to sustainable and luxurious living. Their flagship development, Crest Estate, spans 1,360 acres near Nanyuki, offering panoramic views of Mount Kenya, the Aberdares, and the Lolldaiga Hills. The estate is bordered by the Nanyuki River and features undulating terrain with rich red soils and lush greenery. Since its inception in 2016, the estate has undergone extensive ecological restoration, transforming it into a sanctuary where forests teem with wildlife and greenways weave through vibrant grasslands .​</p>
                <br/>
            </div>
            <div className="col-md-4 text-light">
                <h5 className="p-2 text-center text-primary">Reach Us Out</h5>
                <input className="form-control" type="email" placeholder="Enter your email"/>
                <br/>
                <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
                <br/>
                <input type="submit" value="Send Message" className="btn btn-primary"/>
            </div>
            <div className="col-md-4 ">
                <h4 className="text-center text-primary">Connect With Us</h4>
                <br/>
                <a href="https://facebook.com">
                <img src="images/fb.png" alt="" className="socialspictures"/>
                </a>
                <a href="https://instagram.com">
                <img src="images/gram.jpeg" alt="" className="socialspictures"/>
                </a>
                <a href="https://threads.com">
                <img src="images/threads.jpeg" alt="" className="socialspictures"/>
                </a>

                
                <p>You can contact us via Gmail: ryanj5245@gmail.com </p>
                <p>The Customer Service Number is: 0796299307</p>
            </div>
        </section>
        <footer className="text-white text-center p-2 mt-2 bootom-footer">
                <h5>Developed by Lupin &copy; 2025.All rights reserved</h5>
        </footer>
    </div>
    );
    }
     
   
    export default Footer;