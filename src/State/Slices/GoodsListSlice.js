import { createSlice } from "@reduxjs/toolkit";
import {
  filterAmount,
  filterDate,
  filterDistance,
  filterName,
} from "./DateHelper";

const GoodsListSlice = createSlice({
  name: "goodsList",
  initialState: {
    allGoods: [
      {
        publishDate: "03.11.2022",
        name: "Стул",
        amount: 32,
        distance: 3,
      },
      {
        publishDate: "03.11.2022",
        name: "Стол",
        amount: 13,
        distance: 89,
      },
      {
        publishDate: "01.03.2022",
        name: "Кровать",
        amount: 2,
        distance: 65,
      },
      {
        publishDate: "11.03.2022",
        name: "Компьютер",
        amount: 3,
        distance: 111,
      },
      {
        publishDate: "05.05.2022",
        name: "Шторы",
        amount: 55,
        distance: 24,
      },
      {
        publishDate: "08.09.2022",
        name: "Стремянка",
        amount: 66,
        distance: 986,
      },
      {
        publishDate: "04.01.2022",
        name: "Колонки",
        amount: 43,
        distance: 456,
      },
      {
        publishDate: "03.10.2022",
        name: "Кружка",
        amount: 32,
        distance: 33,
      },
      {
        publishDate: "09.03.2022",
        name: "Одеяло",
        amount: 78,
        distance: 23,
      },
      {
        publishDate: "08.03.2022",
        name: "Подушка",
        amount: 56,
        distance: 90,
      },
      {
        publishDate: "05.05.2022",
        name: "Пылесос",
        amount: 109,
        distance: 734,
      },
      {
        publishDate: "11.03.2022",
        name: "Наушники",
        amount: 23,
        distance: 56,
      },
      {
        publishDate: "10.07.2022",
        name: "Монитор",
        amount: 72,
        distance: 8,
      },
      {
        publishDate: "05.01.2022",
        name: "Мышь",
        amount: 23,
        distance: 32,
      },
      {
        publishDate: "10.08.2022",
        name: "Кот",
        amount: 66,
        distance: 5,
      },
      {
        publishDate: "09.09.2022",
        name: "Переходник",
        amount: 955,
        distance: 68,
      },
      {
        publishDate: "05.05.2022",
        name: "Зарядное устройство",
        amount: 234,
        distance: 45,
      },
      {
        publishDate: "12.03.2022",
        name: "Желание работать",
        amount: 9000,
        distance: 5,
      },
      {
        publishDate: "09.03.2022",
        name: "Ваза",
        amount: 2345,
        distance: 90,
      },
      {
        publishDate: "10.11.2022",
        name: "Холодильник",
        amount: 44,
        distance: 101,
      },
      {
        publishDate: "11.12.2022",
        name: "Конфеты",
        amount: 3,
        distance: 345,
      },
      {
        publishDate: "10.10.2022",
        name: "Бутылка",
        amount: 1,
        distance: 22,
      },
      {
        publishDate: "11.04.2022",
        name: "Контейнер",
        amount: 45,
        distance: 54,
      },
      {
        publishDate: "10.12.2022",
        name: "Краска",
        amount: 1,
        distance: 234,
      },
      {
        publishDate: "08.09.2022",
        name: "Кисть",
        amount: 89,
        distance: 72,
      },
      {
        publishDate: "12.02.2022",
        name: "Одежда",
        amount: 33,
        distance: 13,
      },
      {
        publishDate: "08.09.2022",
        name: "Часы",
        amount: 89,
        distance: 364,
      },
    ],
    filtratedGoods: [
      {
        publishDate: "03.11.2022",
        name: "Стул",
        amount: 32,
        distance: 3,
      },
      {
        publishDate: "03.11.2022",
        name: "Стол",
        amount: 13,
        distance: 89,
      },
      {
        publishDate: "01.03.2022",
        name: "Кровать",
        amount: 2,
        distance: 65,
      },
      {
        publishDate: "11.03.2022",
        name: "Компьютер",
        amount: 3,
        distance: 111,
      },
      {
        publishDate: "05.05.2022",
        name: "Шторы",
        amount: 55,
        distance: 24,
      },
      {
        publishDate: "08.09.2022",
        name: "Стремянка",
        amount: 66,
        distance: 986,
      },
      {
        publishDate: "04.01.2022",
        name: "Колонки",
        amount: 43,
        distance: 456,
      },
      {
        publishDate: "03.10.2022",
        name: "Кружка",
        amount: 32,
        distance: 33,
      },
      {
        publishDate: "09.03.2022",
        name: "Одеяло",
        amount: 78,
        distance: 23,
      },
      {
        publishDate: "08.03.2022",
        name: "Подушка",
        amount: 56,
        distance: 90,
      },
      {
        publishDate: "05.05.2022",
        name: "Пылесос",
        amount: 109,
        distance: 734,
      },
      {
        publishDate: "11.03.2022",
        name: "Наушники",
        amount: 23,
        distance: 56,
      },
      {
        publishDate: "10.07.2022",
        name: "Монитор",
        amount: 72,
        distance: 8,
      },
      {
        publishDate: "05.01.2022",
        name: "Мышь",
        amount: 23,
        distance: 32,
      },
      {
        publishDate: "10.08.2022",
        name: "Кот",
        amount: 66,
        distance: 5,
      },
      {
        publishDate: "09.09.2022",
        name: "Переходник",
        amount: 955,
        distance: 68,
      },
      {
        publishDate: "05.05.2022",
        name: "Зарядное устройство",
        amount: 234,
        distance: 45,
      },
      {
        publishDate: "12.03.2022",
        name: "Желание работать",
        amount: 9000,
        distance: 5,
      },
      {
        publishDate: "09.03.2022",
        name: "Ваза",
        amount: 2345,
        distance: 90,
      },
      {
        publishDate: "10.11.2022",
        name: "Холодильник",
        amount: 44,
        distance: 101,
      },
      {
        publishDate: "11.12.2022",
        name: "Конфеты",
        amount: 3,
        distance: 345,
      },
      {
        publishDate: "10.10.2022",
        name: "Бутылка",
        amount: 1,
        distance: 22,
      },
      {
        publishDate: "11.04.2022",
        name: "Контейнер",
        amount: 45,
        distance: 54,
      },
      {
        publishDate: "10.12.2022",
        name: "Краска",
        amount: 1,
        distance: 234,
      },
      {
        publishDate: "08.09.2022",
        name: "Кисть",
        amount: 89,
        distance: 72,
      },
      {
        publishDate: "12.02.2022",
        name: "Одежда",
        amount: 33,
        distance: 13,
      },
      {
        publishDate: "08.09.2022",
        name: "Часы",
        amount: 89,
        distance: 364,
      },
    ],
    filteredColumn: "",
    filteredCondition: "",
    filteredValue: "",
  },
  reducers: {
    setColumnFilter(state, action) {
      return {
        ...state,
        filteredColumn: action.payload,
      };
    },
    setConditionFilter(state, action) {
      let mapping = {
        More: ">=",
        Less: "<=",
        Includes: ".includes",
        Equal: "===",
      };
      return {
        ...state,
        filteredCondition: mapping[action.payload],
      };
    },
    setFilteringValue(state, action) {
      return { ...state, filteredValue: action.payload };
    },
    filterGoods(state) {
      let mapping = {
        Date: filterDate,
        Name: filterName,
        Amount: filterAmount,
        Distance: filterDistance,
      };
      if (!mapping[state.filteredColumn]) return state;
      return {
        ...state,
        filtratedGoods: mapping[state.filteredColumn](
          state.allGoods,
          state.filteredValue,
          state.filteredCondition
        ),
      };
    },
    resetFilters(state) {
      return {
        ...state,
        filtratedGoods: state.allGoods,
        filteredColumn: "",
        filteredCondition: "",
        filteredValue: "",
      };
    },
    sortByAmount(state) {
      state.filtratedGoods.sort((a, b) => a.amount - b.amount);
    },
    sortByDistance(state) {
      state.filtratedGoods.sort((a, b) => a.distance - b.distance);
    },
    sortByName(state) {
      const compare = (a, b) => {
        let i = 0;
        while (a.charCodeAt(i) === b.charCodeAt(i)) {
          i++;
        }
        if (a.charCodeAt(i) < b.charCodeAt(i)) {
          return -1;
        }
        if (a.charCodeAt(i) > b.charCodeAt(i)) {
          return 1;
        }
        return 0;
      };
      state.filtratedGoods.sort((goodsLeft, goodsRight) =>
        compare(goodsLeft.name, goodsRight.name)
      );
    },
  },
});

export default GoodsListSlice.reducer;
export const {
  setColumnFilter,
  setConditionFilter,
  sortByAmount,
  sortByDistance,
  sortByName,
  setFilteringValue,
  filterGoods,
  resetFilters,
} = GoodsListSlice.actions;
