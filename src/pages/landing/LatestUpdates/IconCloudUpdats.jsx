import { IconCloud } from "../../../components/IconCloud.tsx";

const slugs = [
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "vercel",
  "github",
  "visualstudiocode",
  "figma",
];

const IconCloudUpdates = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} height={400} width={400} imageSize={60} />
    </div>
  );
};

export default IconCloudUpdates;
