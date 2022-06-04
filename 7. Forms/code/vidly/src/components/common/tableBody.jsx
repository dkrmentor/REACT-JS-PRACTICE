import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
    // renderCell = (item,column) => {
    //     if (column.content) {
    //     return  column.content(item);
    //     } else {
    //     return  _.get(item, column.path);
    //     }
    //   };

    createkey =(item,column)=>{
      return item._id+(column.path||column.key);
    }
  render() {
    const { data, columns } = this.props;
  
    return (
      <>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              {columns.map((column) => (
                // <td>{this.renderCell(items, column)}</td>
                // <td key={item._id+(column.path||column.key)}>
               <td key={this.createkey(item,column)}>

                  {column.content?column.content(item): _.get(item, column.path)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </>
    );
  }
}

export default TableBody;
  