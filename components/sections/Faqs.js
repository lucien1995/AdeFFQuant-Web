'use client'
import { useState } from 'react'


export default function Faqs() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>

            <section className="faqs-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">frequently asked questions</span>
                        <h2>Agency is building a top<br /> business sectors</h2>
                    </div>
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="image-box">
                                            <figure className="image overlay-anim"><img src="/images/resource/faq.jpg" alt="" /></figure>
                                            <div className="exp-box">
                                                <span className="count">26</span>
                                                <h4 className="title">Years <br />Experience</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        {/* Faq Block */}
                                        <div className="faq-block">
                                            <div className="inner-box">
                                                <div className="title-box">
                                                    <i className="icon fa fa-long-arrow-alt-right" />
                                                    <h6 className="title">High Quality Services</h6>
                                                </div>
                                                <div className="text">Lorem ipsum is simply free text dol sit amet, passage of.</div>
                                            </div>
                                        </div>
                                        {/* Faq Block */}
                                        <div className="faq-block">
                                            <div className="inner-box">
                                                <div className="title-box">
                                                    <i className="icon fa fa-long-arrow-alt-right" />
                                                    <h6 className="title">Perfect Business Solution</h6>
                                                </div>
                                                <div className="text">Lorem ipsum is simply free text dol sit amet, passage of.</div>
                                            </div>
                                        </div>
                                        {/* Faq Block */}
                                        <div className="faq-block">
                                            <div className="inner-box">
                                                <div className="title-box">
                                                    <i className="icon fa fa-long-arrow-alt-right" />
                                                    <h6 className="title">Commited to Deliver</h6>
                                                </div>
                                                <div className="text">Lorem ipsum is simply free text dol sit amet, passage of.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* FAQ Column */}
                        <div className="faq-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <ul className="accordion-box wow fadeInRight">
                                    {/*Block*/}
                                    <li className="accordion block active-block">
                                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>What does your process look like?
                                            <div className="icon fa fa-plus" />
                                        </div>
                                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                            </div>
                                        </div>
                                    </li>
                                    {/*Block*/}
                                    <li className="accordion block active-block">
                                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>Learn how we create unmatched solutions
                                            <div className="icon fa fa-plus" />
                                        </div>
                                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                            </div>
                                        </div>
                                    </li>
                                    {/*Block*/}
                                    <li className="accordion block active-block">
                                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>How long do services take to complete?
                                            <div className="icon fa fa-plus" />
                                        </div>
                                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                            </div>
                                        </div>
                                    </li>
                                    {/*Block*/}
                                    <li className="accordion block active-block">
                                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>How can i find my financial record?
                                            <div className="icon fa fa-plus" />
                                        </div>
                                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
