## Section 3.35 & 3.36
#### 3.35
- v-if does not just hide the element, it attaches/detaches elements from the DOM. It also affects nested elements
- v-if/v-else work just like an if-else. Whichever is true gets added to DOM the other is removed

#### 3.36
- If using Vue 2.1+ there is v-else-if. If not, you can nest v-if/v-else

## Section 3.37
- template tag is an HTML5 tag that keeps it's contents from being rendered on load.
Its contents can then be displayed with javascript
- Using template to group elements allows you to 'v-if' multiple sibling elements without
having to add 'v-if' to every sibling parent.

## Section 3.38
- v-show is similar to v-if but instead of attaching/detaching from the DOM, it hides and shows elements by setting 'display:none'

## Section 3.39
- v-for allows you to loop through a list, pull data from it, and replicate the element the 'v-for' is on
- Syntax is <TAG v-for="VAR_NAME in ITERABLE COLLECTION">{{ VAR_NAME }}</TAG>. Vue creates the variable with the VAR_NAME you specify

## Section 3.40
- v-for also allows you to grab the index of the current item in the list by changing the syntax from 'v-for="ingred in list"' to 'v-for="(ingred, i) in list"'. 
ORDER IS IMPORTANT. FIRST you get the item in the list SECOND you get the index of the item

## Section 3.41
- Combining template tag and 'v-for' allows you to loop through list and output multiple elements for each item
- *** Template tag doesn't hide contents if in the vue #app ***

## Section 3.42
- You can loop through properties of objects in a collection if you nest v-for
- When looping through arrays you can get the index. For objects you can get both the key and index.
Just like before, ORDER MATTERS. FIRST: property value SECOND: property key THIRD: property index

## Section 3.43
-