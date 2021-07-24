import { Component } from "react";
import Header from './header/index';
import Content from './content/index';
import Form from './form/index'


class App extends Component{

  constructor() {
    super();
    this.state = {
      postits: []
    }
  }

  showForm(postit) {
    if(this.state.postits.length === 0) {
      this.state.postits.push(postit)
      this.setState(this.state.postits)
      console.log("chamei")
    }
  }

  render(){
    return(
      <>
      <Header></Header>
      <Content showForm={this.showForm.bind(this)}></Content>
      {this.state.postits.map(i => <Form key={i}></Form>)}
      </>
    )


  }




}

export default App;
