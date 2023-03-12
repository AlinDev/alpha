import React, {useState}              from "react"
import {Text, TouchableOpacity, View} from "react-native"
import {ListOfTokens}                 from "./ListOfTokens"

export const ATableRow = ({item}) => {
  const [hide, setHide] = useState(false)
  console.log("{ATableRow.js}[ATableRow](7) hide", item.previous.tokens.map(item => item.identifier))
  return <View style={{flexDirection: 'row', flex: 1}}>
    <View style={{flex: 1, padding: 10, borderLeftWidth: 1, borderColor: 'grey'}}>
      <Text>{item.version}</Text>
    </View>
    <TouchableOpacity style={{flex: 1, padding: 10, borderLeftWidth: 1, borderColor: 'grey'}} onPress={() => {setHide((val) => !val)}}>
      {hide &&<Text >{ item.previous.tokens.map(item => item.identifier).join(", ")}</Text>}
      {!hide && <ListOfTokens tokens={item.previous.tokens}/>}
    </TouchableOpacity>

    <View style={{flex: 1, padding: 10, borderLeftWidth: 1, borderColor: 'grey'}}>
      <ListOfTokens tokens={item.current.tokens}/>
    </View>
  </View>
}
