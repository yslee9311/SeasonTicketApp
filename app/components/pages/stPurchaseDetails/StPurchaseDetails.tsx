
import React from 'react';
import {
    View,
} from 'react-native';

import colors from '../../../common/values/colors';

type MyProps = {
    navigation: any
    route: any
};
type MyState = {};

export default class ManageSeasonTicketPurchaseDetails extends React.Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(): void {
        console.log(this.props.route.params);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: colors.white }}>
            </View>
        )
    }
}
