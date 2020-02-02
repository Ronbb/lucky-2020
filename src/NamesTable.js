import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";

const { Column } = Table;

class NamesTable extends React.PureComponent {
  render() {
    return (
      <div className="names-table">
        <Table dataSource={this.props.data} pagination={this.props.hasPagination} rowKey="name" size="small">
          <Column align="center" title="姓名" dataIndex="name" key="name" />
          <Column align="center" title="部门" dataIndex="dept" key="dept" />
        </Table>
      </div>
    );
  }
}

NamesTable.propTypes = {
  data: PropTypes.array.isRequired,
  hasPagination: PropTypes.bool.isRequired
};

export default NamesTable;
