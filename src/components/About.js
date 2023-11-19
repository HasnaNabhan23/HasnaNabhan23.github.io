import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Image1 from "./../assets/nana.jpg";

const About = () => {
  return (
    <main className="flex-shrink-0">
      <div>
        <h1 className="mt-5 text-center mb-4">About me</h1>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h3>Hallo! My Name is Hasna</h3>
              <p>Hello! I am Hasna Nabhan, the founder and creator behind this website. I want to share a little about myself</p>
              <h3>Who Am I ?</h3>
              <p>I am a student at the Indonesian University of Education, Computer Science education study program</p>
              <h3>Interests and Dreams</h3>
              <p>Saya memiliki ketertarikan khusus dalam bidang seni, khususnya dalam hal menggambar selain itu saya juga suka membaca novel. Impian saya adalah menjadi seorang dosen dan animator</p>
            </Col>
            <Col className="text-center"> {/* Menambahkan kelas text-center */}
              <Image src={Image1} roundedCircle alt="Foto Profil" width={250} height={300} />
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default About;
