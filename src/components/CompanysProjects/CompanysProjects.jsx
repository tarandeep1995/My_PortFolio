import React from "react";
import "../CompanysProjects/CompanysProjects.css";

const CompanysProjects = () => {
  return (
    <div className="CompanysProjects-container" id="companysProjects">
      <h1 className="CompanysProjects-heading">Education</h1>
      <div className="CompanysProjects-item">
        <h2 className="CompanysProjects-title">MCA 2012-2015</h2>
        <span className="CompanysProjects-subtitle">Vivekananda Institute of Professional Studies (VIPS), Delhi</span>
      </div>
      <div className="CompanysProjects-item">
        <h2 className="CompanysProjects-title">BCA 2016-2019</h2>
        <span className="CompanysProjects-subtitle">Indira Gandhi National Open University, Delhi</span>
      </div>
    </div>
  );
};

export default CompanysProjects;
