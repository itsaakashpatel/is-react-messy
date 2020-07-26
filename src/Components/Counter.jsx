import React from 'react'

function Counter(props) {
  console.log('CUSTOM COUNTER')
  return (
    <div>
      Counter : {props.counter}
    </div>
  )
}

export default React.memo(Counter)