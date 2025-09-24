import ThemedButton from "@/components/themed-button";
import { ThemedText } from "@/components/themed-text";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateScreen() {




    return (
        <SafeAreaView>
            <ThemedText type="title">Ajout tache</ThemedText>

            <ThemedButton onPress={() => { }}>Prendre une photo</ThemedButton>
            <ThemedButton onPress={() => { }}>Ajouter</ThemedButton>
        </SafeAreaView>
    )
}
