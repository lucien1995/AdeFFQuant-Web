
import Link from "next/link"

export default function Services2() {
    return (
        <>

            <section className="services-section-two">
                <div className="bg bg-pattern-12" />
                <div className="auto-container">
                    <div className="sec-title text-center light">
                        <span className="sub-title">our services</span>
                        <h2>Explore what services <br />we’re offering</h2>
                    </div>
                    <div className="row">
                        {/* Service Block Two */}
                        <div className="service-block-two col-lg-3 col-md-6 col-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/service2-1.jpg" alt="" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title">Website  <br />Development</h5>      {/*<h5 className="title"><Link href="page-service-details">Website  <br />Development</Link></h5>*/}
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-web-development" />
                                    <div className="text">Creating stunning and responsive websites to elevate your online presence.</div>
                                </div>
                            </div>
                        </div>
                        {/* Service Block Two */}
                        <div className="service-block-two col-lg-3 col-md-6 col-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/service2-2.jpg" alt="" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title">Mobile <br />Applications </h5>      {/*<h5 className="title"><Link href="page-service-details">Mobile <br />Applications</Link></h5>*/}
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-digital-services" />
                                    <div className="text">Developing high-performance mobile applications tailored to your business needs.</div>
                                </div>
                            </div>
                        </div>
                        {/* Service Block Two */}
                        <div className="service-block-two col-lg-3 col-md-6 col-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/service2-3.jpg" alt="" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title">AI  <br />Integration</h5>      {/*<h5 className="title"><Link href="page-service-details">AI  <br />Integration</Link></h5>*/}
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-technology" />
                                    <div className="text">Integrating advanced AI to enhance your applications and business processes.</div>
                                </div>
                            </div>
                        </div>
                        {/* Service Block Two */}
                        <div className="service-block-two col-lg-3 col-md-6 col-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/service-11.jpg" alt="" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title">Digital  <br />Marketing </h5>      {/*<h5 className="title"><Link href="page-service-details">AI  <br />Integration</Link></h5>*/}
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-targeted-marketing" />
                                    <div className="text">Boosting online visibility and engagement with effective digital marketing.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
