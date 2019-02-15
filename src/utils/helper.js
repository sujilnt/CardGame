import { AsyncStorage } from 'react-native'
export const STORE_KEY = 'Udacity:CardApp' ; 
const NOTIFICATION_KEY = 'CardApp:notifications';
import { Notifications, Permissions } from 'expo'

export function submitEntry (user) {
  return AsyncStorage.mergeItem(STORE_KEY, JSON.stringify(user))
}

export function removeEntry (key) {
  return AsyncStorage.getItem(STORE_KEY)
    .then((results) => {
      console.log(results);
    })
}

function createNotification () {
  return {
    title: 'Log your stats!',
    body: "👋 don't forget to answer for your questions today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}
