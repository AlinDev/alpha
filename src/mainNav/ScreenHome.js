import {useState}                      from "react"
import {Button, Text, TextInput, View} from "react-native"
import {ContentAsTable}                from "./ContentAsTable"
import {Loading}                       from "./Loading"

export const ScreenHome = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)


  const handlePress = () => {
    setIsLoading(true)
    fetch('http://192.168.0.110:4000/api/accounts/'+accountAddress)
      .then(response => response.json())
      .then(json => setData(json.data))
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
               onChangeText={setAccountAddress}
               value={accountAddress}
               placeholder={'enter your account address'} placeholderTextColor={'grey'} />
      <View style={{flex:1,marginLeft:30}}>

   <Button style={{borderRadius:10}} title={'GO'} onPress={handlePress}  />
      </View>
    </View>
    {isLoading && <Loading />}
    {!isLoading && data &&  <ContentAsTable  data={data}/>}

    {!isLoading && error &&  <Text style={{marginTop:10}}>Server is down,please try later...</Text>}
    {!isLoading && !data &&  <></>}
  </View>
}
