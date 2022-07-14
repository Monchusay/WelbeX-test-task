import React, { useState } from "react";
import style from "./SortBar.module.css";
import { IoIosArrowDown } from "react-icons/io";

const SortBar = (props) => {
  const [isNameSorting, setIsNameSorting] = useState(false);
  const [isAmountSorting, setIsAmountSorting] = useState(false);
  const [isDistanceSorting, setIsDistanceSorting] = useState(false);

  const onNameSorting = () => {
    props.sortByName();
    setIsNameSorting(!isNameSorting);
    setIsAmountSorting(false);
    setIsDistanceSorting(false);
  };
  const onAmountSorting = () => {
    props.sortByAmount();
    setIsAmountSorting(!isAmountSorting);
    setIsNameSorting(false);
    setIsDistanceSorting(false);
  };
  const onDistanceSorting = () => {
    props.sortByDistance();
    setIsDistanceSorting(!isDistanceSorting);
    setIsNameSorting(false);
    setIsAmountSorting(false);
  };
  return (
    <div className={style.SortBar}>
      <span className={style.SortBarItem}>Дата</span>
      <span className={style.SortBarItem} onClick={onNameSorting}>
        Название{" "}
        {isNameSorting && (
          <IoIosArrowDown
            style={{ marginTop: 3 + "px", marginLeft: 5 + "px" }}
          />
        )}
      </span>
      <span className={style.SortBarItem} onClick={onAmountSorting}>
        Количество{" "}
        {isAmountSorting && (
          <IoIosArrowDown
            style={{ marginTop: 3 + "px", marginLeft: 5 + "px" }}
          />
        )}
      </span>
      <span className={style.SortBarItem} onClick={onDistanceSorting}>
        Расстояние{" "}
        {isDistanceSorting && (
          <IoIosArrowDown
            style={{ marginTop: 3 + "px", marginLeft: 5 + "px" }}
          />
        )}
      </span>
    </div>
  );
};

export default SortBar;
