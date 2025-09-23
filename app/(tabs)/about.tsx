import ThemedButton from "@/components/themed-button";
import { ThemedView } from "@/components/themed-view";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutScreen() {

    return (

        <ThemedView style={styles.container}>
            <SafeAreaView>
                <ThemedButton iconName="check" textStyle={{ fontSize: 20, color: 'green' }}>Test 1</ThemedButton>
                <ThemedButton iconName="check" style={{ width: 200 }}>Test 1</ThemedButton>
                <ThemedButton lightContainerColor="red" lightTextColor="blue">Test 2</ThemedButton>
            </SafeAreaView>
        </ThemedView>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {

    }
})