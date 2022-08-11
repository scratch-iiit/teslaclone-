import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Header = () => {
    return (
        <View style={{
            position: 'absolute',
            top: 50,
            zIndex: 100,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 20
        }}>


            <Image
                style={{
                    width: 100,
                    height: 20,
                    resizeMode: 'contain',

                }}
                source={require('../../assets/logo.png')}
            />

            <TouchableOpacity>

                <Image
                    style={{
                        width: 25,
                        height: 25,
                        resizeMode: 'contain'
                    }}
                    source={require('../../assets/menu.png')}

                />
            </TouchableOpacity>

        </View>

    );
};

export default Header;