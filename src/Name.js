import React from "react";
import PropTypes from "prop-types";

class Name extends React.PureComponent {
  render() {
    return (
      <div className="name">
        {this.props.show && this.props.name}
      </div>
    );
  }
}

Name.propTypes = {
  name: PropTypes.string,
  show: PropTypes.bool
};

export default Name;
