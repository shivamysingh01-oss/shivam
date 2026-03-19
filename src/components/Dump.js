import React from "react";
import "../styles/Dump.css";
import Carousel from "react-bootstrap/Carousel";

class Dump extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.handleSelect = this.handleSelect.bind(this);
this.carouselTimer = setInterval(() => {
      if (!document.querySelector('#dump:hover')) {
        const nextIndex = (this.state.activeIndex + 1) % 4;
        this.setState({ activeIndex: nextIndex });
      }
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.carouselTimer);
  }

  handleSelect(selectedIndex) {
    this.setState({ activeIndex: selectedIndex });
  }

  render() {
    const dumpGallery = {
      "hi :)": {
        image: process.env.PUBLIC_URL + "/assets/hi.png",
      },
      "coffee run": {
        image: process.env.PUBLIC_URL + "/assets/coffeerun.png",
      },
      "desk setup": {
        image: process.env.PUBLIC_URL + "/assets/setup.png",
      },

      "fav <3": {
        image: process.env.PUBLIC_URL + "/assets/game.png",
      },
    };

    return (
      <div id="dump">
        <div className="section-header">
          <span className="section-title">/ dump</span>
        </div>
        <Carousel activeIndex={this.state.activeIndex} onSelect={this.handleSelect} interval={null}>
          {Object.keys(dumpGallery).map((key) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={dumpGallery[key]["image"]}
                alt={key}
                loading="lazy"
              />
              <Carousel.Caption>
                <h3>{key}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Dump;
