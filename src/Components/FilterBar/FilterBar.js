import React, { useState } from "react";
import style from "./FilterBar.module.css";
import Select from "react-select";

const FilterBar = (props) => {
  const optionsColumn = [
    { value: "Date", label: "Дата" },
    { value: "Name", label: "Название" },
    { value: "Amount", label: "Количество" },
    { value: "Distance", label: "Расстояние" },
  ];
  const optionsCondition = [
    { value: "More", label: "Больше" },
    { value: "Less", label: "Меньше" },
    { value: "Includes", label: "Содержит" },
    { value: "Equal", label: "Равно" },
  ];

  const [column, setColumn] = useState("");
  const [condition, setCondition] = useState("");
  const [value, setValue] = useState("");

  let onSettingFilteringValue = (e) => {
    let filterText = e.target.value;
    setValue(filterText);
    props.setFilteringValue(filterText);
  };

  const onFilteringColumn = (type) => {
    props.setColumnFilter(type.value);
    setColumn(type);
  };
  const onFilteringCondition = (type) => {
    props.setConditionFilter(type.value);
    setCondition(type);
  };
  const onFiltering = () => {
    props.filterGoods();
  };
  const onResetFilters = () => {
    props.resetFilters();
    setColumn("");
    setCondition("");
    setValue("");
  };
  return (
    <div className={style.FilterBar}>
      <div className={style.FiltersSection}>
        <Select
          value={column}
          className={style.Selectors}
          classNamePrefix="selectors"
          placeholder="Выбор колонки"
          options={optionsColumn}
          isSearchable={false}
          onChange={onFilteringColumn}
        />
        <Select
          value={condition}
          className={style.Selectors}
          placeholder="Выбор условия"
          classNamePrefix="selectors"
          options={optionsCondition}
          isSearchable={false}
          onChange={onFilteringCondition}
        />
        <input
          placeholder={column.value === "Date" && "мм.дд.гггг"}
          value={value}
          onChange={onSettingFilteringValue}
          style={{ width: 80 + "px", height: 30 + "px" }}
        />
        <button
          onClick={onFiltering}
          className={style.SetFiltersButton}
          style={{ width: 140 + "px" }}
        >
          {" "}
          Отфильтровать{" "}
        </button>
      </div>
      <button
        onClick={onResetFilters}
        className={style.SetFiltersButton}
        style={{ width: 200 + "px" }}
      >
        Сбросить фильтры
      </button>
    </div>
  );
};

export default FilterBar;
