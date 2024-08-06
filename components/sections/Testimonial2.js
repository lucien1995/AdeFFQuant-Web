
'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

				breakpoints:{
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    };
export default function Testimonial2() {
    return (
        <>

            <section className="testimonial-section-two">
                <div className="bg bg-pattern-9" />
                <div className="auto-container">
                    <div className="row">
                        {/* Title Column */}
                        <div className="title-column col-xl-3 col-lg-4 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">testimonials</span>
                                    <h2>What they’re talking about</h2>
                                    <div className="text">Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free text quis bibendum.</div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial Column */}
                        <div className="testimonial-column col-xl-9 col-lg-8 col-md-12">
                            <div className="inner-column">
                                <Swiper {...swiperOptions} className="testimonial-carousel-two owl-carousel default-navs">
                                    {/* Testimonial Block */}
                                    <SwiperSlide className="testimonial-block-two">
                                        <div className="inner-box">
                                            <div className="content-box">
                                                <figure className="thumb"><img src="/images/resource/testi-thumb-2.jpg" alt="" /></figure>
                                                <div className="rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <div className="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                                                <div className="info-box">
                                                    <h6 className="name">Sarah albert</h6>
                                                    <span className="designation">Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Testimonial Block */}
                                    <SwiperSlide className="testimonial-block-two">
                                        <div className="inner-box">
                                            <div className="content-box">
                                                <figure className="thumb"><img src="/images/resource/testi-thumb-3.jpg" alt="" /></figure>
                                                <div className="rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <div className="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                                                <div className="info-box">
                                                    <h6 className="name">Mike hardson</h6>
                                                    <span className="designation">Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Testimonial Block */}
                                    <SwiperSlide className="testimonial-block-two">
                                        <div className="inner-box">
                                            <div className="content-box">
                                                <figure className="thumb"><img src="/images/resource/testi-thumb-4.jpg" alt="" /></figure>
                                                <div className="rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <div className="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                                                <div className="info-box">
                                                    <h6 className="name">Aleesha brown</h6>
                                                    <span className="designation">Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Testimonial Block */}
                                    <SwiperSlide className="testimonial-block-two">
                                        <div className="inner-box">
                                            <div className="content-box">
                                                <figure className="thumb"><img src="/images/resource/testi-thumb-2.jpg" alt="" /></figure>
                                                <div className="rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <div className="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                                                <div className="info-box">
                                                    <h6 className="name">Sarah albert</h6>
                                                    <span className="designation">Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Testimonial Block */}
                                    <SwiperSlide className="testimonial-block-two">
                                        <div className="inner-box">
                                            <div className="content-box">
                                                <figure className="thumb"><img src="/images/resource/testi-thumb-3.jpg" alt="" /></figure>
                                                <div className="rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <div className="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                                                <div className="info-box">
                                                    <h6 className="name">Mike hardson</h6>
                                                    <span className="designation">Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Testimonial Block */}
                                    <SwiperSlide className="testimonial-block-two">
                                        <div className="inner-box">
                                            <div className="content-box">
                                                <figure className="thumb"><img src="/images/resource/testi-thumb-4.jpg" alt="" /></figure>
                                                <div className="rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <div className="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                                                <div className="info-box">
                                                    <h6 className="name">Aleesha brown</h6>
                                                    <span className="designation">Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
