import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

export const FilmDetailsHeader = (props) => {
    // const {genreName, goTo} = props;
    return (
        <View style={styles.main_container}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/logo.png')}
            />
            <View style={styles.test}>
                <Text>Hello</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        marginHorizontal: 5,
        marginVertical: 10,
        // flexDirection: 'column',
        // alignItems: 'center'
    },
    main_button: {
        padding: 20,
        backgroundColor: '#fff',
        borderBottomColor: '#B00020',
        borderBottomWidth: 3,
        textAlign: 'center',
    },
    text_color: {
        color: '#B00020',
        fontWeight: 'bold'
    },
    tinyLogo: {
        backgroundColor: 'red',
        width: Dimensions.get('window').width - 20,
        height: 150,
        position: "relative"
    },
    test: {
        backgroundColor: 'blue',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center'
    }

})
