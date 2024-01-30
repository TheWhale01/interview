'use client'
import '@/app/assets/css/Color.css';

interface ColorProps {
	color: string;
}

const Color = ({color}: ColorProps) => {
	return (
		<div className="color" style={{backgroundColor: color}}></div>
	);
}

export default Color;