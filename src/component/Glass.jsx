import React, { Component } from "react";

export default class Glass extends Component {
  render() {
    return (
      <div className="p-3">
        <button
          className="btn btn-ligt p-1"
          onClick={() => {
            this.props.onChangeGlassImg(
              this.props.glass.url,
              this.props.glass.name,
              this.props.glass.desc
            );
          }}
        >
          <img src={this.props.glass.url} alt="" className="img-fluid" />
        </button>
      </div>
    );
  }
}
