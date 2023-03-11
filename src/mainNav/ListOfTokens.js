import React            from "react"
import {FlatList, View,Text} from "react-native"

function Token({item}) {
  return <View style={{}}>
    <Text>{item.identifier} {item.balance.toString().substring(0,1)+'.'+item.balance.toString().substring(1,3)}</Text>
  </View>
}

const renderItem = ({item}) => {
  return <Token item={item} />

}

const keyExtractor = (item,index) => {
  return index.toString()
}


export const ListOfTokens = ({tokens}) => {

  return <FlatList data={tokens} renderItem={renderItem} keyExtractor={keyExtractor}/>
}
