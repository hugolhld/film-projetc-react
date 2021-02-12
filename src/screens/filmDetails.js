import React, {useLayoutEffect, useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button, Linking} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {getLatest, getMovie} from "../services/movie";

export const DetailScreen = (props) => {
    const {route, navigation} = props;
    const [movie, setMovie] = useState(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route && route.params && route.params.title ? route.params.title : 'Error'
        })
    })
    useEffect(() => {
        if (route && route.params && route.params.id) {
            getMovie(route.params.id)
                .then(setMovie)
        } else {
            getLatest()
                .then(setMovie)
        }
    }, [])

    const handlePress = () => {
        alert('Soon :(')
    }

    if (!movie) {
        return null;
    }

    return (
        <View style={styles.page}>
            <ScrollView>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}
                    style={styles.imageBg}
                />
                <View style={styles.movie}>
                    <View style={styles.header}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
                            style={styles.image}
                        />
                        <View style={styles.headerInfo}>
                            <TouchableOpacity onPress={handlePress}>
                                <Image source={require('../../assets/button_play.png')} style={styles.imagePlay} />
                            </TouchableOpacity>
                            {movie.title !== '' && <Text style={styles.title}>{movie.title}</Text>}
                            {movie.runtime !== '' && <Text style={styles.title}>{movie.runtime} minutes</Text>}
                        </View>
                    </View>
                    <Text style={styles.overviewTitle}>Synopsis</Text>
                    {movie.overview !== '' && <Text style={styles.overview}>{movie.overview}</Text>}
                </View>
            </ScrollView>
                <TouchableOpacity onPress={handlePress} style={styles.footer} >
                    <Text style={{textAlign: 'center', color: '#B5A90F'}}>
                        Trailer
                    </Text>
                </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#FAFAFA",
        flex: 1,
    },
    imageBg: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        height: 350,
        resizeMode: 'cover',
        width: "100%",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 36,
    },
    headerInfo: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    image: {
        borderColor: "#ffffff",
        borderRadius: 15,
        borderWidth: 4,
        height: 134,
        marginRight: 15,
        width: 84,
    },
    imagePlay: {
        alignSelf: "flex-end",
        height: 58,
        width: 58,
    },
    director: {
        fontSize: 13,
        fontWeight: "100",
        marginBottom: 10,
    },
    movie: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: 120,
        paddingLeft: 18,
        paddingRight: 18,
        top: -35,
        zIndex: 1,
    },
    overview: {
        lineHeight: 24,
        color: '#B5A90F'
    },
    overviewTitle: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 10,
        color: '#B5A90F'
    },
    footer: {
        backgroundColor: "#B00020",
        bottom: 0,
        left: 0,
        paddingBottom: 12,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 12,
        position: "absolute",
        right: 0,
        zIndex: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        color: '#B5A90F'
    }
})
