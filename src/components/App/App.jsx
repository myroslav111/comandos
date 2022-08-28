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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position?.coords?.latitude;
        const longitude = position?.coords?.longitude;
        console.log('latitude', latitude);
        console.log('longitude', longitude);
        const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
        const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`;

        fetch(urlPosition)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .then(data =>
            console.log(data.results[0].annotations.currency.iso_code)
          );
      });
    }

    var myHeaders = new Headers();
    myHeaders.append('apikey', 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj');

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders,
    };
    fetch('https://api.apilayer.com/exchangerates_data/symbols', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
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
    console.log(navigator);
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
