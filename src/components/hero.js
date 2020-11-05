import React from "react"
import styled from "styled-components"

import logo from "../images/icons8-linkedin-48.png"

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #d2f5e3;
  }
  .socials {
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Hero = () => {
  return (
    <StyledSection id="hero">
      <h1 className="title">
        Hey there,<br />
        I'm Riley Hughes
      </h1>
      <h2 className="subtitle">
        I translate data into <span className="highlighted">insights</span> and build <span className="highlighted">apps for the web</span>.
      </h2>
      <div className="description">
        Data Analyst and Data Scientist. Based in Australia.
      </div>
      <a className="socials" 
      href="https://www.linkedin.com/in/rileyjhughes/"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="External Link"
    >
      <img src={logo} alt="Visit LinkedIn Profile" />
    </a>
    </StyledSection>
  )
}

export default Hero