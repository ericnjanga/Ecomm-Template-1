/**
 * Panel component that can be collapsed and revealled at will
 * (This component is for "presentation" only. Logic can be placed in a separated container component)
 * 
 * Characteristics:
 * - 
 */

import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


class CollapsePanelPresentation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card style={{ height: '400px' }}>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}






export default CollapsePanelPresentation;