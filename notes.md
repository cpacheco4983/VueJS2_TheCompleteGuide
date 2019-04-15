## Section 3.35

- v-if does not just hide the element, it adds/removes elements from the DOM. It also affects nested elements
- v-if/v-else work just like an if-else. Whichever is true gets added to DOM the other is removed
- If using Vue 2.1+ there is v-else-if. If not, you can nest v-if/v-else