import { useState, useCallback } from "react";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery.jsx";
import { Button } from "./components/Button/Button.jsx";
import { Modal } from "./components/Modal/Modal.jsx";
import { InfinitySpin } from "react-loader-spinner";
import api from "./api/api.js";

const App = () => {
  const [pics, setPics] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [completedKeyword, setCompletedKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [notLoaded, setNotLoaded] = useState(true);
  const [loadMoreActive, setLoadMoreActive] = useState(false);
  const [currentModalPicture, setCurrentModalPicture] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadPics = useCallback(async (ev) => {
    ev.preventDefault();

    setPage(1);

    const data = await api.getPics(keyword, changeLoadingValue);

    if (data[0][0]) {
      setPics(data[0]);
      setNotLoaded(false);
      setCompletedKeyword(keyword);
      setLoadMoreActive(data[1]);
      setIsLoading(false);
    } else {
      setNotLoaded(true);
      setIsLoading(false);
      setLoadMoreActive(false);
    }
  }, [keyword]);

  const changeLoadingValue = () => {
    setIsLoading(!isLoading);
  }

  const updateKeyword = (ev) => {
    setKeyword(ev.target.value);
  }

  const loadMore = useCallback(async () => {
    const data = await api.loadNewPage(completedKeyword, pics, page + 1, changeLoadingValue);

    setPics(data[0]);
    setPage(page + 1);
    setLoadMoreActive(data[1]);
    setIsLoading(false);
  }, [completedKeyword, page]);

  const toggleModal = (ev, modalURL) => {
    if (["overlay", "image"].includes(ev.target.id) || ev.type === "keydown") {
      setIsModalOpen(!isModalOpen);
      setCurrentModalPicture(modalURL);
    }
  }

  return (
    <div className="App">
      {isLoading && <div className="loading-overlay">
        <InfinitySpin
          visible={true}
          width="200"
          color="#4fa94d"
          ariaLabel="infinity-spin-loading"
        />
      </div>}
      <Searchbar loadPics={loadPics} keyword={keyword} updateKeyword={updateKeyword} />
      <ImageGallery data={pics} notLoaded={notLoaded} openModal={toggleModal} />
      {isModalOpen && <Modal
        currentModalPicture={currentModalPicture}
        closeModal={toggleModal}
      />}
      {loadMoreActive && <Button classOfButton="Button" handleClick={loadMore}>Load more</Button>}
    </div>
  );
}

export default App;
