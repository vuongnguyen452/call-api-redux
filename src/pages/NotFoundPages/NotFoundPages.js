import React, { Component } from 'react';

class NotFoundPages extends Component {
  render() {
    return (
      <div className="container">
        
        <div className="alert">
          <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
          <strong>Không tìm thấy trang</strong>
        </div>
        
      </div>
    );
  }
}

export default NotFoundPages;