import { FormLabel, Input } from "@chakra-ui/react";
import { useFormik } from "formik";
import FullScreenSection from "./FullScreenSection";
import * as Yup from'yup';


// const formik = useFormik({
//     initialValues: {
//         firstName: '',
//         email: '',
//         phone: '',
//         numberOfGuest: '',
//         reservationDate: '',
//         agree: '',

//     },
//     onSubmit: ()=>{
        
//     },
//     validationSchema: Yup.object({
//         firstName: Yup.string().required("Required"),
//         email: Yup.string().email('Invailid email address !').required('Required'),
//         phone: Yup.number().max(10).required('Required'),
//         numberOfGuest: Yup.number().max(9,"Guests must be lower than 9 ").required('Required'),
//         reservationDate: Yup.date().required("Required"),
//         agree: Yup.boolean().required('Required')
//     })
// });

const Raservation = ()=>{
    return (
        <FullScreenSection 
     isDarkBackground  
     py={16} 
     spacing={8} 
   > 
        
        </FullScreenSection>
    );
}

export default Raservation;