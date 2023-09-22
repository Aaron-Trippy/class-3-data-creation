import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import { Button } from 'react-native-paper';

export default function Home({navigation}) {
    const [number, setNumber] = useState(1);

    const check = () => {
        if(number == 1) {
          console.log("ONE");
        } else if(number == 2) {
          console.log("TWO");
        } else if(number == 3) {
          navigation.push('About')
        }
        setNumber(number + 1)
      }

    return (
        <>
            <View style={styles.container}>
                {/* <TouchableOpacity   onPress={() => check()}
                                    style={number === 1 ? styles.btnBlue :
                                            number === 2 ? styles.btnRed : styles.btnGreen}>
                    <Text>Click me</Text>
                </TouchableOpacity> */}
                <Button icon="hand-pointing-right" mode="contained"
                onPress={() => check()}
                style={number === 1 ? styles.btnBlue :
                        number === 2 ? styles.btnPurple : styles.btnPink}>
                    Press me!
                </Button>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBlue: {
        alignItems: 'center',
        backgroundColor: '#758CFF',
        borderColor: '#758CFF',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    btnPurple: {
        alignItems: 'center',
        backgroundColor: '#C76CFF',
        borderColor: '#C76CFF',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    btnPink: {
        alignItems: 'center',
        backgroundColor: '#FFA9FB',
        borderColor: '#FFA9FB',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
});
