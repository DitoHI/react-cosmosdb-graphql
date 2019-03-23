import * as React from 'react';
import { Alert } from 'reactstrap';

interface Props {
  title: string;
  propVisible: boolean;
}

interface States {
  visible: boolean;
}

class AlertNotExisted extends React.Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      visible: nextProps.propVisible,
    });
  }

  componentWillUnmount() {
    this.setState({
      visible: false,
    });
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    const { title } = this.props;
    const { visible } = this.state;
    return (
      <Alert color="secondary"
             isOpen={ visible }
             toggle={ this.onDismiss }
             style={{
               marginBottom: 0,
             }}
      >
        The <strong>{ title } page</strong> is loading. Please wait a moment
      </Alert>
    );
  }
}

export default AlertNotExisted;
