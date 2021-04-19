import { useState, useEffect } from 'react';
import { getProducts } from '../../api';
import { Heading, BlueBorder, HideOnDesktop } from './styled';
import ProductsTable from './ProductsTable';
import ProductsSidebar from '../ProductsSidebar';

const Products = () => {
const [products, setProduct] = useState([]);
const [initialProducts, setInitialProduct] = useState([]);
const [fields, setFields] = useState([]);
const [selected, setSelected] = useState([]);

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

  useEffect(() => {
    const skus = products.map(({ sku }) => sku);

    setSelected(skus);
  }, [products])

  const onFiltersChange = (array) => {
    const filteredProducts = initialProducts.filter((product) => {
      return array.find((sku) => sku === product.sku);
    });

    setProduct(filteredProducts)
  }

  const onDelete = (sku) => {
    const filterInitial = initialProducts.filter((product) => product.sku !== sku);
    setInitialProduct(filterInitial);
    setProduct(filterInitial);
  }

  return (
    <>
      <Heading>
        {products.length} producten vergelijken
      </Heading>
      <HideOnDesktop>
        <ProductsSidebar
          products={initialProducts}
          onChange={onFiltersChange}
          selected={selected}
        />
      </HideOnDesktop>
      <ProductsTable
        initialProducts={initialProducts}
        fields={fields}
        products={products}
        selected={selected}
        onFiltersChange={onFiltersChange}
        areDifferent={areDifferent}
        onDelete={onDelete}
      />
      <BlueBorder/>
    </>
  )
}

export default Products;
