import styled from 'styled-components';

const blueColor = '#034ea1';

const ProductHeader = styled.h4`
  color: ${blueColor};
  font-size: 1rem;
`
const StyledProduct = styled.div`
  margin: 0;
  text-align: left;
`

const StyledSubtitle = styled.p`
  font-size: .8rem;
  color: #bcbcbc;
  font-weight: bold;
  margin: .25rem 0;
`

export {
  ProductHeader,
  StyledProduct,
  StyledSubtitle,
}
