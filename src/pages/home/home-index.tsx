import { Dimensions, Image, View } from "react-native";
import JTechMainLogo from "../../assets/JTech_Logo.svg";
import { HomeStyle } from "./home-style";

export function HomePage(){
    return(
        <View style={HomeStyle.container}>
            <View style={[HomeStyle.imgContainer, {width: Dimensions.get('window').width}]}>
                <Image style={HomeStyle.image} alt="Main Logo Image" source={JTechMainLogo} />        
            </View>
        </View>
    )

}