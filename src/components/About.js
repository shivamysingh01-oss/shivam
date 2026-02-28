import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Software Engineer</b> at
        <a href="https://www.jio.com/"> Jio</a>, where I help build
        autobidder models that make Jio 5g money.
      </p>
    );
    const two = (
      <p>
        Outside of work, I’m nerdy about tech gadgets, love literary fiction,
        and play way too many battle royale games. Oh, I make content too.
      </p>
    );

    const tech_stack = [
      "Java",
      "MySQL",
      "React.js",
      "Python",
      "Javascript ES6+",
      "C#",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Shiv" src={"/assets/Shiv.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
