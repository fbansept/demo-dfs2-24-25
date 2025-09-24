import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TaskDetails() {

    const { id } = useLocalSearchParams();

    return (
        <SafeAreaView>
            <Text>Details task {id}</Text>

            
        </SafeAreaView>
    )

}