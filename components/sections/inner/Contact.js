
import Link from 'next/link'
import { useState } from 'react';

export default function Contactpage() {

	 const sendEmail = (event) => {
        event.preventDefault();  // 阻止表单的默认提交行为

        try {
            // 获取表单数据
            const name = event.target.form_name.value;
            const email = event.target.form_email.value;
            const subject = event.target.form_subject.value;
            const phone = event.target.form_phone.value;
            const message = event.target.form_message.value;

            // 生成 mailto 链接
            const mailtoLink = `mailto:example@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
            )}`;

            // 打开默认邮件客户端
            window.location.href = mailtoLink;
        } catch (error) {
            console.error("An error occurred while trying to send the email:", error);
            alert("An error occurred while trying to send the email. Please try again later.");
        }
    }


    return (
        <>

	<section className="contact-details">
		<div className="container ">
			<div className="row">
				<div className="col-xl-7 col-lg-6">
					<div className="sec-title">
						<span className="sub-title">Send us email</span>
						<h2>Feel free to write</h2>
					</div>
					<form id="contact_form" name="contact_form" onSubmit={sendEmail}>
						<div className="row">
							<div className="col-sm-6">
								<div className="mb-3">
									<input name="form_name" className="form-control" type="text" placeholder="Enter Name" required/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="mb-3">
									<input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" required/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="mb-3">
									<input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject" required/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="mb-3">
									<input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
								</div>
							</div>
						</div>
						<div className="mb-3">
							<textarea name="form_message" className="form-control required" rows="7" placeholder="Enter Message" required></textarea>
						</div>
						<div className="mb-3">
							<input name="form_botcheck" className="form-control" type="hidden" value="" />
							<button type="submit" className="theme-btn btn-style-one me-3" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>
							<button type="reset" className="theme-btn btn-style-one bg-theme-color5"><span className="btn-title">Reset</span></button>
						</div>
					</form>
				</div>

				<div className="col-xl-5 col-lg-6">
					<div className="contact-details__right">
						<div className="sec-title">
							<span className="sub-title">Need any help?</span>
							<h2>Get in touch with us</h2>
							<div className="text">For any inquiries or assistance, feel free to contact us through any of the following methods. We're here to help you with all your digital needs.</div>
						</div>
						<ul className="list-unstyled contact-details__info">
							{/*<li>*/}
							{/*	<div className="icon">*/}
							{/*		<span className="lnr-icon-phone-plus"></span>*/}
							{/*	</div>*/}
							{/*	<div className="text">*/}
							{/*		<h6>Have any question?</h6>*/}
							{/*		<a href="/index-2"><span>Free</span> +92 (020)-9850</a>*/}
							{/*	</div>*/}
							{/*</li>*/}
							<li>
								<div className="icon">
									<span className="lnr-icon-envelope1"></span>
								</div>
								<div className="text">
									<h6>Write email</h6>
									<a href="mailto:adeffquant@outlook.com.au">adeffquant@outlook.com.au</a>
								</div>
							</li>
							<li>
								<div className="icon">
									<span className="lnr-icon-location"></span>
								</div>
								<div className="text">
									<h6>Visit anytime</h6>
									<span>Level 3 169 Fullarton Rd DULWICH SA 5065</span>
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
