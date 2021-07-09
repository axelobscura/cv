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
          <h2>COMPANY: {props.nombre}</h2>
          <hr/>
          <h3>RESPONSIBILITIES</h3>
          <hr/>
          <ul>
            <li>Involved in documentation of the architecture and configuration details</li>
            <li>Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts</li>
            <li>Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS</li>
          </ul>
        </div>
      </SlidingPane>
    </div>
  );
};

export default Panel;