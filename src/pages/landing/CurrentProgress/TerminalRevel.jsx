import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../../../components/ui/terminal";

const TerminalRevel = ({ section }) => {
  return (
    <Terminal title={section.title}>
      <TypingAnimation>{`> ${section.command.toString()}`}</TypingAnimation>
      {section.items.map((item, index) => (
        <AnimatedSpan
          key={index}
          delay={1000 + (index + 2) * 500}
          className={`text-${
            item.status ? "green" : "red"
          }-500 min-w-1/2 text-wrap`}
        >
          {item.status ? "✔" : "✘"} {item.context}
        </AnimatedSpan>
      ))}
    </Terminal>
  );
};

export default TerminalRevel;
