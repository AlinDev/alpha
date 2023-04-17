import React                 from "react"
import {FlatList, View,Text}      from "react-native"
import {mockup_data_10}       from "../mockup/mockup_accountHistory_vs1"
import {ATableRow}           from "./ATableRow"
import {ListHeaderComponent} from "./ListHeaderComponent"

const renderItem = ({ item,index}) => {
  return <ATableRow item={item} oldItem={null} />
}

const keyExtractor = (item) => {
  console.log('test')
  return item.version
}


function extractVersions(data) {
  if(!data?.versions) return [];
  const versions = []
  for (let i = 0; i < data.versions.length - 1; i++) {
    let version = data.versions[i].version;
    let current = data.versions[i];
    let previous = data.versions[i + 1]||null;
    console.log("Current item: " + current );
    console.log("Next item: " + previous);
    versions.push({version,current,previous})
  }

  return versions;
}

export const ContentAsTable = ({data=null}) => {
  console.log("{ContentAsTable.js}[ContentAsTable](31) data", data)
  const mockupData = mockup_data_10
  const versions = extractVersions(data)
  return <View style={{marginTop:20,flex:1 ,width:'100%'}}>
    {/*{data&&<Text>{data.toString()}</Text>}*/}
      <FlatList data={ versions} style={{flex:1}}
                ListHeaderComponent={ListHeaderComponent}
                renderItem={renderItem} keyExtractor={keyExtractor} />
  </View>
}
