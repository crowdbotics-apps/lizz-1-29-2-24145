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
      <View style={styles.View_10417_618}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af77/bc3d/6421995f3c86b126487eec8deeb3ae7c"
          }}
          style={styles.ImageBackground_10417_619}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e234/e623/7c091ac61638bbfbac3b35e88f40e8d3"
          }}
          style={styles.ImageBackground_10417_620}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0811/10c5/e1b008f47d1b6625e935dd26a8dcca5b"
          }}
          style={styles.ImageBackground_10417_621}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0f9/a415/ab89ef6550eb497dbf7f13fde3e8fba3"
          }}
          style={styles.ImageBackground_10417_622}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0be/f4d2/c95b4503d535b74c7e92db50cb2db483"
          }}
          style={styles.ImageBackground_10417_623}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5b/1d29/61da0950648c1e24d0ed61bff70a1f30"
          }}
          style={styles.ImageBackground_10417_624}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa0a/65a8/972b29647a70ff24e8ce1e1f8aed81e2"
          }}
          style={styles.ImageBackground_10417_625}
        />
        <View style={styles.View_10417_626}>
          <Text style={styles.Text_10417_626}>90km</Text>
        </View>
        <View style={styles.View_10417_627}>
          <Text style={styles.Text_10417_627}>1200m</Text>
        </View>
        <View style={styles.View_10417_628}>
          <Text style={styles.Text_10417_628}>intermediate</Text>
        </View>
        <View style={styles.View_10417_629}>
          <Text style={styles.Text_10417_629}>7.8</Text>
        </View>
        <View style={styles.View_10417_630}>
          <Text style={styles.Text_10417_630}>4h</Text>
        </View>
        <View style={styles.View_10417_631}>
          <Text style={styles.Text_10417_631}>Gravel</Text>
        </View>
        <View style={styles.View_10417_632}>
          <Text style={styles.Text_10417_632}>length</Text>
        </View>
        <View style={styles.View_10417_633}>
          <Text style={styles.Text_10417_633}>rating</Text>
        </View>
        <View style={styles.View_10417_634}>
          <Text style={styles.Text_10417_634}>Gallery</Text>
        </View>
        <View style={styles.View_10417_635}>
          <Text style={styles.Text_10417_635}>level</Text>
        </View>
        <View style={styles.View_10417_636}>
          <Text style={styles.Text_10417_636}>avg. time</Text>
        </View>
        <View style={styles.View_10417_637}>
          <Text style={styles.Text_10417_637}>elevation</Text>
        </View>
        <View style={styles.View_10417_638}>
          <Text style={styles.Text_10417_638}>type</Text>
        </View>
        <View style={styles.View_10417_639}>
          <Text style={styles.Text_10417_639}>terrain</Text>
        </View>
        <View style={styles.View_10417_640}>
          <Text style={styles.Text_10417_640}>SPAIN</Text>
        </View>
        <View style={styles.View_10417_641}>
          <Text style={styles.Text_10417_641}>TOSSA DE MAR</Text>
        </View>
        <View style={styles.View_10417_642}>
          <Text style={styles.Text_10417_642}>Duis aute irure dolor.</Text>
        </View>
        <View style={styles.View_10417_643}>
          <Text style={styles.Text_10417_643}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_644}
        />
        <View style={styles.View_10417_645}>
          <View style={styles.View_10417_646} />
          <View style={styles.View_10417_647}>
            <Text style={styles.Text_10417_647}>VIEW ROUTE</Text>
          </View>
        </View>
        <View style={styles.View_10417_648}>
          <View style={styles.View_10417_649} />
          <View style={styles.View_10417_650}>
            <Text style={styles.Text_10417_650}>SHARE</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10417_651}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbd3/9c03/374097e9c403226eeee46fc07f6260f5"
          }}
          style={styles.ImageBackground_10417_652}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc44/744b/7e8bdce8fa5ed28f4fb5d0f41b4bea44"
          }}
          style={styles.ImageBackground_10417_653}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10417_618: {
    width: 375,
    minWidth: 375,
    height: 1007,
    minHeight: 1007,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10417_619: {
    width: 375,
    minWidth: 375,
    height: 373,
    minHeight: 373,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_10417_620: {
    width: 108,
    minWidth: 108,
    height: 105,
    minHeight: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 758,
    resizeMode: "cover"
  },
  ImageBackground_10417_621: {
    width: 108,
    minWidth: 108,
    height: 105,
    minHeight: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133,
    top: 758,
    resizeMode: "cover"
  },
  ImageBackground_10417_622: {
    width: 108,
    minWidth: 108,
    height: 105,
    minHeight: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 873
  },
  ImageBackground_10417_623: {
    width: 108,
    minWidth: 108,
    height: 105,
    minHeight: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133,
    top: 873,
    resizeMode: "cover"
  },
  ImageBackground_10417_624: {
    width: 107,
    minWidth: 107,
    height: 105,
    minHeight: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251,
    top: 873
  },
  ImageBackground_10417_625: {
    width: 107,
    minWidth: 107,
    height: 105,
    minHeight: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251,
    top: 758,
    resizeMode: "cover"
  },
  View_10417_626: {
    width: 62,
    minWidth: 62,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 235
  },
  Text_10417_626: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_627: {
    width: 63,
    minWidth: 63,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 73,
    top: 235
  },
  Text_10417_627: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_628: {
    width: 91,
    minWidth: 91,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 485
  },
  Text_10417_628: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_629: {
    width: 91,
    minWidth: 91,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 485
  },
  Text_10417_629: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_630: {
    width: 91,
    minWidth: 91,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 249,
    top: 485
  },
  Text_10417_630: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_631: {
    width: 62,
    minWidth: 62,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 235
  },
  Text_10417_631: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_632: {
    width: 36,
    minWidth: 36,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 250
  },
  Text_10417_632: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_633: {
    width: 91,
    minWidth: 91,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 469
  },
  Text_10417_633: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_634: {
    width: 91,
    minWidth: 91,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 734
  },
  Text_10417_634: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_635: {
    width: 91,
    minWidth: 91,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 469
  },
  Text_10417_635: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_636: {
    width: 91,
    minWidth: 91,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 249,
    top: 469
  },
  Text_10417_636: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_637: {
    width: 63,
    minWidth: 63,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 73,
    top: 250
  },
  Text_10417_637: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_638: {
    width: 63,
    minWidth: 63,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 140,
    top: 250
  },
  Text_10417_638: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_639: {
    width: 62,
    minWidth: 62,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 250
  },
  Text_10417_639: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_640: {
    flexGrow: 1,
    width: 334,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 329
  },
  Text_10417_640: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_641: {
    flexGrow: 1,
    width: 334,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 271
  },
  Text_10417_641: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_642: {
    width: 343,
    minWidth: 343,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 549
  },
  Text_10417_642: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_643: {
    width: 309,
    minWidth: 309,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 582
  },
  Text_10417_643: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_644: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 140,
    top: 231,
    resizeMode: "cover"
  },
  View_10417_645: {
    width: 161,
    minWidth: 161,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 386
  },
  View_10417_646: {
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
  View_10417_647: {
    width: 161,
    minWidth: 161,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  Text_10417_647: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_648: {
    width: 161,
    minWidth: 161,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 198,
    top: 386
  },
  View_10417_649: {
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
  View_10417_650: {
    width: 161,
    minWidth: 161,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  Text_10417_650: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_651: {
    width: 375,
    minWidth: 375,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10417_652: {
    width: 17.500011444091797,
    minWidth: 17.500011444091797,
    height: 14.727924346923828,
    minHeight: 14.727924346923828,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 24
  },
  ImageBackground_10417_653: {
    width: 49,
    height: 43,
    top: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326
  },
  View_2: { height: 1007 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
