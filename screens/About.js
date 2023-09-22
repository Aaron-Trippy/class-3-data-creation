import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { bookStore } from '../data/books'
import { useState } from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';

export default function About({navigation}) {

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    const [data, setData] = useState();

    const addingData = () => {
        console.log("Started");
        setData(bookStore);
    }
    
    return (
        <View style={styles.container}>

            <Card>
                <Card.Content>
                <Text variant="titleLarge">Welcome to the Dashboard!</Text>
                <Text variant="bodyMedium">A magical place where you can...</Text>
                <Text variant="bodyMedium">press the show data button :)</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            </Card>

            <Button mode="outlined" onPress={() => addingData()}>Show Data</Button>

            {
                data && data.books.map((b, index) => {
                    if(b.category.toLowerCase() == "java") {
                        return (
                            <View key={index}>
                                <Text style={styles.title}>{b.title}</Text>
                                {
                                    b.authors && b.authors.map((a, ind) => {
                                        return (
                                            <View key={ind}>
                                                <Text style={styles.authors}>{a}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )
                    }
                })
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    authors: {
        fontSize: 14,
        textAlign: 'center',
    }
});
