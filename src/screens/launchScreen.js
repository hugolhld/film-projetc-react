import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from "react-native";
import {getGenres} from "../services/movie";
import {GenreItem} from '../components/genreItem'
import {Logo} from '../components/logo'

export const LaunchScreen = (props) => {

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
                <Logo />
                <SafeAreaView>
                    <FlatList
                        numColumns={2}
                        data={genres}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => <GenreItem 
                            genreName={item} 
                            goTo={() => props.navigation.navigate('Genre', {genre: item.name, id: item.id})}
                            />}
                        />
                </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tinyLogo: {
        width: 100,
        height: 100,
        borderWidth: 5,
        borderColor: '#B00020',
        borderRadius: 50
    },
})
