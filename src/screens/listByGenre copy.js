import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, StyleSheet, Button, FlatList, ActivityIndicator, SafeAreaView, Text} from "react-native";
import {getGenresId} from "../services/movie";
import {GenreItem} from '../components/genreItem'
import { FontAwesome } from '@expo/vector-icons'; 
import { FilmItem } from '../components/filmItem'
// import {data} from '../helpers/filmDatas'

export const ListByGenre = (props) => {
    const {route, navigation} = props
    // const { genre } = route.params;
    // const { id } = route.params;
    // const {navigation} = props;
    // const handlePressButton = (type) => {
    //     type === 'search' ?
    //         navigation.navigate('Recherche', {screen: 'Search'}) :
    //         navigation.navigate('Latest')
    // }

    const [isLoading, setIsLoading] = useState(false)
    const [filmList, setFilmList] = useState([])
    const [page, setPage] = useState([])
    const [totalPages, setTotalPages] = useState([])
    // const page = 0
    // const totalPages = 0


    useLayoutEffect(() => {
        navigation.setOptions({
            genre: route && route.params && route.params.genre ? route.params.genre : 'Error'
        })
    })

    useEffect(() => {
        setIsLoading(true);
        getGenresId(route.params.id, page).then(data => {
            setIsLoading(false);
            setFilmList(data.results);
            setPage(data.page)
            setTotalPages(data.total_pages)
        })
    }, [])
    console.log(page);
    console.log(totalPages);
    return (
        <View style={styles.main_container}>
            <View style={styles.header_genre}>
                <View style={styles.header_flex}>
                    {/* <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/arrow.png')}
                        /> */}
                    <FontAwesome name="arrow-left" size={24} color="#B5A90F" />
                    <Text>Aventure - {route.params.genre}</Text>
                </View>
            </View>
            <SafeAreaView style={styles.flex_container}>
                {/* <FilmItem film={data} goToDetail="" index="2" /> */}
                <FlatList
                    data={filmList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item} goToDetail="" index="2" />}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                            console.log('+1');
                    }}
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
        // flex: 1,
        // marginTop: 20,
        justifyContent: 'space-around',
    },
    tinyLogo: {
        width: 40,
        height: 40,
        borderWidth: 5,
        borderColor: '#B00020',
        borderRadius: 50
    },
    header_genre: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#B00020',
        paddingVertical: 20,
    },
    header_flex: {
        flex: .75,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    flex_container: {
        flex: 4,
        flexWrap: 'wrap',
    }
})
