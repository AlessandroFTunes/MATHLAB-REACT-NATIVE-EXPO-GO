import { registerRootComponent } from 'expo';
import AboutScreen from './aboutScreen';
import App from './App';
import ExerciciosScreen from './ExerciciosScreen';
import HomeScreen from './HomeScreen';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
