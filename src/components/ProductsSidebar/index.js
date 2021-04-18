import React, { useState, useEffect } from 'react'
import { Sidebar, Heading } from './styled';
import Checkbox from '../common/Checkbox/Checkbox';

export default function ProductsSidebar({ products, onChange }) {
  const [selected, setSelected] = useState([]);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (value) {
      const newArray = [...selected, name]
      setSelected(newArray);
      onChange(newArray)
    } else {
      const removed = selected.filter((item) => item !== name);
      setSelected(removed);
      onChange(removed);
    }
  }

  useEffect(() => {
    if (!products.length) return;

    const skus = products.map(({ sku }) => sku);

    setSelected(skus);

  }, [products]);

  const checked = (sku) => {
    return selected.includes(sku);
  }

  return (
    <Sidebar>
      <Heading>je selectie</Heading>
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
    </Sidebar>
  )
}
