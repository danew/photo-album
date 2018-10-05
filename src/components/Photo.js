import styled from 'styled-components';

const Photo = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 100%;

  img {
    width: 100%;
  }

  p {
    font-size: 1rem;
  }
`;

export default Photo;