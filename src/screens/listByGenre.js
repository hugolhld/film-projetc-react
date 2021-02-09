import React, {useState, useEffect, useLayoutEffect} from 'react';
import {View, StyleSheet, Button, FlatList, ActivityIndicator, SafeAreaView, Text} from "react-native";
import {getGenresId} from "../services/movie";
import {GenreItem} from '../components/genreItem'
import { FontAwesome } from '@expo/vector-icons'; 
import { FilmItem } from '../components/filmItem'
import { render } from 'react-dom';
import { useRoute } from '@react-navigation/native';
// import {data} from '../helpers/filmDatas'

export default class ListByGenre extends React.Component{
    state = {
        filmList: [],
    }
    page
    totalPages

    constructor(props){
        super(props)
        this.page = 0
        this.totalPages = 0
    }

    _loadFilms = () => {
        const {route, navigation} = this.props
        getGenresId(route.params.id, this.page + 1)
            .then(data => {
                this.page = data.page
                this.totalPage = data.total_pages
                this.setState({filmList: [...this.state.filmList, ...data.results], isLoading: false})
                })
                console.log('ok')
    }
    // const {route, navigation} = props

    // const [isLoading, setIsLoading] = useState(false)
    // const [filmList, setFilmList] = useState([])
    // const [page, setPage] = useState([])
    // const [totalPages, setTotalPages] = useState([])
    // const page = 0
    // const totalPages = 0


    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         genre: route && route.params && route.params.genre ? route.params.genre : 'Error'
    //     })
    // })

    // useEffect(() => {
    //     setIsLoading(true);
    //     getGenresId(route.params.id, page).then(data => {
    //         setIsLoading(false);
    //         setFilmList(data.results);
    //         setPage(data.page)
    //         setTotalPages(data.total_pages)
    //     })
    // }, [])
    // console.log(page);
    // console.log(totalPages);

    _renderResult = () => {
        this._loadFilms()
        if(this.state.filmList.length > 0) {
            return <View>
                <FlatList
                    data={this.state.filmList}
                    renderItem={({item}) => <FilmItem film={item} />}
                    keyExtractor={item => item.id.toString()}
                    onEndReachedThreshold={1}
                    onEndReached={() => {
                        console.log('end')
                        // if(this.page < this.total_pages) {
                        //     this._loadFilms()
                        // }
                    }}
                />
            </View>
        }
    }

    _accessRoute = () => {
        useLayoutEffect(() => {
            navigation.setOptions({
                genre: route && route.params && route.params.genre ? route.params.genre : 'Error'
            })
        })
    }

    render() {
        return (
            // <View>
            //     <Text>Hello world</Text>
            //     {this._renderResult()}
            //     {/* {console.log(route.params.genre)} */}
            // </View>
            <View style={styles.main_container}>
                <Button title="Load" onPress={this._loadFilms}/>
                <View style={styles.header_genre}>
                    <View style={styles.header_flex}>
                        <FontAwesome name="arrow-left" size={24} color="#B5A90F" />
                        <Text>Aventure - {/* {route.params.genre} */}</Text>
                    </View>
                </View>
                <SafeAreaView style={styles.flex_container}>
                    {/* <FlatList
                        data={filmList}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => <FilmItem film={item} goToDetail="" index="2" />}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                                console.log('+1');
                        }}
                        /> */}
                        {this._renderResult()}
                </SafeAreaView>
            </View>
        )
    }
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