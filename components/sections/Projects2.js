
import Link from "next/link"

export default function Projects2() {
    return (
        <>

            <section className="projects-section pt-0">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">our portfolio</span>
                        <h2>Explore our new recently <br />completed projects.</h2>
                    </div>
                    <div className="outer-box">
                        <div className="row">
                            {/* Project Block */}
                            <div className=" project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/page-project-details"><img src="/images/resource/project-1.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Development</span>
                                        <h4 className="title"><Link href="/page-project-details" >Marketing webdesign</Link></h4>
                                    </div>
                                </div>
                            </div>
                            {/* Project Block */}
                            <div className=" project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/page-project-details"><img src="/images/resource/project-2.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Development</span>
                                        <h4 className="title"><Link href="/page-project-details" >Marketing webdesign</Link></h4>
                                    </div>
                                </div>
                            </div>
                            {/* Project Block */}
                            <div className=" project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/page-project-details"><img src="/images/resource/project-3.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Development</span>
                                        <h4 className="title"><Link href="/page-project-details" >Marketing webdesign</Link></h4>
                                    </div>
                                </div>
                            </div>
                            {/* Project Block */}
                            <div className=" project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/page-project-details"><img src="/images/resource/project-4.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Development</span>
                                        <h4 className="title"><Link href="/page-project-details" >Marketing webdesign</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
