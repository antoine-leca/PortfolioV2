import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const useContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();

    const onSubmit = async (data) => {
        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_firstname: data.from_firstname,
                from_lastname: data.from_lastname.toUpperCase(),
                time: new Date().toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' }),
                from_email: data.from_email,
                message: data.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        reset();
    };

    return { register, handleSubmit, onSubmit, errors, isSubmitting, isSubmitSuccessful };
};

export default useContactForm;
