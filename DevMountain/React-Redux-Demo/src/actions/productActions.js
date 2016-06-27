/**
 * Created by cjpowers on 6/26/16.
 */
import * as types from './actionTypes';
import productApi from '../api/mockProductApi';

export function loadProductsSuccess(products){
  return { type: types.LOAD_PRODUCTS_SUCCESS, products }
}



export function loadProducts() {
  return function(dispatch) {
    //make actual call to server here
    return productApi.getAllProducts().then(products => {
      dispatch(loadProductsSuccess(products));
    }).catch(error => {
      throw(error);
    })
  }
  
}
