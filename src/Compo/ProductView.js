import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import ProductList from '../Help/ProductList';

const ProductView = () => {
  const options = {
    type: 'slide',
    perPage: 3,
    perMove: 1,
  };

  return (
    <Splide options={options}>
      <SplideTrack>
        {ProductList.map((product, index) => (
          <SplideSlide key={index}>
            <div className="product-card">
              <img src={product.Image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
            </div>
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
};

export default ProductView;
