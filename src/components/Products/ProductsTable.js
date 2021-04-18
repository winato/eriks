import React from 'react'
import {
  ProductsHolder,
  StyledTable,
  StyledTd,
  StyledTh,
  StyledTr,
  EmptyTable,
  StyledFieldLabel,
} from './styled';
import Product from '../Product';
import ProductsSidebar from '../ProductsSidebar';
import Badges from './Badges.js';

export default function ProductsTable({
  products,
  fields,
  onFiltersChange,
  initialProducts,
  areDifferent,
}) {
  return (
    <ProductsHolder>
      <StyledTable>
        <thead>
          <StyledTr>
            <StyledTh hideOnMobile paddignRight={Boolean(products.length)} width="300px">
              <ProductsSidebar products={initialProducts} onChange={onFiltersChange}/>
            </StyledTh>
            {
              products.map((product) => (
                <StyledTh key={product.sku}>
                  <Product product={product}/>
                </StyledTh>
              ))
            }
          </StyledTr>
        </thead>
        <tbody>
          <StyledTr>
            { 
              products.length
              ?
              <StyledTd hideOnMobile paddignRight width="300px">
                Keurmerk
              </StyledTd>
              : null
            }
            {
              products.map((product) => (
                <StyledTd key={product.sku} width="300px">
                  <Badges badges={product.badges}/>
                </StyledTd>
              ))
            }
          </StyledTr>
          {
            products.length 
            ? fields.map((field, index) => (
              <StyledTr
                different={areDifferent(products, field)} key={field.name + field}
              >
                <StyledTd paddignRight hideOnMobile>
                  {field}
                </StyledTd>
                {
                  products.map((product) => (
                    <StyledTd key={product.sku} bold>
                      <StyledFieldLabel>
                        {field}: 
                      </StyledFieldLabel>
                      {product[field]}
                    </StyledTd>
                  ))
                }
              </StyledTr>
            ))
            : 
            <EmptyTable>
              <td>
                No Data
              </td>
            </EmptyTable>
          }
        </tbody>
      </StyledTable>
    </ProductsHolder>
  )
}
