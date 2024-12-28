import html from "html-literal";

export default () => html`<section id="order">
<form id="order" method="POST" action="https://sc-pizza-api.onrender.com/pizzas/form">
  <h2>Order a pizza</h2>
  <div>
    <label for="customer">Customer</label>
    <input
      type="text"
      name="customer"
      id="customer"
      placeholder="Enter Customer Name"
    />
  </div>
  <div>
    <label for="crust">Crust:</label>
    <select id="crust" name="crust">
      <option value="" hidden>Select a Crust</option>
      <option value="thin">Thin</option>
      <option value="chicago">Chicago</option>
      <option value="deep-dish">Deep Dish</option>
      <option value="hella-thick">Hella Thick</option>
    </select>
  </div>
  <div>
    <label for="cheese">Cheese:</label>
    <input
      type="text"
      name="cheese"
      id="cheese"
      placeholder="Enter Cheese"
      default="Mozzarella"
      required
    />
  </div>
  <div>
    <label for="sauce">Sauce:</label>
    <input
      type="text"
      name="sauce"
      id="sauce"
      placeholder="Enter Sauce"
      required
    />
  </div>
  <div id="toppings-wrapper">
    <b>Toppings:</b>
    <input
      type="checkbox"
      id="chicken-toppings-checkbox"
      name="toppings"
      value="Chicken"
    />
    <label for="chicken-toppings-checkbox">Chicken</label>
    <input
      type="checkbox"
      id="pepperoni-toppings-checkbox"
      name="toppings"
      value="pepperoni"
    />
    <label for="pepperoni-toppings-checkbox">Pepperoni</label>
    <input
      type="checkbox"
      id="ham-toppings-checkbox"
      name="toppings"
      value="ham"
    />
    <label for="ham-toppings-checkbox">Ham</label>
    <input
      type="checkbox"
      id="onion-toppings-checkbox"
      name="toppings"
      value="onion"
    />
    <label for="onion-toppings-checkbox">Onion</label>
    <input
      type="checkbox"
      id="mushroom-toppings-checkbox"
      name="toppings"
      value="mushroom"
    />
    <label for="mushroom-toppings-checkbox">Mushroom</label>
    <input
      type="checkbox"
      id="cheese-toppings-checkbox"
      name="toppings"
      value="extra cheese"
    />
    <label for="cheese-toppings-checkbox">Extra Cheese</label>
  </div>
  <input type="submit" name="submit" value="Submit Pizza" />
</form>
</section>`