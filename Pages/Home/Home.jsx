import React from "react"
import { FlatList, Image, Text, TouchableOpacity, View, SafeAreaView, StyleSheet, StatusBar } from "react-native"
import Animated, { FadeInDown } from "react-native-reanimated"


// import { SafeAreaView } from "react-native-safe-area-context"
const CardsData = [
    {
        dogPic: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
        decs: "dog1",
        name: "puppy",
        id: 1,
    },
    {
        dogPic: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?cs=srgb&dl=pexels-wildlittlethingsphoto-2253275.jpg&fm=jpg",
        decs: "dog2",
        name: "snuppy",
        id: 2,
    },
    {
        dogPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFufLPmmQ_RdJMumfqLbSV7WZRLPFQu-itJw&s",
        decs: "dog3",
        name: "doggy",
        id: 3,
    },
    {
        dogPic: "https://media.istockphoto.com/id/526280278/photo/yorkshire-terrier-waiting-for-play.jpg?s=2048x2048&w=is&k=20&c=5_OX1aMZDfqt7kdlmdHYOz0tiq6sfgATRiZ90DWJ_lg=",
        decs: "dog4",
        name: "bottle",
        id: 4,
    },
    {
        dogPic: "https://media.istockphoto.com/id/1124609720/photo/cute-dog-running-outside.jpg?s=2048x2048&w=is&k=20&c=XWXSktDXDpnXZcKWSktlPWk4MyAj3PB1nR0UhXfYI7w=",
        decs: "dog5",
        name: "shout",
        id: 5,
    },
    {
        dogPic: "https://cdn.pixabay.com/photo/2020/04/09/12/28/dog-5021242_640.jpg",
        decs: "dog6",
        name: "brownny",
        id: 6,
    },
    {
        dogPic: "https://cdn.pixabay.com/photo/2016/06/26/20/21/dog-1481270_640.jpg",
        decs: "dog7",
        name: "laugh",
        id: 7,
    },
    {
        dogPic: "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg",
        decs: "dog8",
        name: "pamper",
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
                        <Animated.View entering={FadeInDown.delay(500 * index)} style={{ width: "90%" }} >
                            <TouchableOpacity activeOpacity={0.7} style={Styles.cardContainer} onPress={() => navigation.navigate('singlePage', {
                                item
                            })} >

                                <View style={Styles.textBox} >
                                    <Text >{item.decs}</Text>
                                    <Text >{item.name}</Text>
                                </View>
                                < View style={Styles.doggyPicContainer} >
                                    <Animated.Image
                                        sharedTransitionTag={item.name}
                                        source={{ uri: item.dogPic }}
                                        style={Styles.imagePic}
                                        resizeMode="cover"
                                    />
                                </View>
                            </TouchableOpacity>
                        </Animated.View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: "#fff",
        width: "95%",
        borderRadius: 10,
        // shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    doggyPicContainer: {
        width: "40%"
    },
    imagePic: {
        height: 100,
        width: 100,
        marginRight: 10,
        borderRadius: 10
    },
    textBox: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center"
    }

})





export default Home

