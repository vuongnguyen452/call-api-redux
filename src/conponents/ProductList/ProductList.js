import React, { Component } from 'react';
class ProductList extends Component {
  render() {
    return (
      <div>
        <div className="panel-body">
                    
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>MASP</th>
                          <th>TEN</th>
                          <th>GIA</th>
                          <th>Trang thai</th>
                          <th>Hanh Dong</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.children}
                      </tbody>
                    </table>
                    
                  </div>
      </div>
    );
  }
}

export default ProductList;