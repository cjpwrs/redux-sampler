/**
 * Created by cjpowers on 6/26/16.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';
import ProductList from './ProductList';

class ProductPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      product: {title:""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const product = this.state.product;
    product.title = event.target.value;
    this.setState({product: product});
  }

  onClickSave() {
    this.props.actions.createProduct(this.state.product);
  }

  productRow(product, index) {
    return <div key={index}>{product.title}</div>;
  }

  render() {
    //this is called destructuring
    const {products} = this.props;

    return (
      <div>
        <h1>Products</h1>
        <ProductList products={products} />

      </div>
    );
  }
}
ProductPage.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps){
  return{
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
