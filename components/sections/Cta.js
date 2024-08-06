
import Link from "next/link"

export default function Cta() {
    return (
        <>

            <section className="call-to-action">
                <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/1.jpg)' }} />
                <div className="auto-container">
                    <div className="outer-box wow fadeIn">
                        <figure className="small-image"><img src="/images/resource/img.jpg" alt="" /></figure>
                        <h2 className="title">Better digital marketing <span className="selected">solution</span> <br />and services at your <br />fingertips</h2>
                        <Link href="/page-contact" className="theme-btn btn-style-one light"><span className="btn-title">Discover more</span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
