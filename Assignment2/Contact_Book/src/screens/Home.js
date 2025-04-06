import React from "react";
import { TextInput, TouchableOpacity, View, Text, FlatList, SafeAreaView, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import states_and_functions from "../states_functions/states_and_functions";
import styles from "../styles/styles";
import Buttons from "../components/Buttons";

const Home = () => {

    const {
        contacts,
        searchItem, setSearchItem,
        filteredData, setFilteredData,
        renderData,
         filterList,searchFilter
    } = states_and_functions();

    return (

        // Main Body
        <SafeAreaView style={styles.container}>


            <StatusBar backgroundColor={"gray"} />

            {/* Top Container */}
            <View style={styles.topContainer}>

                <Text style={styles.titleText}>Contact Book</Text>

                {/* Search Bar Container */}
                <View style={styles.searchBarContainer}>

                    {/* Search Bar */}
                    <TextInput style={styles.searchBar} placeholder="Search here ....." onChangeText={(text) => { setSearchItem(text); if (text == "") { setFilteredData(contacts) } }} value={searchItem} />

                    {/* Search Icon Container*/}
                    <TouchableOpacity style={styles.searchIconContainer} onPress={searchFilter} >

                        {/* Search Icon */}
                        <Icon name="search" size={25} />

                    </TouchableOpacity>

                </View>

            </View>

            {/* Bottom Main Container */}
            <View style={styles.bottomContainer}>

                {/* Filter Title Container */}
                <View style={styles.filterTextContainer}>
                    <Text style={styles.filterText}>Filtered By</Text>
                </View>

                {/* List Main Container */}
                <View style={styles.contactListMainContainer}>

                    {/* Buttons Container */}
                    <Buttons filterList={filterList}/>

                    {/* Contact List */}
                    <FlatList
                        data={filteredData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderData}
                    />

                </View>

            </View>


        </SafeAreaView>
    )
}

export default Home;