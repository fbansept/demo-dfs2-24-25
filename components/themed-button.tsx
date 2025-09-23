import { useThemeColor } from "@/hooks/use-theme-color";
import { MaterialIcons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextStyle, ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type ThemedButtonProps = {
    lightContainerColor?: string,
    darkContainerColor?: string,
    lightTextColor?: string,
    darkTextColor?: string,
    style?: ViewStyle,
    textStyle?: TextStyle,
    iconName?: any,
}

export default function ThemedButton({
    children,
    style,
    textStyle,
    iconName,
    lightContainerColor,
    darkContainerColor,
    lightTextColor,
    darkTextColor }: ThemedButtonProps & PropsWithChildren) {

    const containerColor = useThemeColor({ light: lightContainerColor, dark: darkContainerColor }, 'buttonContainer');
    const textColor = useThemeColor({ light: lightTextColor, dark: darkTextColor }, 'buttonText');

    return (
        <View style={[styles.container, { backgroundColor: containerColor }, style]}>
            {iconName ? <MaterialIcons
                name={iconName}
                color={textStyle?.color ?? textColor}
                size={textStyle?.fontSize ?? 14}>
            </MaterialIcons> : null}
            <Text style={[styles.text, { color: textColor }, textStyle]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        alignSelf: 'flex-start', //ajuste avec le contenu
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4
    },
    text: {
    }
})