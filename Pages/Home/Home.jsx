import React from "react"
import { FlatList, Text, TouchableOpacity, View, SafeAreaView, StyleSheet, StatusBar } from "react-native"
import Animated, { FadeInDown } from "react-native-reanimated"

const CardsData = [
    {
        dogPic: require('../../Assets/dog1.png'),
        decs: "dog1",
        name: "puppy",
        id: 1,
    },
    {
        dogPic: require('../../Assets/dog2.png'),
        decs: "dog2",
        name: "snuppy",
        id: 2,
    },
    {
        dogPic: require('../../Assets/dog3.png'),
        decs: "dog3",
        name: "doggy",
        id: 3,
    },
    {
        dogPic: require('../../Assets/dog4.png'),
        decs: "dog3",
        name: "dancy",
        id: 4,
    },
    {
        dogPic: require('../../Assets/dog5.png'),
        decs: "dog3",
        name: "nanacy",
        id: 5,
    },
    {
        dogPic: require('../../Assets/dog6.png'),
        decs: "dog3",
        name: "lovely",
        id: 6,
    },
    {
        dogPic: require('../../Assets/dog7.png'),
        decs: "dog3",
        name: "deauty",
        id: 7,
    },
    {
        dogPic: require('../../Assets/dog8.png'),
        decs: "dog3",
        name: "cutiey",
        id: 8,
    },
]

const Home = ({ navigation }) => {
    return (
        < SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} >
            <StatusBar backgroundColor={"grey"} />
            <View>
                <FlatList
                    data={CardsData}
                    contentContainerStyle={{ alignItems: "center", }}
                    renderItem={({ item, index }) => (
                        <Animated.View entering={FadeInDown.delay(500 * index)} style={{ width: "90%", }} >
                            <TouchableOpacity activeOpacity={0.7} style={Styles.cardContainer} onPress={() => navigation.navigate('singlePage', {
                                item
                            })} >
                                <View style={Styles.textBox} >
                                    <Text>{item.decs}</Text>
                                    <Text>{item.name}</Text>
                                </View>
                                <View style={Styles.doggyPicContainer} >
                                    <Animated.Image
                                        sharedTransitionTag={item.name}
                                        source={item.dogPic}
                                        style={Styles.imagePic}
                                        resizeMode="contain"
                                    />
                                </View>
                            </TouchableOpacity>
                        </Animated.View>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        marginBottom: 20,
        marginTop: 20,
        height: 100,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        position: "relative",
    },
    doggyPicContainer: {
        width: "40%",
        height: 100,
      
        position: "relative",
    },
    imagePic: {
        height: 120,
        width: "100%",
        position: "absolute",
        bottom:0,
        borderRadius: 10,
    },
    textBox: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Home
