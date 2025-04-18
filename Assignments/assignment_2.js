// ⛔ READ THE INSTRUCTIONS CAREFULLY
////////////////////////////////////////////

/* Assignment 2: My Smart Cart 😎🛒

 -> Your task is to build a simple shopping cart system using JavaScript.
 -> 💡Tip: You’ll need to think in terms of array methods — not loops 👀

 1. Start by initializing a `cart` array containing three products:
    - Each product should be an object with three properties: name, price, and quantity.
    - For example: An apple with a unit-price of 1.5 and quantity of 3.

 2. Implement the following four functions:
    (( ❗ DO NOT use for loops, forEach, or any type of manual loop — only array methods ))

    - `addItem`: Adds a new product to the cart using the **spread operator**.
      ❗ Do not use `push` or `unshift`.

    - `removeItem`: Removes a product by name using an array method.
      💡Hint: Try filtering-out the item you want to remove.
      💡Hint: think like this: i need this, i need this, i don't need this, i need this

    - `applyDiscount`: Accepts a discount percentage (e.g., 10 for 10%) and returns a **new** array 
      with updated prices after applying the discount.

    - `checkout`: Calculates the total cost of all items in the cart (quantity × price).

 3. Use **destructuring** to extract the `name` and `price` of the first item in the cart,
    and then log them to the console.
    (💭 This step is just to remind you how destructuring works.)

*/
