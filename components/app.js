const App = React.createClass({
  render: function () {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: ContactForm}),
        React.createElement(Contacts, {contact: contacts}, {})
      )
    );
  }
});