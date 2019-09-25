import React, { Component } from 'react';
// import axios from  'axios';
import {Link} from 'react-router-dom';
import { actAddProductReques, actGetProductReques, actUpdateProductReques } from './../../action/index';
import {connect} from 'react-redux';
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      id:'',
      txtName:'',
      txtPrice:'',
      checkbox:''
    }
  }
  componentDidMount(){
    var {match} = this.props;
    if(match){
      var id = match.params.id;
      this.props.onEditProduct(id);
      // axios.get(`http://5bdb133642c5dc0013a5a84d.mockapi.io/api/products/${id}`).then(res =>{
      //   var data = res.data;
      //   this.setState ({
      //     id : data.id,
      //     txtName : data.name,
      //     txtPrice: data.price,
      //     checkbox: data.status
      //   })
      // })
      
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditing){
      var {itemEditing} = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        checkbox: itemEditing.status
      })
    }
  }
  onChange =(e) =>{
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState ({
      [name] : value
    })
  }
  onSave=(e)=>{
    e.preventDefault();// chặn trường hợp nó load lại trang
    var { id,txtName, txtPrice, checkbox} = this.state;
    var {history} = this.props;
    var product = {
      id: id,
      name :txtName,
      price : txtPrice,
      status: checkbox
    };
    if(id) {
      // axios.put(`http://5bdb133642c5dc0013a5a84d.mockapi.io/api/products/${this.state.id}`, {
      //   id: id,
      //   name:txtName,
      //   price: txtPrice,
      //   status: checkbox
      // }).then(res =>{
      //   history.goBack();
      // })
      this.props.onUpdateProduct(product)
    }else{
    // axios.post('http://5bdb133642c5dc0013a5a84d.mockapi.io/api/products', {
    //   name:  txtName,
    //   price: txtPrice,
    //   status: checkbox
    // }).then(res =>{
    //   history.goBack();
    // })
    this.props.onAddProduct(product);
    }
    history.goBack();
  }
  render() {
    var { txtName, txtPrice, checkbox} = this.state;
    return (
      

    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      
      <form onSubmit ={this.onSave} >
        <legend>Form title</legend>
      
        <div className="form-group">
          <label>Tên sản phẩm:</label>
          <input type="text" className="form-control" id="" placeholder="Input field" name="txtName" value={txtName} onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label>Giá:</label>
          <input type="number" className="form-control" id="" placeholder="Input field" name="txtPrice"value={txtPrice} onChange={this.onChange}/>
        </div>
        <div className="form-group">
          <label>Trạng thái</label>
        </div>        
        <div className="checkbox">
          <label>
            <input type="checkbox" name ="checkbox" value={checkbox} onChange={this.onChange} checked={checkbox}/>
            Còn hàng
          </label>
        </div>        
        <button type="submit" className="btn btn-primary mr-10">Lưu lại</button>
        <Link to ="/product-list" className="btn btn-danger ">
          Quay lại
        </Link>
      </form>
      
    </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductReques(product));
    },
    onEditProduct : (id) => {
      dispatch(actGetProductReques(id));
    },
    onUpdateProduct :(product) =>{
      dispatch(actUpdateProductReques(product))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage) ;