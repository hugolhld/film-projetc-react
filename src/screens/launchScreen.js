import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button, Image, FlatList, ActivityIndicator, SafeAreaView} from "react-native";
import {getGenres} from "../services/movie";
import {GenreItem} from '../components/genreItem'

export const LaunchScreen = () => {

    // const {navigation} = props;
    // const handlePressButton = (type) => {
    //     type === 'search' ?
    //         navigation.navigate('Recherche', {screen: 'Search'}) :
    //         navigation.navigate('Latest')
    // }

    const [isLoading, setIsLoading] = useState(false)
    const [genres, setGenres] = useState([])

    useEffect(() => {
        setIsLoading(true);
        getGenres().then(data => {
            setIsLoading(false);
            setGenres(data.genres);
        })
    }, [])

    return (
        <View style={styles.main_container}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/logo.jpg')}
            />
            <SafeAreaView style={styles.flex_container}>
                <FlatList
                    data={genres}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <GenreItem genreName={item} />}
                    />
                {/* { isLoading ?
                    <View>
                        <ActivityIndicator size='large' color={'#000'} />
                    </View>
                    : null
                } */}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'space-around',
    },
    tinyLogo: {
        width: 100,
        height: 100,
        borderWidth: 5,
        borderColor: '#B00020',
        borderRadius: 50
    },
    flex_container: {
        flex: 4,
        flexWrap: 'wrap',
    }
})
