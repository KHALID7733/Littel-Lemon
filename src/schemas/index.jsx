import * as Yup from 'yup';

export const ReservationSchema = Yup.object({

    firstName: Yup.string().min(2).max(50).required("Please enter your name"),
        email: Yup.string().email().required('Invailid email address !'),
        phone: Yup.number().min(10).max(15).required('Required'),
        numberOfGuest: Yup.number().max(9,"Guests must be lower than 9 ").required('Required'),
        reservationDate: Yup.date().required("Required"),
        reservationTime: Yup.number().required('required'),
        agree: Yup.boolean().required('Required'),
 
})

export const ReservationInitial = {
    firstName: '',
    email: '',
    phone: '',
    numberOfGuest: '',
    reservationDate: '',
    reservationTime: '',
    agree: false,

}