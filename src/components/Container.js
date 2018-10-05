import styled from 'styled-components';

const Container = styled.main`
  position: relative;
  width: 370px;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;

  section {
    flex-grow: 1;
    overflow: auto;
    min-height: 0;
  }
`;

export default Container;