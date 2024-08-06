import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

export default function Funfact() {
    return (
        <>

            <section className="fun-fact-section pull-up">
                <div className="bg bg-pattern-3" />
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row">
                            {/* Counter block*/}
                            <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner">
                                    <div className="icon-box"><i className="flaticon-completed-task" /></div>
                                    <div className="count-box">
                                        <CounterUp count={990} time={3} />
                                    </div>
                                    <h4 className="counter-title">Projects Completed</h4>
                                </div>
                            </div>
                            {/*Counter block*/}
                            <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner">
                                    <div className="icon-box"><i className="flaticon-settings" /></div>
                                    <div className="count-box">
                                        <CounterUp count={370} time={3} />
                                    </div>
                                    <h4 className="counter-title">Repeat Customers</h4>
                                </div>
                            </div>
                            {/*Counter block*/}
                            <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner">
                                    <div className="icon-box"><i className="flaticon-rating" /></div>
                                    <div className="count-box">
                                        <CounterUp count={860} time={3} />
                                    </div>
                                    <h4 className="counter-title">Satisfied Customers</h4>
                                </div>
                            </div>
                            {/*Counter block*/}
                            <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                <div className="inner">
                                    <div className="icon-box"><i className="flaticon-group" /></div>
                                    <div className="count-box">
                                        <CounterUp count={88} time={3} />
                                    </div>
                                    <h4 className="counter-title">Team Members</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
