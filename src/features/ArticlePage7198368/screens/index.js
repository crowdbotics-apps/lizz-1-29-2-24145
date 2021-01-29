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
      <View style={styles.View_10417_857}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30e6/7c62/189cb8cec45149ec43c09146059ed3ca"
          }}
          style={styles.ImageBackground_10417_858}
        />
        <View style={styles.View_10417_859}>
          <Text style={styles.Text_10417_859}>5672 routes</Text>
        </View>
        <View style={styles.View_10417_860}>
          <Text style={styles.Text_10417_860}>SPAIN</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95b1/8383/17511e819e57cfc9a403f1919304e4bc"
          }}
          style={styles.ImageBackground_10417_861}
        />
        <View style={styles.View_10417_862}>
          <Text style={styles.Text_10417_862}>CATALUNYA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_863}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6af/b2cb/0c535cb72045833dfb1e72ca1ae77a6b"
          }}
          style={styles.ImageBackground_10417_864}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6057/5f86/0a57b31699002c366b5b17e0525dae32"
          }}
          style={styles.ImageBackground_10417_865}
        />
        <View style={styles.View_10417_866} />
        <View style={styles.View_10417_867}>
          <Text style={styles.Text_10417_867}>ARAGON</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_868}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6af/b2cb/0c535cb72045833dfb1e72ca1ae77a6b"
          }}
          style={styles.ImageBackground_10417_869}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/305b/a120/d7fd72acfffd2ee117c9f69e2827479b"
          }}
          style={styles.ImageBackground_10417_870}
        />
        <View style={styles.View_10417_871}>
          <Text style={styles.Text_10417_871}>VASC COUNTRY</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_872}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6af/b2cb/0c535cb72045833dfb1e72ca1ae77a6b"
          }}
          style={styles.ImageBackground_10417_873}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d91/239d/1a3fe3ad5086e4d13c3cb3cb43d655a0"
          }}
          style={styles.ImageBackground_10417_874}
        />
        <View style={styles.View_10417_875}>
          <Text style={styles.Text_10417_875}>MADRID</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_876}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6af/b2cb/0c535cb72045833dfb1e72ca1ae77a6b"
          }}
          style={styles.ImageBackground_10417_877}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06ca/20b0/3fb1fedb0fb4599c52584d4a3ffde9e7"
          }}
          style={styles.ImageBackground_10417_878}
        />
        <View style={styles.View_10417_879}>
          <Text style={styles.Text_10417_879}>CANARY ISLANDS</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_880}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6af/b2cb/0c535cb72045833dfb1e72ca1ae77a6b"
          }}
          style={styles.ImageBackground_10417_881}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a73/9a8f/60d0d610b659d9804d6e20fd1c7179a5"
          }}
          style={styles.ImageBackground_10417_882}
        />
        <View style={styles.View_10417_883}>
          <Text style={styles.Text_10417_883}>ANDALUSIA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_884}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6af/b2cb/0c535cb72045833dfb1e72ca1ae77a6b"
          }}
          style={styles.ImageBackground_10417_885}
        />
      </View>
      <View style={styles.View_10417_886}>
        <View style={styles.View_10417_887}>
          <Text style={styles.Text_10417_887}>CYCLING</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10417_857: {
    width: 375,
    height: 1117,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_10417_858: {
    width: 375,
    minWidth: 375,
    height: 256,
    minHeight: 256,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_10417_859: {
    width: 167,
    minWidth: 167,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 215
  },
  Text_10417_859: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_860: {
    flexGrow: 1,
    width: 334,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 146
  },
  Text_10417_860: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_861: {
    width: 341,
    minWidth: 341,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 256
  },
  View_10417_862: {
    flexGrow: 1,
    width: 317,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 305
  },
  Text_10417_862: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_863: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 355,
    resizeMode: "cover"
  },
  ImageBackground_10417_864: {
    width: 13,
    minWidth: 13,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 358
  },
  ImageBackground_10417_865: {
    width: 341,
    minWidth: 341,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 396,
    resizeMode: "cover"
  },
  View_10417_866: {
    width: 341,
    minWidth: 341,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 396
  },
  View_10417_867: {
    flexGrow: 1,
    width: 317,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 445
  },
  Text_10417_867: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_868: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 495,
    resizeMode: "cover"
  },
  ImageBackground_10417_869: {
    width: 13,
    minWidth: 13,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 498
  },
  ImageBackground_10417_870: {
    width: 341,
    minWidth: 341,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 536
  },
  View_10417_871: {
    flexGrow: 1,
    width: 317,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 585
  },
  Text_10417_871: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_872: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 635,
    resizeMode: "cover"
  },
  ImageBackground_10417_873: {
    width: 13,
    minWidth: 13,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 638
  },
  ImageBackground_10417_874: {
    width: 341,
    minWidth: 341,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 675
  },
  View_10417_875: {
    flexGrow: 1,
    width: 317,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 724
  },
  Text_10417_875: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_876: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 774,
    resizeMode: "cover"
  },
  ImageBackground_10417_877: {
    width: 13,
    minWidth: 13,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 777
  },
  ImageBackground_10417_878: {
    width: 341,
    minWidth: 341,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 815
  },
  View_10417_879: {
    flexGrow: 1,
    width: 317,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 864
  },
  Text_10417_879: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_880: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 914,
    resizeMode: "cover"
  },
  ImageBackground_10417_881: {
    width: 13,
    minWidth: 13,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 917
  },
  ImageBackground_10417_882: {
    width: 341,
    minWidth: 341,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 955
  },
  View_10417_883: {
    flexGrow: 1,
    width: 317,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 1004
  },
  Text_10417_883: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_884: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 300,
    top: 1054,
    resizeMode: "cover"
  },
  ImageBackground_10417_885: {
    width: 13,
    minWidth: 13,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 1057
  },
  View_10417_886: {
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
  View_10417_887: {
    width: 54,
    minWidth: 54,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 160,
    top: 21
  },
  Text_10417_887: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 1117 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
