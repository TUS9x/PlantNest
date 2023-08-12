import {
    Box,
    Button, Checkbox,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    useDisclosure,
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { useAppContext } from '~/App';

const LoginModal = ({ children }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            username: '',
            password: '',
            remember: false,
        },
    });

    const { setIsLogin } = useAppContext()

    const handleLogin = (formData) => {
        console.log({ formData });
        localStorage.setItem('isLogin', JSON.stringify(true))
        setIsLogin(true)
        onClose()
    }
    return (
        <>
            <Box onClick={onOpen}>{children}</Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader textAlign={'center'} fontSize={'4xl'}>Login</ModalHeader>
                    <ModalBody>
                        <Stack>
                            <Controller
                                rules={{
                                    required: 'Username is required',
                                }}
                                control={control}
                                render={({ field, fieldState: { error, invalid } }) => (
                                    <FormControl isInvalid={invalid}>
                                        <FormLabel>Username</FormLabel>
                                        <Input {...field} placeholder={'Username'} />
                                        <FormErrorMessage>{error?.message}</FormErrorMessage>
                                    </FormControl>
                                )}
                                name="username"
                            />

                            <Controller
                                rules={{
                                    required: 'Password is required',
                                }}
                                control={control}
                                render={({ field, fieldState: { error, invalid } }) => (
                                    <FormControl isInvalid={invalid}>
                                        <FormLabel>Password</FormLabel>{' '}
                                        <Input type={'password'} placeholder={'Password'} {...field} />
                                        <FormErrorMessage>{error?.message}</FormErrorMessage>
                                    </FormControl>
                                )}
                                name="password"
                            />
                            <Controller control={control} render={({ field }) => <Checkbox {...field}>Remember me?</Checkbox>} name={'remember'} />
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Stack w={`full`}>
                            <Button bg='green.500' w={'100%'} onClick={handleSubmit(handleLogin)}>Login</Button>
                            <Button bg='orange.300' w={'100%'} onClick={handleSubmit(handleLogin)}>Sign up</Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default LoginModal;
