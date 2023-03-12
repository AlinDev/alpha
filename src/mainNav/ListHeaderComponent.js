import {Text, View} from "react-native"

export const ListHeaderComponent = () => {
  return <View style={{flexDirection: 'row'}}>
    <View style={{flexDirection: 'row', flexGrow: 1,}}>

      <View style={{flex: 1, padding: 10, borderLeftWidth: 1, borderColor: 'grey'}}>
        <Text>version</Text>
      </View>
      <View style={{flex: 1, padding: 10, borderLeftWidth: 1, borderColor: 'grey'}}>
        <Text>Before</Text>
      </View>
      <View style={{flex: 1, padding: 10, borderLeftWidth: 1, borderColor: 'grey'}}>
        <Text>now</Text></View>
    </View>
  </View>
}
