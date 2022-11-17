import { ChangeEvent, ChangeEventHandler, useState } from 'react';

import no_image from '@/assets/no-image-icon-6.webp';

import style from './CreateTestPreviewComponent.module.scss';

interface IProps {
	setImg: (e?: File) => void;
	img?: File;
	handleDataChange: (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => void;
	title: string;
	setToggleForm: (e: boolean) => void;
	inpImgRef: any;
	testError: any;
	description: string;
}

export const CreateTestPreviewComponent = ({
	testError,
	description,
	handleDataChange,
	inpImgRef,
	img,
	setImg,
	title,
	setToggleForm,
}: IProps) => {
	const [err, setErr] = useState(false);
	const [isImageOpened, setIsImageOpened] = useState(false);

	const handleClick = () => {
		if (title.length <= 2) {
			setErr(true);
		} else setToggleForm(false);
	};

	return (
		<div className={style.previewBox}>
			<div className={style.previewContentBox}>
				<h3>Enter a title and a description for your Quiz.</h3>
				<p>Title:</p>
				<div className={style.previewTitleInp}>
					<span className={style.err_msg}>{testError}</span>
					<span
						className={style.titleCount}
						style={title.length === 0 ? { color: 'white' } : {}}
					>
						{100 - title.length}
					</span>
					<input
						style={err ? { border: '1px solid red' } : {}}
						maxLength={100}
						onChange={handleDataChange}
						required={true}
						name="title"
						value={title}
						placeholder="Name of quiz"
						type="text"
					/>
				</div>
				<span>
					A descriptive title will give players an indication of what the Quiz
					is about.
				</span>
				<img
					src={!img?.name?.length ? no_image : URL?.createObjectURL(img)}
					alt=""
				/>

				<input
					onChange={(e) => {
						setImg(e.target.files?.[0]);
					}}
					className={style.customFileInput}
					ref={inpImgRef}
					type="file"
				/>

				<div className={style.addImageBox}>
					<input
						onChange={(e) => {
							setImg(e.target.files?.[0]);
						}}
						className={style.customFileInput}
						ref={inpImgRef}
						type="file"
					/>
					<div
						onClick={() => setIsImageOpened(true)}
						className={img?.name?.length ? style.tapToViewImage : style.noImage}
					>
						{!img?.name?.length ? 'no_image' : 'added: tap to view'}
					</div>
				</div>

				<p>Description:</p>
				<textarea
					onChange={handleDataChange}
					name="description"
					value={description}
					className={style.previewDescInp}
				></textarea>

				<button onClick={() => handleClick()}>Continue</button>
			</div>
		</div>
	);
};
