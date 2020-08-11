import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const screens = {
  Home: {
    screen: HomeStack
  },
  About: {
    screen: AboutStack
  }
}

const RootDrawerNavigator = createDrawerNavigator(screens);

export default createAppContainer(RootDrawerNavigator);

