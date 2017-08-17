import React from 'react';
import {connect} from 'react-redux';
import {addNotification} from 'App/actions/actions';
import {store} from 'App/index';

const createUUID = () => {
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : ((r & 0x3) | 0x8);
    return v.toString(16);
  });
};

const NOTIFICATION_TYPES = {
  warning: 'warning',
  error: 'error',
};


/* Layer of indirection so that any component can request for the redux store
state to be changed in order to display a notification pop-up.
*/
class NotificationManager extends React.Component {
  constructor() {
    super();
    this.warning = this.warning.bind(this);
  }

  warning(title, message) {
    //const {dispatch} = this.props;
    const notification = {
      type: NOTIFICATION_TYPES.warning,
      id: createUUID(),
      title,
      message,
      time: 2500,
    };
    store.dispatch(addNotification(notification));
  }

  error(title, message) {
    //const {dispatch} = this.props;
    const notification = {
      type: NOTIFICATION_TYPES.error,
      id: createUUID(),
      title,
      message,
      time: 2500,
    };
    store.dispatch(addNotification(notification));
  }
}
// let NotificationManagerR = connect((state) => state)(NotificationManager);
export default new NotificationManager();
