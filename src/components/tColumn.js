import React, {Component} from 'react';

class TableColumn  extends Component{
  render(){
    return(
    // (this.props.colData.print==true) &&
        <td>{this.props.colData.value}</td>

    );
  }
}

export default TableColumn ;