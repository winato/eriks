import { ProductHeader, StyledProduct, StyledSubtitle } from './styled';

const Product = ({ product }) => {
  return (
    <StyledProduct>
      <img src={product.productImage} alt={product.Artikelnummer}/>
      <ProductHeader>
        {product.name}
      </ProductHeader>
      <div>{ product.grossPrice }</div>
      <StyledSubtitle>{ product.uom }</StyledSubtitle>
    </StyledProduct>
  )
}

export default Product;
