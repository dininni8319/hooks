
import {TodoListContextProvider, TodoListContext } from './Context/todoListContext'
import { 
  // useState, 
  useEffect, 
  useMemo, 
  useCallback, 
  useContext,
  useState
} 
from 'react';

import Todos from './components/Todos';
// import placeholder from './API/placeholder';

export default function App() {

  return (
    <TodoListContextProvider>
        <Todos />
    </TodoListContextProvider>
  );
}

