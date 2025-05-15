import type { JSX } from "preact";

export function DeviconWindows11(props: JSX.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
      {...props}
    >
      <title>Windows 11</title>
      {/* Icon from Devicon by konpa - https://github.com/devicons/devicon/blob/master/LICENSE */}
      <path
        fill="#0078d4"
        d="M67.328 67.331h60.669V128H67.328zm-67.325 0h60.669V128H.003zM67.328 0h60.669v60.669H67.328zM.003 0h60.669v60.669H.003z"
      />
    </svg>
  );
}
export default DeviconWindows11;
