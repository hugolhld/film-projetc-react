import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, FlatList, Image} from "react-native";
import {Search} from "../components/Search";
import {FilmItem} from "../components/filmItem";
import {searchMovie} from "../services/movie";
import {Logo} from '../components/logo'

export default class SearchScreen extends React.Component {
    state = {
        searchText: '',
        filmsState: [],
        isLoading: false,
    }

    page;
    totalPages;

    constructor(props) {
        super(props);
        this.page = 0;
        this.totalPages = 0;
    }

    _searchFilms = () => {
        this.page = 0;
        this.totalPages = 0;
        this.setState({filmsState: []});

        this._loadFilms();
    }

    handleSearchText = (text) => {
        this.setState({searchText: text})
    }

    _loadFilms = () => {
        this.setState({isLoading: true})
        searchMovie(this.state.searchText, this.page + 1)
            .then(data => {
                this.page = data.page;
                this.totalPages = data.total_pages;
                this.setState({filmsState: [...this.state.filmsState, ...data.results], isLoading: false});
            })
    }

    _renderResult = () => {
        if (this.state.filmsState.length > 0) {
            return <View style={styles.result_container}>
                <FlatList
                    data={this.state.filmsState}
                    renderItem={({item, index}) => <FilmItem film={item} index={index} goToDetail={() => this.props.navigation.navigate('Detail', {title: item.title, id: item.id})} />}
                    keyExtractor={item => item.id.toString()}
                    onEndReachedThreshold={1}
                    onEndReached={() => {
                        if (this.page < this.totalPages) {
                            this._loadFilms();
                        }
                    }}
                />
            </View>
        }

        return(
            <View style={styles.no_found_container}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/bad.png')}
                />
                <Text style={styles.text_no_result}>Aucune recherche n'a été effectuée.</Text>
            </View>
        )
    }

    render() {
        return (
                <SafeAreaView style={styles.main_container}>
                    <Logo />
                        <Search handleSearch={this.handleSearchText} handleClickButton={this._searchFilms}/>
                        {this._renderResult()}
                </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#F4F4F4'
    },
    result_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    text_no_result: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#B5A90F',
        paddingTop: 10
    },
    no_found_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading_container: {
        bottom: 300
    },
    tinyLogo: {
        width: 100,
        height: 100,
    }
})
