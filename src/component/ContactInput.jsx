/* eslint-disable react/prop-types */
import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tag: '',
    };

    this.OnChangeNameEventHandler = this.OnChangeNameEventHandler.bind(this);
    this.OnChangeTagEventHandler = this.OnChangeTagEventHandler.bind(this);
    this.OnSubmitEventHandler = this.OnSubmitEventHandler.bind(this);
  }

  OnChangeNameEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  OnChangeTagEventHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      };
    });
  }

  OnSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.OnSubmitEventHandler}>
        <input
          type="text"
          placeholder="Nama"
          value={this.state.name}
          onChange={this.OnChangeNameEventHandler}
        />
        <input
          type="text"
          placeholder="Tag"
          value={this.state.tag}
          onChange={this.OnChangeTagEventHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
