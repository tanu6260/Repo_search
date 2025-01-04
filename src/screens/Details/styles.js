import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constans';



const styles = StyleSheet.create({
    maincontenier: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    innercontent: {
        width: SIZES.width * 0.93,
        alignSelf: 'center',
        backgroundColor: COLORS.white,
        // borderWidth: 1,

        marginTop: SIZES.height * 0.02,

        marginBottom: SIZES.height * 0.02,
    },
    box: {
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: COLORS.white,
        elevation: 4,
        borderColor: COLORS.gray10,
        borderRadius: 8
    },

    heading: {
        fontSize: SIZES.width * 0.045,
        color: COLORS.black,
        fontFamily: FONTS.semiBold,
        marginTop: SIZES.height * 0.01,
        textAlign: 'center',

        width: SIZES.width * 0.85,
    },

    subheading: {
        fontSize: SIZES.width * 0.04,
        color: COLORS.gray1,
        fontFamily: FONTS.medium,
        marginTop: SIZES.height * 0.02,
        width: SIZES.width * 0.85,

    },


    avatar: {
        height: SIZES.width * 0.45,
        width: SIZES.width * 0.45,
        borderRadius: SIZES.width * 0.22,
        borderWidth: 1,
        borderColor: COLORS.lightGray1,
        alignSelf: 'center'
    }




});

export default styles;