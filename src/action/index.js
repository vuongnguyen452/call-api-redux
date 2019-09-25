import * as Types from './../constants/ActionTypes';
import axios from 'axios';
export const actFetchProductReques = () => {
  return (dispatch) => {
    return axios.get(`http://5bdb133642c5dc0013a5a84d.mockapi.io/api/products`).then(res => {
      dispatch(actFetchProduct(res.data))
    })
  }
}// gọi api lấy dư liệu về và luư ở store
export const actFetchProduct = (products) => {
  return {
    type: Types.FETCH_PRODUCT,
    products
  }
}
export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id
  }
}
export const showLoading = () => {
  return {
    type: Types.SHOW_LOADING,
  }
}
export const hideLoading = () => {
  return {
    type: Types.HIDE_LOADING,
  }
}
export const actDeleteProuctReques = (id) => {
  return (dispatch) => {
    return axios.delete(`http://5bdb133642c5dc0013a5a84d.mockapi.io/api/products/${id}`).then(res => {
      dispatch(actDeleteProduct(id))
    })
      .finally(res => {
        dispatch(hideLoading())
      })
  }
}
export const actAddProducts = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product
  }
}
export const actAddProductReques = (product) => {
  return (dispatch) => {
    return axios.post(`http://5bdb133642c5dc0013a5a84d.mockapi.io/api/products`, product).then(res => {
      dispatch(actAddProducts(res.data));
    })
  }
}
export const actGetProduct = (product) => {
  return {
    type: Types.EDIT_PRODUCT,
    product
  }
}
export const actGetProductReques = (id) => {
  return dispatch => {
    return axios.get(`http://5bdb133642c5dc0013a5a84d.mockapi.io/api/products/${id}`).then(res => {
      dispatch(actGetProduct(res.data));
      // console.log(res.data);
    })
  }
}
export const actUpdateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product
  }
}
export const actUpdateProductReques = (product) => {
  return dispatch => {
    return axios.put(`http://5bdb133642c5dc0013a5a84d.mockapi.io/api/products/${product.id}`, product).then(res => {
      dispatch(actUpdateProduct(res.data));
      // console.log(res.data);
    })
  }
}
