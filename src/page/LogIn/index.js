import { Button, ChakraProvider } from '@chakra-ui/react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
function LogIn() {
    return (
        <ChakraProvider>
            {/* <SignupForm /> */}
            <LoginForm />       
        </ChakraProvider>
    );
}

export default LogIn;
