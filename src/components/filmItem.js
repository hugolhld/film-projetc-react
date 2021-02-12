import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {getMovieCredits ,getMovie} from "../services/movie";

export const FilmItem = (props) => {
    const {film, goToDetail, index} = props;
    const [filmData, setFilmData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [directorName, setDirectorName] = useState([])

    // if(!isLoading)
    // {
    //     getDirectorMovie(movieId.id)
    //         .then(data => {
    //             setMovieCrew(data)
    //             if(movieCrew)
    //             {
    //                 for(let i = 0;i < movieCrew.crew.length; i++)
    //                 {
    //                     if(movieCrew.crew[i].job == 'Director')
    //                     {
    //                         setMovieDirector(movieCrew.crew[i])
    //                         setIsLoading(true)
    //                         i = movieCrew.crew.length
    //                     }
    //                 }
    //                 setIsLoading(true)
    //             }
    //         })
    // }

    return (
        <View style={styles.main_container} >
            <TouchableOpacity /* style={styles.main_container}  */onPress={goToDetail}>
                <View style={styles.main_information_container}>
                    <View style={styles.main_information_content}>
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
        // flex: 1,
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