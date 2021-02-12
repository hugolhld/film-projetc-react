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
        borderBottomColor: '#B00020',
        borderBottomWidth: 3,
        textAlign: 'center',
    },
    text_color: {
        color: '#B00020',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
