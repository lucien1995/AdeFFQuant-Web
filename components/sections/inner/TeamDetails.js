import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
})
import Link from 'next/link'

export default function TeamDetails() {
    return (
        <>

{/* Team Details Start */}
	<section className="team-details">

		<div className=""></div>
		<div className="container pb-100">
			<div className="team-details__top pb-70">
				<div className="row">
					<div className="col-xl-6 col-lg-6">
						<div className="team-details__top-left">
							<div className="team-details__top-img"> <img src="images/resource/team-details.jpg" alt=""/>
								<div className="team-details__big-text"></div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6">
						<div className="team-details__top-right">
							<div className="team-details__top-content">
								<h3 className="team-details__top-name">Feng Fu</h3>
								<p className="team-details__top-title">CEO</p>
								<p className="team-details__top-text-1">I help my clients stand out and they help me grow.</p>
								<div className="team-details-contact mb-30">
									<h5 className="mb-0">Email Address</h5>
									<div className=""><span>adeffquant@outlook.com.au</span></div>
								</div>
								<div className="team-details-contact">
									<h5 className="mb-0">Web Address</h5>
									<div className=""><span>www.adeffquant.au</span></div>
								</div>
								<div className="team-details-contact mb-30">
									<h5 className="mb-0">Work Place</h5>
									<div className=""><span>Level 3 169 Fullarton Rd DULWICH SA 5065</span></div>
								</div>
								{/*<div className="team-details__social">*/}
								{/*	<Link href="/index-2"><i className="fab fa-twitter"></i></Link>*/}
								{/*	<Link href="/index-2"><i className="fab fa-facebook"></i></Link>*/}
								{/*	<Link href="/index-2"><i className="fab fa-pinterest-p"></i></Link>*/}
								{/*	<Link href="/index-2"><i className="fab fa-instagram"></i></Link> */}
								{/*</div>*/}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*<div className="team-details__bottom pt-100">*/}
			{/*	<div className="row">*/}
			{/*		<div className="col-xl-6 col-lg-6">*/}
			{/*			<div className="team-details__bottom-left">*/}
			{/*				<h4 className="team-details__bottom-left-title">Personal Experience</h4>*/}
			{/*				<p className="team-details__bottom-left-text">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto dolorem ipsum quia</p>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*		<div className="col-xl-6 col-lg-6">*/}
            {/*            /!*Skills*!/*/}
            {/*            <div className="skills team-details__bottom-right">*/}
            {/*                /!*Skill Item*!/*/}
            {/*                <div className="skill-item">*/}
            {/*                    <div className="skill-header">*/}
            {/*                        <h5 className="team-details__progress-title">Marketing</h5>*/}
            {/*                    </div>*/}
            {/*                    <div className="skill-bar ">*/}
            {/*                        <div className="bar-inner">*/}
            {/*                            <div className="bar progress-line" style={{width:"77%"}}>*/}
            {/*                                <div className="skill-percentage">*/}
            {/*                                    <div className="count-box">*/}
            {/*                                        <CounterUp count={77} time={3} />*/}
            {/*                                        %</div>*/}

            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                /!*Skill Item*!/*/}
            {/*                <div className="skill-item">*/}
            {/*                    <div className="skill-header">*/}
            {/*                        <h5 className="team-details__progress-title">Tecnology</h5>*/}
            {/*                    </div>*/}
            {/*                    <div className="skill-bar ">*/}
            {/*                        <div className="bar-inner">*/}
            {/*                            <div className="bar progress-line" style={{width:"52%"}}>*/}
            {/*                                <div className="skill-percentage">*/}
            {/*                                    <div className="count-box">*/}
            {/*                                        <CounterUp count={77} time={3} />*/}
            {/*                                        %</div>*/}

            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                /!*Skill Item*!/*/}
            {/*                <div className="skill-item">*/}
            {/*                    <div className="skill-header">*/}
            {/*                        <h5 className="team-details__progress-title">Business</h5>*/}
            {/*                    </div>*/}
            {/*                    <div className="skill-bar ">*/}
            {/*                        <div className="bar-inner">*/}
            {/*                            <div className="bar progress-line" style={{width:"88%"}}>*/}
            {/*                                <div className="skill-percentage">*/}
            {/*                                    <div className="count-box">*/}
            {/*                                        <CounterUp count={77} time={3} />*/}
            {/*                                        %</div>*/}

            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}
		</div>
	</section>
	{/* Team Details End */}
	<section className="team-contact-form">
		<div className="container pb-100">
			<div className="sec-title text-center">
				<span className="sub-title">Contact With Us Now</span>
				<h2 className="section-title__title">Feel Free to Write Our <br/> Tecnology Experts</h2>
			</div>
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<form id="contact_form" name="contact_form" className="" action="" method="get">
						<div className="row">
							<div className="col-sm-6">
								<div className="mb-3">
									<input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="mb-3">
									<input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="mb-3">
									<input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="mb-3">
									<input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
								</div>
							</div>
						</div>
						<div className="mb-3">
							<textarea name="form_message" className="form-control required" rows="5" placeholder="Enter Message"></textarea>
						</div>
						<div className="mb-3 text-center">
							<input name="form_botcheck" className="form-control" type="hidden" value="" />
							<button type="submit" className="theme-btn btn-style-one me-3" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>
							<button type="reset" className="theme-btn btn-style-one"><span className="btn-title">Reset</span></button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
        </>
    )
}
