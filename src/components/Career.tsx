import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>Current Student (2nd Year)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Currently maintaining a CGPA of 8.23/10. Actively exploring core computer science
              concepts, data structures, and algorithms to build a strong foundation in software engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DSDL Technical Club</h4>
                <h5>Web Development Domain Member</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              An active member participating in the Web Development domain, collaborating with peers,
              and learning modern web technologies to build impactful projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Structures & Algorithms</h4>
                <h5>Problem Solver</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Successfully solved 150+ DSA problems using C++, focusing on arrays, strings,
              stacks, and queues to optimize time and space complexity. Continuously preparing
              for competitive programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
