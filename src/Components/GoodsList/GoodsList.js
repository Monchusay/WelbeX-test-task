import React, { useState } from "react";
import style from "./GoodsList.module.css";
import GoodsListItem from "./GoodsListItem/GoodsListItem";
import Pagination from "./Pagination/Pagination";
import SortBarContainer from "./SortBar/SortBarContainer";

const GoodsList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [goodsPerPage] = useState(10);

  const indexOfLastGoods = currentPage * goodsPerPage;
  const indexOfFirstGoods = indexOfLastGoods - goodsPerPage;
  const currentGoods = props.goods.slice(indexOfFirstGoods, indexOfLastGoods);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let goodsItem = currentGoods.map((g, index) => (
    <GoodsListItem
      key={index}
      publishDate={g.publishDate}
      name={g.name}
      amount={g.amount}
      distance={g.distance}
    />
  ));

  return (
    <div className={style.GoodsList}>
      <SortBarContainer />
      <div className={style.GoodsListItems}>{goodsItem}</div>
      <Pagination
        goodsPerPage={goodsPerPage}
        totalGoods={props.goods.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default GoodsList;
