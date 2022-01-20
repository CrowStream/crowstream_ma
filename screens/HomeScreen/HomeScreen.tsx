import React from 'react';
import { FlatList, SafeAreaView, View, Text} from 'react-native';
import { Button} from 'react-native-paper';
import store, { useReduxDispatch, useReduxSelector } from '../../src/redux/store';
import { useSelector } from "react-redux";
import { generateHome } from '../../src/services';
import { generate_home } from '../../src/redux';
import { RootState } from '../../src/redux';

import styles from './styles';
import HomeCategory from '../../components/catalogue/HomeCategory';
import { PropsHome } from '../RootStackParams';

const HomeScreen = ({ route, navigation }: PropsHome) => {
    const value = useReduxSelector(state => state);
    const dispatch = useReduxDispatch();

    //Llamamos metodo de que le dieron click a la descripcion del video
    React.useLayoutEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            await dispatch(generate_home(await generateHome()));
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <SafeAreaView>
            {/* <Button
                icon="check"
                mode="contained"
                accessibilityLabel='Genera la vistia inicial de videos para el usuario'
                onPress={async () => {
                    console.log("ANTES:" + JSON.stringify(store.getState()))
                    await dispatch(generate_home(await generateHome()));
                    console.log("DESPUES:" + JSON.stringify(store.getState()))
                }}>
            </Button> */}
            <View>
                <FlatList
                    data={useSelector((state: RootState) => state.catalogue.videos.length > 0 ? state.catalogue.videos : [])}
                    renderItem={({ item }) => <HomeCategory category={item} />}
                />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;