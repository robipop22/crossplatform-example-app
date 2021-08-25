/// <reference types="react" />
declare const handleSignUpForm: () => {
    name: string;
    setName: import("react").Dispatch<import("react").SetStateAction<string>>;
    email: string;
    setEmail: import("react").Dispatch<import("react").SetStateAction<string>>;
    phone: string;
    setPhone: import("react").Dispatch<import("react").SetStateAction<string>>;
    emailIsValid: boolean;
    phoneIsValid: boolean;
    onSubmit: () => string;
};
export default handleSignUpForm;
