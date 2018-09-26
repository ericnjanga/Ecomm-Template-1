/**
 * Panel component that can be collapsed and revealled at will
 * (This component is for "presentation" only. Logic can be placed in a separated container component)
 * 
 * Characteristics:
 * - 
 */

import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



const getBtnLabel = (val, labelColl) => {
  return val?labelColl[1]:labelColl[0];
}

class CollapsePanelPresentation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }


  componentDidMount() {

    let { btnLabel } = this.props;
    const { collapse } = this.state;
    btnLabel = getBtnLabel(collapse, btnLabel);
    
    this.setState({ btnLabel });
  }


  toggle() {

    let { btnLabel } = this.props;
    const { collapse } = this.state;

    this.setState({ 
      collapse: !collapse
    }, function(){
      btnLabel = getBtnLabel(!collapse, btnLabel);
      this.setState({ btnLabel });
    });

  }

  
  render() {
    return (
      <React.Fragment>
        <Collapse
          isOpen={this.state.collapse}
          style={this.props.style}
        >
          <Card className={this.props.className}>
            <CardBody>
              {this.props.children}
            </CardBody>
          </Card>
        </Collapse>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.state.btnLabel}</Button>
      </React.Fragment>
    );
  }
}






export default CollapsePanelPresentation;