import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';

function MyScreen({navigation}: {navigation: any}) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => setCounter(c => c + 1)}>
          <Text>Test</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{counter}</Text>
    </View>
  );
}

const Root = createNativeStackNavigator();

export function WelcomeNavigator() {
  return (
    <Root.Navigator>
      <Root.Screen name={'MyScreen'} component={MyScreen} />
    </Root.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <WelcomeNavigator />
    </NavigationContainer>
  );
}

export default App;
