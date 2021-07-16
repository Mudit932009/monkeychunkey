import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import database from './database';
import Soundbutton from './components/Soundbutton';

export default class App extends Component {
  constructor() {
    super();
    this.state = { mtext: '', chunkarray: [], phonearrray: [] };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./monkey.jpg')}
          style={styles.imageIcon}></Image>
        <TextInput
          placeholder="write text here"
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              mtext: text,
            });
          }}></TextInput>

        <TouchableOpacity
          onPress={() => {
            var word=this.state.mtext.toLowerCase()
             database[word]?(

            this.setState({
              chunkarray: database[word].chunks,
              phonearrray: database[word].phones,
            })):alert("The word does not exist")
          }}
          style={styles.goButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunkarray.map((item, index) => {
            return (
              <Soundbutton
                wordChunk={this.state.chunkarray[index]}
                buttonIndex={index}
                soundChunk={this.state.phonearrray[index]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#b8b8b8' },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: { textAlign: 'center', fontSize: 30, fontWeight: 'bold' },

  imageIcon: { width: 150, height: 150, marginLeft: 95 },
});
