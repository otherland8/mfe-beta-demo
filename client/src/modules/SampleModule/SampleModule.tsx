import { initializeTranslationService } from "~/utilities/react-i18next";
import { SampleModuleProps } from "~/modules/SampleModule/types";
import { SamplePage } from "~/pages/SamplePage/SamplePage";

import "~/css/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { FullImage } from "~/pages/FullImage/FullImage";

initializeTranslationService();

const SampleModule = ({ sampleString, basePath }: SampleModuleProps) => {
	const router = createBrowserRouter(
		[
			{
				path: "/",
				element: (
					<div className="beta-p-4 beta-flex beta-flex-col beta-gap-4 beta-text-lg">
						<div>{sampleString}</div>
						<SamplePage />
					</div>
				),
			},
			{
				path: "/:id",
				element: <FullImage />,
			},
		],
		{ basename: basePath },
	);

	return (
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	);
};

export default SampleModule;
