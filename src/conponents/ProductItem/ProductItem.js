import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ProductItem extends Component {
  render() {
    var {product, index} = this.props;
    var statusName = product.status ? 'con hang' : 'hết hàng';
    var statusClass = product.status ? 'warning' : 'default';
    return (
      <tr>
      <td>{index +1}</td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        
        <span className={`label label-${statusClass  }`}>{statusName}</span>
        
      </td>
      <td>
        
        <Link to={`/product/${product.id}/edit`} className="btn btn-success mr-10">Sửa</Link>
        <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id)}>Xóa</button>
      </td>
    </tr>
    );
  }
  onDelete = (id) =>{
    if(confirm('Bạn muốn xóa không')){//eslint-disable-line
      this.props.onDelete(id)
      console.log(id);
    }
  }
}
export default ProductItem;