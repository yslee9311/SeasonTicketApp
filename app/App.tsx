
import React from 'react';
import { View } from 'react-native';

import { createRootNavigator } from './config/routers';

class App extends React.Component {
    TAG: string = this.constructor.name;
    constructor(props: any) {
        super(props);
    }

    render() {
        const Layout = createRootNavigator();
        return (
            <View style={{ flex: 1, }}>
                {Layout}
                {/* <SplashAnimation /> */}
            </View>
        )
    }
}

export default App;