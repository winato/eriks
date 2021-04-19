import React from 'react'
import { Heading } from './styled';
import Checkbox from '../common/Checkbox/Checkbox';

export default function ProductsSidebar({ products, onChange, selected }) {
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (value) {
      const newArray = [...selected, name]
      onChange(newArray)
    } else {
      const removed = selected.filter((item) => item !== name);
      onChange(removed);
    }
  }

  const checked = (sku) => {
    return selected.includes(sku);
  }

  return (
    <div>
      {
        products.length
        ? <Heading>je selectie</Heading>
        : null
      }
      {
        products.map((product) => (
          <Checkbox
            key={product.sku}
            onChange={handleInputChange}
            name={product.sku}
            label={product.name}
            checked={checked(product.sku)}
          />
        ))
      }
    </div>
  )
}
