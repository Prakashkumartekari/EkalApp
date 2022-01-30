import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {
  NavigationContainer,
  DefaultTheme as NavigationTheme,
} from '@react-navigation/native';
import {store} from './redux/store';

const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: '#0080FF',
  },
};
const navigationTheme = {
  ...NavigationTheme,
  colors: {
    ...NavigationTheme.colors,
    background: '#fff',
  },
};
export default function Main() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
      </StoreProvider>
    </NavigationContainer>
  );
}
AppRegistry.registerComponent(appName, () => Main);
