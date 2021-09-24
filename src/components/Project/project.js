import React from 'react'

import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from 'reactstrap';


const carouselItems = [
  {
    src: require('../../assets/img/portImg/heqlasSec.jpg').default,
    altText: 'Slide 1',
    caption: 'Security company website, United Kingdom',
  },
  {
    src: require('../../assets/img/portImg/Payceler.jpg').default,
    altText: 'Slide 2',
    caption: 'FX company website , United Kingdom',
  },
  {
    src: require('../../assets/img/portImg/portfolio.jpg').default,
    altText: 'Slide 3',
    caption: 'Project portfolio, United Kingdom',
  },
];

function Project() {
    return (
      <>
        <div className='section'>
          <Container>
            <Row className='justify-content-between'>
              <Col md='6'>
                <Row className='justify-content-between align-items-center'>

                      <UncontrolledCarousel items={carouselItems} />
                 
                </Row>
              </Col>
              <Col md='5'>
                <h1 className='profile-title text-left'>Projects</h1>
                <h5 className='text-on-back'>02</h5>
                <p className='profile-description text-left'>
                  Projects are built following languages best practice and standard architecture. Some languages and framework used for projects include HTML, CSS,Scss, javascript,PHP, React, Nodejs, Solidity,
                </p>
                <div className='btn-wrapper pt-3'>
                  <Button
                    className='btn-simple'
                    color='primary'
                    href='#pablo'
                    onClick={e => e.preventDefault()}
                  >
                    <i className='tim-icons icon-book-bookmark' /> Github
                  </Button>
                  {/* <Button
                    className='btn-simple'
                    color='info'
                    href='#pablo'
                    onClick={e => e.preventDefault()}
                  >
                    <i className='tim-icons icon-bulb-63' /> Check it!
                  </Button> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
}

export default Project
