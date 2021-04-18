import { ProductHeader, StyledProduct, StyledSubtitle, TrashImg } from './styled';
import trashImg from '../../assets/trash.svg';

const Product = ({ product, onDelete }) => {
  return (
    <StyledProduct>
      <TrashImg src={trashImg} onClick={onDelete}/>
      <img src={product.productImage} alt={product.sku}/>
      <ProductHeader>
        {product.name}
      </ProductHeader>
      <div>{ product.grossPrice }</div>
      <StyledSubtitle>{ product.uom }</StyledSubtitle>
    </StyledProduct>
  )
}

export default Product;
