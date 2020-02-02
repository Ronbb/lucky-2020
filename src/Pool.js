import React from "react";
import PropTypes from "prop-types";
import NamesTable from "./NamesTable";

class Pool extends React.PureComponent {
  render() {
    return (
      <div className="pool">
        <NamesTable data={this.props.data} hasPagination/>
      </div>
    );
  }
}

Pool.propTypes = {
  data: PropTypes.array.isRequired
};

export default Pool;
