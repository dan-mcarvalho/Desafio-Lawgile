import { Component } from "react";
import "./style.css";
import PostitService from "../../services/PostitService";
import Form from "../form/index";

class Content extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      products: [],
    };

    this.close = this.closeForm.bind(this);
  }

  async componentDidMount() {
    const response = await PostitService.getPostits();
    const products = response.products.product;
    this.setState({ products: products });
  }

  showForm() {
    this.setState({ show: true });
  }

  closeForm() {
    this.setState({ show: false });
  }

  render() {
    return (
      <main className="content">
        <Form show={this.state.show} close={this.close}></Form>
        <nav className="content__nav">
          <ul className="postIts">
            {this.state.products.map((postit, index) => {
              return (
                <li key={index} className="postIt">
                  <h2 className="postIt__title">{postit.title}</h2>
                  <span className="postIt__price">{postit.price}</span>
                  <span className="postIt__price">{postit.description}</span>
                  <img className="postIt__img" src={postit.img} alt="" />
                  <button
                    onClick={() => this.showForm()}
                    className="postIt__button"
                  >
                    Buy
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </main>
    );
  }
}

export default Content;
