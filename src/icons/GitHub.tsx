import * as React from "react";
import { SVGProps } from "react";

const GitHub = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 1.5A7.5 7.5 0 0 0 1.5 9c0 3.315 2.152 6.127 5.13 7.125.375.06.495-.172.495-.375v-1.268c-2.077.45-2.52-1.005-2.52-1.005-.345-.87-.833-1.102-.833-1.102-.682-.465.053-.45.053-.45.75.052 1.147.772 1.147.772.653 1.14 1.755.803 2.183.623.067-.488.263-.818.473-1.005-1.665-.188-3.413-.832-3.413-3.69 0-.832.285-1.5.772-2.032-.075-.188-.337-.968.075-1.98 0 0 .63-.203 2.063.764A7.067 7.067 0 0 1 9 5.13c.637 0 1.283.083 1.875.248 1.432-.968 2.063-.766 2.063-.766.412 1.013.15 1.793.074 1.98.488.533.773 1.2.773 2.033 0 2.865-1.755 3.495-3.428 3.682.27.233.518.69.518 1.388v2.055c0 .203.12.442.502.375C14.355 15.12 16.5 12.315 16.5 9A7.5 7.5 0 0 0 9 1.5Z"
      fill="#fff"
    />
    <path
      d="M0 0v-1h-1v1h1Zm18 0h1v-1h-1v1Zm0 18v1h1v-1h-1ZM0 18h-1v1h1v-1ZM0 1h18v-2H0v2Zm17-1v18h2V0h-2Zm1 17H0v2h18v-2ZM1 18V0h-2v18h2Z"
      fill="#3E3D45"
    />
  </svg>
);

export default GitHub;