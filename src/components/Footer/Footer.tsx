import React from "react";
import styled from "styled-components";
import { Container } from "../../styled/styled";

const Footer = () => {
  return (
    <ConteinerMain>
      <ConteinerFooter>
        <p>© 2023 Howlround Tours Inc.</p>
      </ConteinerFooter>
    </ConteinerMain>
  );
};

const ConteinerMain = styled(Container)`
  width: 100%;
  background: #262626;
`;
const ConteinerFooter = styled(Container)`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;

  display: flex;
  align-items: flex-end;

  color: #ffffff;

  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

export default Footer;
