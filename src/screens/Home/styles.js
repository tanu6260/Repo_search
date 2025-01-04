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
        // marginBottom:SIZES.height*0.025, 
        marginTop: SIZES.height * 0.02,
    },




});

export default styles;