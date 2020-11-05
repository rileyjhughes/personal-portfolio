import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  height: 3.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: #94b4a4;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  letter-spacing: +1px;
  font-weight: 100;
  position: absolute;
  bottom: 0;
`

const Footer = () => (
  <StyledFooter>
    Icon by&nbsp;
    <a
      target="_blank"
      rel="nofollow noopener noreferrer"
      href="https://icons8.com"
    >
      Icons8
    </a>
  </StyledFooter>
)

export default Footer
