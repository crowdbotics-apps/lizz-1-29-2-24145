import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_10417_739}>
        <View style={styles.View_10417_740}>
          <Text style={styles.Text_10417_740}>COMPLETED</Text>
        </View>
        <View style={styles.View_10417_741}>
          <Text style={styles.Text_10417_741}>4 routes</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ad7/c009/3c6fdae4720513181f1215224ed4a402"
          }}
          style={styles.ImageBackground_10417_742}
        />
        <View style={styles.View_10417_743}>
          <Text style={styles.Text_10417_743}>CATALUNYA</Text>
        </View>
        <View style={styles.View_10417_744}>
          <Text style={styles.Text_10417_744}>4h</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c47/ac83/041091345eb800eeed16d85143bef918"
          }}
          style={styles.ImageBackground_10417_745}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/158a/f9ce/f9cd905f912f1b0ccd43ab24a7af045c"
          }}
          style={styles.ImageBackground_10417_746}
        />
        <View style={styles.View_10417_747}>
          <Text style={styles.Text_10417_747}>MADRID</Text>
        </View>
        <View style={styles.View_10417_748}>
          <Text style={styles.Text_10417_748}>3.5h</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c47/ac83/041091345eb800eeed16d85143bef918"
          }}
          style={styles.ImageBackground_10417_749}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6149/b031/0053fcff9d07f5f387ba4fdb207ef9ed"
          }}
          style={styles.ImageBackground_10417_750}
        />
        <View style={styles.View_10417_751}>
          <Text style={styles.Text_10417_751}>CANARY ISLANDS</Text>
        </View>
        <View style={styles.View_10417_752}>
          <Text style={styles.Text_10417_752}>9h</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/013a/4e0c/5994622e69168522623ef340be022e92"
          }}
          style={styles.ImageBackground_10417_753}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0f8/1565/5b19241862d4f4d92bcb92797a7373f9"
          }}
          style={styles.ImageBackground_10417_754}
        />
        <View style={styles.View_10417_755}>
          <Text style={styles.Text_10417_755}>ANDALUSIA</Text>
        </View>
        <View style={styles.View_10417_756}>
          <Text style={styles.Text_10417_756}>18h</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/013a/4e0c/5994622e69168522623ef340be022e92"
          }}
          style={styles.ImageBackground_10417_757}
        />
      </View>
      <View style={styles.View_10417_758}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbb5/0f2c/a8dd412f1c6318815fd006964b9e8c04"
          }}
          style={styles.ImageBackground_10417_759}
        />
        <View style={styles.View_10417_760}>
          <Text style={styles.Text_10417_760}>VALL DE NURIA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_761}
        />
        <View style={styles.View_10417_762}>
          <Text style={styles.Text_10417_762}>7.8</Text>
        </View>
        <View style={styles.View_10417_763}>
          <Text style={styles.Text_10417_763}>90km</Text>
        </View>
        <View style={styles.View_10417_764}>
          <Text style={styles.Text_10417_764}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35c3/1e17/a173c0b91fce504de48959a98ea3cad6"
          }}
          style={styles.ImageBackground_10417_765}
        />
        <View style={styles.View_10417_766}>
          <Text style={styles.Text_10417_766}>GIRONA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_767}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6af/b2cb/0c535cb72045833dfb1e72ca1ae77a6b"
          }}
          style={styles.ImageBackground_10417_768}
        />
        <View style={styles.View_10417_769}>
          <Text style={styles.Text_10417_769}>7.8</Text>
        </View>
        <View style={styles.View_10417_770}>
          <Text style={styles.Text_10417_770}>90km</Text>
        </View>
        <View style={styles.View_10417_771}>
          <Text style={styles.Text_10417_771}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f136/25df/f7a69b37093ee3e6279d7136bad4aa50"
          }}
          style={styles.ImageBackground_10417_772}
        />
        <View style={styles.View_10417_773}>
          <Text style={styles.Text_10417_773}>LLEIDA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_774}
        />
        <View style={styles.View_10417_775}>
          <Text style={styles.Text_10417_775}>7.8</Text>
        </View>
        <View style={styles.View_10417_776}>
          <Text style={styles.Text_10417_776}>90km</Text>
        </View>
        <View style={styles.View_10417_777}>
          <Text style={styles.Text_10417_777}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9893/54f1/113b83df3bdd838e985586f01e810906"
          }}
          style={styles.ImageBackground_10417_778}
        />
        <View style={styles.View_10417_779}>
          <Text style={styles.Text_10417_779}>TOSSA DE MAR</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_780}
        />
        <View style={styles.View_10417_781}>
          <Text style={styles.Text_10417_781}>7.8</Text>
        </View>
        <View style={styles.View_10417_782}>
          <Text style={styles.Text_10417_782}>90km</Text>
        </View>
        <View style={styles.View_10417_783}>
          <Text style={styles.Text_10417_783}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a1/338b/371ad519082f8c659dd0539356e9d3f2"
          }}
          style={styles.ImageBackground_10417_784}
        />
        <View style={styles.View_10417_785}>
          <Text style={styles.Text_10417_785}>MONTSERRAT</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_786}
        />
        <View style={styles.View_10417_787}>
          <Text style={styles.Text_10417_787}>7.8</Text>
        </View>
        <View style={styles.View_10417_788}>
          <Text style={styles.Text_10417_788}>90km</Text>
        </View>
        <View style={styles.View_10417_789}>
          <Text style={styles.Text_10417_789}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e44/74b7/d233ad7628e9abf18ee81b57485ea774"
          }}
          style={styles.ImageBackground_10417_790}
        />
        <View style={styles.View_10417_791}>
          <Text style={styles.Text_10417_791}>BADALONA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_792}
        />
        <View style={styles.View_10417_793}>
          <Text style={styles.Text_10417_793}>7.8</Text>
        </View>
        <View style={styles.View_10417_794}>
          <Text style={styles.Text_10417_794}>90km</Text>
        </View>
        <View style={styles.View_10417_795}>
          <Text style={styles.Text_10417_795}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6af/b2cb/0c535cb72045833dfb1e72ca1ae77a6b"
          }}
          style={styles.ImageBackground_10417_796}
        />
        <View style={styles.View_10417_797}>
          <Text style={styles.Text_10417_797}>WANT TO DO</Text>
        </View>
      </View>
      <View style={styles.View_10417_798}>
        <View style={styles.View_10417_799}>
          <Text style={styles.Text_10417_799}>MY ROUTES</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10417_739: {
    width: 375,
    height: 471,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 60,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_740: {
    width: 142,
    minWidth: 142,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 29
  },
  Text_10417_740: {
    color: "rgba(255, 82, 82, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10417_741: {
    width: 167,
    minWidth: 167,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 63
  },
  Text_10417_741: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_742: {
    width: 341,
    minWidth: 341,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 96
  },
  View_10417_743: {
    flexGrow: 1,
    width: 209,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 109
  },
  Text_10417_743: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_744: {
    flexGrow: 1,
    width: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 264,
    top: 113
  },
  Text_10417_744: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_745: {
    width: 22,
    minWidth: 22,
    height: 20.842105865478516,
    minHeight: 20.842105865478516,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 126,
    resizeMode: "cover"
  },
  ImageBackground_10417_746: {
    width: 341,
    minWidth: 341,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 185
  },
  View_10417_747: {
    flexGrow: 1,
    width: 209,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 198
  },
  Text_10417_747: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_748: {
    flexGrow: 1,
    width: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 256,
    top: 202
  },
  Text_10417_748: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_749: {
    width: 22,
    minWidth: 22,
    height: 20.842105865478516,
    minHeight: 20.842105865478516,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 313,
    top: 215,
    resizeMode: "cover"
  },
  ImageBackground_10417_750: {
    width: 341,
    minWidth: 341,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 275
  },
  View_10417_751: {
    flexGrow: 1,
    width: 209,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 288
  },
  Text_10417_751: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10417_752: {
    flexGrow: 1,
    width: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 256,
    top: 292
  },
  Text_10417_752: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_753: {
    width: 20.84000015258789,
    minWidth: 20.84000015258789,
    height: 19.236923217773438,
    minHeight: 19.236923217773438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 310,
    top: 304
  },
  ImageBackground_10417_754: {
    width: 341,
    minWidth: 341,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 365
  },
  View_10417_755: {
    flexGrow: 1,
    width: 209,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 378
  },
  Text_10417_755: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10417_756: {
    flexGrow: 1,
    width: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 256,
    top: 382
  },
  Text_10417_756: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_757: {
    width: 20.84000015258789,
    minWidth: 20.84000015258789,
    height: 19.236923217773438,
    minHeight: 19.236923217773438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 310,
    top: 394
  },
  View_10417_758: {
    width: 375,
    height: 594,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 531,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10417_759: {
    width: 164,
    minWidth: 164,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 49
  },
  View_10417_760: {
    flexGrow: 1,
    width: 154,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 149
  },
  Text_10417_760: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_761: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 55,
    resizeMode: "cover"
  },
  View_10417_762: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 188
  },
  Text_10417_762: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_763: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124,
    top: 188
  },
  Text_10417_763: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_764: {
    width: 77,
    minWidth: 77,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 188
  },
  Text_10417_764: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_765: {
    width: 164,
    minWidth: 164,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193,
    top: 49
  },
  View_10417_766: {
    flexGrow: 1,
    width: 154,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196,
    top: 149
  },
  Text_10417_766: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_767: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 201,
    top: 55,
    resizeMode: "cover"
  },
  ImageBackground_10417_768: {
    width: 13,
    minWidth: 13,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228,
    top: 58
  },
  View_10417_769: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 198,
    top: 188
  },
  Text_10417_769: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_770: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 301,
    top: 188
  },
  Text_10417_770: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_771: {
    width: 77,
    minWidth: 77,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 220,
    top: 188
  },
  Text_10417_771: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_772: {
    width: 164,
    minWidth: 164,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 224
  },
  View_10417_773: {
    flexGrow: 1,
    width: 154,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 324
  },
  Text_10417_773: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_774: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 230,
    resizeMode: "cover"
  },
  View_10417_775: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 363
  },
  Text_10417_775: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_776: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124,
    top: 363
  },
  Text_10417_776: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_777: {
    width: 77,
    minWidth: 77,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 363
  },
  Text_10417_777: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_778: {
    width: 164,
    minWidth: 164,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193,
    top: 224
  },
  View_10417_779: {
    flexGrow: 1,
    width: 154,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196,
    top: 324
  },
  Text_10417_779: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_780: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 201,
    top: 230,
    resizeMode: "cover"
  },
  View_10417_781: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 198,
    top: 363
  },
  Text_10417_781: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_782: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 301,
    top: 363
  },
  Text_10417_782: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_783: {
    width: 77,
    minWidth: 77,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 220,
    top: 363
  },
  Text_10417_783: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_784: {
    width: 164,
    minWidth: 164,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 399
  },
  View_10417_785: {
    flexGrow: 1,
    width: 154,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 499
  },
  Text_10417_785: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_786: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 405,
    resizeMode: "cover"
  },
  View_10417_787: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 538
  },
  Text_10417_787: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_788: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124,
    top: 538
  },
  Text_10417_788: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_789: {
    width: 77,
    minWidth: 77,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 538
  },
  Text_10417_789: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_790: {
    width: 164,
    minWidth: 164,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193,
    top: 399
  },
  View_10417_791: {
    flexGrow: 1,
    width: 154,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196,
    top: 499
  },
  Text_10417_791: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_792: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 201,
    top: 405,
    resizeMode: "cover"
  },
  View_10417_793: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 198,
    top: 538
  },
  Text_10417_793: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_794: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 301,
    top: 538
  },
  Text_10417_794: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_795: {
    width: 77,
    minWidth: 77,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 220,
    top: 538
  },
  Text_10417_795: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_796: {
    width: 13,
    minWidth: 13,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 233
  },
  View_10417_797: {
    width: 142,
    minWidth: 142,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 8
  },
  Text_10417_797: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10417_798: {
    width: 375,
    minWidth: 375,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    overflow: "hidden"
  },
  View_10417_799: {
    width: 74,
    minWidth: 74,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 150,
    top: 21
  },
  Text_10417_799: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 1125 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
