import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={320}
    height={457}
    viewBox="0 0 320 457"
    backgroundColor="#eadba2"
    foregroundColor="#f4b9ba"
    {...props}
  >
    <circle cx="150" cy="125" r="125" />
    <rect x="10" y="260" rx="8" ry="8" width="280" height="24" />
    <rect x="16" y="294" rx="8" ry="8" width="268" height="72" />
    <rect x="16" y="385" rx="8" ry="8" width="90" height="26" />
    <rect x="128" y="376" rx="8" ry="8" width="152" height="44" />
  </ContentLoader>
);

export default PizzaSkeleton;
