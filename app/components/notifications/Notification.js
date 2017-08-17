import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

// Used for notification auto-removal
let timeout;

class Notification extends React.Component {

  constructor(props) {
    super(props);
  }

  // Remove the notification after time specified
  componentDidMount() {
    const {time, onTimeout} = this.props;
    timeout = setTimeout(() => {onTimeout()}, time);
  }

  //If removed by clicking on the notification no more need to auto remove
  ComponentWillUnmount() {
    clearTimeout(timeout);
  }

  render() {
    const {type, id, title, message, onSelect} = this.props;
    const className = `notification notification-${type}`;
    return (
      <div className={className} onClick={() => onSelect(id)}>
        <div className="notification-title" role="alert">
          {title}
        </div>
        <div className="notification-message">
          {message}
        </div>
      </div>
    )
  }
}

/*
<CSSTransitionGroup
  transitionName="notification"
  transitionEnterTimeout={0.4}
  transitionLeaveTimeout={0.4}
>
      </CSSTransitionGroup>
*/

export default Notification;
