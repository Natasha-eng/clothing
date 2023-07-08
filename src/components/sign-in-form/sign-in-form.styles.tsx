import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 900px) {
    width: 45%;
  }

  @media screen and (max-width: 700px) {
     width: 80%;
     margin-bottom: 50px;
}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
