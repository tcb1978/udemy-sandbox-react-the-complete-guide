import React, { PureComponent } from 'react'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass'
import classes from './App.css'



class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[App.js]] Inside Constructor', props)
    this.state = {
      persons: [
        { id: 'nameMax', name: 'Max', age: '28', },
        { id: 'nameManu', name: 'Manu', age: '29', },
        { id: 'nameSteph', name: 'Steph', age: '26', }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount = () => {
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount = () => {
    console.log('[App.js] Inside componentDidMount()')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside componentWillReceiveProps', nextState)
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[UPDATE App.js] Inside componentDidUpdate', prevState);
  }
  

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons:  persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons
    })
  }

  render() {
    console.log('[App.js], Inside render()');
    let persons = null

    if ( this.state.showPersons ) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
    }

    return (
      <WithClass classes={classes.App}>
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </WithClass>
    )
  }
}

export default App
