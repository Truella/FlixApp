import React, { useEffect, useState } from "react";
import styles from "./cardContainer.module.css";
import useApi from "../../custom_hooks/UseApi";
import Modal from "./Modal";
import PopUp from "../PopUp/PopUp";
export default function CardContainer({ items, className }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loadedBackdrop, setLoadedBackdrop] = useState(null)
  const { data, loading, error, sendMovieReq , setData} = useApi();
  function handleModalClose() {
    setModalIsOpen(false);
    setData(null)
  }
  function handleClick(id,backdrop) {
    console.log(id);
    sendMovieReq(`
https://api.themoviedb.org/3/movie/${id}`);
    setModalIsOpen(true);
    setLoadedBackdrop(backdrop)
  }
  useEffect(()=>{
    console.log(data)
    console.log(loading)
    console.log(error)
    console.log(loadedBackdrop)
  }, [data,loading,error, loadedBackdrop])
  return (
    <ul className={styles.ul}>
      {modalIsOpen && (
        <Modal onClose={handleModalClose}>
          <PopUp data={data} loading={loading} backdrop={loadedBackdrop}/>
        </Modal>
      )}
      {items.map((item, index) => (
        <li
          key={item.id || `newKey${index}`}
          className={styles[className]}
          id={item.id}
          onClick={() => handleClick(item.id, item.backdrop)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster}`}
            alt=""
            className={styles.poster_img}
          />
        </li>
      ))}
    </ul>
  );
}
