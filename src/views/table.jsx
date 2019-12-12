
import React, { Component} from 'react';
import Row from './../components/row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/table.css';
class Table extends Component {
  constructor(props) {
    super(props);
    this.state={
      tableColumns:this.props.columns,
      tableRows : this.props.data,
      sortColumn:"",
      sortAsc:false,
      tableData:this.props.data,
    }
  }

   compare=(a, b)=> {
    const rowA = a.data.find(rowObj=> rowObj.id === this.state.sortColumn) ;
    const rowB = b.data.find(rowObj=> rowObj.id === this.state.sortColumn) ;
    let comparison = 0;
    if(this.state.sortAsc){
        if (rowA.value.toUpperCase() > rowB.value.toUpperCase()) {
            comparison = 1;
          } else if (rowA.value.toUpperCase() < rowB.value.toUpperCase()) {
            comparison = -1;
          }
    }else{
        if (rowA.value.toUpperCase() > rowB.value.toUpperCase()) {
            comparison = -1;
          } else if (rowA.value.toUpperCase() < rowB.value.toUpperCase()) {
            comparison = 1;
          }
    }
    return comparison;
  }


  sortByColumn=(col)=>{
      if(col.sortable === "true"){
        this.setState({sortColumn:col.id, sortAsc:!this.state.sortAsc},
            ()=>{
                 this.setState({tableRows: this.state.tableRows.sort(this.compare)})
            })
      }
  }

  searchText=(e)=>{
    let TableData = [...this.state.tableData];
    let newData = TableData.filter((row,index)=>{
      let exist = false;
      row.data.map((field,idx)=>{
        if(typeof(field.value) === "object" && field.value.props){
         field.value = field.value.props.children
        }
          if(field.value.toLowerCase().includes(e.target.value.toLowerCase())){
            exist = true;
            if(e.target.value !== ""){
              field.value = <mark>{field.value}</mark>
            }
          }
      })
      if(exist){
        return row;
      }
    })
this.setState({tableRows :newData})
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-5 float-right mb-3">
        <input placeholder="Search" className="form-control col-7 float-right" onChange={this.searchText}></input>
        </div>
        
      <table className='table table-bordered'>
          <thead>
          <tr>{this.state.tableColumns.map((tColumn,key)=>
          <th className={tColumn.sortable === "true" ? "sortBtn":"" } onClick={()=>this.sortByColumn(tColumn)} key={key}>{tColumn.label}</th>
          )}
          </tr>
          </thead>
          <tbody>
          {this.state.tableRows.map((rData,key) =>
            <Row key={key} rData={rData}/>
          )}
          </tbody>
        </table>
        </React.Fragment>
    );
  }
}

export default Table;