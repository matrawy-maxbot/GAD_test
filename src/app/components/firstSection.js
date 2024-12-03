import Image from 'next/image';

const ProjectCircle = ({ id, parentId, imgSrc, altText }) => {
    return (
      <div id={id} className="circle">
        <div id={parentId} className="project">
            <svg viewBox="0 0 335.81 394.32" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="inherit"
                    d="m28.35,375.6s140.15,42.12,279.12,0c14.98-4.54,28.35-12.69,28.35-28.35V28.35c0-15.66-12.69-28.35-28.35-28.35H28.35C12.69,0,0,12.69,0,28.35v318.9c0,15.66,12.69,28.35,28.35,28.35Z"
                />
            </svg>
            <Image
                src={imgSrc}
                alt={altText}
                width={232.5}
                height={255.88}
                loading="lazy"
            />
        </div>
      </div>
    );
  };

const Line = ({ lineId, circles, circleId }) => {
    return (
      <div className={`${lineId}`}>
        <div className="circles">
          {circles.map((circle, index) => (
            <ProjectCircle
              key={index}
              parentId={`${circleId}-${index + 1}-project`}
              id={`${circleId}-circle${index + 1}`}
              imgSrc={circle.imgSrc}
              altText={circle.altText}
            />
          ))}
        </div>
      </div>
    );
  };

const Lines = () => {
    const linesData = [
      {
        lineId: "f-line",
        circleId: "fl",
        circles: [
          { imgSrc: "/images/first_section/project_1.png", altText: "Project 1" },
          { imgSrc: "/images/first_section/project_1.png", altText: "Project 2" },
          { imgSrc: "/images/first_section/project_1.png", altText: "Project 3" },
          { imgSrc: "/images/first_section/project_1.png", altText: "Project 4" },
        ],
      },
      {
        lineId: "s-line",
        circleId: "sl",
        circles: [
          { imgSrc: "/images/first_section/project_1.png", altText: "Project 5" },
          { imgSrc: "/images/first_section/project_1.png", altText: "Project 6" },
          { imgSrc: "/images/first_section/project_1.png", altText: "Project 7" },
          { imgSrc: "/images/first_section/project_1.png", altText: "Project 8" },
        ],
      },
      {
        lineId: "th-line",
        circleId: "thl",
        circles: [
          { imgSrc: "/images/first_section/project_1.png", altText: "Project 9" },
          { imgSrc: "/images/first_section/project_1.png", altText: "Project 10" },
          { imgSrc: "/images/first_section/project_1.png", altText: "Project 11" },
          { imgSrc: "/images/first_section/project_1.png", altText: "Project 12" },
        ],
      },
    ];
  
    return (
      <div className="lines">
          <Image
          className="projects-lines"
            src="/images/first_section/lines.png"
            alt="gad projects line"
            width={1950} // Set the appropriate width
            height={504} // Set the appropriate height
            priority
          />
        {linesData.map((line, index) => (
          <Line key={index} lineId={line.lineId} circleId={line.circleId} circles={line.circles} />
        ))}
      </div>
    );
};

const FirstSection = () => {
  return (
    <>
        <div id="first_section" className="f-section">
            <div className="content">
                <h1 className="title"><span className="special">Creative</span> <span>Solutions</span><br/><span className="title-bottom"><span>for Your</span> <span className="special">business</span></span></h1>
                <h3 className="sub-title">Expert Design, Development and Marketing servies</h3>
                <h6 className="description">From crafting stunning <span>websites and mobile apps</span> to executing powerful<br/><span>marketing</span> strategies, <span>designing</span> impactful ads, and managing social media<br/>pages, we help businesses of all sizes reach their <span className="dark-color">goals.</span></h6>
                <button className="start-button">
                    <span>Start your project now</span>
                </button>
            </div>
            <div className="background">
                <Lines />
            </div>
        </div>
    </>
  );
}

export default FirstSection;