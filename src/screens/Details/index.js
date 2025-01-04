import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import styles from './styles';

const Details = ({ route }) => {
    const { repo } = route.params;

    return (
        <View style={styles.maincontenier}>
            <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} style={styles.innercontent}>

                <Image source={{ uri: repo.owner.avatar_url }} style={styles.avatar} />
                <Text style={styles.heading}>Name : {repo.name}</Text>
                <View style={styles.box}>
                <Text style={styles.subheading}>Description : {repo.description || 'No description available'}</Text>
                <Text style={styles.subheading}> Stars : {repo.stargazers_count}</Text>
                <Text style={styles.subheading}> Forks : {repo.forks_count}</Text>
                <Text style={styles.subheading} > Language : {repo.language || 'N/A'}</Text>
                <Text style={styles.subheading} > Owner : {repo.owner.login}</Text>
                </View>
            </ScrollView>
        </View>
    );
};



export default Details;
