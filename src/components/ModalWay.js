class Container extends React.Component {
    state = {
     showModal: false
    }
  
    handleModal = () => {
      this.setState({showModal: !this.state.showModal});
    }
  render() {
    return (
      <Fragment>
        { this.state.showModal && <MyModal handleModal={this.handleModal}/> }
        <button onClick={this.handleModal}> Show modal </button>
      </Fragment>
     )
  }
}