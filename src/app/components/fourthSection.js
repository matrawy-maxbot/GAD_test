import Image from 'next/image';

const DesignSection = () => {
  return (
    <div className="design-section">
        <Image
          className="design"
          src="/images/fourth_section/background_design.png"
          alt="background design"
          width={1920}
          height={650}
          priority={false}
        />
        <div className="content">
          <h1>Creative Projects & Media Solutions</h1>
          <h4>
            Our creative team excels in producing high-quality visual content, including{' '}
            <span>ad designs, video production, and multimedia solutions.</span> We work closely with you to craft
            media that reflects your vision and connects with your target audience.
          </h4>
          <button>
            <span>Explore our designs</span>
            <Image
              src="/images/fourth_section/explore_design_icon.svg"
              alt="explore design"
              width={30}
              height={30}
            />
          </button>
        </div>
        <div className="section-images">
          <div className="center">
            <Image
              src="/images/fourth_section/social_media_design.jpg"
              alt="graphic design"
              width={500}
              height={500}
              style={{ height: 'auto' }}
              priority={false}
            />
          </div>
          <div className="top-right">
            <Image
              src="/images/fourth_section/graphic_design.jpg"
              alt="social media design"
              width={270}
              height={270}
              style={{ height: 'auto' }}
              priority={false}
            />
          </div>
          <div className="bottom-left">
            <Image
              src="/images/fourth_section/ad_design.jpg"
              alt="ad design"
              width={460}
              height={460}
              style={{ height: 'auto' }}
              priority={false}
            />
          </div>
          <div className="design-icon">
            <div className="parent">
              <Image
                src="/images/fourth_section/design_icon.svg"
                alt="design icon"
                width={300}
                height={300}
                style={{ height: 'auto' }}
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
  );
}

const ProgrammingSection = () => {
  return (
    <div className="programming-section">
        <Image
          className="design"
          src="/images/fourth_section/background_design.png"
          alt="background design"
          width={1920}
          height={650}
          priority={false}
        />
        <div className="content">
          <h1>
            Custom <span>Web</span> and <span>Mobile App</span> Development
          </h1>
          <h4>
            We provide comprehensive solutions for designing and developing websites and mobile applications,
            customized to meet your business requirements. Our focus is on creating user-friendly interfaces and
            high-performance systems to deliver a unique and efficient user experience.
          </h4>
          <button>
            <span>Explore our projects</span>
          </button>
        </div>
        <div className="section-images">
          <div className="desktop">
            <Image
              className="desktop-screen"
              src="/images/fourth_section/desktop.png"
              alt="desktop screen"
              width={650}
              height={626}
              priority={false}
              style={{ height: 'auto' }}
            />
            <Image
              className="desktop-image"
              src="/images/fourth_section/desktop_image.png"
              alt="desktop image"
              width={525}
              height={388}
              priority={false}
              style={{ height: 'auto' }}
            />
          </div>
          <div className="mobile">
            <Image
              className="mobile-screen"
              src="/images/fourth_section/mobile.png"
              alt="mobile screen"
              width={300}
              height={460}
              priority={false}
              style={{ height: 'auto' }}
            />
            <Image
              className="mobile-image"
              src="/images/fourth_section/mobile_image.png"
              alt="mobile image"
              width={275}
              height={444}
              priority={false}
              style={{ height: 'auto' }}
            />
          </div>
          <Image
            className="right-kosa"
            src="/images/fourth_section/kosa_1.png"
            alt="right kosa"
            width={136}
            height={262}
            priority={false}
            style={{ height: 'auto' }}
            quality={100}
          />
          <Image
            className="left-kosa"
            src="/images/fourth_section/kosa_2.png"
            alt="left kosa"
            width={300}
            height={363}
            priority={false}
            style={{ height: 'auto' }}
            quality={100}
          />
          <div className="icon-line">
            <div className="programming-line-container">
              <Image
                className="programming-line"
                src="/images/fourth_section/programming_line.png"
                alt="programming line"
                width={145}
                height={475}
                priority={false}
                style={{ height: 'auto' }}
              />
            </div>
            <Image
              className="programming-icon"
              src="/images/fourth_section/programming_icon.png"
              alt="programming icon"
              width={190}
              height={187}
              priority={false}
              style={{ height: 'auto' }}
            />
          </div>
        </div>
        <div className="text-line">
          <Image
            src="/images/fourth_section/text_line.png"
            alt="text line"
            width={327}
            height={258}
            priority={false}
            style={{ height: 'auto' }}
          />
          <div className="text">Creative Solutions Tailored to Your Needs ..!</div>
        </div>
      </div>
  );
}

const PrintSection = () => {
  return (
    <div className="print-section">
        <Image
          className="design"
          src="/images/fourth_section/background_design.png"
          alt="background design"
          width={1920}
          height={650}
          priority={false}
        />
        <div className="content">
          <div>
            <h1>Printing and Design Services</h1>
            <h2>Providing High-Quality, Professional Printing Solutions</h2>
          </div>
          <h4>
            We offer a comprehensive range of printing and design services tailored to meet all your business and
            personal printing needs. From branding and business cards to awards and stamps, we deliver everything you
            need with precision and superior quality.
          </h4>
          <button>
            <span>Elevate Your Brand with Us</span>
            <Image
              src="/images/fourth_section/marketting_button_icon.png"
              alt="marketing design"
              width={50}
              height={51}
              priority={false}
            />
          </button>
        </div>
        <div className="section-images">
          <div className="vest-container">
            <Image
              className="vest"
              src="/images/fourth_section/vest.png"
              alt="vest design"
              width={384}
              height={514}
              priority={false}
              quality={100}
              style={{ width: 'auto' }}
            />
            <div className="vest-image-container">
              <Image
                className="vest-image"
                src="/images/fourth_section/vest_print.png"
                alt="printing design"
                width={150}
                height={93.5}
                priority={false}
                style={{ height: 'auto' }}
              />
            </div>
            <Image
              className="vest-paint-tool"
              src="/images/fourth_section/paint_tool.svg"
              alt="paint tool"
              width={119}
              height={150}
              priority={false}
              style={{ height: 'auto' }}
            />
          </div>
          <div className="cup-container">
            <Image
              className="cup"
              src="/images/fourth_section/cup.png"
              alt="cup design"
              width={140}
              height={205}
              priority={false}
              style={{ width: 'auto' }}
              quality={100}
            />
            <Image
              className="cup-text"
              src="/images/fourth_section/cup_text.png"
              alt="printing cup design"
              width={100}
              height={75}
              priority={false}
              style={{ height: 'auto' }}
              quality={100}
            />
          </div>
          <Image
            className="paint-tool"
            src="/images/fourth_section/paint_tool.svg"
            alt="paint tool"
            width={163}
            height={205}
            priority={false}
            style={{ height: 'auto' }}
          />
          <Image
            className="notebook"
            src="/images/fourth_section/notebook.png"
            alt="notebook"
            width={179}
            height={228}
            priority={false}
            style={{ width: 'auto' }}
          />
        </div>
      </div>
  );
}

const FourthSection = () => {
  return (
    <div id="fourth_section" className="fo-section">
      {/* Design Section */}
      <DesignSection />

      {/* Programming Section */}
      <ProgrammingSection />

      {/* Print Section */}
      <PrintSection />
      
    </div>
  );
}

export default FourthSection;