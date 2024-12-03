import Image from 'next/image';

const clients = [
  { src: './images/third_section/user_1.jpg', alt: 'GAD client image', className: 'top-left' },
  { src: './images/third_section/user_2.png', alt: 'GAD client image', className: 'bottom-left' },
  { src: './images/third_section/user_3.png', alt: 'GAD client image', className: 'center' },
  { src: './images/third_section/user_4.avif', alt: 'GAD client image', className: 'top-right' },
  { src: './images/third_section/user_5.avif', alt: 'GAD client image', className: 'bottom-right' },
];

const ThirdSection = () => {
  return (
    <>
      <div id="third_section" className="th-section">
        <h1 className="title">Join Our Growing Community<br/>of Satisfied Clients</h1>
        <h3 className="sub-title">We&apos;ve helped our clients achieve success by meeting their requirements with innovative solutions<br/>in design, development, and marketing.</h3>
        <div className="counter">
            <div className="counter-num">
                <div className="c-num-container" data-target="1">
                    <div className="c-num">0</div>
                    <div className="c-num">1</div>
                    <div className="c-num">2</div>
                    <div className="c-num">3</div>
                    <div className="c-num">4</div>
                    <div className="c-num">5</div>
                    <div className="c-num">6</div>
                    <div className="c-num">7</div>
                    <div className="c-num">8</div>
                    <div className="c-num">9</div>
                </div>
            </div>
            <div className="counter-comma">,</div>
            <div className="counter-num">
                <div className="c-num-container" data-target="2">
                    <div className="c-num">0</div>
                    <div className="c-num">1</div>
                    <div className="c-num">2</div>
                    <div className="c-num">3</div>
                    <div className="c-num">4</div>
                    <div className="c-num">5</div>
                    <div className="c-num">6</div>
                    <div className="c-num">7</div>
                    <div className="c-num">8</div>
                    <div className="c-num">9</div>
                </div>
            </div>
            <div className="counter-num">
                <div className="c-num-container" data-target="5">
                    <div className="c-num">0</div>
                    <div className="c-num">1</div>
                    <div className="c-num">2</div>
                    <div className="c-num">3</div>
                    <div className="c-num">4</div>
                    <div className="c-num">5</div>
                    <div className="c-num">6</div>
                    <div className="c-num">7</div>
                    <div className="c-num">8</div>
                    <div className="c-num">9</div>
                </div>
            </div>
            <div className="counter-num">
                <div className="c-num-container" data-target="8">
                    <div className="c-num">0</div>
                    <div className="c-num">1</div>
                    <div className="c-num">2</div>
                    <div className="c-num">3</div>
                    <div className="c-num">4</div>
                    <div className="c-num">5</div>
                    <div className="c-num">6</div>
                    <div className="c-num">7</div>
                    <div className="c-num">8</div>
                    <div className="c-num">9</div>
                </div>
            </div>
            <div className="text-line">
                <Image
                  src="./images/third_section/line.png"
                  alt="text line"
                  width={722} // Adjust as per your design
                  height={310} // Adjust as per your design
                  priority={false} // Optional for lazy loading
                />
                <div className="text">Clients who have<br/>trusted us</div>
            </div>
        </div>
        <h3>Whether you&apos;re a <span>small startup</span> or an <span>enterprise</span>,<br/>we&apos;re ready to deliver results that make a difference.</h3>
        <button>
          <span>Start your journey with us</span>
          <span className="arrow">
            <Image
              src="./images/third_section/arrow.png"
              alt="start-arrow"
              width={12} // Adjust as per your design
              height={10.5} // Adjust as per your design
              priority={false} // Optional for lazy loading
            />
          </span>
        </button>
        <div className="client-images">
          {clients.map((client, index) => (
              <div key={index} className={`client-img ${client.className}`}>
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  priority={false} // Optional for lazy loading
                />
              </div>
          ))}
        </div>
    </div>
    </>
  );
}

export default ThirdSection;