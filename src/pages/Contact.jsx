import ContactForm from '../components/contact/ContactForm';
import ContactInfos from '../components/contact/ContactInfos';
import { SITE_URL } from '../config/seo';

const PAGE_TITLE = "Contact — Antoine LECA"
const PAGE_DESCRIPTION = "Contactez Antoine LECA pour une opportunité, un projet ou toute autre question. Formulaire de contact et liens directs disponibles."

const Contact = () => (
    <div className="min-h-screen flex flex-col items-center pb-16 px-4 lg:px-0">
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        {/* TODO: Remplacer og-image.jpg par un vrai visuel (bannière nom + titre + fond) avant mise en prod */}
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

        <div className='divider divider-start pl-6 py-6 text-2xl main-font-m'>Contact</div>
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
