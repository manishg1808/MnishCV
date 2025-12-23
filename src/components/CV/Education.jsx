import React from 'react';

const Education = () => {
  return (
    <section className="education">
      <h3>Academic Qualifications</h3>
      <div className="education-item">
        <div className="edu-row">
          <span className="edu-school">Dr. A.P.J. Abdul Kalam Technical University</span>
          <span className="edu-year-right">2020 – 2024</span>
        </div>
        <div className="edu-row">
          <span className="edu-degree">Bachelor of Technology (B.Tech) in Computer Science and Engineering</span>
          <span className="edu-info-right">CPI: 7.4 (Till 6th Sem.)</span>
        </div>
      </div>
      <div className="education-item">
        <div className="edu-row">
          <span className="edu-school">St. Xavier's School</span>
          <span className="edu-year-right">2019 – 2020</span>
        </div>
        <div className="edu-row">
          <span className="edu-board">CBSE (Class XII)</span>
          <span className="edu-info-right">Percentage: 83.2%</span>
        </div>
      </div>
      <div className="education-item">
        <div className="edu-row">
          <span className="edu-school">St. Xavier's School</span>
          <span className="edu-year-right">2017 – 2018</span>
        </div>
        <div className="edu-row">
          <span className="edu-board">CBSE (Class X)</span>
          <span className="edu-info-right">Percentage: 81.3%</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
