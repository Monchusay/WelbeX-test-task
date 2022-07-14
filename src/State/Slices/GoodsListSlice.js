import { createSlice } from "@reduxjs/toolkit";

const GoodsListSlice = createSlice({
  name: "goodsList",
  initialState: {
    allGoods: [
      {
        publishDate: "11.03",
        name: "Стул",
        amount: 32,
        distance: 3,
      },
      {
        publishDate: "13.03",
        name: "Стол",
        amount: 13,
        distance: 89,
      },
      {
        publishDate: "01.03",
        name: "Кровать",
        amount: 2,
        distance: 65,
      },
      {
        publishDate: "29.03",
        name: "Компьютер",
        amount: 3,
        distance: 111,
      },
      {
        publishDate: "05.05",
        name: "Шторы",
        amount: 55,
        distance: 24,
      },
      {
        publishDate: "08.09",
        name: "Стремянка",
        amount: 66,
        distance: 986,
      },
      {
        publishDate: "15.01",
        name: "Колонки",
        amount: 43,
        distance: 456,
      },
      {
        publishDate: "19.10",
        name: "Кружка",
        amount: 32,
        distance: 33,
      },
      {
        publishDate: "29.03",
        name: "Одеяло",
        amount: 78,
        distance: 23,
      },
      {
        publishDate: "29.03",
        name: "Подушка",
        amount: 56,
        distance: 90,
      },
      {
        publishDate: "05.05",
        name: "Пылесос",
        amount: 109,
        distance: 734,
      },
      {
        publishDate: "17.03",
        name: "Наушники",
        amount: 23,
        distance: 56,
      },
      {
        publishDate: "10.07",
        name: "Монитор",
        amount: 72,
        distance: 8,
      },
      {
        publishDate: "30.01",
        name: "Мышь",
        amount: 23,
        distance: 32,
      },
      {
        publishDate: "18.08",
        name: "Кот",
        amount: 66,
        distance: 5,
      },
      {
        publishDate: "09.09",
        name: "Переходник",
        amount: 955,
        distance: 68,
      },
      {
        publishDate: "05.05",
        name: "Зарядное устройство",
        amount: 234,
        distance: 45,
      },
      {
        publishDate: "13.03",
        name: "Желание работать",
        amount: 9000,
        distance: 5,
      },
      {
        publishDate: "19.03",
        name: "Ваза",
        amount: 2345,
        distance: 90,
      },
      {
        publishDate: "11.11",
        name: "Холодильник",
        amount: 44,
        distance: 101,
      },
      {
        publishDate: "13.12",
        name: "Конфеты",
        amount: 3,
        distance: 345,
      },
      {
        publishDate: "10.10",
        name: "Бутылка",
        amount: 1,
        distance: 22,
      },
      {
        publishDate: "14.04",
        name: "Контейнер",
        amount: 45,
        distance: 54,
      },
      {
        publishDate: "10.12",
        name: "Краска",
        amount: 1,
        distance: 234,
      },
      {
        publishDate: "08.09",
        name: "Кисть",
        amount: 89,
        distance: 72,
      },
      {
        publishDate: "12.02",
        name: "Одежда",
        amount: 33,
        distance: 13,
      },
      {
        publishDate: "08.09",
        name: "Часы",
        amount: 89,
        distance: 364,
      },
    ],
    filtratedGoods: [
      {
        publishDate: "11.03",
        name: "Стул",
        amount: 32,
        distance: 3,
      },
      {
        publishDate: "13.03",
        name: "Стол",
        amount: 13,
        distance: 89,
      },
      {
        publishDate: "01.03",
        name: "Кровать",
        amount: 2,
        distance: 65,
      },
      {
        publishDate: "29.03",
        name: "Компьютер",
        amount: 3,
        distance: 111,
      },
      {
        publishDate: "05.05",
        name: "Шторы",
        amount: 55,
        distance: 24,
      },
      {
        publishDate: "08.09",
        name: "Стремянка",
        amount: 66,
        distance: 986,
      },
      {
        publishDate: "15.01",
        name: "Колонки",
        amount: 43,
        distance: 456,
      },
      {
        publishDate: "19.10",
        name: "Кружка",
        amount: 32,
        distance: 33,
      },
      {
        publishDate: "29.03",
        name: "Одеяло",
        amount: 78,
        distance: 23,
      },
      {
        publishDate: "29.03",
        name: "Подушка",
        amount: 56,
        distance: 90,
      },
      {
        publishDate: "05.05",
        name: "Пылесос",
        amount: 109,
        distance: 734,
      },
      {
        publishDate: "17.03",
        name: "Наушники",
        amount: 23,
        distance: 56,
      },
      {
        publishDate: "10.07",
        name: "Монитор",
        amount: 72,
        distance: 8,
      },
      {
        publishDate: "30.01",
        name: "Мышь",
        amount: 23,
        distance: 32,
      },
      {
        publishDate: "18.08",
        name: "Кот",
        amount: 66,
        distance: 5,
      },
      {
        publishDate: "09.09",
        name: "Переходник",
        amount: 955,
        distance: 68,
      },
      {
        publishDate: "05.05",
        name: "Зарядное устройство",
        amount: 234,
        distance: 45,
      },
      {
        publishDate: "13.03",
        name: "Желание работать",
        amount: 9000,
        distance: 5,
      },
      {
        publishDate: "19.03",
        name: "Ваза",
        amount: 2345,
        distance: 90,
      },
      {
        publishDate: "11.11",
        name: "Холодильник",
        amount: 44,
        distance: 101,
      },
      {
        publishDate: "13.12",
        name: "Конфеты",
        amount: 3,
        distance: 345,
      },
      {
        publishDate: "10.10",
        name: "Бутылка",
        amount: 1,
        distance: 22,
      },
      {
        publishDate: "14.04",
        name: "Контейнер",
        amount: 45,
        distance: 54,
      },
      {
        publishDate: "10.12",
        name: "Краска",
        amount: 1,
        distance: 234,
      },
      {
        publishDate: "08.09",
        name: "Кисть",
        amount: 89,
        distance: 72,
      },
      {
        publishDate: "12.02",
        name: "Одежда",
        amount: 33,
        distance: 13,
      },
      {
        publishDate: "08.09",
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
      let mapping = {
        Date: {
          filteredColumn: "publishDate",
        },
        Name: {
          filteredColumn: "name",
        },
        Amount: {
          filteredColumn: "amount",
        },
        Distance: {
          filteredColumn: "distance",
        },
      };
      return {
        ...state,
        filteredColumn: mapping[action.payload].filteredColumn,
      };
    },
    setConditionFilter(state, action) {
      let mapping = {
        More: {
          filteredCondition: ">=",
        },
        Less: {
          filteredCondition: "<=",
        },
        Contains: {
          filteredCondition: ".contains",
        },
        Equal: {
          filteredCondition: "===",
        },
      };
      return {
        ...state,
        filteredCondition: mapping[action.payload].filteredCondition,
      };
    },
    setFilteringValue(state, action) {
      return { ...state, filteredValue: action.payload};
    },
    filterGoods(state) {
      let allFilteredGoods = state.allGoods.filter(
      )
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
} = GoodsListSlice.actions;
