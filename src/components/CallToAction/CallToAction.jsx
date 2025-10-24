import './CallToAction.css';

const CallToAction = ({ variant = 'form', content, onSubmit, onButtonClick }) => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            onSubmit(data);
        }
    };

    const renderForm = () => (
        <form className="cta-form" onSubmit={handleFormSubmit}>
            <div className="cta-form-grid">
                {content.fields?.map((field, index) => (
                    <input
                        key={index}
                        type={field.type || 'text'}
                        name={field.name}
                        placeholder={field.placeholder}
                        className="cta-input"
                        required={field.required}
                    />
                ))}
            </div>
            <button type="submit" className="cta-button">
                {content.buttonText}
            </button>
        </form>
    );

    const renderButton = () => (
        <button
            className={`cta-button ${
                variant === 'member'
                    ? 'cta-button-orange'
                    : variant === 'member-alt'
                    ? 'cta-button-green'
                    : ''
            }`}
            onClick={onButtonClick}
        >
            {content.buttonText}
        </button>
    );

    return (
        <div className={`cta-container cta-${variant}`}>
            <div className="cta-content">
                <h2 className="cta-heading">{content.heading}</h2>
                {content.description && <p className="cta-description">{content.description}</p>}
                {variant === 'form' ? renderForm() : renderButton()}
            </div>
        </div>
    );
};

export default CallToAction;

// Example Usage: ----
{
    /* Variant 1: Form with multiple inputs */
}
// <CallToAction
//     variant="form"
//     content={CTA_CONTENT.form}
//     onSubmit={handleFormSubmit}
// />

{
    /* Variant 2: Consultation CTA */
}
// <CallToAction
//     variant="consultation"
//     content={CTA_CONTENT.consultation}
//     onButtonClick={handleButtonClick}
// />

{
    /* Variant 3: Member CTA with orange button */
}
// <CallToAction
//     variant="member"
//     content={CTA_CONTENT.member}
//     onButtonClick={handleButtonClick}
// />

{
    /* Variant 4: Member CTA with green button */
}
// <CallToAction
//     variant="member-alt"
//     content={CTA_CONTENT.memberAlt}
//     onButtonClick={handleButtonClick}
// />
