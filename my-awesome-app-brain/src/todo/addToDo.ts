import { useState } from 'react';

const addToDo = () => {
    const [itemList, setItemList] = useState<string[]>([]);

    const addItem = (item: string) => {
        if (!item) {
            return;
        }

        const newItemList = [...itemList, item];

        setItemList(newItemList);
    };

    return { addItem, itemList };
};

export default addToDo;
