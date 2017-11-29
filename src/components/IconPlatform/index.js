import React, {Component} from 'react';
import {View, Platform} from 'react-native';
import PropTypes from 'prop-types'
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {blue, darkGray, gray, white} from "../../../utils/colors";

export default class IconPlatform extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    };

    static defaultProps = {
        name: '',
        type: ''
    };

    render() {
        const {name, type} = this.props;
        const finalName = Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`;

        return (
            <View>
                <Ionicons {...this.props} name={finalName}/>
            </View>
        )
    }
}
