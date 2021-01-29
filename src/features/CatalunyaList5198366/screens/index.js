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
      <View style={styles.View_10417_806}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fa8/470f/f0c57d53953e7c6cff2aa800b15d0df0"
          }}
          style={styles.ImageBackground_10417_807}
        />
        <View style={styles.View_10417_808}>
          <Text style={styles.Text_10417_808}>VALL DE NÚRIA</Text>
        </View>
        <View style={styles.View_10417_809}>
          <Text style={styles.Text_10417_809}>4:50</Text>
        </View>
        <View style={styles.View_10417_810}>
          <Text style={styles.Text_10417_810}>90km</Text>
        </View>
        <View style={styles.View_10417_811}>
          <Text style={styles.Text_10417_811}>intermediate</Text>
        </View>
        <View style={styles.View_10417_812} />
        <View style={styles.View_10417_813}>
          <Text style={styles.Text_10417_813}>#</Text>
        </View>
      </View>
      <View style={styles.View_10417_814}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38d1/ecee/c818b93419e22855ed53dd3bead7e8d6"
          }}
          style={styles.ImageBackground_10417_815}
        />
        <View style={styles.View_10417_816} />
        <View style={styles.View_10417_817}>
          <Text style={styles.Text_10417_817}>258 mountain routes</Text>
        </View>
        <View style={styles.View_10417_818}>
          <Text style={styles.Text_10417_818}>CATALUNYA</Text>
        </View>
      </View>
      <View style={styles.View_10417_819}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69bd/1dbb/49a44b1974d67e7ace366d0e2605c46d"
          }}
          style={styles.ImageBackground_10417_820}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10417_806: {
    width: 183,
    minWidth: 183,
    height: 185,
    minHeight: 185,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 257,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10417_807: {
    width: 153,
    minWidth: 153,
    height: 149,
    minHeight: 149,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 13
  },
  View_10417_808: {
    flexGrow: 1,
    width: 139,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 102
  },
  Text_10417_808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_809: {
    width: 56,
    minWidth: 56,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 143
  },
  Text_10417_809: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_810: {
    width: 48,
    minWidth: 48,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 142
  },
  Text_10417_810: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_811: {
    width: 62,
    minWidth: 62,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 102,
    top: 26
  },
  Text_10417_811: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_10417_812: {
    width: 31,
    minWidth: 31,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 22,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_10417_813: {
    width: 21,
    minWidth: 21,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 23
  },
  Text_10417_813: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_814: {
    width: 375,
    height: 257,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_10417_815: {
    width: 375,
    minWidth: 375,
    height: 239,
    minHeight: 239,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_10417_816: {
    width: 375,
    minWidth: 375,
    height: 207,
    minHeight: 207,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 50
  },
  View_10417_817: {
    width: 167,
    minWidth: 167,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 208
  },
  Text_10417_817: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_818: {
    flexGrow: 1,
    width: 334,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 133
  },
  Text_10417_818: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_819: {
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
  ImageBackground_10417_820: {
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
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
