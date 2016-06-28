/**
 * Created by cjpowers on 6/26/16.
 */
import React, {PropTypes} from 'react';
import ProductListRow from './ProductListRow';

const ProductList = ({products, onCreate, onDelete}) => {
  return (
    <div className="product-holder-admin">
      <div onClick={onCreate} className="product-box-admin pointer">
        <div className="product-img-holder-admin blue create-product">
          <span onClick={onCreate} className="glyphicon glyphicon-plus blue"></span>
          <h5>Add a Listing</h5>
        </div>
        <div className="product-info-holder-admin">

        </div>
      </div>
      {products.map(product =>
        <ProductListRow key={product.id} product={product} onDelete={onDelete} />
      )}
    </div>

  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onDelete: PropTypes.func
};

export default ProductList;
