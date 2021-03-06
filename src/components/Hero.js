import React from "react";
import styled from "styled-components";
import mainBcg from "../images/bcg.png";
import Fade from "react-reveal/Fade";

export default function Hero({ img, title, max, children }) {
  return (
    <Fade top duration="1000" distance="20px">
      <HeroWrapper max={max} img={img}>
        <div className="banner">
          <h1 className="title">Webinar Duration 1 Hour</h1>
          <h4 className="title2">Let us know about your webinar schedule</h4>
          {children}
        </div>
      </HeroWrapper>
    </Fade>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.max ? "100vh" : "60vh")};
  color: var(--mainWhite);
  background: url(${(props) => props.img});
  backgroud-size: cover;
  width: 100%;
  position: relative;
  background-size: 100% 108% !important;
  background-attachment: fixed !important;

  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }
  .title2 {
    padding-top: 2rem;
    font-size: 1.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    letter-spacing: var(--mainSpacing);
  }
`;

Hero.defaultProps = {
  img: mainBcg,
};
