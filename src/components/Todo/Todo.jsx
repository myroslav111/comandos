import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from 'redux/todoSlice';
import { useState } from 'react';
import { useContext } from 'react';

export const Todo = ({ text, counter, onClick, id }) => {
  const [isUpdate, setIsUpdate] = useState(false);

  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };
  const handleUpdateTodo = () => {
    // dispatch(updateTodo(id));
    setIsUpdate(true);
  };
  const handleSend = () => {
    dispatch(
      updateTodo({
        id,
        text: content,
      })
    );
    setIsUpdate(false);
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={handleDeleteTodo}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        {!isUpdate && (
          <button type="button" onClick={handleUpdateTodo}>
            Update
          </button>
        )}

        {isUpdate && (
          <div>
            <input
              onChange={e => setContent(e.currentTarget.value)}
              type="text"
              name="changeUpdate"
              value={content}
            />
            <button type="button" onClick={handleSend}>
              send
            </button>
          </div>
        )}
      </TodoWrapper>
    </>
  );
};
