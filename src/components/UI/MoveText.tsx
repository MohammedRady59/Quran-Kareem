import { useEffect, useRef, useState } from "react";

function MoveText() {
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, []);
  return (
    <div className="relative bg-black text-white top-20 overflow-hidden h-8">
      <p
        ref={textRef}
        className="absolute bg-green m-1 p-1 rounded-md whitespace-nowrap animate-scroll"
        style={{
          animationDuration: `${textWidth / 100}s`,
        }}
      >
        هل صليت على النبي الــيـوم ؟ اللهم صِل وسلم على نبينا محمدﷺ سبحان الله،
        والحمد لله، ولا إله إلا الله، والله أكبر، ولا حول ولا قوة إلا بالله
      </p>
    </div>
  );
}

export default MoveText;
