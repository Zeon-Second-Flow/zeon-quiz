import React, {useState} from "react";
import styles from "./Search.module.scss";
import {ReactComponent as CloseIcon} from "@/assets/close.svg";
import {ReactComponent as SearchIcon} from "@/assets/searchIcon.svg";
import {SearchCard} from "@/components/Search/SearchCard";
import {useNavigate} from "react-router-dom";
import {useDebounce} from "@/hooks";
import {useGetTestsByNameQuery} from "@/store/search/search.api";
import {IITem} from "@/models/models";


export const Search = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [value, setValue] = useState("");
    const debounced = useDebounce(value);
    const [showInput, setShowInput] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const {data} = useGetTestsByNameQuery(debounced, {
        skip: debounced.length < 2
    });

    const onBlur = () => {
        setTimeout(() => setShow(false), 200);
    };
    const handleNavigate = () => {
        if (value) {
            setValue("");
            navigate(`/search-page/${value}`);
            setShow(false);
            setShowInput(false);
        }
    };

    const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.value) {
            const searchText = event.currentTarget.value;
            setValue(searchText);
            setShow(true);
        } else {
            setShow(false);
            setValue("");
        }
    };
    const inputHandler = () => {
        if (searchValue !== "") {
            setShow(true);
        }
    };
    const enterHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            handleNavigate();
        }
    };
    const clearInput = () => {
        setSearchValue("");
    };
    const openInput = () => {
        setShowInput(true);
        document.body.style.overflow = "hidden";
    };
    const closeInput = () => {
        document.body.style.overflow = "auto";
        setShowInput(false);
    };
    return (
        <div className={styles.searchOutter}>
            <div className={styles.search}>
                <div className={styles.searchInputs}>
                    <input
                        value={value}
                        onBlur={onBlur}
                        onKeyDown={enterHandler}
                        onClick={inputHandler}
                        onChange={handleSearch}
                        placeholder="Search tests..."
                        type="text"
                    />
                    <div className={styles.searchIcon}>
                        <SearchIcon
                            className={styles.searchIcon}
                            onClick={handleNavigate}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.smallSearch}>
                {showInput ? (
                    <div onClick={closeInput}>
                        <CloseIcon
                            // onClick={() => data?.results = }
                            className={styles.searchIcon}
                        />
                    </div>
                ) : (
                    <div onClick={openInput}>
                        <SearchIcon
                            className={styles.searchIcon}/>
                    </div>
                )}
                {showInput ? (
                    <div className={styles.smallSearchOutter}>
                        <div className={styles.smallSearchInputs}>
                            <input
                                onBlur={onBlur}
                                onKeyDown={enterHandler}
                                onClick={inputHandler}
                                onChange={handleSearch}
                                placeholder="Search tests..."
                                type="text"
                            />
                            <div className={styles.smallSearchIcon}>
                                <SearchIcon onClick={handleNavigate}/>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            {data && data?.results?.length != 0 && show && (
                <div className={styles.dataResultOutter}>
                    <div className={styles.dataResult}>
                        {data.results && data?.results.map((item: IITem, index: number) => (
                            <SearchCard
                                value={item}
                                key={index}
                                clearInput={clearInput}
                                setShowInput={setShowInput}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};