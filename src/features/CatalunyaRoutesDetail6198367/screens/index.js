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
      <View style={styles.View_10417_822}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c43a/ab26/470169eccfacb7c0260521abd3a28067"
          }}
          style={styles.ImageBackground_10417_823}
        />
      </View>
      <View style={styles.View_10417_824}>
        <View style={styles.View_10417_825}>
          <Text style={styles.Text_10417_825}>Route info</Text>
        </View>
        <View style={styles.View_10417_826}>
          <Text style={styles.Text_10417_826}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
      </View>
      <View style={styles.View_10417_827}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e8/127d/18520090bb7e83f8673e91e6be3a78fe"
          }}
          style={styles.ImageBackground_10417_828}
        />
        <View style={styles.View_10417_829}>
          <Text style={styles.Text_10417_829}>90km</Text>
        </View>
        <View style={styles.View_10417_830}>
          <Text style={styles.Text_10417_830}>1200m</Text>
        </View>
        <View style={styles.View_10417_831}>
          <Text style={styles.Text_10417_831}>intermediate</Text>
        </View>
        <View style={styles.View_10417_832}>
          <Text style={styles.Text_10417_832}>7.8</Text>
        </View>
        <View style={styles.View_10417_833}>
          <Text style={styles.Text_10417_833}>4h</Text>
        </View>
        <View style={styles.View_10417_834}>
          <Text style={styles.Text_10417_834}>Gravel</Text>
        </View>
        <View style={styles.View_10417_835}>
          <Text style={styles.Text_10417_835}>Km</Text>
        </View>
        <View style={styles.View_10417_836}>
          <Text style={styles.Text_10417_836}>rating</Text>
        </View>
        <View style={styles.View_10417_837}>
          <Text style={styles.Text_10417_837}>level</Text>
        </View>
        <View style={styles.View_10417_838}>
          <Text style={styles.Text_10417_838}>avg. time</Text>
        </View>
        <View style={styles.View_10417_839}>
          <Text style={styles.Text_10417_839}>Uphill</Text>
        </View>
        <View style={styles.View_10417_840}>
          <Text style={styles.Text_10417_840}>Downhill</Text>
        </View>
        <View style={styles.View_10417_841}>
          <Text style={styles.Text_10417_841}>CATALUNYA</Text>
        </View>
        <View style={styles.View_10417_842}>
          <Text style={styles.Text_10417_842}>VALL DE NURIA </Text>
        </View>
        <View style={styles.View_10417_843}>
          <View style={styles.View_10417_844} />
          <View style={styles.View_10417_845}>
            <Text style={styles.Text_10417_845}>ROUTE MAP</Text>
          </View>
        </View>
        <View style={styles.View_10417_846}>
          <View style={styles.View_10417_847} />
          <View style={styles.View_10417_848}>
            <Text style={styles.Text_10417_848}>PREVIEW RIDE</Text>
          </View>
        </View>
        <View style={styles.View_10417_849} />
        <View style={styles.View_10417_850}>
          <Text style={styles.Text_10417_850}>#</Text>
        </View>
      </View>
      <View style={styles.View_10417_851}>
        <View style={styles.View_10417_852} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc44/744b/7e8bdce8fa5ed28f4fb5d0f41b4bea44"
          }}
          style={styles.ImageBackground_10417_853}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69bd/1dbb/49a44b1974d67e7ace366d0e2605c46d"
          }}
          style={styles.ImageBackground_10417_855}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10417_822: {
    width: 375,
    minWidth: 375,
    height: 432,
    minHeight: 432,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 912,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10417_823: {
    width: 343,
    minWidth: 343,
    height: 335,
    minHeight: 335,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 14,
    resizeMode: "cover"
  },
  View_10417_824: {
    width: 375,
    minWidth: 375,
    height: 219,
    minHeight: 219,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 693,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10417_825: {
    width: 323,
    minWidth: 323,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 38
  },
  Text_10417_825: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_826: {
    width: 309,
    minWidth: 309,
    minHeight: 127,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 71
  },
  Text_10417_826: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_827: {
    width: 375,
    minWidth: 375,
    height: 693,
    minHeight: 693,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10417_828: {
    width: 375,
    minWidth: 375,
    height: 645,
    minHeight: 645,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10417_829: {
    width: 62,
    minWidth: 62,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 395
  },
  Text_10417_829: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_830: {
    width: 83,
    minWidth: 83,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 100,
    top: 395
  },
  Text_10417_830: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_831: {
    width: 91,
    minWidth: 91,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 653
  },
  Text_10417_831: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_832: {
    width: 91,
    minWidth: 91,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 653
  },
  Text_10417_832: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_833: {
    width: 91,
    minWidth: 91,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 249,
    top: 653
  },
  Text_10417_833: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_834: {
    width: 104,
    minWidth: 104,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193,
    top: 395
  },
  Text_10417_834: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_835: {
    width: 46,
    minWidth: 46,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 418
  },
  Text_10417_835: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_836: {
    width: 91,
    minWidth: 91,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 631
  },
  Text_10417_836: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_837: {
    width: 91,
    minWidth: 91,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 631
  },
  Text_10417_837: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_838: {
    width: 91,
    minWidth: 91,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 249,
    top: 631
  },
  Text_10417_838: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_839: {
    width: 63,
    minWidth: 63,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 100,
    top: 418
  },
  Text_10417_839: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_840: {
    width: 70,
    minWidth: 70,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193,
    top: 418
  },
  Text_10417_840: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_841: {
    flexGrow: 1,
    width: 334,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 500
  },
  Text_10417_841: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_842: {
    flexGrow: 1,
    width: 334,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 440
  },
  Text_10417_842: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_843: {
    width: 161,
    minWidth: 161,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 554
  },
  View_10417_844: {
    width: 161,
    minWidth: 161,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 82, 82, 1)"
  },
  View_10417_845: {
    width: 161,
    minWidth: 161,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  Text_10417_845: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_846: {
    width: 161,
    minWidth: 161,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 198,
    top: 554
  },
  View_10417_847: {
    width: 161,
    minWidth: 161,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.25
  },
  View_10417_848: {
    width: 161,
    minWidth: 161,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  Text_10417_848: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_849: {
    width: 70,
    minWidth: 70,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 279,
    top: 322,
    backgroundColor: "rgba(255, 82, 82, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_10417_850: {
    width: 52,
    minWidth: 52,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 287,
    top: 331
  },
  Text_10417_850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_851: {
    width: 375,
    minWidth: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10417_852: {
    width: 375,
    minWidth: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_10417_853: {
    width: 49,
    height: 43,
    top: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326
  },
  ImageBackground_10417_855: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 39,
    resizeMode: "cover"
  },
  View_2: { height: 1346 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
