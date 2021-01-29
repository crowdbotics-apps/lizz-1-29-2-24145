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
      <View style={styles.View_10417_656}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/214c/d7cc/2a77a548e9feb84e396490fa7cf845b3"
          }}
          style={styles.ImageBackground_10417_657}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e234/e623/7c091ac61638bbfbac3b35e88f40e8d3"
          }}
          style={styles.ImageBackground_10417_658}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0811/10c5/e1b008f47d1b6625e935dd26a8dcca5b"
          }}
          style={styles.ImageBackground_10417_659}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0f9/a415/ab89ef6550eb497dbf7f13fde3e8fba3"
          }}
          style={styles.ImageBackground_10417_660}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0be/f4d2/c95b4503d535b74c7e92db50cb2db483"
          }}
          style={styles.ImageBackground_10417_661}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5b/1d29/61da0950648c1e24d0ed61bff70a1f30"
          }}
          style={styles.ImageBackground_10417_662}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa0a/65a8/972b29647a70ff24e8ce1e1f8aed81e2"
          }}
          style={styles.ImageBackground_10417_663}
        />
        <View style={styles.View_10417_664}>
          <Text style={styles.Text_10417_664}>90km</Text>
        </View>
        <View style={styles.View_10417_665}>
          <Text style={styles.Text_10417_665}>1200m</Text>
        </View>
        <View style={styles.View_10417_666}>
          <Text style={styles.Text_10417_666}>8.4</Text>
        </View>
        <View style={styles.View_10417_667}>
          <Text style={styles.Text_10417_667}>4h</Text>
        </View>
        <View style={styles.View_10417_668}>
          <Text style={styles.Text_10417_668}>Gravel</Text>
        </View>
        <View style={styles.View_10417_669}>
          <Text style={styles.Text_10417_669}>length</Text>
        </View>
        <View style={styles.View_10417_670}>
          <Text style={styles.Text_10417_670}>Score</Text>
        </View>
        <View style={styles.View_10417_671}>
          <Text style={styles.Text_10417_671}>Route Images</Text>
        </View>
        <View style={styles.View_10417_672}>
          <Text style={styles.Text_10417_672}>Time</Text>
        </View>
        <View style={styles.View_10417_673}>
          <Text style={styles.Text_10417_673}>30m</Text>
        </View>
        <View style={styles.View_10417_674}>
          <Text style={styles.Text_10417_674}>Av. Time Km</Text>
        </View>
        <View style={styles.View_10417_675}>
          <Text style={styles.Text_10417_675}>elevation</Text>
        </View>
        <View style={styles.View_10417_676}>
          <Text style={styles.Text_10417_676}>type</Text>
        </View>
        <View style={styles.View_10417_677}>
          <Text style={styles.Text_10417_677}>terrain</Text>
        </View>
        <View style={styles.View_10417_678}>
          <Text style={styles.Text_10417_678}>SPAIN</Text>
        </View>
        <View style={styles.View_10417_679}>
          <Text style={styles.Text_10417_679}>CANARY ISLANDS</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_680}
        />
        <View style={styles.View_10417_681}>
          <View style={styles.View_10417_682} />
          <View style={styles.View_10417_683}>
            <Text style={styles.Text_10417_683}>VIEW ROUTE</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_10417_684}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc44/744b/7e8bdce8fa5ed28f4fb5d0f41b4bea44"
          }}
          style={styles.ImageBackground_10417_685}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbd3/9c03/374097e9c403226eeee46fc07f6260f5"
          }}
          style={styles.ImageBackground_10417_687}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10417_656: {
    width: 375,
    minWidth: 375,
    height: 891,
    minHeight: 891,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10417_657: {
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
  ImageBackground_10417_658: {
    width: 108,
    minWidth: 108,
    height: 105,
    minHeight: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 637,
    resizeMode: "cover"
  },
  ImageBackground_10417_659: {
    width: 108,
    minWidth: 108,
    height: 105,
    minHeight: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133,
    top: 637,
    resizeMode: "cover"
  },
  ImageBackground_10417_660: {
    width: 108,
    minWidth: 108,
    height: 105,
    minHeight: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 752
  },
  ImageBackground_10417_661: {
    width: 108,
    minWidth: 108,
    height: 105,
    minHeight: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133,
    top: 752,
    resizeMode: "cover"
  },
  ImageBackground_10417_662: {
    width: 107,
    minWidth: 107,
    height: 105,
    minHeight: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251,
    top: 752
  },
  ImageBackground_10417_663: {
    width: 107,
    minWidth: 107,
    height: 105,
    minHeight: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251,
    top: 637,
    resizeMode: "cover"
  },
  View_10417_664: {
    width: 62,
    minWidth: 62,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 235
  },
  Text_10417_664: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_665: {
    width: 63,
    minWidth: 63,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 73,
    top: 235
  },
  Text_10417_665: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_666: {
    width: 91,
    minWidth: 91,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 490
  },
  Text_10417_666: {
    color: "rgba(255, 82, 82, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_667: {
    width: 101,
    minWidth: 101,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137,
    top: 490
  },
  Text_10417_667: {
    color: "rgba(255, 82, 82, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_668: {
    width: 62,
    minWidth: 62,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 235
  },
  Text_10417_668: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_669: {
    width: 36,
    minWidth: 36,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 250
  },
  Text_10417_669: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_670: {
    width: 91,
    minWidth: 91,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 469
  },
  Text_10417_670: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_671: {
    width: 91,
    minWidth: 91,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 613
  },
  Text_10417_671: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_672: {
    width: 101,
    minWidth: 101,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137,
    top: 469
  },
  Text_10417_672: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_673: {
    width: 101,
    minWidth: 101,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251,
    top: 490
  },
  Text_10417_673: {
    color: "rgba(255, 82, 82, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_674: {
    width: 101,
    minWidth: 101,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251,
    top: 469
  },
  Text_10417_674: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_675: {
    width: 63,
    minWidth: 63,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 73,
    top: 250
  },
  Text_10417_675: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_676: {
    width: 63,
    minWidth: 63,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 140,
    top: 250
  },
  Text_10417_676: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_677: {
    width: 62,
    minWidth: 62,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 250
  },
  Text_10417_677: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_678: {
    flexGrow: 1,
    width: 343,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 327
  },
  Text_10417_678: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_10417_679: {
    flexGrow: 1,
    width: 343,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 271
  },
  Text_10417_679: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  ImageBackground_10417_680: {
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
  View_10417_681: {
    width: 326,
    minWidth: 326,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 385
  },
  View_10417_682: {
    width: 326,
    minWidth: 326,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 82, 82, 1)"
  },
  View_10417_683: {
    width: 161,
    minWidth: 161,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 83,
    top: 2
  },
  Text_10417_683: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_684: {
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
  ImageBackground_10417_685: {
    width: 49,
    height: 43,
    top: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326
  },
  ImageBackground_10417_687: {
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
  View_2: { height: 891 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
