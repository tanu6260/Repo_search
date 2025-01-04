import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constans';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Card = ({
    name,
    description,
    onPress,
    disabled,
    image,
    styletext,
    styleIcon,
    styleheader,
    wrapper,
    textwrapper,
    Imagebox,
    onFavorite,
    isFavorite,
    langauage
}) => {


    return (
        <TouchableOpacity
            activeOpacity={0.3}
            style={[styles.gameCard, wrapper]}
            onPress={onPress}
            disabled={disabled}>
            <View style={[styles.Imagebox, Imagebox]}>
                <Image source={image} style={[styles.Imgstyle, styleIcon]} />
            </View>
            <View style={[styles.textContainer, textwrapper]}>
                <Text numberOfLines={1} style={[styles.heading, styleheader]}>{name}</Text>
                <Text numberOfLines={2} style={[styles.text, styletext]}>{description || langauage}</Text>
            </View>

            <TouchableOpacity activeOpacity={0.5} style={styles.viewBtn} onPress={onFavorite}>
                {isFavorite ? (
                    <FontAwesome name="star" size={SIZES.width * 0.05} color={COLORS.yellow} />
                ) : (
                    <FontAwesome name="star-o" size={SIZES.width * 0.05} color={COLORS.black} />
                )}
            </TouchableOpacity>

        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    gameCard: {
        width: SIZES.width * 0.92,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        elevation: 3,
        borderRadius: 3,
        paddingVertical: SIZES.width * 0.035,
        marginVertical: SIZES.height * 0.01,
        borderRadius: 5,
    },
    Imgstyle: {
        height: SIZES.width * 0.16,
        width: SIZES.width * 0.16,
        resizeMode: 'cover',
        borderRadius: SIZES.width * 0.16,
        marginHorizontal: SIZES.width * 0.02,
    },
    textContainer: {
        width: SIZES.width * 0.6,
        // borderWidth: 1,
    },
    viewBtn: {
        position: 'absolute',
        top: SIZES.height * 0.016,
        right: SIZES.width * .03,

    },
    heading: {
        fontSize: SIZES.width * 0.042,
        color: COLORS.black,
        fontFamily: FONTS.medium,
    },
    text: {
        fontSize: SIZES.width * 0.032,
        color: COLORS.black,
        fontFamily: FONTS.regular,
    },
    favoriteButton: { fontSize: 18, color: 'blue' },
});
