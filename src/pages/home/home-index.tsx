import { Dimensions, Image, View } from "react-native";
import JTechMainLogo from "../../assets/JTech_Logo.svg";
import { HomeStyle } from "./home-style";

export function HomePage(){
    const width = (Dimensions.get('window').width) / 1.08
    return(
        <View style={HomeStyle.container}>
            <View style={[HomeStyle.imgContainer, {width: width}]}>
                <Image style={HomeStyle.image} alt="Main Logo Image" source={JTechMainLogo} />        
            </View>
        </View>
    )

}