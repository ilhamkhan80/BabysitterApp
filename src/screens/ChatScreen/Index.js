import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Styles from '../ChatScreen/Style';

const ChatScreen = () => {
  const [messages, setMessages] = useState([

    { id: '1', 
      text: 'Lorem ipsum dolor sit amet', 
      sender: 'me', 
      time: '11:45 PM', 
      avatar: require('../../images/image2.png') 
    },

    { id: '2', 
      text: 'Lorem ipsum dolor sit\namet, consectetur.', 
      sender: 'other', 
      time: '11:48 PM', 
      avatar: require('../../images/image2.png') 
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: Math.random().toString(),
        text: inputMessage,
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: require('../../images/image1.png'),
      };
      setMessages([...messages, newMessage]);
      setInputMessage(''); 
    }
  };

  const renderItem = ({ item }) => (
    <View>
      {item.sender === 'me' ? (
        <View style={Styles.ChatStyle}>
          <View>
          <Text style={Styles.LoremTextStyle}>{item.text}</Text>
          </View>
        
          <Image style={Styles.Avater} source={item.avatar} />
          
        </View>
      
        
      ) : (
        <View style={Styles.ChatStyle2}>
          <Image style={Styles.GirlImage} source={item.avatar} />
          <Text style={Styles.LoremTextStyle1}>{item.text}</Text>
        </View>
      )}
      <View style={{flexDirection:'row',alignItems:'center'}} >
      <Text style={item.sender === 'me' ? Styles.TimingStyle : Styles.TimingStyle1}>{item.time}</Text>
     { item.sender === 'me' ?(
      <Image style={Styles.ImageStyle}source={require('../../images/Tick.png')}/>):null
    }
      </View>
      
    </View>

  );

  return (
    <View style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
         <View style={Styles.MyProfile}>
        <Text style={Styles.ProfileStyle}>Messages
        </Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
      
      />
      <View style={Styles.Flex}>
        <Image style={Styles.Plus} source={require('../../images/Plus.png')} />
        <TextInput 
          placeholder="Write message..."
          style={Styles.TextInputStyle}
          value={inputMessage}
          multiline={true}
          onChangeText={setInputMessage}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Image style={Styles.Arrow} source={require('../../images/Arrow.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
