import html from "html-literal";

export default () => html`<nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="aboutMe.html">Bio</a></li>
      <li><a href="pizza.html">Pizza</a></li>
      <li><a href="order.html">Order</a></li>
    </ul>
</nav>`;

