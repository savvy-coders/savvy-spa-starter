import html from "html-literal";
import * as views from "../view"

export default () => html`
${views['home']()}
${views['aboutMe']()}
${views['pizza']()}
${views['order']()}`;

