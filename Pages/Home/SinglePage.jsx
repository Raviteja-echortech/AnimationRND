import React from "react"
import { Text, View, Image, StyleSheet, } from "react-native"
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';


const SinglePage = ({ navigation, route }) => {
    const { item } = route.params
    return (
        <View style={Styles.container} >
            <Animated.Image
                sharedTransitionTag={item.name}
                source={{ uri: item.dogPic }}
                style={{ height: 200 }}
            />
            <Animated.View
                // style={styles.textContainer}
                entering={FadeIn.delay(600)}>
                <Text onPress={navigation.goBack} style={{ paddingBottom: 30 }} >{item.name}</Text>
                <Text >{item.decs}</Text>
            </Animated.View>
        </View >
    )
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})

export default SinglePage