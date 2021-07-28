import { Component } from "react";
import "./style.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.hideForm = {
      display: "none",
    };

    this.showForm = {
      display: "flex",
    };
  }

  handleDisplay() {
    if (this.props.show) {
      return this.showForm;
    } else {
      return this.hideForm;
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
              <input className="form__input" type="text" id="name" required />
            </div>
            <div className="form__fieldset">
              <label className="form__label" htmlFor="name">
                Last Name
              </label>
              <input className="form__input" type="text" id="name" required />
            </div>
          </div>
          <div className="form__row">
            <div className="form__fieldset">
              <label className="form__label" htmlFor="email">
                Email
              </label>
              <input className="form__input" type="email" id="email" required />
            </div>
            <div className="form__fieldset">
              <label className="form__label" htmlFor="age">
                Age
              </label>
              <input className="form__input" type="text" id="name" required />
            </div>
          </div>
          <div className="form__row">
            <textarea
              className="form__textarea"
              placeholder="Give your feedback"
            ></textarea>
          </div>
          <button className="form__button" onClick={e => {e.preventDefault(); this.props.close();}}>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
