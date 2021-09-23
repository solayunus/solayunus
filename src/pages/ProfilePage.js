/*!

Adopted Design By:
=========================================================
* BLK Design System React - v1.2.0
=========================================================

*/
import React from 'react';
import Top from '../components/topbutton/Top';
// javascript plugin used to create scrollbars on windows

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from 'reactstrap';

// core components
import ExamplesNavbar from '../components/Navbar/ExamplesNavbar';
import Footer from '../components/Footer/Footer.js';
import Profile from '../components/Profile/profile.js';

const carouselItems = [
  {
    src: require('../assets/img/denys.jpg').default,
    altText: 'Slide 1',
    caption: 'Big City Life, United States',
  },
  {
    src: require('../assets/img/fabien-bazanegue.jpg').default,
    altText: 'Slide 2',
    caption: 'Somewhere Beyond, United States',
  },
  {
    src: require('../assets/img/mark-finn.jpg').default,
    altText: 'Slide 3',
    caption: 'Stocks, United States',
  },
];


export default function ProfilePage() {

  return (
    <>
      <ExamplesNavbar />

      <div className='wrapper'>
        {/*Profile Section */}

        <Profile />

        {/*  Project Section */}

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
                  An artist of considerable range, Ryan — the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure. An artist of
                  considerable range.
                </p>
                <div className='btn-wrapper pt-3'>
                  <Button
                    className='btn-simple'
                    color='primary'
                    href='#pablo'
                    onClick={e => e.preventDefault()}
                  >
                    <i className='tim-icons icon-book-bookmark' /> Bookmark
                  </Button>
                  <Button
                    className='btn-simple'
                    color='info'
                    href='#pablo'
                    onClick={e => e.preventDefault()}
                  >
                    <i className='tim-icons icon-bulb-63' /> Check it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Contact US section */}

        <section className='section ' id='contactus'>
          <Container>
            <Row>
              <Col md='6'>
                <Card className='card-plain'>
                  <CardHeader>
                    <h1 className='profile-title text-left'>Contact</h1>
                    <h5 className='text-on-back'>03</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md='6'>
                          <FormGroup>
                            <label>Your Name</label>
                            <Input defaultValue='Fullname' type='text' />
                          </FormGroup>
                        </Col>
                        <Col md='6'>
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder='xxxx@email.com' type='email' />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md='6'>
                          <FormGroup>
                            <label>Phone</label>
                            <Input defaultValue='+XXX-1234567890' type='text' />
                          </FormGroup>
                        </Col>
                        <Col md='6'>
                          <FormGroup>
                            <label>Company</label>
                            <Input defaultValue='Company Name' type='text' />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md='12'>
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder='Hello there!' type='text' />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className='btn-round float-right'
                        color='primary'
                        data-placement='right'
                        id='tooltip341148792'
                        type='button'
                      >
                        Send Info
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement='right'
                        target='tooltip341148792'
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className='ml-auto' md='4'>
                <div className='info info-horizontal'>
                  <div className='icon icon-primary'>
                    <i className='tim-icons icon-square-pin' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Find us at the office</h4>
                    <p>
                      Akobo, Ojurin, <br />
                      100122 Ibadan Oyo State <br />
                      Nigeria
                    </p>
                  </div>
                </div>
                <div className='info info-horizontal'>
                  <div className='icon icon-primary'>
                    <i className='tim-icons icon-mobile' />
                  </div>
                  <div className='description'>
                    <h4 className='info-title'>Give us a ring</h4>
                    <p>
                      Yunus Kareem <br />
                      +234 813 114 836 <br />
                      Mon - Fri, 8:00-22:00 ( UTC+1 )
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer Section */}
        <Footer />
        <Top />
      </div>
    </>
  );
}
