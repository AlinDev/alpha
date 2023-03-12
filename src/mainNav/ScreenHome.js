import {useState}                                    from "react"
import {Button,    TextInput, View} from "react-native"
import {ContentAsTable}                from "./ContentAsTable"
import {Loading}                       from "./Loading"

export const ScreenHome = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)



  const handlePress = () => {
    setIsLoading(true)
    console.log("{ScreenHome.js}[handlePress](17) accountAddress", accountAddress)
    fetch('https://jsonplaceholder.typicode.com/posts'+accountAddress)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => setError(error))
      .finally(() => {setIsLoading(false)})
  }
  const [accountAddress, setAccountAddress] = useState('')
  return <View style={{flex:1,alignItems:'center',backgroundColor:'white',justifyContent:'center' ,margin:'1%'}}>
    <View style={{flexDirection:'row',width:'70%',alignItems:'center',justifyContent:'space-around'}}>

    <TextInput style={{
                    flex:10,
                    backgroundColor:'white',
                    borderWidth:1,
                    borderRadius:10,
                    padding:5,fontSize:20}}
               // multiline={true}
               onChangeText={setAccountAddress}
               value={accountAddress}
               placeholder={'account address'} />
      <View style={{flex:1,marginLeft:30}}>

   <Button style={{borderRadius:10}} title={'GO'} onPress={handlePress}  />
      </View>
    </View>
    {isLoading && <Loading />}
    {!isLoading && data &&  <ContentAsTable  data={data}/>}
    {!isLoading && !data &&  <></>}
  </View>
}
