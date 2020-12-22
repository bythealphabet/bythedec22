import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

function QuestionMark({ position }) {
  return (
    <div css={position}>
      <svg
        width="96"
        height="151"
        viewBox="0 0 96 151"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="?"
          d="M48.4 0.799989C62.6667 0.799989 74.0667 4.53332 82.6 12C91.2667 19.4667 95.6 30 95.6 43.6C95.6 56.1333 91.4667 65.9333 83.2 73C75.0667 79.9333 64.2667 83.4667 50.8 83.6L49.8 98.6H19.8L18.8 61.4H30.8C41.0667 61.4 48.8667 60.1333 54.2 57.6C59.6667 55.0667 62.4 50.4667 62.4 43.8C62.4 39.1333 61.1333 35.4667 58.6 32.8C56.0667 30.1333 52.5333 28.8 48 28.8C43.2 28.8 39.4667 30.2 36.8 33C34.1333 35.6667 32.8 39.3333 32.8 44H0.6C0.333333 35.8667 2 28.5333 5.6 22C9.33333 15.4667 14.8 10.3333 22 6.6C29.3333 2.73333 38.1333 0.799989 48.4 0.799989ZM35.2 150.6C29.2 150.6 24.2667 148.867 20.4 145.4C16.6667 141.8 14.8 137.4 14.8 132.2C14.8 126.867 16.6667 122.4 20.4 118.8C24.2667 115.2 29.2 113.4 35.2 113.4C41.0667 113.4 45.8667 115.2 49.6 118.8C53.4667 122.4 55.4 126.867 55.4 132.2C55.4 137.4 53.4667 141.8 49.6 145.4C45.8667 148.867 41.0667 150.6 35.2 150.6Z"
          fill="#5B5F6A"
        />
      </svg>
    </div>
  );
}

export default QuestionMark;