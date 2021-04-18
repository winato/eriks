import { useState, useEffect } from 'react';
import { getProducts } from '../../api';
import { Heading, BlueBorder } from './styled';
import ProductsTable from './ProductsTable';

const Products = () => {
const [products, setProduct] = useState([]);
const [initialProducts, setInitialProduct] = useState([]);
const [fields, setFields] = useState([]);

const clearData = (products) => {
  return products.map((product) => {
    const {
      salePrice, manufacturerName, grossPrice, BUP_UOM, BUP_Value, uom, productImage, badges, stepQuantity,
      BUP_Conversion, minQuantity, manufacturerImage, name, sku, listPrice, channel, display, atp, ...rest
    } = product;

    return rest;
  })
}

const sortByAlphabeth = (array) => {
  return array.sort((prev, next) => prev.localeCompare(next))
}

const areDifferent = (array, field) => {
  const fields = array.map((item) => item[field]);
  return !fields.every((item)=> item === fields[0])
}

  useEffect(() => {
    const fetchData = () => {
      getProducts()
        .then(({ data }) => {
          setProduct(data.products);
          setInitialProduct(data.products);
          const clearDataElement = clearData(data.products)[0];
          setFields(sortByAlphabeth(Object.keys(clearDataElement)))
        })
    }
    fetchData();
  }, []);

  const onFiltersChange = (array) => {
    const filteredProducts = initialProducts.filter((product) => {
      return array.find((sku) => sku === product.sku);
    })

    setProduct(filteredProducts)
  }

  return (
    <>
      <Heading>
        {products.length} producten vergelijken
      </Heading>
      <ProductsTable
        initialProducts={initialProducts}
        fields={fields}
        products={products}
        onFiltersChange={onFiltersChange}
        areDifferent={areDifferent}
      />
      <BlueBorder/>
    </>
  )
}

export default Products;
