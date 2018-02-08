import React, { Component } from 'react'
import classes from './Person.css'
// import WithClass from '../../../hoc/WithClass'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types'


class Person extends Component {
    constructor(props) {
        super(props)
        console.log('[Person.js]] Inside Constructor', props)

    }

    componentWillMount = () => {
        console.log('[Person.js] Inside componentWillMount()')
    }

    componentDidMount = () => {
        console.log('[Person.js] Inside componentDidMount()')
        if(this.props.postition === 0) {
            this.inputElement.focus()
        }
    }
    render() {
        console.log('[Person.js] Inside render()')
        return (
            <Aux classes={classes.Person} >
                <p onClick={this.props.click}>I'm a person and I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={(inp) => { this.inputElement = inp }}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person)