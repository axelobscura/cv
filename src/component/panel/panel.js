import React from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const Panel = (props) => {
  return (
    <div className="panel">
      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={props.isPaneOpen}
        onRequestClose={props.closePane}
      >
        <div>
          <h2>{props.nombre}</h2>
          <hr/>
          <h3>RESPONSIBILITIES</h3>
          <hr/>
          <ul>
          </ul>
        </div>
      </SlidingPane>
    </div>
  );
};

export default Panel;