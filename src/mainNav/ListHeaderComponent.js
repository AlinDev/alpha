import {Text, View} from "react-native"

export const ListHeaderComponent = () => {
  return <View style={{flexDirection: 'row'}}>
    <View style={{flexDirection: 'row', flexGrow: 1,borderBottomWidth:2}}>

      <View style={{flex: 1, padding: 10, borderLeftWidth: 1, borderColor: 'grey'}}>
        <Text>Version no.</Text>
      </View>
      <View style={{flex: 1, padding: 10, borderLeftWidth: 1, borderColor: 'grey'}}>
        <Text>Current state</Text>
      </View>
      <View style={{flex: 1, padding: 10, borderLeftWidth: 1, borderColor: 'grey'}}>
        <Text>Previous state</Text></View>
    </View>
  </View>
}
