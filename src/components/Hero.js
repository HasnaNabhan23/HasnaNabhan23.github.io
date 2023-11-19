import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Image1 from "./../assets/nana.jpg";
import Image2 from "./../assets/HasnaHome1.png";
import { Carousel } from "react-bootstrap";
import hero1 from "./../assets/GedungIsola.jpg";
import hero2 from "./../assets/museum.jpeg";

const Hero = () => {
  return (
    <main className="flex-shrink-0">
      <div>
        <Container>
          <Row className="align-items-center justify-content-center"> {/* Menggunakan justify-content-center */}
            <Col>
              <div className="text-center">
                <h3>Hallo! My Name is Hasna</h3>
                <p>Hello! I am Hasna Nabhan, the founder and creator behind this website. I want to share a little about myself</p>
              </div>
            </Col>
            <Col className="text-center">
              <div className="d-flex justify-content-center align-items-center"> {/* Menggunakan d-flex, justify-content-center, align-items-center */}
                <Image src={Image2} roundedCircle alt="Foto Profil" width={500} height={500} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Hero;
