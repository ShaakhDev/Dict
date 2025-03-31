import { Button, Input, } from "@/components"
import { useLoginMutation } from "@/features"
import { AppParamsList } from "@/navigators"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useState } from "react"
import { View } from "react-native"
import { useStorage } from "@/utils"
import { STORAGE_KEYS } from "@/constants"

export const LoginScreen = ({ navigation }: NativeStackScreenProps<AppParamsList>) => {
    const [loginState, setLoginState] = useState({
        email: '',
        password: ''
    })
    const [login, { }] = useLoginMutation()

    const handleChange = (name: string, value: string) => {
        setLoginState(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async () => {
        try {
            const response = await login(loginState).unwrap() //{token: "token" ,success: true}
            // kelgan tokenni storage ga saqlash
            // codes here ....
            if (!response.success) {
                return
            }
            useStorage.setItem(STORAGE_KEYS.TOKEN, response.token)

            navigation.replace('BottomTab')
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
            <Input placeholder="Login" onChangeText={(value) => handleChange('email', value)} />
            <Input placeholder="Password" onChangeText={value => handleChange('password', value)} />

            <Button onPress={handleSubmit} style={{ width: '100%' }}>Login</Button>
        </View>
    )
}