import Image from 'next/image';

const LastSection = () => {
    return (
        <div id="last_section" className="last-section">
            <h1>
                Have any <span>Questions</span> ..?
            </h1>
            <h3>Feel free to reach out to us through any of the following channels</h3>
            <div className="support-design">
                <div className="small-design">
                    <div className="row call-whatsapp">
                        <div className="call">
                            <div className="line-parent">
                                <Image
                                    loading="lazy"
                                    className="call-line"
                                    src="./images/last_section/call_line_small.svg"
                                    alt="call line"
                                    width={50}
                                    height={50}
                                />
                                <div className="line-point"></div>
                            </div>
                            <div className="icon-parent">
                                <Image
                                    loading="lazy"
                                    className="call-icon"
                                    src="./images/last_section/call_icon.svg"
                                    alt="call icon"
                                    width={36}
                                    height={36}
                                />
                                <h5>
                                    <span>Feel free</span>
                                    <br />
                                    to call us with any inquiries
                                </h5>
                            </div>
                        </div>
                        <div className="phone-numbers">
                            <div className="phone-number">
                                <span>+201120327504</span>
                            </div>
                            <div className="phone-number">
                                <span>+201284896722</span>
                            </div>
                        </div>
                        <div className="whatsapp">
                            <div className="line-parent">
                                <Image
                                    loading="lazy"
                                    className="whatsapp-line"
                                    src="./images/last_section/whatsapp_line_small.svg"
                                    alt="whatsapp line"
                                    width={50}
                                    height={50}
                                />
                                <div className="line-point"></div>
                            </div>
                            <div className="icon-parent">
                                <Image
                                    loading="lazy"
                                    className="whatsapp-icon"
                                    src="./images/last_section/whatsapp_icon.svg"
                                    alt="whatsapp icon"
                                    width={50}
                                    height={50}
                                />
                                <h5>
                                    Chat with us on <span>Whatsapp</span>
                                    <span className="long-term">
                                        {" "}
                                        using the
                                        <br />
                                        provided <span>contact numbers</span>
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="row behance-facebook">
                        <div className="behance">
                            <Image
                                loading="lazy"
                                className="behance-icon"
                                src="./images/last_section/behance_icon.svg"
                                alt="behance icon"
                                width={43}
                                height={43}
                            />
                            <h5>
                                Explore our projects in <span>Behance</span>
                            </h5>
                            <h6>overview of our projects</h6>
                        </div>
                        <div className="facebook">
                            <Image
                                loading="lazy"
                                className="facebook-icon"
                                src="./images/last_section/facebook_icon.svg"
                                alt="facebook icon"
                                width={43}
                                height={43}
                            />
                            <h5>
                                Follow us on <span>Facebook</span> page
                            </h5>
                            <h6>to see last news</h6>
                        </div>
                    </div>
                </div>

                {/* Support Image */}
                <Image
                    className="support-img"
                    src="./images/last_section/support_design.png"
                    alt="support img"
                    width={530}
                    height={353}
                    priority={false}
                    style={{ height: 'auto' }}
                    quality={100}
                />

                {/* Top Left */}
                <div className="top-left">
                    <div className="lastSection-line-container">
                        <Image
                            loading="lazy"
                            className="line"
                            src="./images/last_section/behance_line.svg"
                            alt="line"
                            width={289}
                            height={150}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="behance">
                        <Image
                            loading="lazy"
                            className="behance-icon"
                            src="./images/last_section/behance_icon.svg"
                            alt="behance icon"
                            width={43}
                            height={43}
                        />
                        <h5>
                            Explore our projects in <span>Behance</span>
                            <span className="behance-text-line-container">
                                <Image
                                    src="./images/last_section/behance_text_line.svg"
                                    alt="behance text line"
                                    width={92}
                                    height={4.2}
                                />
                            </span>
                        </h5>
                    </div>
                </div>

                {/* Bottom Left */}
                <div className="bottom-left">
                    <div className="lastSection-line-container">
                        <Image
                            loading="lazy"
                            className="line"
                            src="./images/last_section/facebook_line.svg"
                            alt="line"
                            width={300}
                            height={45}
                            style={{ height: 'auto' }}
                        />
                    </div>
                    <div className="facebook">
                        <Image
                            loading="lazy"
                            className="facebook-icon"
                            src="./images/last_section/facebook_icon.svg"
                            alt="facebook icon"
                            width={43}
                            height={43}
                        />
                        <h5>
                            Follow us on <span>Facebook</span> page
                        </h5>
                        <h6>to see last news</h6>
                    </div>
                </div>

                {/* Top Right */}
                <div className="top-right">
                    <div className="lastSection-line-container">
                        <Image
                            loading="lazy"
                            className="line"
                            src="./images/last_section/call_line.svg"
                            alt="line"
                            width={184}
                            height={150}
                            style={{ height: 'auto' }}
                        />
                    </div>
                    <div className="call">
                        <Image
                            loading="lazy"
                            className="call-icon"
                            src="./images/last_section/call_icon.svg"
                            alt="call icon"
                            width={36}
                            height={36}
                        />
                        <div className="phone-numbers">
                            <div className="phone-number">
                                <span>+201120327504</span>
                            </div>
                            <div className="point"></div>
                            <div className="phone-number">
                                <span>+201284896722</span>
                            </div>

                            <div className="bottom-right">
                                <div className="lastSection-line-container">
                                    <Image
                                        loading="lazy"
                                        className="line"
                                        src="./images/last_section/whatsapp_line.svg"
                                        alt="line"
                                        width={373}
                                        height={301}
                                    />
                                </div>
                                <div className="start-point"></div>
                                <div className="end-point"></div>
                                <div className="whatsapp">
                                    <Image
                                        loading="lazy"
                                        className="whatsapp-icon"
                                        src="./images/last_section/whatsapp_icon.svg"
                                        alt="whatsapp icon"
                                        width={50}
                                        height={50}
                                    />
                                    <h5>
                                        Chat with us on <span>Whatsapp</span> using the
                                        <br />
                                        provided <span>contact numbers</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="footer">
                <Image
                    className="footer-logo"
                    src="./images/last_section/footer_logo.png"
                    alt="gad logo"
                    width={116.2}
                    height={55}
                />
                <div className="footer-text">
                    <Image
                        className="copyright-icon"
                        src="./images/last_section/copyright_icon.svg"
                        alt="copyright icon"
                        width={25}
                        height={25}
                    />
                    <h6>
                        All Rights Reserved.{" "}
                        <span>Unauthorized duplication or distribution</span> of any
                        content is prohibited
                    </h6>
                    <div className="footer-text-line-container">
                        <Image
                            className="footer-text-line"
                            src="./images/last_section/footer_line.svg"
                            alt="footer text line"
                            width={262}
                            height={9.5}
                        />
                    </div>
                </div>
                <div className="buttons">
                    <div className="lang button">
                        <div className="active"></div>
                        <div className="en-lang">EN</div>
                        <div className="ar-lang">AR</div>
                    </div>
                    <div className="theme button">
                        <div className="active"></div>
                        <div className="light-icon">
                            <Image
                                src="./images/last_section/light_icon.svg"
                                alt="light icon"
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className="dark-icon">
                            <Image
                                src="./images/last_section/dark_icon.svg"
                                alt="dark icon"
                                width={30}
                                height={30}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default LastSection;