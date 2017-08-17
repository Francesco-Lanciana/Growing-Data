import React from 'react';
import {connect} from 'react-redux';

import List from 'Components/List';
import {removeNotification, removeNotificationById} from 'App/actions/actions';
import Notification from './Notification';

require('ComponentStyles/notifications');

class NotificationList extends React.Component {
  constructor() {
    super();
    this.handleNotificationTimeout = this.handleNotificationTimeout.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  // Remove first notification in queue when a notification times out
  // NOTE: There may be errors where notifications aren't deleted due to race conditions
  handleNotificationTimeout() {
    const {dispatch} = this.props;
    dispatch(removeNotification());
  }

  // Remove notification that was selected
  handleSelect(id) {
    const {dispatch} = this.props;
    dispatch(removeNotificationById(id));
  }

  // Filter company list using search text and render the applicable companies
  renderNotifications() {
    const {notifications} = this.props;

    return notifications.map((notification) => {
      return (
        <Notification
          key={notification.id}
          onSelect={this.handleSelect}
          onTimeout={this.handleNotificationTimeout}
          {...notification}
        />
      );
    });
  }

  render() {
    return (
      <List className="notification-list">
        {this.renderNotifications()}
      </List>
    );
  }
}
export default connect((state) => {
  return {notifications: state.notifications};
})(NotificationList);
