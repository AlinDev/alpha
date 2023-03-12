import React, {useState}              from "react"
import {Text, TouchableOpacity, View} from "react-native"
import {ListOfTokens}                 from "./ListOfTokens"

export const ATableRow = ({item}) => {
  const [hide, setHide] = useState(false)
  console.log("{ATableRow.js}[ATableRow](7) hide", item.previous.tokens.map(item => item.identifier))
  return <View style={{flexDirection: 'row', flex: 1,borderBottomWidth:1}}>
    <View style={{flex: 1, padding: 10, borderLeftWidth: 1, borderColor: 'grey'}}>
      <Text>{item.version}</Text>
    </View>
    <View style={{flex: 1, padding: 10, borderLeftWidth: 1, borderColor: 'grey',flexDirection:'row'}}>


      {hide &&<Text  >{ item.current.tokens.map(item => item.identifier).join(", ")}</Text>}
      {!hide && <ListOfTokens tokens={item.current.tokens}/>}
    </View>
    <View style={{flex: 1, padding: 10, borderLeftWidth: 1, borderColor: 'grey',flexDirection:'row',justifyContent:'space-between'}} onPress={() => {setHide((val) => !val)}}>
      <View style={{flex:1}}>

      {hide &&<Text >{ item.previous.tokens.map(item => item.identifier).join(", ")}</Text>}
      {!hide && <ListOfTokens tokens={item.previous.tokens}/>}
      </View>
      <TouchableOpacity  onPress={() => {setHide((val) => !val)}} style={{width:10}}>
        <Text style={{color:'blue',marginHorizontal:10,fontWeight:'bold'}} >{hide?'+':'-'}</Text>
      </TouchableOpacity>
    </View>

  </View>
}
