
import Link from 'next/link'

export default function Team() {
    return (
        <>

            <section className="team-section pb-0">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">meet our team members</span>
                        <h2>Meet the professional team <br />behind the success</h2>
                    </div>
                    <div className="row justify-content-center">
                        {/* Team block
                        <div className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="info-box">
                                    <h4 className="name">Mr. FEI MAI</h4>
                                    <span className="designation">Director</span>
                                </div>
                                <div className="image-box">
                                    {/*<figure className="image"><Link href="/#"><img src="/images/resource/team-2.jpg" alt="" /></Link></figure>*/}
                                    {/*<div className="social-links">*/}
                                    {/*    <Link href="/index-2"><i className="fab fa-twitter" /></Link>*/}
                                    {/*    <Link href="/index-2"><i className="fab fa-facebook-f" /></Link>*/}
                                    {/*    <Link href="/index-2"><i className="fab fa-pinterest-p" /></Link>*/}
                                    {/*    <Link href="/index-2"><i className="fab fa-instagram" /></Link>*/}
                                    {/*</div>*/}
                                    {/*<span className="share-icon fa fa-plus" />
                                </div>
                            </div>
                        </div>*/}
                        {/* Team block */}
                        <div className="team-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box">
                                <div className="info-box">
                                    <h4 className="name"><Link href="/page-team-details">Mr. FENG FU</Link></h4>
                                    <span className="designation">CEO</span>
                                </div>
                                <div className="image-box">
                                    {/*<figure className="image">/!*<Link href="/#">*!/<img src="/images/resource/team-1.jpg" alt="" />/!*</Link>*!/</figure>*/}
                                    {/*<div className="social-links">*/}
                                    {/*    <Link href="/#"><i className="fab fa-twitter" /></Link>*/}
                                    {/*    <Link href="/#"><i className="fab fa-facebook-f" /></Link>*/}
                                    {/*    <Link href="/#"><i className="fab fa-pinterest-p" /></Link>*/}
                                    {/*    <Link href="/#"><i className="fab fa-instagram" /></Link>*/}
                                    {/*</div>*/}
                                    {/*<span className="share-icon fa fa-plus" />*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
