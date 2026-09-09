import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const useContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState(null);
    const turnstileRef = useRef(null);

    const onTurnstileSuccess = (token) => setTurnstileToken(token);
    const onTurnstileExpire = () => setTurnstileToken(null);

    const onSubmit = async (data) => {
        if (!turnstileToken) return;

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
        setTurnstileToken(null);
        turnstileRef.current?.reset();
        setIsSubmitSuccessful(true);
        setTimeout(() => setIsSubmitSuccessful(false), 6000);
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        isSubmitting,
        isSubmitSuccessful,
        turnstileToken,
        turnstileRef,
        onTurnstileSuccess,
        onTurnstileExpire,
    };
};

export default useContactForm;
