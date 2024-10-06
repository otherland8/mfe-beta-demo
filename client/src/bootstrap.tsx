import "~/css/index.scss";

// eslint-disable-next-line react/no-deprecated
import { render } from "react-dom";

import { initializeTranslationService } from "./utilities/react-i18next";
import SampleModule from "~/modules/SampleModule/SampleModule";

initializeTranslationService();

render(
	<SampleModule sampleString="some-string" basePath="/" />,
	document.getElementById("app") as HTMLElement,
);
