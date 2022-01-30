import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackNav from './auth/MainStack';
import TabNav from './TabNav';
import {NavigationString} from '../../constants/navigationName';
import {useSelector} from 'react-redux';
import {Splash} from '../screens';
import TabNavHeader from '../components/TabNavHeader';

const MainStack = createStackNavigator();
const MainRoute = () => {
  const [login, setLogin] = useState(false);
  const [splashstate, setSplashstate] = useState(true);
  const {loginDetail} = useSelector(state => state.auth);
  const validate = () => {
    if (loginDetail) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  const updateSplashstate = () => {
    setTimeout(() => {
      setSplashstate(false);
    }, 2000);
  };
  useEffect(() => {
    validate();
    updateSplashstate();
    return () => {
      validate();
    };
  }, []);
  useEffect(() => {
    if (loginDetail) {
      validate();
    }
  }, [loginDetail]);

  return (
    <MainStack.Navigator initialRouteName="splashScreen">
      {splashstate ? (
        <MainStack.Screen
          name="splashScreen"
          component={Splash}
          options={{headerShown: false}}
        />
      ) : (
        <>
          {/*###### If user Login Crendtial Ok than showing Tab Navigation Compnent ######*/}

          {login ? (
            <MainStack.Screen
              name={NavigationString.Dashboard}
              component={TabNav}
              options={{
                header: () => <TabNavHeader setLogin={setLogin} />,
              }}
            />
          ) : (
            <>
              {/*###  showing auth screens like, login,signup   ###  */}
              <MainStack.Screen
                component={AuthStackNav}
                name={NavigationString.MainStack}
                options={{
                  headerShown: false,
                }}
              />
            </>
          )}
        </>
      )}
    </MainStack.Navigator>
  );
};

export default MainRoute;
