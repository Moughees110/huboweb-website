import React from 'react';

// 👇 Type define karo props ke liye
type HuboHeadingProps = {
  text: string;
};

function HuboHeading({ text }: HuboHeadingProps) {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export default HuboHeading;
