import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import './style1.css'

function Projects() {
    
  const certificates = [
    'Home Service Management System',
    'Portfolio',
    'Weather Analyzer Using API',
    'Youtube Clone',
    'Calculator'
  ];
  return (
    <>
    <Container className="my-2" style={{textAlign:"center"}}>
    <h1><i class="fa-solid fa-book me-2"></i>Projects</h1><hr/>
    <div className="container my-5">
      <h2 className='mb-4'>Best Projects</h2>
      <ul className="list-unstyled d-flex flex-wrap gap-3">
        {certificates.map((cer, index) => (
          <li
            key={index}
            className="bg-light border rounded px-3 py-2 fw-semibold d-flex align-items-center"
          >
            <span className="text-success me-2">✔</span> {cer}
          </li>
        ))}
      </ul>
    </div>
      <Carousel interval={1200} className='mt-4 mb-4'> 
        <Carousel.Item>
          <img className="d-block w-100" src={require('./p1.jpg')} alt="" />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={require('./p2.jpg')} alt="" />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={require('./p3.jpg')} alt="" />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={require('./p4.jpg')} alt="" />
        </Carousel.Item>
      </Carousel>
    </Container>
    </>
  )
}

export default Projects
