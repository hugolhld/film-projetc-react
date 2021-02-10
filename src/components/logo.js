import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export const Logo = () => {
    return (
        <View style={styles.logo_container}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/logo.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    tinyLogo: {
        width: 150,
        height: 150,
        borderWidth: 5,
        borderColor: '#B00020',
        borderRadius: 100,
        padding: 5
    }
})