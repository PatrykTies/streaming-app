import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamList} />
          <Route path='/streams/edit' exact component={StreamEdit} />
          <Route path='/streams/delete' exact component={StreamDelete} />
          <Route path='/streams/show' exact component={StreamShow} />
        </div>
      </BrowserRouter>
    );
  }
}
