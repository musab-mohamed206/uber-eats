import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, {useState,useEffect} from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/BottomTabs'

const YELP_API_KEY = 'wD-wQS_Y8r_EagKL-uM4jGXHvSfhSchB7qma8QKvpIO2UMF07RUgC2qGnIs_qsEjq4bIYij28kpYRJUAWnVt21zt8_HwD7OE02J70UxWMbiskjEEBNYfN4xuP1CoYnYx';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1, paddingTop: 50 }}>
        <View style={{ backgroundColor: 'white', padding: 15 }}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <SearchBar  cityHandler={setCity}  />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
            <Categories />
            <RestaurantItems restaurantData={restaurantData}/>
        </ScrollView>
        <Divider width={1} />
        <BottomTabs />
    </SafeAreaView>
  )
}