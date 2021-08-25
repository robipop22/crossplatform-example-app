"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const isValidEmail = (email) => {
    if (email.length < 4)
        return true;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isValidPhoneNumber = phoneNumber => {
    const re = /^[0-9]{10}$/;
    return re.test(phoneNumber);
};
const handleSignUpForm = () => {
    const [name, setName] = react_1.useState('');
    const [email, setEmail] = react_1.useState('');
    const [emailIsValid, setEmailIsValid] = react_1.useState(true);
    const [phoneIsValid, setPhoneIsValid] = react_1.useState(true);
    const [phone, setPhone] = react_1.useState('');
    react_1.useEffect(() => {
        if (!isValidEmail(email)) {
            setEmailIsValid(false);
        }
        else {
            setEmailIsValid(true);
        }
    }, [email]);
    react_1.useEffect(() => {
        if (!isValidPhoneNumber(phone)) {
            setPhoneIsValid(false);
        }
        else {
            setPhoneIsValid(true);
        }
    }, [phone]);
    const onSubmit = () => {
        return 'Congrats you signed up!';
    };
    return { name, setName, email, setEmail, phone, setPhone, emailIsValid, phoneIsValid, onSubmit };
};
exports.default = handleSignUpForm;
//# sourceMappingURL=signup.js.map