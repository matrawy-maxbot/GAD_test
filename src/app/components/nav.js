import Image from 'next/image';

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="./images/first_section/logo.png"
          alt="GAD"
          width={101}
          height={48}
        />
      </div>
      <ul className="navSections">
        <li className="clients">
          <a href="#third_section"></a>
          <span>Clients</span>
          <div className="point"></div>
        </li>
        <li className="services focus">
          <a href="#fourth_section"></a>
          <span>Services</span>
          <div className="point"></div>
        </li>
        <li className="feedback">
          <a href="#fifth_section"></a>
          <span>Feedback</span>
          <div className="point"></div>
        </li>
        <li className="contactUs">
          <a href="#last_section"></a>
          <span>Contact Us</span>
          <div className="point"></div>
        </li>
      </ul>
      <div className="button">
        <button>Create Request</button>
      </div>
    </nav>
  );
};

export default Nav;
