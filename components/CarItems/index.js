import React from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import StyledButton from '../StyledButton'

const CarItem = (props) => {
    const { name, tagline, taglineCTA, image } = props.car;
    return (
        <View style={{
            width: '100%',
            height: Dimensions.get('window').height,

        }}>
            <ImageBackground source={image} style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                position: 'absolute',
            }}>

            </ImageBackground>

            <View style={{
                marginTop: '30%',
                width: '100%',
                alignItems: 'center',

            }}>
                <Text style={{
                    fontSize: 40,
                    fontweight: 500,
                }}>
                    {name}</Text>


                <Text style={{
                    fontSize: 16,
                    color: '#5c5e62',

                }}>
                    {tagline} <Text style={{
                        textDecorationLine: 'underline'

                    }}>
                        {taglineCTA}</Text></Text>

            </View>

            <View style={{
                postion: 'absolute',
                bottom: -450,
                width: '100%',
            }}>
                <StyledButton type="primary" content={"Custom Order"} />
                <StyledButton type="secondary" content={"Existing Inventory"} />

            </View>





        </View>



    );

};

export default CarItem;