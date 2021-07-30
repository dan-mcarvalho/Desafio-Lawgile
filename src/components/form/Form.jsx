import { Component } from "react";
import "./style.css";
import PostitService from "../../services/PostitService";

class Form extends Component {
  constructor(props) {
    super(props);

    this.hideForm = {
      display: "none",
    };

    this.showForm = {
      display: "flex",
    };

    this.state = {
      userName: '',
      userLastName: '',
      userAge: '',
      userEmail: ''
    }

  }

  handleDisplay() {
    if (this.props.show) {
      return this.showForm;
    } else {
      return this.hideForm;
    }
  }

  handleUserName(e){
    this.setState({
      userName: e.target.value
    });     
  }
 
  handleUserLastName(e){
    this.setState({
      userLastName: e.target.value
    });
  }
 
  handleUserEmail(e){
    this.setState({
      userEmail: e.target.value
    });
  }
 
  handleUserAge(e){
    this.setState({
      userAge: e.target.value
    });
  }

  getStateAsObject() {
    return {
      user_name: this.state.userName,
      user_last_name: this.state.userLastName,
      user_email: this.state.userEmail,
      user_age: this.state.userAge
    }
  }
   

  render() {
    return (
      <form style={this.handleDisplay()} className="form">
        <h1 className="form__title">Purchase</h1>
        <button
          className="form__close"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            this.props.close();
          }}
        >
          X
        </button>
        <div className="form__column">
          <div className="form__row">
            <div className="form__fieldset">
              <label className="form__label" htmlFor="name">
                First Name
              </label>
              <input className="form__input" type="text" id="name" value={this.state.userName}  onChange={this.handleUserName.bind(this)} required />
            </div>
            <div className="form__fieldset">
              <label className="form__label" htmlFor="name">
                Last Name
              </label>
              <input className="form__input" type="text" id="name" value={this.state.userLastName}  onChange={this.handleUserLastName.bind(this)} required />
            </div>
          </div>
          <div className="form__row">
            <div className="form__fieldset">
              <label className="form__label" htmlFor="email">
                Email
              </label>
              <input className="form__input" type="email" id="email" value={this.state.userEmail}  onChange={this.handleUserEmail.bind(this)} required />
            </div>
            <div className="form__fieldset">
              <label className="form__label" htmlFor="age">
                Age
              </label>
              <input className="form__input" type="text" id="name" value={this.state.userAge}  onChange={this.handleUserAge.bind(this)} required />
            </div>
          </div>
          <div className="form__row">
            <textarea
              className="form__textarea"
              placeholder="Give your feedback"
            ></textarea>
          </div>
          <button className="form__button" onClick={e => {
            e.preventDefault();
            this.props.close();
            PostitService.submitForm(this.props.postit, this.getStateAsObject());
          }}>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
