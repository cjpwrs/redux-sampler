/**
 * Created by cjpowers on 6/26/16.
 */
import React, {PropTypes} from 'react';
import ProductListRow from './ProductListRow';

const ProductList = ({products}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
      </thead>
      <tbody>
      {products.map(product =>
        <ProductListRow key={product.id} product={product} />
      )}
      </tbody>
    </table>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
