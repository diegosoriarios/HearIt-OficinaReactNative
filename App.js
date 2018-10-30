import React, { Component } from 'react';
import Header from './Header';
import { 
  StyleSheet,
  Text, 
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard
} from 'react-native';

const KEY = '';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      name:'',
      image: 'https://png.icons8.com/metro/1600/music.png',
      link: '',
    };
  }

  callApi(band){
    fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=' + band + '&api_key=0c05709ba56254b354388302bb35460b&format=json')
    .then((result) => {
      return result.json();
    }).then((band) => {
      let max = band.similarartists.artist.length;
      let rand = Math.floor(Math.random() * max) + 1 ;
      let artist = band.similarartists.artist[rand];
      return artist;
    }).then((artist) => {
      Keyboard.dismiss();
      let img = artist.image[5]['#text'];
      this.setState({
        name: artist.name,
        image: img,
        link: artist.url,
      })
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header title="Hear.it" />
        <View style = {styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            autoFocus = {true}
          />
          <Text style={styles.name}>{this.state.name}</Text>
            <Text>{this.state.link}</Text>
            <Image
                style={styles.img}
                source={{uri: this.state.image}}
              />
        </View>
      <TouchableOpacity
        style={styles.btn}
        title="Procurar"
        onPress={() => this.callApi(this.state.text)}>
        <Text style={styles.btnText}>Outro</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '10%',
    flex: 1,
  },
  btn: {
    padding: 10,
    backgroundColor: 'black',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 50,
    position: 'absolute',
    alignItems: 'center',
  },
  sinopse: {
    width: '80%',
    justifyContent: 'center',
  },
  img: {
    width: '65%',
    height: '65%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    width: 150,
    color: 'black',
    alignItems: 'center',
  },
});
