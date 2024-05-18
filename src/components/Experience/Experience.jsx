import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--black)':''}}>0</div>
        <span  style={{color: darkMode?'white':''}}>It is a begining </span>
        <span>Fresher</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--black)':''}}>20+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--black)':''}}>0</div>
        <span  style={{color: darkMode?'white':''}}>It's not far from me</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
