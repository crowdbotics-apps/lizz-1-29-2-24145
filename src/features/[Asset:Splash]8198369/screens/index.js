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
      <View style={styles.View_10417_889}>
        <Text style={styles.Text_10417_889}>Powered by Bravo</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/161e/9827/e6a912e9e32535a334af55c1e11d1d5f"
        }}
        style={styles.ImageBackground_10417_890}
      />
      <View style={styles.View_10417_891}>
        <Text style={styles.Text_10417_891}>HIKING 360</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10417_889: {
    width: 264.70587158203125,
    top: 717.1103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55
  },
  Text_10417_889: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_890: {
    width: 70,
    minWidth: 70,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 91,
    top: 370
  },
  View_10417_891: {
    width: 159,
    minWidth: 159,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 161,
    top: 365
  },
  Text_10417_891: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
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
