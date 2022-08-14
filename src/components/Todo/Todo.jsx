import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from 'redux/todoSlice';

export const Todo = ({ text, counter, onClick, id }) => {
  const dispatch = useDispatch();
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };
  const handleUpdateTodo = () => {
    dispatch(updateTodo(id));
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
        <DeleteButton type="button" onClick={handleUpdateTodo}>
          Update
        </DeleteButton>
        <input type="text" name="changeUodate" value={text} />
      </TodoWrapper>
    </>
  );
};
