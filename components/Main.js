import * as views from "./views";

export default () => `
  ${views["Home"]()}
  ${views["Bio"]()}
  ${views["Gallery"]()}
  `;
