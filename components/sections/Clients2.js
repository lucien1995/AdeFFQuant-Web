'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
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

    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}

export default function Clients2() {
    return (
        <>

            <section className="clients-section">
                <div className="auto-container">
                    {/* Sponsors Outer */}
                    <div className="sponsors-outer">
                        {/*clients carousel*/}
                        <Swiper {...swiperOptions} className="clients-carousel owl-carousel owl-theme">
                            <SwiperSlide className="client-block"> <Link href="/#"><img src="/images/clients/1.png" alt="" /></Link> </SwiperSlide>
                            <SwiperSlide className="client-block"> <Link href="/#"><img src="/images/clients/1.png" alt="" /></Link> </SwiperSlide>
                            <SwiperSlide className="client-block"> <Link href="/#"><img src="/images/clients/1.png" alt="" /></Link> </SwiperSlide>
                            <SwiperSlide className="client-block"> <Link href="/#"><img src="/images/clients/1.png" alt="" /></Link> </SwiperSlide>
                            <SwiperSlide className="client-block"> <Link href="/#"><img src="/images/clients/1.png" alt="" /></Link> </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
