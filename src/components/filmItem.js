import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export const FilmItem = (props) => {
    const {film, goToDetail, index} = props;
    return (
        <View style={styles.main_container} >
            <TouchableOpacity onPress={goToDetail}>
                <View style={styles.main_information_container}>
                    <View style={styles.main_information_content}>
                        <Image source={{uri: `https://image.tmdb.org/t/p/original${film.poster_path}`}} style={styles.image} />
                        <View style={styles.content_container}>
                            <View>
                                <Text style={styles.title_text}>{film.title}</Text>
                            </View>
                            <View>
                            </View>
                            <View>
                                <Text style={{color: '#B5A90F'}}>{film.release_date}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#B5A90F'}}>{film.vote_average}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#B00020',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.85,
        shadowRadius:1.3,

        elevation: 5,
    },
    content_container: {
        margin: 5,
        justifyContent: 'center',
    },
    main_information_container: {
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around'
    },
    main_information_content: {
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
    },
    image: {
        width: 80,
        height: 120,
        margin: 5,
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 16,
        flexWrap: 'wrap',
        paddingRight: 5,
        color: '#B5A90F'
    },
    picto: {
        width: 30,
        height: 30,
    }
})