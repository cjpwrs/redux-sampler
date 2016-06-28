/**
 * Created by cjpowers on 6/26/16.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ProductListRow = ({product}) => {
  return(
    <tr>
      <td></td>
      <td><Link to={'/product/' + product.id}>{product.title}</Link></td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td><input type="submit"
                 value="Delete Product"
                 className="btn btn-primary"/></td>
    </tr>
  );
};

ProductListRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListRow;
