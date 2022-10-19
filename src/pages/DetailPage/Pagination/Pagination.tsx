import React from "react";
import ReactPaginate from "react-paginate";
import styles from "@/pages/DetailPage/DetailPage.module.scss";
import {ReactComponent as Right} from "@/assets/arrow-right.svg";
import {ReactComponent as Left} from "@/assets/arrow-left.svg";



type handleClickType = {
    selected: number;
}

interface IProps {
    setPage: (value: number) => void;
    page?: number;
    countItems: number;
}

export const Pagination = ({setPage, page, countItems}: IProps) => {
    const handlePageClick = ({selected}: handleClickType) => {
        window.scroll(0, 0);
        setPage(selected + 1);
    };

    return (
        <div className={styles.pagination}>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<Right/>}
                previousLinkClassName={styles.prev}
                nextLinkClassName={styles.next}
                containerClassName={styles.paginationInner}
                onPageChange={handlePageClick}
                pageRangeDisplayed={countItems}
                activeClassName={styles.active}
                pageClassName={styles.count}
                pageCount={countItems}
                previousLabel={<Left/>}
                disabledClassName={styles.disabled}
            />
        </div>
    );
};