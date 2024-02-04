import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/pexels5.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>WELCOME BACK TO SCHOOL</h3>
            <p>RETURNING TO SEEKING KNOWLEDGE AFTER VACATION</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/pexels6.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>WELCOME BACK TO SCHOOL</h3>
            <p>RETURNING TO SEEKING KNOWLEDGE AFTER VACATION</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/pexels7.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>WELCOME BACK TO SCHOOL</h3>
            <p>RETURNING TO SEEKING KNOWLEDGE AFTER VACATION</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Hero;
