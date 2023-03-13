import * as yup from "yup";
export const validationSchema = yup.object().shape({
    
    subjectId: yup.string().required(),
    question: yup.string().required(),
    images: yup.string().required().email(),
    docs: yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10, 'Must be exactly 5 digits'),

});