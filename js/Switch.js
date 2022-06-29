import React, { useState } from "react";
import { View, Switch, StyleSheet, Text, useWindowDimensions } from "react-native";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const onChange = () => {
    console.log('当值改变的时候调用此回调函数');
  }
  // 获取手机屏幕尺寸
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
 
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        onChange={onChange}
        value={isEnabled}
        disabled={false}
      />
      <Text style={styles.text}>width={windowWidth}, height={windowHeight}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    marginTop: 30
  }
});

export default App;