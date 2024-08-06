import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer">
                <div className="bg bg-pattern-6" />
                {/* Footer Uppper */}
                <div className="footer-upper">
                    <div className="auto-container">
                        <div className="row">
                            {/* Contact info Block */}
                            <div className="contact-info-block col-lg-4 col-md-6">
                                <div className="inner">
                                    <i className="icon fa fa-phone-square" />
                                    <span className="sub-title">Call Anytime</span>
                                    <div className="text"><Link href="/index-2">+61 123 123 123</Link></div>
                                </div>
                            </div>
                            {/* Contact info Block */}
                            <div className="contact-info-block col-lg-4 col-md-6">
                                <div className="inner">
                                    <i className="icon fa fa-envelope" />
                                    <span className="sub-title">Send Email</span>
                                    <div className="text"><Link href="/index-2">needhelp@FFQuant.com</Link></div>
                                </div>
                            </div>
                            {/* Contact info Block */}
                            <div className="contact-info-block col-lg-4 col-md-6">
                                <div className="inner">
                                    <i className="icon fa fa-map-marker" />
                                    <span className="sub-title">Address</span>
                                    <div className="text">Level 3 169 Fullarton Rd DULWICH SA 5065</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Widgets Section */}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/* Footer COlumn */}
                            <div className="footer-column col-xl-5 col-lg-4 col-md-12">
                                <div className="footer-widget about-widget">
                                    <div className="widget-content">
                                        <div className="logo"><Link href="/index-2"> <img src="/images/logo.png" alt="" /></Link></div>
                                        <div className="text">Welcome to FF Quant <br /> Dedicated to AI integration and APP development</div>
                                        <ul className="social-icon-two">
                                            <li><Link href="/index-2"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-facebook" /></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-pinterest" /></Link></li>
                                            <li><Link href="/index-2"><i className="fab fa-instagram" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Footer COlumn */}
                            <div className="footer-column col-xl-4 col-lg-4 col-md-6">
                                <div className="widget links-widget">
                                    <h5 className="widget-title">Explore</h5>
                                    <div className="widget-content">
                                        <ul className="user-links two-column">
                                            <li><Link href="/page-team">Meet Our Team</Link></li>
                                            {/*<li><Link href="/page-about">About</Link></li>*/}
                                            <li><Link href="/page-about">What We Do</Link></li>
                                            {/*<li><Link href="/#">Support</Link></li>*/}
                                            {/*<li><Link href="/#">Latest News</Link></li>*/}
                                            {/*<li><Link href="/#">New Projects</Link></li>*/}
                                            <li><Link href="/page-contact">Contact</Link></li>
                                            {/*<li><Link href="/#">Shop</Link></li>*/}
                                            {/*<li><Link href="/#">Faqs</Link></li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Footer COlumn */}
                            {/*<div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">*/}
                            {/*    <div className="widget newsletter-widget">*/}
                            {/*        <h5 className="widget-title">Newsletter</h5>*/}
                            {/*        <div className="widget-content">*/}
                            {/*            <div className="text">Subsrcibe for our latest resources</div>*/}
                            {/*            <div className="subscribe-form">*/}
                            {/*                <form method="post" action="#">*/}
                            {/*                    <div className="form-group">*/}
                            {/*                        <input type="email" name="email" className="email" placeholder="Email Address" required />*/}
                            {/*                    </div>*/}
                            {/*                    <div className="form-group">*/}
                            {/*                        <button type="button" className="theme-btn btn-style-one hover-light"><span className="btn-title">Subscribe</span></button>*/}
                            {/*                    </div>*/}
                            {/*                </form>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                {/*  Footer Bottom */}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="copyright-text">© Copyright reserved by <Link href="/index-2">adeffquant.com</Link></div>
                    </div>
                </div>
            </footer>

        </>
    )
}
