import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

/* Table row for user ....*/
class TableRowUser extends Component {
  constructor(props) {
      super(props);
      this.handleShowDelete = this.handleShowDelete.bind(this);
  }
  
  handleShowDelete(event) {
    event.preventDefault();
    
    // display delete warning dialog 
    this.props.delhandler(this.props.obj.id);
  }
  
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            <Link to={"tasks/user/"+this.props.obj.id} className="btn btn-primary">Tasks</Link>
            <Link to={"edit-user/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
			<input onClick={this.handleShowDelete} type="button" value="Delete" className="btn btn-danger"/>
          </td>
        </tr>
    );
  }
}

export default TableRowUser;
