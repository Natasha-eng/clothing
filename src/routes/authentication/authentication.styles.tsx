import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 950px) {
    width: 90vw;  
  }

  @media screen and (max-width: 900px) {

    button {
      min-width: 115px;
      padding: 0 10px;
      font-size: 12px;
    }
  }

  @media screen and (max-width: 700px) {
      flex-direction: column;
      align-items: center;
}
`;
