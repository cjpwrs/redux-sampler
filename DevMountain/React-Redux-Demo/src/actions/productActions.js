/**
 * Created by cjpowers on 6/26/16.
 */
import * as types from './actionTypes';
import productApi from '../api/mockProductApi';
//import server from '../api/server';

export function loadProductsSuccess(products){
  return { type: types.LOAD_PRODUCTS_SUCCESS, products }
}

export function createProductSuccess(product) {
  return {type: types.CREATE_PRODUCT_SUCCESS, product};
}

export function updateProductSuccess(product) {
  return {type: types.UPDATE_PRODUCT_SUCCESS, product}
}

export function deleteProductSuccess(product) {
  return {type: types.DELETE_PRODUCT_SUCCESS, product}
}

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export function loadProducts() {
  return function(dispatch) {
    console.log('entered load dispatch');
      fetch(`http://localhost:3001/api/products`,{method: 'get'})
        .then(response => {
          return response.json()})
            .then(data => dispatch(loadProductsSuccess(data)));
          //console.log(response);
          //dispatch(loadProductsSuccess(response.json)); // Use a normal function to set the received state

    //make actual call to server here
    // return productApi.getAllProducts().then(products => {
    //   dispatch(loadProductsSuccess(products));
    // }).catch(error => {
    //   throw(error);
    // })
  }
}

export function saveProduct(product) {
  if(!product.id) {
    return function (dispatch, getState) {
      console.log(product);
      fetch('http://localhost:3001/api/products', {
        method: 'post',
        headers: myHeaders,
        mode: 'cors',
        body: JSON.stringify(product)
      })
        .then(response => {
          console.log(response);
          return response.json()
        })
        .then(data => {
          console.log(data);
          dispatch(createProductSuccess(data))
        });
    }
  }
  else{
    return function (dispatch, getState) {
      console.log(product);
      fetch('http://localhost:3001/api/products', {
        method: 'put',
        headers: myHeaders,
        mode: 'cors',
        body: JSON.stringify(product)
      })
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          console.log(data);
          dispatch(updateProductSuccess(data))
        });
    }
  }
    // return productApi.saveProduct(product).then(savedProduct => {
    //   product.id ? dispatch(updateProductSuccess(savedProduct)) :
    //     dispatch(createProductSuccess(savedProduct));
    // }).catch(error => {
    //   throw(error);
    // });
}

export function deleteProduct(productId){
  console.log('entered delete product reducer function, product id is ', productId );
  return function (dispatch, getState) {

    fetch('http://localhost:3001/api/products', {method: 'delete', headers: myHeaders, mode: 'cors', body: JSON.stringify({id: productId})})
      .then(response => {return response.json()})
        .then(data => {
          console.log(data);
          dispatch(deleteProductSuccess(data));
        })
    // return productApi.deleteProduct(productId).then(products => {
    //   console.log('the remaining products are ', products);
    //   dispatch(deleteProductSuccess(products));
    // }).catch(error => {
    //   throw(error);
    // });
  };
}
