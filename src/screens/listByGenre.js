import React from 'react';
import {View, StyleSheet, FlatList, SafeAreaView, Dimensions} from "react-native";
import {getGenresId} from "../services/movie";
import { FilmItem } from '../components/filmItem'

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
        this._loadFilms()
    }

    _loadFilms = () => {
        const {route, navigation} = this.props
        getGenresId(route.params.id, this.page + 1)
            .then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({filmList: [...this.state.filmList, ...data.results], isLoading: false})
                })
                console.log('ok')
    }
    _renderResult = () => {
        if(this.state.filmList.length > 0) {
            return <View style={{flex:1 ,height:Dimensions.get('window').height}}>
                <FlatList
                    data={this.state.filmList}
                    renderItem={({item}) => <FilmItem film={item} goToDetail={() => this.props.navigation.navigate('Detail', {title: item.title, id: item.id})}/>}
                    keyExtractor={item => item.id.toString()}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if(this.page < this.totalPages) {
                            this._loadFilms()
                        }
                    }}
                />
            </View>
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                    <SafeAreaView style={styles.flex_container}>
                            {this._renderResult()}
                    </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
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
