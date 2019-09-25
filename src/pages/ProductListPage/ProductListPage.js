import React, { Component } from 'react';
import ProductList from '../../conponents/ProductList/ProductList';
import ProductItem from '../../conponents/ProductItem/ProductItem';
import { connect } from 'react-redux';
// import axios from  'axios';
// import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { actFetchProductReques, actDeleteProuctReques, showLoading, hideLoading } from './../../action/index';
class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    // callApi('products', 'GET', null).then(res =>{
    //   // this.setState({
    //   //   products : res.data
    //   // })
    //   this.props.fetchAllProduct(res.data);
    // });// dispath 1 cai action và action này sẻ gọi api lên sv //  gọi lên action
    this.props.fetchAllProduct();
  }
  onDelete = (id) => {
    this.props.showLoading()
    this.props.onDeleteProucts(id);
    // var {products} = this.state;
    // axios.delete(`http://5bdb133642c5dc0013a5a84d.mockapi.io/api/products/${id}`).then(res=>{
    //   if(res.status === 200) {
    //     var index =this.findIndex(products, id);
    //     if(index !==-1){
    //       products.splice(index, 1);
    //       this.setState({
    //         products: products
    //       })
    //     }
    //   }
    // })
  }

  render() {
    // var {products} = this.state;
    var { products } = this.props;
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/product/add" className="btn btn-info mp-10">Them san pham</Link>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Danh sach san pham</h3>
            </div>
            <ProductList>
              {this.showProduct(products)}
            </ProductList>
          </div>

        </div>
      </div>
    );
  }
  showProduct = (products) => {

    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result
  }
}
const mapStateToProps = (state, props) => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProduct: () => {
      dispatch(actFetchProductReques());
    },
    onDeleteProucts: (id) => {
      dispatch(actDeleteProuctReques(id));
    },
    showLoading: () => {
      dispatch(showLoading());
    },
    hideLoading: () => {
      dispatch(hideLoading());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);