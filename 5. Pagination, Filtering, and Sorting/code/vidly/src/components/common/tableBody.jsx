import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
    renderCell = (item,column) => {
        if (column.content) {
        return  column.content(item);
        } else {
        return  _.get(item, column.path);
        }
      };
  render() {
    const { data, columns } = this.props;
  
    return (
      <>
        <tbody>
          {data.map((items) => (
            <tr>
              {columns.map((column) => (
                <td>{this.renderCell(items, column)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </>
    );
  }
}

export default TableBody;
  