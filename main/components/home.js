import React from 'react';
import * as firebase from 'firebase';
import { StyleSheet, Text, View,Dimensions,TextInput,TouchableOpacity,FlatList,ScrollView,Image } from 'react-native';
import { NavigationActions } from 'react-navigation'

const { width, height } = Dimensions.get('window');

export default class Home extends React.Component {

  state={
    magazin:[],
  }
  componentDidMount()
  {
    firebase.database().ref().child('magazin').once('value', (snap)=>{
      let magazinn = [];
      snap.forEach((magazin)=>{
        const {detail,name,photo,uid} = magazin.val();
        magazinn.push({detail,name,photo,uid});
      })
      this.setState({magazin:magazinn});
      console.log(magazinn)
    })
  }

goDetail(item)
{
  this.props.navigation.navigate('Detail',{params:item});
}

  render() {
    return (
      <View style={{ flex:1 }}>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:50}}>
          <Text style={{fontSize:40,fontWeight:'bold'}}>Haberler</Text>
        </View>
        <ScrollView>
          <FlatList
            data={this.state.magazin}
            renderItem={({item})=>
            <View style={{justifyContent:'center',alignItems: 'center',marginTop:10}}>
              <TouchableOpacity onPress={()=> this.goDetail(item)}>
                <View style={{justifyContent:'center',alignItems: 'center'}}>
                  <Text style={{fontSize:25,color:'red'}}>{item.name}</Text>
                  <Image
                    style={{width:width-20,height:width*0.75,borderRadius:25}}
                    source={{uri:item.photo}}
                  />
                </View>
              </TouchableOpacity>
              <View style={{borderWidth:1,height:1,width:width-20,marginTop:10}}/>
            </View>
          }
        />
      </ScrollView>
    </View>
  );
}
}