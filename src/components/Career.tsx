import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>C&K Management Ltd</h5>
              </div>
              <h3>May – June 2025</h3>
            </div>
            <p>
              Engineered and integrated an AI-driven online exam proctoring system featuring facial recognition and behavior monitoring modules. Utilizing Python, OpenCV, and FastAPI, I optimized the backend detection pipeline to guarantee real-time incident alerts with sub-2-second latency. Throughout development, I closely collaborated with cross-functional teams to securely expose these computer vision models to the web frontend, resulting in a cohesive and reliable monitoring experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
