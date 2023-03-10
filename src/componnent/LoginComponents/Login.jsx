import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";


export const LoginSet = ()=>{

    return(
    <>


<FormControl>
    <FormLabel
    htmlFor="name"
    >
        Email:
    </FormLabel>
    <Input  
    id="email"
    name={'email'}

    />

</FormControl>


<FormControl>
    <FormLabel
    htmlFor="password"
    >
        Password:
    </FormLabel>
    <Input  
    id="password"
    name={'password'}

    />

</FormControl>

</>
    )
}


// from here i started Sinup form

export const SignUp = ()=>{
    return (

        <>
        <FormControl>
        <FormLabel
        htmlFor="name"
        >
            Name:
        </FormLabel>
        <Input  
        id="name"
        name={'name'}
    
        />
    
    </FormControl>
    
    
    <FormControl>
        <FormLabel
        htmlFor="name"
        >
            Email:
        </FormLabel>
        <Input  
        id="email"
        name={'email'}
    
        />
    
    </FormControl>
    
    
    <FormControl>
        <FormLabel
        htmlFor="password"
        >
            Password:
        </FormLabel>
        <Input  
        id="password"
        name={'password'}
    
        />
    
    </FormControl>
    
    </>
    )
}


const Login = ()=>{


    const {isOpen, onOpen, onClose} = useDisclosure();
    const [login, setLogin] = useState(<LoginSet/>);    
    const [title, setTitle] = useState('Login');
    return (
        <>
            <Button
            onClick={onOpen}
            
            >
                Login

            </Button>
            <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset={'slideInBottom'}
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader fontFamily={'Merkazi Text'} fontSize={'25px'} fontWeight={'bold'}>
                        {title}
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>

                    { login }



                   <ModalFooter my={'4'}>
                    <Button
                    bg={'#F4CE14'}
                    >
                        Login
                    </Button>
<Spacer/>
                    <Button
                    onClick={()=>{
                        setLogin(<SignUp/>)
                        setTitle('Sign Up')
                        onOpen()
                    }}
                    bg={'green.600'}
                    color={'white'}
                    >
                        Sign Up
                    </Button>
                        
                    </ModalFooter>
                    </ModalBody>

                </ModalContent>

            </Modal>
        </>
    );
}



export default Login;