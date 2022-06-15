import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];

export default function RestaurantItems(props) {
  return (
    <View>
        {props.restaurantData.map((item, index) => (
            <TouchableOpacity activeOpacity={0.8} style={{ marginBottom: 10 }}>
                <View key={index} style={{ marginTop: 10, padding:15, backgroundColor:'#fff' }}>
                    <ResturantImage image={item.image_url} />
                    <ResturantInfo name={item.name} reating={item.rating} />
                </View>
            </TouchableOpacity>

        ))}
    </View>
  )
}

const ResturantImage = (props) => {
    return (
        <>
            <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
            <TouchableOpacity style={{ position:'absolute' , right: 20, top: 20 }}>
                <MaterialCommunityIcons name="heart-outline" size={30} color="#fff" />
            </TouchableOpacity>
        </>

    )
}

const ResturantInfo = (props) => (
    <View style={{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        }}>
        <View>
            <Text style={{ fontSize:15, fontWeight:'bold' }}>{props.name}</Text>
            <Text style={{ fontSize:13, color:'gray' }}> 30-45 . min</Text>
        </View>
        <View style={{ backgroundColor: '#eee', heigh: 30, width:30, alignItems: 'center', borderRadius:15, justifyContent: 'center' }}>
            <Text> {props.reating} </Text>
        </View>
    </View>
);