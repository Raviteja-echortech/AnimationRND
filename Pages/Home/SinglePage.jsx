import React from "react"
import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import Animated, { FadeInDown } from 'react-native-reanimated';


const SinglePage = ({ navigation, route }) => {
    const { item } = route.params
    const AinmatedPressable = Animated.createAnimatedComponent(Pressable)
    return (
        <View style={Styles.container} >
            <Animated.Image
                sharedTransitionTag={item.name}
                source={item.dogPic}
                resizeMode={'cover'}
                style={{ height: 300,width:"100%" }}
            />
            <Animated.View
                // style={styles.textContainer}
                entering={FadeInDown.duration(1000)}>
                <Text onPress={navigation.goBack} style={{ paddingBottom: 30 }} >{item.name}</Text>
                <Text >{item.decs}</Text>
            </Animated.View>

            <AinmatedPressable style={Styles.buttonContainer} entering={FadeInDown.duration(900)} onPress={() => console.log('Booking Ticket')} >
                <Text style={{ color: "white", fontWeight: "600" }}>Buy Now</Text>
            </AinmatedPressable>

        </View >
    )
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    buttonContainer: {
        width: "90%",
        alignItems: "center",
        padding: 30,
        backgroundColor: "blue",
        alignSelf: "center",
        borderRadius: 10,
    }
})

export default SinglePage