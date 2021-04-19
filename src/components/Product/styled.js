import styled from 'styled-components';

const blueColor = '#034ea1';

const ProductHeader = styled.h4`
  color: ${blueColor};
  font-size: 1rem;
`
const StyledProduct = styled.div`
  margin: 0;
  text-align: left;
  position: relative;
`

const StyledSubtitle = styled.p`
  font-size: .8rem;
  color: #bcbcbc;
  font-weight: bold;
  margin: .25rem 0;
`

const TrashImg = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  right: 0;
  top: 0;
  position: absolute;
  cursor: pointer;
`
const ProductImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`

export {
  ProductHeader,
  StyledProduct,
  StyledSubtitle,
  TrashImg,
  ProductImage,
}
