import PhosIcon from '../PhosIcon';
import useContactForm from '../../hooks/useContactForm';

const Field = ({ legend, error, children }) => (
    <fieldset className="fieldset">
        <legend className="fieldset-legend main-font-m text-sm">{legend}</legend>
        {children}
        {error && <p className="text-error text-xs mt-1 main-font-r" role="alert">{error.message}</p>}
    </fieldset>
);

const ContactForm = () => {
    const { register, handleSubmit, onSubmit, errors, isSubmitting, isSubmitSuccessful } = useContactForm();

    return (
        <div className="lg:col-span-3 card bg-base-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title title-font-sm text-xl mb-2">Envoyer un message</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field legend="Prénom" error={errors.from_firstname}>
                            <input
                                type="text"
                                className={`input input-bordered w-full main-font-r ${errors.from_firstname ? 'input-error' : ''}`}
                                placeholder="Pierre"
                                autoComplete="given-name"
                                {...register('from_firstname', {
                                    required: 'Le prénom est requis',
                                    minLength: { value: 2, message: 'Au moins 2 caractères' },
                                    maxLength: { value: 50, message: 'Maximum 50 caractères' },
                                })}
                                aria-label={legend}
                            />
                        </Field>
                        <Field legend="Nom" error={errors.from_lastname}>
                            <input
                                type="text"
                                className={`input input-bordered w-full main-font-r ${errors.from_lastname ? 'input-error' : ''}`}
                                placeholder="Thomas"
                                autoComplete="family-name"
                                {...register('from_lastname', {
                                    required: 'Le nom est requis',
                                    minLength: { value: 2, message: 'Au moins 2 caractères' },
                                    maxLength: { value: 50, message: 'Maximum 50 caractères' },
                                })}
                                aria-label={legend}
                            />
                        </Field>
                    </div>

                    <Field legend="Email" error={errors.from_email}>
                        <input
                            type="email"
                            className={`input input-bordered w-full main-font-r ${errors.from_email ? 'input-error' : ''}`}
                            placeholder="pierre-thomas@email.com"
                            autoComplete="email"
                            {...register('from_email', {
                                required: "L'email est requis",
                                maxLength: { value: 100, message: 'Maximum 100 caractères' },
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Adresse email invalide' },
                            })}
                            aria-label={legend}
                        />
                    </Field>

                    <Field legend="Sujet" error={errors.subject}>
                        <input
                            type="text"
                            className={`input input-bordered w-full main-font-r ${errors.subject ? 'input-error' : ''}`}
                            placeholder="Projet / Opportunité / Question..."
                            {...register('subject', {
                                required: 'Le sujet est requis',
                                minLength: { value: 3, message: 'Au moins 3 caractères' },
                                maxLength: { value: 100, message: 'Maximum 100 caractères' },
                                
                            })}
                            aria-label={legend}
                        />
                    </Field>

                    <Field legend="Message" error={errors.message}>
                        <textarea
                            className={`textarea textarea-bordered w-full main-font-r h-36 resize-none ${errors.message ? 'textarea-error' : ''}`}
                            placeholder="Décrivez votre projet ou votre message..."
                            {...register('message', {
                                required: 'Le message est requis',
                                minLength: { value: 10, message: 'Au moins 10 caractères' },
                                maxLength: { value: 2000, message: 'Maximum 2000 caractères' },
                            })}
                            aria-label={legend}
                        />
                    </Field>

                    {isSubmitSuccessful && (
                        <div role="alert" className="alert alert-success main-font-r text-sm">
                            <PhosIcon name="CheckCircle" size={18} />
                            Message envoyé avec succès !
                        </div>
                    )}

                    <div className="card-actions justify-end mt-2">
                        <button type="submit" className="btn btn-neutral main-font-m px-8" disabled={isSubmitting} aria-busy={isSubmitting}>
                            {isSubmitting
                                ? <span className="loading loading-spinner loading-sm" aria-label="Envoi en cours" />
                                : <PhosIcon name="PaperPlaneTilt" size={18} aria-hidden="true" />}
                            {isSubmitting ? 'Envoi...' : 'Envoyer'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
