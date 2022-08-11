import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import CarItem from '../CarItems';

import cars from './cars'

const CarsList = (props) => {
    return (
        <View style={{
            width: '100%',

        }}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>


    );
};

export default CarsList;