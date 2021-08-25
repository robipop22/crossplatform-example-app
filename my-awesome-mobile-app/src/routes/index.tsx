import NAMES from './names';

import HomeScreen from '../screens/home';
import TodoScreen from '../screens/todo';
import FormScreen from '../screens/form';
import BooksScreen from '../screens/books';

const routes = [
  {
    name: NAMES.HOME,
    component: HomeScreen,
  },
  {
    name: NAMES.TODO,
    component: TodoScreen,
  },
  {
    name: NAMES.FORM,
    component: FormScreen,
  },
  {
    name: NAMES.BOOKS,
    component: BooksScreen,
  },
];

export default {
  routes,
  NAMES,
};
