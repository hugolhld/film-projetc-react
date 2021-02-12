import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const GenreItem = (props) => {
    const {genreName, goTo} = props;
    return (
        <View style={styles.main_container}>
            <TouchableOpacity style={styles.main_button} onPress={goTo}>
                <Text style={styles.text_color}>{genreName.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
    },
    main_button: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        textAlign: 'center',
        shadowColor: '#B00020',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.85,
        shadowRadius:1.3,

        elevation: 5,
    },
    text_color: {
        color: '#B00020',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
