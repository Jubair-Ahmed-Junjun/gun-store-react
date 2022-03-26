# Gun Store Live Website

## If you want to Visit Live: [Click here..](https://gunstore.netlify.app/)

## How React works?

React does not commit state changes one after the other if there are multiple state changes. Instead, React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. In fancy words, React does batch updates. React uses a heuristic algorithm called the Diffing algorithm for reconciliation based on these assumptions: Elements of different types will produce different trees. We can set which elements are static and do not need to be checked.


## What's the difference between State and Props?

The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).
