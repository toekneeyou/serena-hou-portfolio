import { classnames } from "../../lib/helpers/helpers";
import { aboutContentWidthClassName } from "./AboutView";

const toolsRowOne = [
  { src: "src/assets/figma-logo.png", alt: "Figma logo" },
  { src: "src/assets/proto-io-logo.png", alt: "Proto.io logo" },
  { src: "src/assets/vs-code-logo.png", alt: "VS Code logo" },
  { src: "src/assets/notion-logo.png", alt: "Notion logo" },
  { src: "src/assets/slack-logo.png", alt: "Slack logo" },
  { src: "src/assets/asana-logo.png", alt: "Asana logo" },
];

const toolsRowTwo = [
  { src: "src/assets/premiere-logo.png", alt: "Premiere logo" },
  { src: "src/assets/photoshop-logo.png", alt: "Photoshop logo" },
  { src: "src/assets/illustrator-logo.png", alt: "Illustrator logo" },
  { src: "src/assets/after-effects-logo.png", alt: "After Effects logo" },
  { src: "src/assets/lightroom-logo.png", alt: "Lightroom logo" },
  { src: "src/assets/idk-logo.png", alt: "Idk logo" },
];

const ToolsIUse = () => {
  return (
    <div className="w-full centered-col relative py-44">
      <ToolsIUseTitle />
      <ToolsIUseLists />
    </div>
  );
};

const ToolsIUseTitle = () => {
  return (
    <div className="h-full flex justify-end items-start w-24 transition-transform absolute left-0 top-32">
      <h2 className="text-nowrap inline-block -rotate-90 origin-bottom-right uppercase font-oswald text-8xl -translate-y-16">
        Tools
      </h2>
    </div>
  );
};

const ToolsIUseLists = () => {
  return (
    <div className={classnames(aboutContentWidthClassName)}>
      <ul className="w-full flex items-center justify-between mb-14">
        {toolsRowOne.map((tool) => (
          <li key={tool.src}>
            <img {...tool} />
          </li>
        ))}
      </ul>
      <ul className="w-full flex items-center justify-between">
        {toolsRowTwo.map((tool) => (
          <li key={tool.src}>
            <img {...tool} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolsIUse;
