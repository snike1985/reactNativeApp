import * as React from 'react';
import {Image, Keyboard, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import {Text, View} from '../components/Themed';
import {useState} from 'react';

export default function LoginLayout() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthorized, setAuthorize] = useState(false);
    const onSubmit = () => {
        if (email.toLowerCase() === 'snike1985@gmail.com' && password === 'admin') {
            setAuthorize(true);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Image style={styles.image}
                       source={require('../assets/images/icon.png')}/>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Email'
                        placeholderTextColor='#003f5c'
                        keyboardType='email-address'
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Password'
                        placeholderTextColor='#003f5c'
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} onPress={onSubmit}>
                    <Text style={styles.loginBtnText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        marginBottom: 40
    },
    inputView: {
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        width: '80%',
        height: 50,
        marginBottom: 20,
        alignItems: 'center',
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        width: '100%'
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: '80%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: 'blue',
        textAlign: 'center',
    },
    loginBtnText: {
        color: '#ffffff',
        textTransform: 'uppercase'
    }

});
