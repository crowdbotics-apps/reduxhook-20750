import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings112762Navigator from '../features/Settings112762/navigator';
import ArticleList112757Navigator from '../features/ArticleList112757/navigator';
import Maps112744Navigator from '../features/Maps112744/navigator';
import ArticleList112739Navigator from '../features/ArticleList112739/navigator';
import Maps112726Navigator from '../features/Maps112726/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings112762: { screen: Settings112762Navigator },
ArticleList112757: { screen: ArticleList112757Navigator },
Maps112744: { screen: Maps112744Navigator },
ArticleList112739: { screen: ArticleList112739Navigator },
Maps112726: { screen: Maps112726Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
