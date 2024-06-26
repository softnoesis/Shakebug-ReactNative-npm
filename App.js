import React from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Linking, TextInput } from 'react-native'
import ShakebugView, { addEventKey, triggerBugReporting } from 'shakebug-react-native'

const App = () => {

  return (
    <ShakebugView
      iOS_appkey='*****************' //Enter your ios app key
      Android_appkey='********************' //Enter your android app key
      allowToReportBugByScreenCapture={true}
      makeLogEnabled={true}
    >
      <StatusBar
        backgroundColor={"#f2f2f2"}
        barStyle={'dark-content'}
      />
      <SafeAreaView
        style={{
          backgroundColor: "#f2f2f2"
        }}
      >
        <View
          style={{
            width: "100%",
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f2f2f2'
          }}
        >
          <Image
            source={require("./Assets/Images/logo.png")}
            resizeMode='contain'
            style={{
              width: "80%"
            }}
          />
          
          <TouchableOpacity
            style={{
              width: '80%',
              height: 42,
              backgroundColor: '#1dd3e3',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginTop: '20%',
            }}

            onPress={() => {
                triggerBugReporting()
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: '#2A2A2A'
              }}
            >
              Trigger Shakebug
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '80%',
              height: 42,
              backgroundColor: '#1dd3e3',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginTop: '5%',
              marginBottom: '20%',
            }}

            onPress={() => {
              addEventKey("TestingEvent", 'test')
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: '#2A2A2A'
              }}
            >
              Add Event
            </Text>
          </TouchableOpacity>


          <View
            style={{
              width: '80%',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                color: '#2A2A2A',
                textAlign: 'center'
              }}
            >
              For more information, visit
            </Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.shakebug.com")
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: '#1dd3e3',
                  textAlign: 'center',
                  marginLeft: 5
                }}
              >
                shakebug.com
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </SafeAreaView>
    </ShakebugView>
  )
}

export default App