

export default function Contact2() {
    return (
        <>

            <section className="contact-section-two">
                <div className="bg bg-pattern-11" />
                <div className="image-box">
                    <div className="image"><img src="/images/resource/contact-img.png" alt="" /></div>
                    <div className="image-overlay" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        {/* Form Column */}
                        <div className="form-column col-lg-7 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title light">
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
                                                <input type="email" name="Email" placeholder="Email address" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                                <input type="text" name="phone" placeholder="Phone" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                                <input type="text" name="subject" placeholder="Subject" required />
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
