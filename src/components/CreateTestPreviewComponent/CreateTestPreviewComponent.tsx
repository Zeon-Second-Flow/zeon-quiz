import React, {useState} from "react";
import style from "./CreateTestPreviewComponent.module.scss";
import no_image from "@/assets/no-image-icon-6.webp";


interface IProps {
    setImg: (e?: File) => void;
    img?: File;
    setTitle: (e: string) => void;
    setDescription: (e: string) => void;
    title: string;
    setToggleForm: (e: boolean) => void;
}


export const CreateTestPreviewComponent = ({setTitle, setDescription, img, setImg, title, setToggleForm}: IProps) => {

    const [err, setErr] = useState(false);
    const handleClick = () => {
        if (title.length <= 5) {
            setErr(true);
        } else (
            setToggleForm(false)
        );
    };

    console.log(img);
    return (
        <div className={style.previewBox}>
            <div className={style.previewContentBox}>
                <h3>
                    Enter a title and a description for your Quiz.
                </h3>
                <p>Title:</p>
                <div className={style.previewTitleInp}>
                    <input style={err ? {border: "1px solid red"} : {}} maxLength={100} onChange={(e) => setTitle(e.target.value)}
                        required={true} placeholder="Name of quiz" type="text"/>
                    <span style={title.length === 0 ? {color: "white"} : {}}>{100 - title.length}</span>
                </div>
                <span>A descriptive title will give players an indication of what the Quiz is about.</span>
                <img src={!img?.name?.length ? no_image : URL?.createObjectURL(img)} alt=""/>

                <input onChange={e => {
                    setImg(e.target.files?.[0]);

                }} className={style.customFileInput} type="file"/>

                <p>Description:</p>
                <textarea onChange={(e) => setDescription(e.target.value)}
                    className={style.previewDescInp}>
                </textarea>

                <button onClick={() => handleClick()}>Continue</button>

            </div>
        </div>
    );
};

