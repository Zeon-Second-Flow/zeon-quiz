import React, {useEffect, useState} from "react";
import axios from "axios";
import "./Leaderboard.scss";


interface IGroups {
    name: string;
    users: number;
    score: number;
    tests: number;
    [key: string]: number | string;
}


export const GroupLeaderboardPage = () => {
    const [groups, setGroups] = useState<IGroups[]>([]);
    const [sortBy, setSortBy] = useState<string | number>("");
    useEffect(() => {
        axios("https://safe-atoll-40972.herokuapp.com/group/?limit=10")
            .then(({data}) => setGroups(data.results));

    }, []);

    const hendleSort = (sort:string) => {
        setSortBy(sort);
        setGroups(groups.sort((a, b) => b[sort] - a[sort]));
    };

    return (
        <section className="leaderboardsBox">
            <div id="leaderboards" className="container">
                <div className="options">
                    <div className="sort">
                        <h2>Sort By</h2>
                        <form className="tabContents">
                            <li className="tab bedwars active">
                                <input name="sort" id="q" type="radio" value="Games Played" defaultChecked={true}/>
                                <label onClick={() => hendleSort("score")} htmlFor="q">Points</label>

                                <input name="sort" id="w" type="radio" value="Games Played"/>
                                <label onClick={() => hendleSort("users")} htmlFor="w">Users</label>

                                <input name="sort" id="e" type="radio" value="Games Played"/>
                                <label onClick={() => hendleSort("tests")} htmlFor="e">Tests</label>
                            </li>
                        </form>
                    </div>
                </div>
                <ul className="toplist">
                    {
                        groups.map((it, idx) => {
                            return (
                                <li key={it.name} data-rank={idx + 1}>
                                    <div className="thumb">
                                        <span className="img" data-name={it.name}> </span>
                                        <span className="name">{it.name} </span>
                                        <span className="stat"><b>{it[sortBy]}</b> {sortBy} </span>
                                    </div>

                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
};

