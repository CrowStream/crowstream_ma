/* eslint-disable prettier/prettier */
/**
 * App View
 */

// React
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// React Native Paper
import {Button, TextInput} from 'react-native-paper';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {sign_in} from '../redux/reducers';
import store, {useReduxDispatch, useReduxSelector} from '../redux/store';
import {SignIn} from '../services';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Props } from './RootStackParams';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Login = ({ route, navigation }: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const value = useReduxSelector(state => state);
  const dispatch = useReduxDispatch();

  return (
    <SafeAreaView>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button
        icon="check"
        mode="contained"
        onPress={async () => {
          console.log('ANTES:' + JSON.stringify(store.getState()));
          await dispatch(sign_in(await SignIn(email, password)));
          console.log('DESPUES:' + JSON.stringify(store.getState()));
        }}>
        Inicia sesión
      </Button>
      <Button
        onPress={() => navigation.navigate('Description')}
        >
        Venom
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Login;
