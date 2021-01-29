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
      <View style={styles.View_10417_895}>
        <View style={styles.View_10417_896}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acca/9322/80d96740e4f0713f0cb35e63b055e9e1"
            }}
            style={styles.ImageBackground_10417_897}
          />
          <View style={styles.View_10417_898}>
            <Text style={styles.Text_10417_898}>ROUTES</Text>
          </View>
        </View>
        <View style={styles.View_10417_899}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/508a/f66f/ecbdf4dad5beb4b419e4aed2582a9a7e"
            }}
            style={styles.ImageBackground_10417_900}
          />
          <View style={styles.View_10417_901}>
            <Text style={styles.Text_10417_901}>MY ROUTES</Text>
          </View>
        </View>
        <View style={styles.View_10417_902}>
          <View style={styles.View_10417_903}>
            <Text style={styles.Text_10417_903}>MAP</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39b0/b8e1/821e1a7850f7969e90a5a4bf85afb5e1"
            }}
            style={styles.ImageBackground_10417_904}
          />
        </View>
        <View style={styles.View_10417_905}>
          <View style={styles.View_10417_906}>
            <Text style={styles.Text_10417_906}>PROFILE</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00f2/a4de/a36d5283a68396324152efc58234c3ab"
            }}
            style={styles.ImageBackground_10417_907}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10417_895: {
    width: 375,
    minWidth: 375,
    height: 73,
    minHeight: 73,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 739,
    backgroundColor: "rgba(255, 82, 82, 1)",
    overflow: "hidden"
  },
  View_10417_896: {
    width: 65,
    minWidth: 65,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 2,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10417_897: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 8,
    resizeMode: "cover"
  },
  View_10417_898: {
    width: 37,
    minWidth: 37,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 38
  },
  Text_10417_898: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10417_899: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108,
    top: 2,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10417_900: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 10,
    resizeMode: "cover"
  },
  View_10417_901: {
    width: 93,
    minWidth: 93,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -11,
    top: 38
  },
  Text_10417_901: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10417_902: {
    width: 62,
    minWidth: 62,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 203,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10417_903: {
    width: 93,
    minWidth: 93,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -15,
    top: 40
  },
  Text_10417_903: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_904: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 12,
    resizeMode: "cover"
  },
  View_10417_905: {
    width: 66,
    minWidth: 66,
    height: 67,
    minHeight: 67,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 287,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10417_906: {
    width: 93,
    minWidth: 93,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -13,
    top: 40
  },
  Text_10417_906: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_907: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 11
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
