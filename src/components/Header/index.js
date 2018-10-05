import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 50px;

  h1 {
    font-size: 1.5em;
    text-align: center;
    line-height: 1;
    font-weight: 700;
    margin: 0;
    margin-bottom: 10px;
  }
`;

const Header = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;