import { Button } from '@chakra-ui/react';

interface ButtonProps {
	text: string;
	color: string;
}

export default function ButtonElement(props: ButtonProps) {
	const { text, color } = props;

	return (
		<Button
			variant='solid'
			backgroundColor={color}
			px='19px'
			py='6px'
			color='#fff'
			fontSize='16px'
			width='130px'
			height='auto'
			borderRadius='6px'
		>
			{text}
		</Button>
	);
}
