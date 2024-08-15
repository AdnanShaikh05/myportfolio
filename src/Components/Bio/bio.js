import React from 'react'
import './style.css'

function Bio() {
  return (
    <>
    <div className="container my-5">
      <div className="row align-items-center">
        
        <div className="col-12 col-md-8">
          
          <h1 className='mt-5'>
            Hi, My Name is <span style={{color:"rgb(176, 31, 176)"}}>Adnan.</span><br/> I am a <span style={{color:"rgb(176, 31, 176)"}}>Student </span>
             of <span style={{color:"rgb(176, 31, 176)"}}>Computer Science..</span>
          </h1>
          <p style={{fontSize:"18px"}} className='mt-3'>
            I am a Student of Computer Science and Information Technology (MSC CA & IT) at Department Of Computer Science, Hemchandracharya North Gujarat University, Patan. I am currently pursuing Master's Degree in MSc CA&IT. I am interested to make websites, Apps and others using MERN Stack Technology.
          </p>
          <p style={{fontSize:"18px"}} className='mt-3'>
            I have basic understanding of Programming and Web Technologies also having a good knowledge in programming languages like JAVA and PHP.
          </p>
          
        </div>
        <div className="col-12 col-md-4 text-center">
          <img
            src={require('./myphoto.jpg')}
            alt="Profile"
            className="bio-photo rounded-circle img-fluid"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Bio
