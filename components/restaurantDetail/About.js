import { View, Text, Image } from 'react-native'
import React from 'react'

const image =  "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg";
const name = "Beachside Bar";
const price = "$$";
const reviews = 1244;
const rating = 4.5;
const categories = ["Cafe", "Bar"];
const description = 'Thai . Comfort Food . $$ . :ticket '

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 200 }} />
);

const RestaurantTitle = (props) => (
    <Text style={{ fontSize: 29, fontWeight: "bold", marginTop: 10, marginHorizontal: 15 }}>{props.name}</Text>
);

const RestaurantDescription = (props) => (
    <Text style={{ fontSize: 15, marginTop: 10, marginHorizontal: 15, fontWeight: "500" }}>{props.description}</Text>
);