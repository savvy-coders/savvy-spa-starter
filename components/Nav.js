import html from "html-literal";

export default () => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#bio">Bio</a></li>
      <li><a href="#gallery">Gallery</a></li>
    </ul>
  </nav>
`;
