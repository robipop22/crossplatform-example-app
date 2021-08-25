import { useState } from 'react';

const updateInput = () => {
    const [inputValue, setInputValue] = useState<string>('');

    return { inputValue, setInputValue };
};

export default updateInput;
