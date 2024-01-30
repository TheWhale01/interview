'use client'
import { useState } from 'react';
import Color from './Color';
import '@/app/assets/css/ColorPicker.css';

interface ColorPickerProps {
	color: string;
	onColorChange: any;
	defaultColors: string[];
}

const List = ({colors, setColor}: any) => {
	function test(): void {
		console.log("bonsoir !");
	}
	const colorItems = colors.map(color => 
		<li key={color}>
			<button className='no_style_btn' onClick={() => setColor(color)}>
				<Color color={color} />
			</button>
		</li>
	);
	return (
		<ul>{colorItems}</ul>
	);
}

const ColorPicker = ({ color, onColorChange, defaultColors = [color] }: ColorPickerProps) => {
	const [newColor, setNewColor] = useState(color);
	const [colors, setColors] = useState(defaultColors);
	function checkColorSyntax(color_test: string): boolean {
		if (color_test.length != 7)
			return false;
		if (color_test.at(0) != '#')
			return false;
		for (let i = 1; i < color_test.length; i++) {
			let char: string | undefined = color_test.at(i);
			if (!char)
				return false;
			if (!((char >= '0' && char <= '9')
				|| (char >= 'a' && char <= 'f')))
				return false;
		}
		return true;
	}


	function addColor(): void {
		// Add parsing to verify the color syntax
		if (!checkColorSyntax(newColor)) {
			console.log("Please enter a valid hex color.");
			return ;
		}
		if (colors.includes(newColor)) {
			console.log('Color already in list');
			return ;
		}
		setColors(colors.concat([newColor]));
	}

	return (
		<div className='container'>
			<div className='show_container'>
				<p>Preview</p>
				<div className='preview_container' style={{ backgroundColor: newColor }} />
				<p>Available colors</p>
				<div className='available_colors'>
					<List colors={colors} setColor={setNewColor}/>
				</div>
			</div>
			<input value={newColor} onChange={event => setNewColor(event?.target.value.toLowerCase())} />
			<button onClick={addColor}>add color</button>
		</div>
	);
};

export default ColorPicker;