import { ProductHeader, StyledProduct, StyledSubtitle, TrashImg, ProductImage } from './styled';
import trashImg from '../../assets/trash.svg';
import productImage from '../../assets/product-image.png';

const Product = ({ product, onDelete }) => {
  return (
    <StyledProduct>
      <TrashImg src={trashImg} onClick={() => onDelete(product.sku)}/>
      <ProductImage src={productImage} alt={product.sku}/>
      <ProductHeader>
        {product.name}
      </ProductHeader>
      <div>{ product.grossPrice }</div>
      <StyledSubtitle>{ product.uom }</StyledSubtitle>
    </StyledProduct>
  )
}

export default Product;
