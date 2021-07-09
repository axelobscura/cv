import React from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const Panel = (props) => {
  console.log('estado del panel: ' + props.isPaneOpen)
  return (
    <div>
      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={props.isPaneOpen}
      >
        <div>And I am pane content. BTW, what rocks?</div>
      </SlidingPane>
    </div>
  );
};

export default Panel;