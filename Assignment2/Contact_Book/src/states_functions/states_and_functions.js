import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "../styles/styles";

const states_and_functions = () => {

    const contacts = [
        { id: '1', name: 'Muhammad Bilal', number: '03124567890', group: 'Family' },
        { id: '2', name: 'Subhan Fayyaz', number: '03217654321', group: 'Friends' },
        { id: '3', name: 'Nouman Ijaz', number: '03267890123', group: 'Work' },
        { id: '4', name: 'Arfaat Hussain', number: '03390123456', group: 'Family' },
        { id: '5', name: 'Uzair Hassan', number: '03216549870', group: 'Friends' },
        { id: '6', name: 'Shoaib Akbar', number: '03543210987', group: 'Work' },
        { id: '7', name: 'Toqueer Ahmed', number: '03112223333', group: 'Family' },
        { id: '8', name: 'Jawad Khan', number: '03445556666', group: 'Friends' },
        { id: '9', name: 'Majid Ali', number: '03778889999', group: 'Work' },
        { id: '10', name: 'Abdullah', number: '03001112222', group: 'Family' },
    ];

    const [searchItem, setSearchItem] = useState("");

    const [filteredData,setFilteredData]=useState(contacts);


    const renderData = ({ item }) => (
        <TouchableOpacity style={styles.contactList} onPress={() => displayDialog(item)}>

            <View style={{ justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{item.name}</Text>
                <Text>{item.number}</Text>
            </View>

            <View style={{ justifyContent: 'center' }}>
                <Text>{item.group}</Text>
            </View>

        </TouchableOpacity>
    );


    const displayDialog = (item) => {

        alert("Name : "+item.name+"\nNumber : "+item.number+"\nGroup : "+item.group )

    }

    const searchFilter=()=>{
        setSearchItem(searchItem)

        if(searchItem.trim==""){
            setFilteredData(contacts)
        }
        else{
            const filtered=contacts.filter(contact=> contact.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()) || contact.number.toLocaleLowerCase().includes(searchItem));

            setFilteredData(filtered)
        }
    }

    const filterList=(group)=>{

        if(group==="All"){
            setFilteredData(contacts)
        }
        else{
        setFilteredData(contacts.filter(contact => contact.group === group));
    }
}


    return {
        contacts,
        searchItem, setSearchItem,
        filteredData, setFilteredData,
        renderData,
        filterList, searchFilter
    };
};

export default states_and_functions;
