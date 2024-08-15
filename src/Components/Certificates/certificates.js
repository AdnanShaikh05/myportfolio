import React from 'react'
import './style.css'
import { Container, Carousel } from 'react-bootstrap';

function Certificates() {
  const certificates = [
    'React',
    'Node.js',
    'MongoDB',
    'Trends and Future of Full Stack Development',
    'Live Project Training and Documentation',
  ];
  return (
    <>
    <Container className="my-2" style={{textAlign:"center"}}>
    <h1><i class="fa-solid fa-rectangle-list me-2"></i>Achieved Certificates</h1><hr/>
    <div className="container my-5">
      <h2 className='mb-4'>Cources & Webinar Certificates</h2>
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
          <img className="d-block w-100" src={require('./react.png')} alt="" />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={require('./node.png')} alt="" />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={require('./mongo.png')} alt="" />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={require('./w1.png')} alt="" />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100" src={require('./w2.png')} alt="" />
        </Carousel.Item>
      </Carousel>
    </Container>
    </>
  )
}

export default Certificates;
