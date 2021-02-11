import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import LoginLayout from './components/LoginLayout';

export default function App() {
    const [isAuthorized, setAuthorize] = useState(false);
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {

        if (isAuthorized) {
            return (
                <SafeAreaProvider>
                    <Navigation colorScheme={colorScheme}/>
                    <StatusBar/>
                </SafeAreaProvider>
            );
        } else {
            return <LoginLayout/>;
        }
    }
}
