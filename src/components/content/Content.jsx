import { Component } from "react";
import "./style.css";
import { postitsImg } from "../../services/imgService";

class Content extends Component {

    selectPostit(postit) {
        this.props.showForm(postit);
    }
  render() {
    return (
      <main className="content">
        <nav className="content__nav">
          <ul className="postIts">
            {postitsImg.map((postit, index) => (
              <li key={index} className="postIt">
                <h2 className="postIt__title">{postit.title}</h2>
                <span className="postIt__price">{postit.price}</span>
                <span className="postIt__price">{postit.description}</span>
                <img className="postIt__img" src={postit.img} alt="" />
                <button onClick={() => this.selectPostit(postit)} className="postIt__button">Buy</button>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    );
  }
}

export default Content;
