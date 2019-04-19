import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div>
        <p>Items in Category: ({this.props.curShortName})</p>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.curMenu.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.name}</td>
                  <td>{element.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Menu;
