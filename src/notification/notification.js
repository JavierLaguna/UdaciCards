import * as Permissions from "expo-permissions";
import { Notifications } from "expo";
import { AsyncStorage, Platform } from "react-native";
import Constants from 'expo-constants';

const NOTIFICATION_KEY = "UdaciCards:notifications";

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(async (data) => {
      if (data === null) {
        if (Constants.isDevice) {
            const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

            let finalStatus = existingStatus;

            if (existingStatus !== 'granted') {
              const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
              finalStatus = status;
            }

            console.log(`Notification permission ${finalStatus}`)
            
            if (finalStatus !== 'granted') {
              alert('Failed to get push token for push notification!');
              return;
            }

            token = await Notifications.getExpoPushTokenAsync();
            console.log(`expoPushToken ${token}`);

            if (Platform.OS === 'android') {
                Notifications.createChannelAndroidAsync('default', {
                  name: 'default',
                  sound: true,
                  priority: 'max',
                  vibrate: [0, 250, 250, 250],
                });
              }

            // Configure Notification
            Notifications.cancelAllScheduledNotificationsAsync();
            
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);
            
            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day",
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));

          } else {
            alert('Must use physical device for Push Notifications');
          }
      }
    });
}

function createNotification() {
  return {
    title: "Train your Brain!",
    body: "👋 don't forget do your daily quiz!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
}
