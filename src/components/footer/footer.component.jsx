import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { HeadingH4 } from '../../styled';
import { Description, MediaIcon, MediaLogo, MediaLinks, FooterContainer } from './footer.styles';

import Logo from '../../img/logo.png'

const Footer = () => {
  return (
    <FooterContainer>
      <Col>
        <Row>
          <Link to="/">
            <MediaLogo src={ Logo } alt="Surfo"/>
          </Link>
        </Row>
        <Row>
          <Link to="https://www.instagram.com/" target="_blank">
            <MediaIcon>
              <ion-icon size="large" name="logo-instagram"></ion-icon>
            </MediaIcon>
          </Link>
          <Link to="https://www.facebook.com/" target="_blank">
            <MediaIcon>
              <ion-icon size="large" name="logo-facebook"></ion-icon>
            </MediaIcon>
          </Link>
          <Link to="https://www.twitter.com/" target="_blank">
            <MediaIcon>
              <ion-icon size="large" name="logo-twitter"></ion-icon>
            </MediaIcon>
          </Link>
        </Row>
        <Row>
          <Description>
            Copyright &copy;<span> 2023 </span> by Don'nuts,
            <br />
            Aleksandra Depta <br />
            Inc. All rights reserved.
          </Description>
        </Row>
      </Col>
      <Col>
        <HeadingH4>Contact us</HeadingH4>
        <Description>
          623 Amaizing St., 2nd Floor,<br />
          San Francisco, CA 94105
        </Description>
        <MediaLinks to="tel:215-23331-6120">215-23331-6120</MediaLinks>
        <br />
        <MediaLinks to="mailto:hello@donnuts.com">hello@donnuts.com</MediaLinks>
      </Col>
      <Col>
        <Row><HeadingH4>Account</HeadingH4></Row>
        <Row><MediaLinks to="/">Log in</MediaLinks></Row>
        <Row><MediaLinks to="/">Sign up</MediaLinks></Row>
        <Row><MediaLinks to="/">iOS app</MediaLinks></Row>
        <Row><MediaLinks to="/">Android app</MediaLinks></Row>
      </Col>
      <Col>
        <Row><HeadingH4>Company</HeadingH4></Row>
        <Row> <MediaLinks to="/">About Don'nuts</MediaLinks></Row>
        <Row><MediaLinks to="/">How we work</MediaLinks></Row>
        <Row><MediaLinks to="/">Our team</MediaLinks></Row>
        <Row><MediaLinks to="/">Careers</MediaLinks></Row>
      </Col>
      <Col>
        <Row><HeadingH4>More</HeadingH4></Row>
        <Row><MediaLinks to="/">For Business</MediaLinks></Row>
        <Row><MediaLinks to="/">Partners</MediaLinks></Row>
        <Row><MediaLinks to="/">Press</MediaLinks></Row>
        <Row><MediaLinks to="/">Certificates</MediaLinks></Row>
      </Col>
    </FooterContainer>
  )
}

export default Footer;