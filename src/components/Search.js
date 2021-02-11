import React, {useState} from 'react';
import {Button, View, TextInput, StyleSheet, Image, TouchableOpacity, Text} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

export const Search = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const onChangeText = (text) => {
        setIsDisabled(text === '')
        props.handleSearch(text);
    }

    return (
        <View style={styles.main_container}>
            <View style={styles.input_container}>
                <FontAwesome name="search" size={24} color="#B00020" />
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={onChangeText}
                    placeholderTextColor={'#B00020'}
                    palceholderFontWeight={'bold'}
                />
            </View>
            <View style={styles.flex_button}>
                <TouchableOpacity style={styles.search_button} onPress={() => props.handleClickButton()}>
                    <Text style={styles.text_button}>Rechercher</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        padding: 30,
        backgroundColor: '#B00020',
        borderRadius: 15,
		// paddingTop: getStatusBarHeight(),
    },
    input_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingLeft: 10,
        alignItems: 'center',
        marginBottom: 10
    },
    picto: {
        width: 25,
        height: 25
    },
    textinput: {
        height: 50,
        paddingLeft: 10,
        color: '#B00020'
    },
    search_button: {
        backgroundColor: '#B5A90F',
        padding: 10,
        borderRadius: 5,
        textTransform: 'uppercase',
    },
    flex_button: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    text_button: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12
    }
})
