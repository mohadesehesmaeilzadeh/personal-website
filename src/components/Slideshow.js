import Slider from "react-slick";
import { Card } from "react-bootstrap";

function Slideshow() {
  const slides = [
    {
      title: "Responsive Layouts",
      text: "Clean pages that look good on desktop, tablet, and mobile screens.",
    },
    {
      title: "React Components",
      text: "Reusable sections built with beginner-friendly functional components.",
    },
    {
      title: "Frontend Skills",
      text: "A simple highlight of HTML, CSS, JavaScript, React, Git, and MUI.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <section className="slideshow-section" aria-label="Website highlights">
      <div className="section-heading text-center">
        <p className="eyebrow">Highlights</p>
        <h2>What This Website Shows</h2>
      </div>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="slide-wrapper" key={slide.title}>
            <Card className="slide-card">
              <Card.Body>
                <span className="slide-number">
                  {index + 1}
                </span>
                <Card.Title>{slide.title}</Card.Title>
                <Card.Text>{slide.text}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Slideshow;
