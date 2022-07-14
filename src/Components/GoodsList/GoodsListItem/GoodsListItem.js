import React from "react";
import style from "./GoodsListItem.module.css";

const GoodsListItem = (props) => {

  return (
    <div className={style.GoodsListItem}>
      <span className={style.Item}>{props.publishDate}</span>
      <span className={style.Item}>{props.name}</span>
      <span className={style.Item}>{props.amount} шт.</span>
      <span className={style.Item}>{props.distance} {props.distance >= 4 ? 'метров' : 'метра'}</span>
    </div>
  );
};

export default GoodsListItem;
