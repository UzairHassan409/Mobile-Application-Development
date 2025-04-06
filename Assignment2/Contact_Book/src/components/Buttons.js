
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';


const Buttons = (props) => {



    return (

        <View style={styles.buttonsContainer}>

            <TouchableOpacity style={styles.button} onPress={() => props.filterList("Family")}>
                <Text style={styles.buttonText}>Family</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={() => props.filterList("Friends")}>
                <Text style={styles.buttonText}>Friends</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={() => props.filterList("Work")}>
                <Text style={styles.buttonText}>Work</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={() => props.filterList("All")}>
                <Text style={styles.buttonText}>All</Text>
            </TouchableOpacity>


        </View>

    )
}

export default Buttons;