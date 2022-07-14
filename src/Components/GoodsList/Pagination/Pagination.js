import React from 'react';
import style from "./Pagination.module.css"

const Pagination = ({goodsPerPage, totalGoods, paginate}) => {

    const pageNumbers = [];
    for (let i=1 ; i <= Math.ceil(totalGoods / goodsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className={style.Pagination}>
            {pageNumbers.map((number) => (
                <span onClick={()=> paginate(number)} key={number} className={style.PageNumber}>
                        {number}
                </span>
                ))}
        </div>
    );
};

export default Pagination;