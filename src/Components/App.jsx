import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

import { addItem, increaseCounter } from './../Redux/ToDo/action'
import { todoSelector, counterSelector } from './../Redux/selectors'

//Render props components
import ButtonClicked from './../Components/RenderProp/ButtonClicked'
import HeadingHovered from './../Components/RenderProp/HeadingHovered'
import Counter from './../Components/RenderProp/Counter'

import Routes from './../Routes/Route.jsx'
import Form from './Form'
import FormikForm from './Formik/Form'


// import Todo from './Todo/Todo'
import CustomCounter from './Counter'

import Socket from './Socket'

const ToDoComponent = React.lazy(() => import('./Todo/Todo'));

class App extends Component {

  state = {
    name : 'Aakash',
    content : '', 
    counter : 0,
  }

  buttonClick = (e) => {
  }

  addItem = () => {
    this.props.addItem({
      id : Math.random() * 100,
      content : this.state.content
    })
  }

  addItemWith() {
    console.log('THis', this)
  }

  changeText = e => {
    this.setState({ content : e.target.value })
  }

  
  render() {

    return (
      <BrowserRouter>
        <div className="App container">

          <h1 className="center">To do</h1>
            <Suspense fallback={<div>Loading...</div>}>
              <ToDoComponent todos={this.props.todos} />
            </Suspense>
          <div className="input-field col s12">
            <input id="item" type="text" value={this.state.content} placeholder="Add item" onChange={this.changeText} />
          </div>
          <button onClick={this.addItem}>Add Item</button>
          {/* <button onClick={() => window.location.reload()}>Reload page</button> */}
          <CustomCounter counter={this.props.counter} />
          <button onClick={() => this.props.increaseCounter()}>Increment Counter</button>

          {/* <Socket/> */}
            {/* <FormikForm /> */}
          {/* <Form /> */}
          <Routes />
          {/* <ButtonClicked />
          <HeadingHovered /> */}
          {/* <Counter
            render={(count, incrementCount) => (
              <ButtonClicked count={count} incrementCount={incrementCount} />
            )}
          />
          <Counter
            render={(count, incrementCount) => (
              <HeadingHovered count={count} incrementCount={incrementCount} />
            )}
          /> */}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos : todoSelector(state),
    counter : counterSelector(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem : item => dispatch(addItem(item)),
    increaseCounter : () => dispatch(increaseCounter())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
