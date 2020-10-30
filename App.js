import React from 'react';
import { FlatList, KeyboardAvoidingView, StyleSheet, 
  TextInput, Text, View } from 'react-native';


class App1 extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
        </View>
        <View style={styles.bottom}>
          <TextInput
            placeholder="TextInput is here"
            style={styles.input}
          />
        </View>
      </View>
    );
  }
}

class App2 extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
      >
        <View style={styles.top}>
        </View>
        <View style={styles.bottom}>
          <TextInput
            placeholder="TextInput is here"
            style={styles.input}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

class App3 extends React.Component {

  constructor() {
    super();

    this.state = {
      inputText: ''
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
      >
        <View style={styles.top}>
        </View>
        <View style={styles.bottom}>
          <TextInput
            placeholder="TextInput is here"
            style={styles.input}
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            autoCompleteType='email'
            textContentType='emailAddress'
            returnKeyType='go'
            value={this.state.inputText}
            onChangeText={(text) => {this.setState({
              inputText: text
            })}}
            onSubmitEditing={() => {
              console.log(this.state.inputText);
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

class App4 extends React.Component {

  constructor() {
    super();
    let initList = [];
    for (let i = 0; i < 30; i++) {
      initList.push({
        text: 'item' + i,
        key: '' + i
      });
    }
    this.state = {
      theList: initList
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
      >
        <View style={styles.top}>
          <View style={styles.listContainer}>
            <FlatList
              data={this.state.theList}
              renderItem={({item}) => {
                return (
                  <View style={styles.listItem}>
                    <Text>
                      {item.text}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View style={styles.bottom}>
        <TextInput
            placeholder="TextInput is here"
            style={styles.input}
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            autoCompleteType='email'
            textContentType='emailAddress'
            returnKeyType='go'
            value={this.state.inputText}
            onChangeText={(text) => {this.setState({
              inputText: text
            })}}
            onSubmitEditing={() => {
              this.state.theList.push({
                text: this.state.inputText,
                key: '' + Date.now() // unique key every ms!
              })
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

class App5 extends React.Component {

  constructor() {
    super();
    let initList = [];
    for (let i = 0; i < 30; i++) {
      initList.push({
        text: 'item' + i,
        key: '' + i
      });
    }
    this.state = {
      theList: initList
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
      >
        <View style={styles.top}>
          <View style={styles.listContainer}>
            <FlatList
              ref={(theRef)=>{this.flatListRef = theRef;}}
              onContentSizeChange={()=>{
                this.flatListRef.scrollToEnd();
              }}
              data={this.state.theList}
              renderItem={({item}) => {
                return (
                  <View style={styles.listItem}>
                    <Text>
                      {item.text}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View style={styles.bottom}>
        <TextInput
            placeholder="TextInput is here"
            style={styles.input}
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            autoCompleteType='email'
            textContentType='emailAddress'
            returnKeyType='go'
            value={this.state.inputText}
            onChangeText={(text) => {this.setState({
              inputText: text
            })}}
            onSubmitEditing={() => {
              this.state.theList.push({
                text: this.state.inputText,
                key: '' + Date.now() // unique key every ms!
              })
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
    top: {
      flex: 1,
      backgroundColor: 'tan',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50
    },
      listContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        backgroundColor: 'lightgreen'
      },
    bottom: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50
    },
      input: {
        borderWidth: 1,
        borderColor: 'black'
      },
});

export default App5;
