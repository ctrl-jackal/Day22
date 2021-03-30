import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <th>{row.firstName}</th>
        <th>{row.lastName}</th>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData } = this.props.characterData;

    return (
      <table>
        <TableHeader />
        <TableBody characterData={this.props.characterData} />
      </table>
    );
  }
}

export default Table;
