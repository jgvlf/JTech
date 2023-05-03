import { Dimensions, Image, View } from "react-native";
import JTechMainLogo from "../../assets/JTech_Logo.svg";
import { LoginStyle } from "./login-style";

export function LoginPage(){
    const TopGapPercent = 100 - (2090 / 2340 * 100)
    // const TopGapRazao = (Dimensions.get('window').height) / (Dimensions.get('window').height)
    // const GapHeight = (Dimensions.get('window').height) / TopGapRazao
    // const top = (Dimensions.get('window').height) - GapHeight
    const width = (Dimensions.get('window').width) / 1.08
    console.log(TopGapPercent)
    return(
        <View style={LoginStyle.container}>
            <View style={[LoginStyle.imgContainer, {width: width, top: `${TopGapPercent}%`}]}>
                <Image style={LoginStyle.image} alt="Main Logo Image" source={JTechMainLogo} />        
            </View>
        </View>
    )
}