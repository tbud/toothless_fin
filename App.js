
import React,{
    View,
    Navigator
} from 'toothless';

import home from './home';

export default class SampleComponent extends React.Component {
    render() {
        let defaultName = 'home';
        let defaultComponent = home;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
                renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
        );
    }
}