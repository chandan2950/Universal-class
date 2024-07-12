import React from 'react';
import '../Components/OurProgram.css';
import Button from './Button';

const Programs = () => {
  return (
    <div className="programs-container">
      <div className="title-container">
        <h2 className="title">
        <h2 className="title">
          <span className="title-our">OUR</span>
          <span className="title-programs">PROGRAMS</span>
        </h2>
        </h2>
      </div>
      <div className="program-wrapper">
        <div className="program-box" style={{ backgroundColor: '#FFF2D5', position: 'relative' }}>
            <div className="absolute-container">
      {/* Absolute positioned container */}
      <div className="absolute-content">
      <p>ISC+NEET</p>
      </div>
    </div>
          <div className="text-container">
            <h3 className="program-title">ISC + NEET</h3>
            <p className="program-description">
              NEET is a national-level examination conducted by NTA. The candidates who want to get
              admission to medical courses must qualify for the entrance test. NEET questions only come
              from Physics, Chemistry, Zoology, and Botany.
              <br/><br/>
              Powered by IITPACE, Universal High School Dahisar will prepare students for both ISC and NEET (and other
              Medical exams) within the comfort of their school premises. Our coursework is specially created for the
              ISC curriculum to create a synergy between Board and NEET exam preparations during school hours.
            </p>
          </div>
          <div className='ourbutton'>
            <Button/>
            </div>
          
        </div>
        <div className="program-box" style={{ backgroundColor: '#E9EBFF',position: 'relative' }}>
        <div className="absolute-container1">
      {/* Absolute positioned container */}
      <div className="absolute-content2">
      <p>ISC+IIT JEE</p>
      </div>
    </div>
          <div className="text-container">
            <h3 className="program-title">ISC + IIT JEE</h3>
            <p className="program-description">
              IITs are one of the most prestigious colleges in the country. All Engineering aspirants wish to get into one
              of the IITs, but getting into such an institution is a challenging task. A lot of hard work and dedication
              is required to ace JEE Main and JEE Advanced to get into IIT or some other top educational institution in
              the country.
              <br/><br/>
              Powered by IITPACE, Universal High School Dahisar will prepare students for both ISC and IITJEE (and other
              engineering exams) within the comfort of their school premises. Our coursework is specially created for the
              ISC curriculum to create a synergy between Board and NEET exam preparations during school hours.
            </p>
          </div>
          <div className='ourbutton'>
            <Button/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;