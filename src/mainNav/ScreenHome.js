import axios                           from 'axios'
import {useState}                                    from "react"
import {Button,    TextInput, View} from "react-native"
import {useQuery, useQueryClient}                    from 'react-query'
import {ContentAsTable}                from "./ContentAsTable"
import {Loading}                       from "./Loading"
import { Platform } from 'react-native';
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export const ScreenHome = () => {

  const { isLoading, error, data, refetch } = useQuery('posts', fetchPosts, { enabled: false });

  const queryClient = useQueryClient();
  const handlePress = () => {
    refetch()
  }
  const [accountAddress, setAccountAddress] = useState('')
  return <View style={{flex:1,alignItems:'center',justifyContent:'center' ,margin:'5%'}}>
    {/*<Text>{Platform.OS}</Text>*/}
    <TextInput style={{backgroundColor:'grey',borderRadius:10,padding:5,width:'80%',marginTop:20,fontSize:20}}
               multiline={true}
               onEndEditing={setAccountAddress}
               value={accountAddress}
               placeholder={'account address'} />
    { !data&&<Button title={'GO'} onPress={handlePress}  />}
    {isLoading && <Loading />}

    {!isLoading && data &&  <ContentAsTable  data={data}/>}
    {!isLoading && !data &&  <></>}
  </View>
}
