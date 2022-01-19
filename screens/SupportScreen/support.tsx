/**
 * Support View
 */

// React
import React from 'react';

// React Native Paper
import { BottomNavigation } from 'react-native-paper';
import Forum from '../../components/support/forum.section';
import SupportRequest from '../../components/support/request.section';


type RoutesState = Array<{
    key: string;
    title: string;
    icon: string;
    color?: string;
    badge?: boolean;
    getAccessibilityLabel?: string;
    getTestID?: string;
}>;

const Support = (): JSX.Element => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState<RoutesState>([
        { key: 'forum', title: 'Foro de discución', icon: 'forum', color: '#19154E'},
        { key: 'support_center', title: 'Peticiones', icon: 'face-agent', color: '#19154E'},
    ]);
    return (
        <BottomNavigation
            shifting={true}
            navigationState={{ index, routes }}
            onIndexChange={index => setIndex(index)}
            renderScene={BottomNavigation.SceneMap({
                forum: Forum,
                support_center: SupportRequest
            })}
        />
    );
};

Support.title = 'Panel de Soporte';

export default Support;
