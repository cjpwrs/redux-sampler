import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';
import ProductForm from './ProductForm';

class ManageProductPage extends React.Component {
    constructor(props, context) {
        super(props, context);

      this.state = {
        product: Object.assign({}, this.props.product),
        errors: {}
      };
    }

    render() {
        return (
            <ProductForm
              allUsers={this.props.users}
              product={this.state.product}
              errors={this.state.errors}/>
        );
    }
}

ManageProductPage.propTypes = {
  product: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let product = {id: '', title: '', price: '', quantity: ''};

  const usersFormattedForDropdown = state.users.map(user => {
    return {
      value: user.id,
      text: user.firstName + ' ' + user.lastName
    };
  });

    return {
        product: product,
        users: usersFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProductPage);
