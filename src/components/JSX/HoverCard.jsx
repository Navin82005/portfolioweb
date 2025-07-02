export const HoverCardColorCool = ({ children, className, ...props }) => {
  return (
    <div
      className={`group relative flex items-center justify-center overflow-hidden rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105 ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 text-center text-gray-800">{children}</div>
    </div>
  );
};
HoverCardColorCool.displayName = "HoverCard";

export const HoverCardWithImage = ({
  imageSrc,
  alt,
  text,
  revealSection,
  className,
  isSkewed = false,
  ...props
}) => {
  return (
    <div
      className={`group relative flex items-center justify-center overflow-hidden rounded-lg bg-white p-0 shadow-lg transition-transform duration-300 ${className}`}
      {...props}
    >
      {/* Background Image */}
      <img src={imageSrc} alt={alt} className="w-full h-full object-cover" />

      {/* Bottom Text Overlay (visible by default, hidden on hover) */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3 transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-10">
        <span className="text-white text-base">{text}</span>
      </div>

      {/* Reveal Section (slides in from left with skew on hover) */}
      <div
        className={
          `absolute top-0 left-0 h-full w-full bg-black/80 px-4 py-6 rounded-l-lg z-20 flex flex-col items-center
          transition-all duration-300-translate-x-full opacity-0
        group-hover:translate-x-0 group-hover:opacity-100 group-hover:skew-x-0` +
          (isSkewed ? " skew-x-[-12deg]" : "")
        }
      >
        <div
          className={
            `w-full flex flex-col items-center group-hover:skew-x-0` +
            (isSkewed ? " skew-x-[-12deg]" : "")
          }
        >
          {revealSection}
        </div>
      </div>
    </div>
  );
};
HoverCardWithImage.displayName = "HoverCardWithImage";
