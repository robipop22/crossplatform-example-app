import handleSignUpForm from 'brain/dist/form/signup';

import { container } from './style';

const FormScreen: React.FC = (): React.ReactElement => {
  const { name, setName, email, setEmail, phone, setPhone, phoneIsValid, emailIsValid } = handleSignUpForm();

  return (
    <div className={'container'}>
      <style jsx>{container}</style>
      <p>Name:</p>
      <input value={name} onChange={e => setName(e.currentTarget.value)} />
      <p>email:</p>
      <input value={email} onChange={e => setEmail(e.currentTarget.value)} />
      {!emailIsValid && email.length > 5 && <span>Please use a valid email address</span>}
      <p>phone:</p>
      <input value={phone} onChange={e => setPhone(e.currentTarget.value)} />
      {!phoneIsValid && phone.length > 5 && <span>Please use a valid phone number</span>}
      <button onClick={() => alert('submited')}>Submit</button>
    </div>
  );
};

export default FormScreen;
