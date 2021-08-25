import addToDo from 'brain/dist/todo/addToDo';
import updateInput from 'brain/dist/todo/updateInput';

import { container } from './style';

const TodoScreen: React.FC = (): React.ReactElement => {
  const { addItem, itemList } = addToDo();
  const { inputValue, setInputValue } = updateInput();

  const addItemAndResetInput = () => {
    addItem(inputValue);
    setInputValue('');
  };

  return (
    <div className={'container'}>
      <style jsx>{container}</style>
      <input value={inputValue} onChange={e => setInputValue(e.currentTarget.value)} />
      <button onClick={addItemAndResetInput}>Add</button>
      <div>
        <ul>
          {itemList.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoScreen;
