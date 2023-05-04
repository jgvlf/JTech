import { Dimensions, Image, View } from "react-native";
import JTechMainLogo from "../../../assets/JTech_Logo.svg";
import { widthCenterViewImg } from "../../lib/vars";
import { HomeStyle } from "./home-style";

export function HomePage(){
    const widthLoginView = (Dimensions.get('window').width) / 1.08
    return(
        <View style={HomeStyle.container}>
            <View style={[HomeStyle.imgContainer, {width: widthCenterViewImg}]}>
                <Image style={HomeStyle.image} alt="Main Logo Image" source={JTechMainLogo} />        
            </View>
        </View>
    )

}