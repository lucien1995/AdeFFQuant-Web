

export default function Contact1() {
    return (
        <>

            <section className="contact-section">
                <div className="anim-icons">
                    <span className="icon icon-line3" />
                    <span className="icon icon-arrow1" />
                    <span className="icon icon-arrow2" />
                </div>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="bg bg-pattern-5" />
                        <div className="sec-title">
                            <span className="sub-title">Get in touch</span>
                            <h2>Let’s work together</h2>
                        </div>
                        {/* Contact Form */}
                        <div className="contact-form wow fadeInLeft">
                            {/*Contact Form*/}
                            <form method="post" action="get" id="contact-form">
                                <div className="row">
                                    <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                        <input type="text" name="full_name" placeholder="Your name" required />
                                    </div>
                                    <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                        <input type="email" name="Email" placeholder="Email Address" required />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <textarea name="message" placeholder="Write a message" required />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Send a message</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/*End Contact Form */}
                        <figure className="image"><img src="/images/resource/girl.png" alt="" /></figure>
                    </div>
                </div>
            </section>
        </>
    )
}
