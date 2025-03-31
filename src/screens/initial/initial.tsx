
import { STORAGE_KEYS } from "@/constants"
import { AppParamsList } from "@/navigators"
import { useStorage } from "@/utils"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useEffect } from "react"
import { ActivityIndicator, View } from "react-native"

export const InitialScreen = ({ navigation }: NativeStackScreenProps<AppParamsList>) => {
    const token = useStorage.getItem(STORAGE_KEYS.TOKEN)
    useEffect(() => {
        if (token) {
            navigation.replace('BottomTab')
        } else {
            navigation.replace('Login')
        }
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}