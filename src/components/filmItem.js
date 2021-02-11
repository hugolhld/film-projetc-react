import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {getMovieCredits ,getMovie} from "../services/movie";

export const FilmItem = (props) => {
    const {film, goToDetail, index} = props;
    const [filmData, setFilmData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [directorName, setDirectorName] = useState([])

    // useEffect(() => {
    //     setIsLoading(true);
    //     getMovieCredits(film.id).then(data => {
    //         setIsLoading(false);
    //         setFilmData(data.crew);
    //     })
    // }, [])

    // const testt = () => {
    //     if(filmData) {
    //         for(const director of filmData) {
    //             console.log(director.job);
    //             if(director.job == 'Director') {
    //                 setDirectorName(director.original_name)
    //             }
    //         }
    //     }
    // }
    // // console.log(filmData);
    // testt()
    // console.log(filmData.production_companies.length > 0 && <Text style={styles.director}>{filmData.production_companies[0].name}</Text>);
    return (
        <View style={styles.main_container}>
            <TouchableOpacity style={styles.main_container} onPress={goToDetail}>
                <View style={styles.main_information_container}>
                    <Image source={{uri: `https://image.tmdb.org/t/p/original${film.poster_path}`}} style={styles.image} />
                    <View style={styles.content_container}>
                        <View>
                            <Text style={styles.title_text}>{film.title}</Text>
                        </View>
                        <View>
                            {/* <Text style={styles.title_text}>{directorName}</Text> */}
                            {/* {film.production_companies.length > 0 && <Text style={styles.director}>{film.production_companies[0].name}</Text>} */}
                        </View>
                        <View>
                            <Text>{film.release_date}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        // height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content_container: {
        // flex: 1,
        margin: 5,
        justifyContent: 'center',
    },
    main_information_container: {
        flexDirection: 'row'
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
        paddingRight: 5
    },
    picto: {
        width: 30,
        height: 30,
    }
})