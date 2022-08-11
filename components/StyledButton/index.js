import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const StyledButton = (props) => {

    const type = props.type;
    const content = props.content;
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';
    return (
        <View style={{
            width: '100%',
            padding: 10,

        }}>
            <TouchableOpacity style={{
                backgroundColor: 'white',
                height: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: backgroundColor


            }}>
                <Text style={{
                    fontSize: 12,
                    fontweight: 500,
                    textTransform: 'uppercase',
                    color: textColor,
                }}>{content}</Text>


            </TouchableOpacity>
        </View>


    );
};

export default StyledButton;