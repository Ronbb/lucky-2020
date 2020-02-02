import React from "react";
import PropTypes from "prop-types";
import NamesTable from "./NamesTable";

class Winners extends React.PureComponent {
  split = data => {
    const splitData = [];
    const count = Math.ceil(data.length / 10);
    for (let index = 0; index < count; index++) {
      splitData.push(data.slice(index * 10, index * 10 + 10));
    }
    return splitData;
  };

  render() {
    return (
      <div className="winners">
        {this.split(this.props.data).map((data, index) => (
          <NamesTable data={data} hasPagination={false} key={index} />
        ))}
      </div>
    );
  }
}

Winners.propTypes = {
  data: PropTypes.array.isRequired
};

export default Winners;
