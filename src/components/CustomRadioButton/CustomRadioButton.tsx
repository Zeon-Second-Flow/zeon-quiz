import './index.scss';

interface IProps {
	value: string;
	name: string;
	setRightAns: (e: string) => void;
	rightAns: string;
}

export const CustomRadioButton = ({
	value,
	name,
	setRightAns,
	rightAns,
}: IProps) => {
	return (
		<ul className={'product-color'}>
			<li>
				<label style={{ backgroundColor: 'white' }}>
					<input
						checked={rightAns === value}
						onChange={() => setRightAns(value)}
						type="radio"
						name={name}
						value={value}
					/>
					<label htmlFor="white" style={{ backgroundColor: 'white' }}></label>
				</label>
			</li>
		</ul>
	);
};
