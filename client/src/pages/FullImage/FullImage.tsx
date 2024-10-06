import { useParams } from "react-router-dom";
import { images } from "../SamplePage/constants";

export const FullImage = () => {
	const { id = "" } = useParams();

	const image = images.find(({ id: imageId }) => +id === imageId);

	return (
		<div className="beta-px-4">
			<img
				className="beta-h-96 beta-w-full beta-rounded-lg beta-object-cover beta-object-center beta-shadow-xl beta-shadow-blue-gray-900/50"
				src={image?.imgelink}
				alt="nature image"
			/>
		</div>
	);
};
