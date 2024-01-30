'use client'
import ColorPicker from "./components/ColorPicker";
import '@/app/assets/css/main.css';

const Page = () => {
	let color: string = "#ff0000";
	function onColorChange(): void {
		console.log("The color from the ColorPicker component has changed.");
	}
	return (
		<ColorPicker color={color} onColorChange={onColorChange} defaultColors={["#ff0000", "#00ff00", "#0000ff"]}/>
	);
}

export default Page;