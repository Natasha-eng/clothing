import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 600px) {
   flex-direction: column;
   font-size: 30px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    width: unset;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;

  @media screen and (max-width: 600px) {
    width: unset;
    margin-bottom: 30px;
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

   @media screen and (max-width: 600px) {
    padding-left: 0;
  }
`;
