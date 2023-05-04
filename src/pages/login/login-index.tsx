import { useState } from "react";
import { Image, TextInput, View } from "react-native";
import JTechMainLogo from "../../../assets/JTech_Logo.svg";
import { inputFieldHeight, inputFieldWidth, topGapPercent, topGapViewInputFieldHeight, viewInputFieldHeight, widthCenterViewImg } from "../../lib/vars";
import { LoginStyle } from "./login-style";

export function LoginPage(){
    const [cpf, onChangeCpf] = useState('')
    const [password, onChangePassword] = useState('')
    
    return(
        <View style={LoginStyle.container}>
            <View style={{alignItems: 'center',top: `${topGapPercent}%`}}>
                <View style={[LoginStyle.imgContainer, {width: widthCenterViewImg}]}>
                    <Image style={LoginStyle.image} alt="Main Logo Image" source={JTechMainLogo} />        
                </View>
            </View>
            <View style={{top: `${topGapViewInputFieldHeight}`, width:'100vw', alignItems: 'center', height:`${viewInputFieldHeight}px`}}>
                <TextInput
                    style={{width:`${inputFieldWidth}px`,height:`${inputFieldHeight}px`}}
                    onChangeText={onChangeCpf}
                    placeholder="CPF" 
                    keyboardType="numeric"
                />
            </View>
        </View>
    )
}