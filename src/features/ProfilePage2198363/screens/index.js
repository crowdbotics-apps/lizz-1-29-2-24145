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
      <View style={styles.View_10417_689}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbb5/0f2c/a8dd412f1c6318815fd006964b9e8c04"
          }}
          style={styles.ImageBackground_10417_690}
        />
        <View style={styles.View_10417_691}>
          <Text style={styles.Text_10417_691}>VALL DE NURIA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_692}
        />
        <View style={styles.View_10417_693}>
          <Text style={styles.Text_10417_693}>7.8</Text>
        </View>
        <View style={styles.View_10417_694}>
          <Text style={styles.Text_10417_694}>90km</Text>
        </View>
        <View style={styles.View_10417_695}>
          <Text style={styles.Text_10417_695}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35c3/1e17/a173c0b91fce504de48959a98ea3cad6"
          }}
          style={styles.ImageBackground_10417_696}
        />
        <View style={styles.View_10417_697}>
          <Text style={styles.Text_10417_697}>GIRONA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_698}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6af/b2cb/0c535cb72045833dfb1e72ca1ae77a6b"
          }}
          style={styles.ImageBackground_10417_699}
        />
        <View style={styles.View_10417_700}>
          <Text style={styles.Text_10417_700}>7.8</Text>
        </View>
        <View style={styles.View_10417_701}>
          <Text style={styles.Text_10417_701}>90km</Text>
        </View>
        <View style={styles.View_10417_702}>
          <Text style={styles.Text_10417_702}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f136/25df/f7a69b37093ee3e6279d7136bad4aa50"
          }}
          style={styles.ImageBackground_10417_703}
        />
        <View style={styles.View_10417_704}>
          <Text style={styles.Text_10417_704}>LLEIDA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_705}
        />
        <View style={styles.View_10417_706}>
          <Text style={styles.Text_10417_706}>7.8</Text>
        </View>
        <View style={styles.View_10417_707}>
          <Text style={styles.Text_10417_707}>90km</Text>
        </View>
        <View style={styles.View_10417_708}>
          <Text style={styles.Text_10417_708}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9893/54f1/113b83df3bdd838e985586f01e810906"
          }}
          style={styles.ImageBackground_10417_709}
        />
        <View style={styles.View_10417_710}>
          <Text style={styles.Text_10417_710}>TOSSA DE MAR</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_711}
        />
        <View style={styles.View_10417_712}>
          <Text style={styles.Text_10417_712}>7.8</Text>
        </View>
        <View style={styles.View_10417_713}>
          <Text style={styles.Text_10417_713}>90km</Text>
        </View>
        <View style={styles.View_10417_714}>
          <Text style={styles.Text_10417_714}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76a1/338b/371ad519082f8c659dd0539356e9d3f2"
          }}
          style={styles.ImageBackground_10417_715}
        />
        <View style={styles.View_10417_716}>
          <Text style={styles.Text_10417_716}>MONTSERRAT</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_717}
        />
        <View style={styles.View_10417_718}>
          <Text style={styles.Text_10417_718}>7.8</Text>
        </View>
        <View style={styles.View_10417_719}>
          <Text style={styles.Text_10417_719}>90km</Text>
        </View>
        <View style={styles.View_10417_720}>
          <Text style={styles.Text_10417_720}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e44/74b7/d233ad7628e9abf18ee81b57485ea774"
          }}
          style={styles.ImageBackground_10417_721}
        />
        <View style={styles.View_10417_722}>
          <Text style={styles.Text_10417_722}>BADALONA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5606/23cd/1e8680bb68496dd6b5e1402a9762c1a4"
          }}
          style={styles.ImageBackground_10417_723}
        />
        <View style={styles.View_10417_724}>
          <Text style={styles.Text_10417_724}>7.8</Text>
        </View>
        <View style={styles.View_10417_725}>
          <Text style={styles.Text_10417_725}>90km</Text>
        </View>
        <View style={styles.View_10417_726}>
          <Text style={styles.Text_10417_726}>intermediate</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6af/b2cb/0c535cb72045833dfb1e72ca1ae77a6b"
          }}
          style={styles.ImageBackground_10417_727}
        />
        <View style={styles.View_10417_728}>
          <Text style={styles.Text_10417_728}>MY ROUTES</Text>
        </View>
        <View style={styles.View_10417_729}>
          <View style={styles.View_10417_730}>
            <Text style={styles.Text_10417_730}>intermediate</Text>
          </View>
          <View style={styles.View_10417_731}>
            <Text style={styles.Text_10417_731}>7.8</Text>
          </View>
          <View style={styles.View_10417_732}>
            <Text style={styles.Text_10417_732}>24h</Text>
          </View>
          <View style={styles.View_10417_733}>
            <Text style={styles.Text_10417_733}>rating</Text>
          </View>
          <View style={styles.View_10417_734}>
            <Text style={styles.Text_10417_734}>level</Text>
          </View>
          <View style={styles.View_10417_735}>
            <Text style={styles.Text_10417_735}>avg. time</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c091/fe31/26a7487dd4bf4403a95df0c9c68353b6"
          }}
          style={styles.ImageBackground_10417_736}
        />
        <View style={styles.View_10417_737}>
          <Text style={styles.Text_10417_737}>MARCO POLO</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10417_689: {
    width: 375,
    minWidth: 375,
    height: 1052,
    minHeight: 1052,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10417_690: {
    width: 164,
    minWidth: 164,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 496
  },
  View_10417_691: {
    flexGrow: 1,
    width: 154,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 596
  },
  Text_10417_691: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10417_692: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 502,
    resizeMode: "cover"
  },
  View_10417_693: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 635
  },
  Text_10417_693: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_694: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124,
    top: 635
  },
  Text_10417_694: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_695: {
    width: 77,
    minWidth: 77,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 635
  },
  Text_10417_695: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_696: {
    width: 164,
    minWidth: 164,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193,
    top: 496
  },
  View_10417_697: {
    flexGrow: 1,
    width: 154,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196,
    top: 596
  },
  Text_10417_697: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_698: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 201,
    top: 502,
    resizeMode: "cover"
  },
  ImageBackground_10417_699: {
    width: 13,
    minWidth: 13,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228,
    top: 505
  },
  View_10417_700: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 198,
    top: 635
  },
  Text_10417_700: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_701: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 301,
    top: 635
  },
  Text_10417_701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_702: {
    width: 77,
    minWidth: 77,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 220,
    top: 635
  },
  Text_10417_702: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_703: {
    width: 164,
    minWidth: 164,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 671
  },
  View_10417_704: {
    flexGrow: 1,
    width: 154,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 771
  },
  Text_10417_704: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_705: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 677,
    resizeMode: "cover"
  },
  View_10417_706: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 810
  },
  Text_10417_706: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_707: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124,
    top: 810
  },
  Text_10417_707: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_708: {
    width: 77,
    minWidth: 77,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 810
  },
  Text_10417_708: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_709: {
    width: 164,
    minWidth: 164,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193,
    top: 671
  },
  View_10417_710: {
    flexGrow: 1,
    width: 154,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196,
    top: 771
  },
  Text_10417_710: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_711: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 201,
    top: 677,
    resizeMode: "cover"
  },
  View_10417_712: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 198,
    top: 810
  },
  Text_10417_712: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_713: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 301,
    top: 810
  },
  Text_10417_713: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_714: {
    width: 77,
    minWidth: 77,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 220,
    top: 810
  },
  Text_10417_714: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_715: {
    width: 164,
    minWidth: 164,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 846
  },
  View_10417_716: {
    flexGrow: 1,
    width: 154,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 946
  },
  Text_10417_716: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_717: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 852,
    resizeMode: "cover"
  },
  View_10417_718: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 985
  },
  Text_10417_718: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_719: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124,
    top: 985
  },
  Text_10417_719: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_720: {
    width: 77,
    minWidth: 77,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 985
  },
  Text_10417_720: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_721: {
    width: 164,
    minWidth: 164,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193,
    top: 846
  },
  View_10417_722: {
    flexGrow: 1,
    width: 154,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 196,
    top: 946
  },
  Text_10417_722: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_10417_723: {
    width: 19,
    minWidth: 19,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 201,
    top: 852,
    resizeMode: "cover"
  },
  View_10417_724: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 198,
    top: 985
  },
  Text_10417_724: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_725: {
    width: 29,
    minWidth: 29,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 301,
    top: 985
  },
  Text_10417_725: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_726: {
    width: 77,
    minWidth: 77,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 220,
    top: 985
  },
  Text_10417_726: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_727: {
    width: 13,
    minWidth: 13,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 680
  },
  View_10417_728: {
    width: 142,
    minWidth: 142,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 457
  },
  Text_10417_728: {
    color: "rgba(255, 82, 82, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_10417_729: {
    width: 350,
    minWidth: 350,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 362
  },
  View_10417_730: {
    width: 142,
    minWidth: 142,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 106,
    top: 16
  },
  Text_10417_730: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_731: {
    width: 90,
    minWidth: 90,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 16
  },
  Text_10417_731: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_732: {
    width: 90,
    minWidth: 90,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 255,
    top: 16
  },
  Text_10417_732: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_733: {
    width: 91,
    minWidth: 91,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_10417_733: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_734: {
    width: 91,
    minWidth: 91,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 132,
    top: 0
  },
  Text_10417_734: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_735: {
    width: 91,
    minWidth: 91,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 259,
    top: 0
  },
  Text_10417_735: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_10417_736: {
    width: 172,
    height: 173.34796142578125,
    top: 137.60345458984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97
  },
  View_10417_737: {
    width: 288,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39,
    top: 82
  },
  Text_10417_737: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_2: { height: 1052 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
