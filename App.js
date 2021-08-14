import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import codePush from "react-native-code-push";
import SegmentedControlTab from "react-native-segmented-control-tab";
import SwitchSelector from "react-native-switch-selector";

const App = () => {
  const options = [
    { label: "01:00", value: "1" },
    { label: "01:30", value: "1.5" },
    { label: "02:00", value: "2" }
  ];
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView>
      <SegmentedControlTab
        tabsContainerStyle={styles.tabsContainerStyle}
        tabStyle={styles.tabStyle}
        firstTabStyle={styles.firstTabStyle}
        lastTabStyle={styles.lastTabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
        selectedIndex={index}
        borderRadius={30}
        allowFontScaling={false}
        values={["First", "Second"]}
        onTabPress={setIndex}
      />
      <SwitchSelector
        options={options}
        initial={0}
        onPress={value => console.log(`Call onPress with value: ${value}`)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  tabsContainerStyle: {
    //custom styles
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 30,
  },
  tabStyle: {
    //custom styles
    margin: 2,
    borderRadius: 30,
    borderWidth: 0,
  },
  firstTabStyle: {
    //custom styles
    borderRightWidth: 0,
  },
  lastTabStyle: {
    borderRadius: 30,
    //custom styles
  },
  tabTextStyle: {
    //custom styles
  },
  activeTabStyle: {
    //custom styles
  },
  activeTabTextStyle: {
    //custom styles
  },
  tabBadgeContainerStyle: {
    //custom styles
  },
  activeTabBadgeContainerStyle: {
    //custom styles
  },
  tabBadgeStyle: {
    //custom styles
  },
  activeTabBadgeStyle: {
    //custom styles
  }
});

export default codePush(App);