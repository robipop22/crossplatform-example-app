import { useState, useEffect } from 'react';

// a function that validates an email
const isValidEmail = email => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhoneNumber = phoneNumber => {
  const re = /^[0-9]{10}$/;
  return re.test(phoneNumber);
};

const handleSignUpForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [phoneIsValid, setPhoneIsValid] = useState<boolean>(true);
  const [phone, setPhone] = useState<string>('');

  useEffect(() => {
    if (!isValidEmail(email)) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }
  }, [email]);

  useEffect(() => {
    if (!isValidPhoneNumber(phone)) {
      setPhoneIsValid(false);
    } else {
      setPhoneIsValid(true);
    }
  }, [phone]);

  return { name, setName, email, setEmail, phone, setPhone, emailIsValid, phoneIsValid };
};

export default handleSignUpForm;
