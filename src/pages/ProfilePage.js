/*!

Adopted Design By:
=========================================================
* BLK Design System React - v1.2.0
=========================================================

*/
import React from "react";
import classnames from "classnames";
import Top from "../components/topbutton/Top"
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import ExamplesNavbar from "../components/Navbar/ExamplesNavbar";
import Footer from "../components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("../assets/img/denys.jpg").default,
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("../assets/img/fabien-bazanegue.jpg").default,
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("../assets/img/mark-finn.jpg").default,
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  },[]);
  return (
    <>
      <ExamplesNavbar />

      <div className='wrapper'>
        
        {/*Profile Section */}
        <div className='page-header'>
          <img
            alt='...'
            className='dots'
            src={require('../assets/img/dots.png').default}
          />
          <img
            alt='...'
            className='path'
            src={require('../assets/img/path4.png').default}
          />
          <Container className='align-items-center' id='home'>
            <Row>
              <Col lg='6' md='6'>
                <h1 className='profile-title text-left'>Yunus Kareem</h1>
                <h5 className='text-on-back'>01</h5>
                <p className='profile-description'>
                  An experienced information technology consultant with a
                  demonstrated history of working in the IT industries. Highly
                  skilled in Software Development, Cybersecurity, Cloud
                  Computing, System Administration, Microsoft 365 Admin, Google
                  Suite Admin, Customer service, and IT Support.
                </p>
                <div className='btn-wrapper profile pt-3'>
                  <Button
                    className='btn-icon btn-round'
                    color='twitter'
                    href='https://twitter.com/solayunus'
                    id='tooltip639225725'
                    target='_blank'
                  >
                    <i className='fab fa-twitter' />
                  </Button>
                  <UncontrolledTooltip delay={0} target='tooltip639225725'>
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className='btn-icon btn-round'
                    color='facebook'
                    href='https://www.facebook.com/solayunus'
                    id='tooltip982846143'
                    target='_blank'
                  >
                    <i className='fab fa-facebook-square' />
                  </Button>
                  <UncontrolledTooltip delay={0} target='tooltip982846143'>
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className='btn-icon btn-round'
                    color='linkedin'
                    href='https://linkedin.com/yunuskareem'
                    id='tooltip951161185'
                    target='_blank'
                  >
                    <i className='fab fa-linkedin' />
                  </Button>
                  <UncontrolledTooltip delay={0} target='tooltip951161185'>
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className='ml-auto mr-auto' lg='4' md='6'>
                <Card className='card-coin card-plain'>
                  <CardHeader>
                    <img
                      alt='...'
                      className='img-center img-fluid rounded-circle'
                      src={require('../assets/img/myimage.png').default}
                    />
                    <h4 className='title'>
                      Software Developer | IT Security Expert
                    </h4>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className='nav-tabs-primary justify-content-center'
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={e => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href='#pablo'
                        >
                          Skills
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={e => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href='#pablo'
                        >
                          Projects
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={e => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href='#pablo'
                        >
                          Blogs
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className='tab-subcategories'
                      activeTab={'tab' + tabs}
                    >
                      <TabPane tabId='tab1'>
                        <Table className='tablesorter' responsive>
                          <thead className='text-primary'>
                            <tr>
                              <th className='header'>Web Dev</th>
                              <th className='header'>Database</th>
                              <th className='header'>System Admin</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>REACT</td>
                              <td>MySql</td>
                              <td>M365</td>
                            </tr>
                            <tr>
                              <td>Node</td>
                              <td>PostgreSql</td>
                              <td>G-suite</td>
                            </tr>
                            <tr>
                              <td>javascript</td>
                              <td>MongoDB</td>
                              <td>IT Support</td>
                            </tr>
                            <tr>
                              <td>CSS</td>
                              <td>Firebase</td>
                              <td>PC repair</td>
                            </tr>
                            <tr>
                              <td>HTML</td>
                              <td>CosmosDB</td>
                              <td>Troubleshooting</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId='tab2'>
                        <Table className='tablesorter' responsive>
                          <thead className='text-primary'>
                            <tr>
                              <th className='header'>Projects</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Security Personal Tracking....</td>
                            </tr>
                            <tr>
                              <td>TeamWork Rest API with Node JS</td>
                            </tr>
                            <tr>
                              <td>De cloud23 technology website with React</td>
                            </tr>
                          </tbody>
                          <Button
                            className='btn-simple btn-icon btn-round float-right'
                            color='primary'
                            type='submit'
                            hover='More'
                          >
                            <i className='tim-icons icon-send' />
                          </Button>
                        </Table>
                      </TabPane>

                      <TabPane tabId='tab3'>
                        <Table className='tablesorter' responsive>
                          <thead className='text-primary'>
                            <tr>
                              <th className='header'>Latest Article</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Code from Zero to Hero</td>
                            </tr>
                            <tr>
                              <td>Beginners guide to javascript</td>
                            </tr>
                            <tr>
                              <td>
                                The easy approach to learning how to code{' '}
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

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
