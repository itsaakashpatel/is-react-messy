import React, { Component } from 'react'
import io from 'socket.io-client';

export default class Socket extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
    const socket = io('http://localhost:3000', {
      transports: ['websocket'], 
      upgrade: false
    });
    this.socket = socket
  }

  componentDidMount() {
   
    this.socket.on('connect', function(){
      console.log('Client is connected')
      const id = Math.random() * 100 
      // socket.emit('private message', id, 'Hi');

    });
    this.socket.on('event', function(data){});
    this.socket.on('disconnect', function(){
      console.log('Client is connected')
    });
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}