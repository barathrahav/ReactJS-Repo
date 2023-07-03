import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Super() {
    return (
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://assets.ccbp.in/frontend/react-js/rcb-img.png" />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://assets.ccbp.in/frontend/react-js/csk-img.png" />
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Super;