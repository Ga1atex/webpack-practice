import React from 'react';
import $ from 'jquery';

export default class App extends React.Component {
  componentDidMount() {
    $('<h1 />')
      .text('Hello world from JQuery')
      .css({
        textAlign: 'center',
        color: '#3c3cbb'
      })
      .appendTo($('header'));
  }

  render() {
    return (
      <React.Fragment>
        <header></header>

        <hr />
        <div className="box">
          <h2 className="box-title">Box title</h2>

          <p className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nisi maxime ea quibusdam
            repellendus natus, officia asperiores quas at molestiae?</p>
        </div>
      </React.Fragment>
    );
  }
}