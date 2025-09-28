import React from "react";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery.jsx";
import { Button } from "./components/Button/Button.jsx";
import { Modal } from "./components/Modal/Modal.jsx";
import { InfinitySpin } from "react-loader-spinner";
import api from "./api/api.js";

class App extends React.Component {
  state = {
    pics: [],
    keyword: "",
    completedKeyword: "",
    page: 1,
    notLoaded: true,
    loadMoreActive: false,
    currentModalPicture: "",
    isModalOpen: false,
    isLoading: false,
  }

  loadPics = async (ev) => {
    ev.preventDefault();

    this.setState({
      page: 1,
    })

    const data = await api.getPics(this.state.keyword, this.changeLoadingValue);

    if (data[0][0]) {
      this.setState({
        pics: data[0],
        notLoaded: false,
        completedKeyword: this.state.keyword,
        loadMoreActive: data[1],
      });
    } else {
      this.setState({
        notLoaded: true,
      })
    }
  }

  changeLoadingValue = () => {
    this.setState((prev) => ({
      isLoading: !prev.isLoading,
    }));
  }

  updateKeyword = (ev) => {
    this.setState({
      keyword: ev.target.value,
    });
  }

  loadMore = async () => {
    const data = await api.loadNewPage(this.state.completedKeyword, this.state.pics, this.state.page + 1, this.changeLoadingValue);

    this.setState((prev) => ({
      pics: data[0],
      page: prev.page + 1,
      loadMoreActive: data[1],
    }));
  }

  toggleModal = (ev, modalURL) => {
    if (["overlay", "image"].includes(ev.target.id) || ev.type === "keydown") {
      this.setState((prev) => ({
        isModalOpen: !prev.isModalOpen,
        currentModalPicture: modalURL,
      }));
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading && <div className="loading-overlay">
          <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        </div>}
        <Searchbar loadPics={this.loadPics} keyword={this.state.keyword} updateKeyword={this.updateKeyword} />
        <ImageGallery data={this.state.pics} notLoaded={this.state.notLoaded} openModal={this.toggleModal} />
        {this.state.isModalOpen && <Modal
          currentModalPicture={this.state.currentModalPicture}
          closeModal={this.toggleModal}
        />}
        {this.state.loadMoreActive && <Button classOfButton="Button" handleClick={this.loadMore}>Load more</Button>}
      </div>
    );
  }
}

export default App;
