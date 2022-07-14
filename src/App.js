import style from "./App.module.css";
import Header from "./Components/Header/Header";
import GoodsListContainer from "./Components/GoodsList/GoodsListContainer";
import FilterBarContainer from "./Components/FilterBar/FilterBarContainer";

const App = () => {
  return (
    <div className={style.App}>
      <Header title="WelbeX Test Task" />
      <FilterBarContainer />
      <GoodsListContainer />
    </div>
  );
};

export default App;
