import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, ScrollView, Image, Text, Button } from 'react-native';
import InputBox from '../../componets/input';
import styles from './styles';
import Card from '../../componets/card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepositories, toggleFavorite } from '../../redux/repoAction';
import { FONTS, SIZES } from '../../constans';
// import Button from '../../componets/button';


const Home = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();



    const { repositories, status, error, favorites } = useSelector((state) => state.repos);

    console.log("repositories", repositories?.[0]?.owner?.avatar_url)


    const handleSearch = () => {
        dispatch(fetchRepositories(query));
    };

    const handleToggleFavorite = (repo) => {

        console.log("repo", repo)
        dispatch(toggleFavorite(repo));
    };



    return (
        <View style={styles.maincontenier}>
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled' style={styles.innercontent}>

                <InputBox
                    placeholder="Search Repositories"
                    onChangeText={setQuery}
                    value={query}
                    onSubmitEditing={handleSearch}
                />


                {status === 'loading' && <Text style={{ color: 'black', fontFamily: FONTS.medium, fontSize: SIZES.width * 0.04, }}>Loading...</Text>}
                {error && <Text style={{ color: 'red' , fontFamily: FONTS.medium,  fontSize: SIZES.width * 0.03, }}>Error: {error}</Text>}


                <FlatList

                    data={repositories?.[0]?.owner?.avatar_url ? repositories : []}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Card
                            image={{ uri: item.owner.avatar_url }}
                            name={item?.name}
                            description={item?.description}
                            onPress={() => navigation.navigate('Details', { repo: item })}
                            onFavorite={() => handleToggleFavorite(item)}
                            isFavorite={favorites.some((fav) => fav?.id === item?.id)}
                            langauage={item?.language}
                        />
                    )}
                />

            </ScrollView>
        </View>
    );
};



export default Home;
