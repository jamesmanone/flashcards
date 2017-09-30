import { AsyncStorage } from 'react-native';
import { Permissions, Notifications } from 'expo';

const NOTIFICATION_KEY = '^notifications$';

const newNotification = {
  title: 'Time to study!',
  body: 'You haven\'t studied your flashcards yet.',
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  }
};

export const clearNotification = () => {
  AsyncStorage.removeItem(NOTIFICATION_KEY);
  Notifications.cancelAllScheduledNotificationsAsync();
}


export const setNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();
              const tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);
              Notifications.scheduleLocalNotificationAsync(newNotification, {
                  time: tomorrow,
                  repeat: 'day',
              });
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
      }
    });
};
