import { Component } from 'react';
import { nanoid } from 'nanoid';
import { TodoList } from 'components/TodoList/TodoList';

import { Container, Header, SearchForm, Section } from 'components';

export class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if (todos) {
      this.setState(() => ({ todos }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;

    if (prevState.todos !== todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
    };

    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));
  };

  handleSubmit = data => {
    this.addTodo(data);
  };

  render() {
    return (
      <>
        <Header />
        <Section>
          <Container>
            <SearchForm onSubmit={this.handleSubmit} />

            <TodoList />
          </Container>
        </Section>
      </>
    );
  }
}
