declare module "\*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: React.SFC<React.SVGProps<SVGSVGElement>>;
  export default src;
}

declare module "\*.jpg" {
  const content: string;
  export default content;
}

declare module "\*.png" {
  const content: string;
  export default content;
}

declare module "\*.json" {
  const content: string;
  export default content;
}
