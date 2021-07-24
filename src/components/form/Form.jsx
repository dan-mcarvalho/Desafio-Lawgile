import { Component } from "react";
import "./style.css";

class Form extends Component {
  render() {
    return (
      <form className="form">
        <h1 className="form__title">Purchase</h1>
        <div className="form__column">
            <div className="form__row">
                <div className="form__fieldset">
                <label className="form__label" htmlFor="name">
                    First Name
                </label>
                <input className="form__input" type="text" id="name" />
                </div>
                <div className="form__fieldset">
                <label className="form__label" htmlFor="name">
                    Last Name
                </label>
                <input className="form__input" type="text" id="name" />
                </div>
            </div>
            <div className="form__row">
                <div className="form__fieldset">
                    <label className="form__label" htmlFor="email">
                        Email
                    </label>
                    <input className="form__input" type="text" id="name" />
                </div>
                <div className="form__fieldset">
                <label className="form__label" htmlFor="age">
                    Age
                </label>
                <input className="form__input" type="text" id="name" />
                </div>
            </div> 
            <div className="form__row">
            <textarea
            className="form__textarea"
            placeholder="Give your feedback"
            ></textarea>
            </div>
            <button className="form__button">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
