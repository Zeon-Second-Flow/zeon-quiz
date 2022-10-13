import React from "react";
import {useParams} from "react-router-dom";
import {useGetQuestionsQuery} from "@/store/search/search.api";


export const DetailPage = () => {
    const {name} = useParams();
    // const [test, setTest] = useState("");
    const {data} = useGetQuestionsQuery(name ?? "");


    console.log("name:", name);

    console.log(data);
    return (
        <div>
            {
                data?.map(item => {
                    return (<div key={item.id}>
                        <p>{item.question}</p>
                    </div>);
                })
            }
        </div>
    );
};