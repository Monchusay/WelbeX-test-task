import React from "react";
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
    { value: "Contains", label: "Содержит" },
    { value: "Equal", label: "Равно" },
  ];

  let newFilterElement = React.createRef();
  let onSettingFilteringValue = () => {
    let filterText = newFilterElement.current.value;
    props.setFilteringValue(filterText)
  };

  const onFilteringColumn = (value) => {
    props.setColumnFilter(value)
  }
  const onFilteringCondition = (value) => {
    props.setConditionFilter(value)
  }
  const onFiltering = () => {
    props.filterGoods()
  }
  return (
    <div className={style.FilterBar}>
      <div className={style.FiltersSection}>
        <Select
          className={style.Selectors}
          classNamePrefix="selectors"
          placeholder="Выбор колонки"
          options={optionsColumn}
          isSearchable={false}
          onChange={(type) => {onFilteringColumn(type.value)}}
        />
        <Select
          className={style.Selectors}
          placeholder="Выбор условия"
          classNamePrefix="selectors"
          options={optionsCondition}
          isSearchable={false}
          onChange={(type) => {onFilteringCondition(type.value)}}
        />
        <input onChange={onSettingFilteringValue} ref={newFilterElement} style={{ width: 80 + "px", height: 30 + "px" }} />
        <button onClick={onFiltering} className={style.SetFiltersButton}> Отфильтровать </button>
      </div>
    </div>
  );
};

export default FilterBar;
