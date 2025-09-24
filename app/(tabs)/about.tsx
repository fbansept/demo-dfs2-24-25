import { ThemedView } from "@/components/themed-view";
import { MaterialIcons } from "@expo/vector-icons";
import { Href, Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutScreen() {

    //const navbarHeight = useBottomTabBarHeight();

    const router = useRouter()

    type Task = { id: number, title: string, completed: boolean }

    const [taskList, setTaskList] = useState<Task[]>([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(result => result.json())
            .then(taskList => setTaskList(taskList))
    }, [])

    const ItemList = ({ id, text, completed }: { id: number, text: string, completed: boolean }) => {
        return (
            <Link
                href={("/task/" + id) as Href}
                style={[styles.containerItem, completed ? styles.taskCompleted : styles.taskNotCompleted]}>
                <Text>{text}</Text>
            </Link>
        )
    }

    return (
        <ThemedView style={styles.container}>
            <SafeAreaView>
                <FlatList
                    style={styles.containerList}
                    data={taskList}
                    renderItem={({ item }) => {
                        return (
                            <ItemList
                                id={item.id}
                                text={item.title}
                                completed={item.completed}>
                            </ItemList>
                        )
                    }}>
                </FlatList>

                <View style={{
                    flexDirection: "row",
                    flex: 1,
                    marginHorizontal: 20,
                    justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-end',
                }}>
                    <Pressable
                        onPress={() => router.navigate('/task/create')}
                        style={{
                            position: "absolute",
                            bottom: 20,
                            backgroundColor: "#527894",
                            height: 60,
                            width: 60,
                            borderRadius: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <MaterialIcons name="add" size={40} color="white"></MaterialIcons>
                    </Pressable>
                </View>

            </SafeAreaView>
        </ThemedView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerList: {
        borderColor: "#eee",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    containerItem: {
        padding: 10,
        minWidth: 200,
        borderColor: "#eee",
        borderBottomWidth: 1,
    },
    taskCompleted: {
        backgroundColor: "#abe8b8"
    },
    taskNotCompleted: {
        backgroundColor: "#e8b5ab"
    }
})