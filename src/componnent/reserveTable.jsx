import { Button, Checkbox, Flex, FormControl, FormLabel, Input, Select, Textarea, Heading } from "@chakra-ui/react";
import { useFormik } from "formik";
// import FullScreenSection from "./FullScreenSection";
import { ReservationInitial, ReservationSchema } from "../schemas";
import useSubmit from "../hook/useSubmit";
import Header from "./header";
import Footer from "./Footer";



const Raservation = ()=>{

    const formik = useFormik({
        initialValues: ReservationInitial,
        validationSchema: ReservationSchema,
        onSubmit: values=>{
            return alert(JSON.stringify(values, null, 2))
        }
    });

    return (
        <>
        
        <Flex as={'form'} justifyContent={'center'} padding={{base: '50px', md: '150px', lg: '150px'}} direction={'column'}
        gap={'4'}
        >
 <Heading 
      
      as="h1"
      fontFamily={'Markazi Text'} 
      mb={10}
      fontSize={{base: "44px", md: "40px", lg: " 40px"}}
      color={"black"}
      fontWeight={{base: "500", md: "500", lg: "600"}}
      lineHeight={{base: "58.5px", md: "80px", lg: "90px"}}
      >Reservation Table</Heading>

            <FormControl>
                <FormLabel as={'label'} htmlFor="firstName">
                    First Name: 
                </FormLabel>
                <Input 
                placeholder="First Name"
                as={'input'}
                name={'firstName'}
                id={'firstName'}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                />

                {formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : null}
                </FormControl>



                <FormControl>
                <FormLabel as={'label'} htmlFor="lastName">
                    Last Name: 
                </FormLabel>
                <Input 
                placeholder="Last Name"
                as={'input'}
                name={'lastName'}
                id={'lastName'}
                onChange={formik.handleChange}
                
                />
            </FormControl>


            
            <FormControl>
                <FormLabel as={'label'} htmlFor="email">
                    Email: 
                </FormLabel>
                <Input 
                placeholder="e.g: exampe@gmail.com"
                as={'input'}
                name={'email'}
                id={'email'}
                type={'email'}
                onChange={formik.handleChange}
                value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : null}

            </FormControl>

            <FormControl>
                <FormLabel as={'label'} htmlFor="phone">
                    Phone: 
                </FormLabel>
                <Input 
                placeholder="Phone Number"
                as={'input'}
                name={'phone'}
                id={'phone'}
                type={'number'}
                onChange={formik.handleChange}
                value={formik.values.phone}
                />
                {formik.errors.phone && formik.touched.phone ? <p>{formik.errors.phone}</p> : null}
            </FormControl>

            <FormControl>
                <FormLabel as={'label'} htmlFor="numberOfGuest">
                    Number of Guests:
                </FormLabel>
                <select
                name={'numberOfGuest'}
                id={'numberOfGuest'}
                onChange={formik.handleChange}
                value={formik.values.numberOfGuest}
                >
                    <option defaultValue={'Guests'}>Guests</option>
                    <option>1</option>
                    <option>2</option>
                    <option>4</option>
                    <option>6</option>
                    <option>8</option>

                    </select>
                    {formik.errors.numberOfGuest && formik.touched.numberOfGuest ? <p>{formik.errors.numberOfGuest}</p> : null}
            </FormControl>
            <FormControl>
                <FormLabel as={'label'} htmlFor="reservationDate">
                    Resrvation Date: 
                </FormLabel>
                <Input 
                type={'date'}
                as={'input'}
                name={'reservationDate'}
                id={'reservationDate'}
                onChange={formik.handleChange}
                value={formik.values.reservationDate}
                />
                {formik.errors.reservationDate && formik.touched.reservationDate ? <p>{formik.errors.reservationDate}</p> : null}
            </FormControl>

            <FormControl>
                <FormLabel as={'label'} htmlFor="reservationTime">
                    Resrvation Time: 
                </FormLabel>
                <Input 
                type={'time'}
                as={'input'}
                name={'reservationTime'}
                id={'reservationTime'}
                onChange={formik.handleChange}
                value={formik.values.reservationTime}
                />
                {formik.errors.reservationTime && formik.touched.reservationTime ? <p>{formik.errors.reservationTime}</p> : null}
            </FormControl>
            <FormControl>
                <FormLabel as={'label'} htmlFor="remark">
                    Remark: 
                </FormLabel>
                <Textarea 
                type={'text'}
                min={'10'}
                max={'500'}
                as={'input'}
                name={'remark'}
                id={'remark'}
                onChange={formik.handleChange}
                
                />
                {formik.errors.agree && formik.touched.agree ? <p>{formik.errors.agree}</p> : null}
            </FormControl>

            <FormControl>
                <Checkbox
                 onChange={formik.handleChange} value={formik.values.agree}
                >
                    i agree to the action
                </Checkbox>
                {formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : null}
            </FormControl>

            <Button bg={'#F4CE14'}>Sumbit</Button> 


        </Flex>
        <Footer/>
        </>
    );
}

export default Raservation;








