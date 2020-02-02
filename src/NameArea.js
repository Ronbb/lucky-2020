import React from "react";
import PropTypes from "prop-types";
import Name from "./Name";

class NameArea extends React.PureComponent {
  render() {
    return (
      <div className="name-area">
        <div className="name-area-part">
          {this.props.list.slice(0, 3).map((value, index) => (
            <Name name={value.name} key={index} show={this.props.show} />
          ))}
        </div>
        <div className="name-area-part">
          {this.props.list.slice(3, 5).map((value, index) => (
            <Name name={value.name} key={index} show={this.props.show} />
          ))}
        </div>
      </div>
    );
  }
}

NameArea.propTypes = {
  list: PropTypes.array,
  show: PropTypes.bool
};

export default NameArea;
