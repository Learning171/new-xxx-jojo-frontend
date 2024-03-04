// ProductImage.jsx (or wherever you prefer to define it)
import React from 'react';

function ProductImage({ src, alt, width, height }) {
  return <img src={src} alt={alt} width={width} height={height} />;
}

export default ProductImage;
