import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Input } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

export default class PasswordInputText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            icEye: 'visibility-off',
            password: true
        }
    }
    changePwdType = () => {
        let newState;
        if (this.state.password) {
            newState = {
                icEye: 'visibility',
                password: false
            }
        } else {
            newState = {
                icEye: 'visibility-off',
                password: true
            }
        }
        this.setState(newState)
    };


    render() {
        return (
            <View style={{
                marginTop: 5,
                borderRadius: 10,
                width: width * 0.85,
                height: height * 0.05,
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 10
            }}>
                <Input {...this.props}
                           secureTextEntry={this.state.password}
                placeholder='Şifre'
                leftIcon={{ type: 'font-awesome', name: 'lock', size: 36 }}
                />

                <Icon style={styles.icon}
                      name={this.state.icEye}
                      size={this.props.iconSize}
                      color={this.props.iconColor}
                      onPress={this.changePwdType}
                />
            </View>
        );
    }
}


export const styles = StyleSheet.create({

    icon: {
        position: 'absolute',
        top: 5,
        right: 0
    }

});

PasswordInputText.defaultProps = {
iconSize:25,
}
    
