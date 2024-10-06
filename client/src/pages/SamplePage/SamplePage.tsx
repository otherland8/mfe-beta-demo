import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "./constants";

export const SamplePage = () => {
	const navigate = useNavigate();

	const [firstImage] = images;

	const [active, setActive] = useState(firstImage);

	return (
		<div className="beta-grid beta-gap-4">
			<div>
				<img
					className="beta-cursor-pointer beta-h-auto beta-w-full beta-max-w-full beta-rounded-lg beta-object-cover beta-object-center md:beta-h-[480px]"
					src={active.imgelink}
					onClick={() => navigate(`/${active.id}`)}
					alt=""
				/>
			</div>
			<div className="beta-grid beta-grid-cols-5 beta-gap-4">
				{images.map((item, index) => (
					<div key={index}>
						<img
							onClick={() => setActive(item)}
							src={item.imgelink}
							className="beta-h-20 beta-max-w-full beta-cursor-pointer beta-rounded-lg beta-object-cover beta-object-center"
							alt="gallery-image"
						/>
					</div>
				))}
			</div>
		</div>
	);
};
