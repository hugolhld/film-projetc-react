import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button, Image, FlatList, ActivityIndicator, SafeAreaView, ScrollView} from "react-native";
import {getGenres} from "../services/movie";
import {GenreItem} from '../components/genreItem'
import {Logo} from '../components/logo'

export const LaunchScreen = (props) => {

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
            {/* <ScrollView> */}
                <Logo />
                <SafeAreaView style={styles.flex_container}>
                    <FlatList
                        // style={styles.flex_container}
                        numColumns={2}
                        data={genres}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => <GenreItem 
                            genreName={item} 
                            goTo={() => props.navigation.navigate('Genre', {genre: item.name, id: item.id})}
                            />}
                        />
                    {/* { isLoading ?
                        <View>
                            <ActivityIndicator size='large' color={'#000'} />
                        </View>
                        : null
                    } */}
                </SafeAreaView>
            {/* </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
        // justifyContent: 'space-around',
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
    flex_container: {
        // width: '100%',
        // flex: 1,
        // justifyContent: 'center',
        // backgroundColor: 'blue',
        // flexDirection: 'row',
        // // alignItems: 'baseline',
        // // alignContent: 'flex-start',
        // flexWrap: 'wrap',
        // alignItems: 'flex-start'
        // flexFlow
        // flex: 7,
        // height: 500,
        // alignItems: 'flex-start',
        // alignContent: 'flex-start',
        // flexWrap: 'wrap',
        // flexDirection: 'row'
    }
})
