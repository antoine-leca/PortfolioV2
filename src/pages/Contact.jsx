import ContactInfos from '../components/contact/ContactInfos';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => (
    <div className="min-h-screen flex flex-col items-center py-16 px-4">
        <div className="text-center mb-12">
            <h1 className="text-5xl title-font-b text-base-content mb-4">Contactez-moi</h1>
            <p className="text-base-content/60 main-font-r text-lg max-w-md mx-auto">
                Une idée de projet ? Une opportunité ? N'hésitez pas à me laisser un message.
            </p>
        </div>

        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-8">
            <ContactInfos />
            <ContactForm />
        </div>
    </div>
);

export default Contact;
