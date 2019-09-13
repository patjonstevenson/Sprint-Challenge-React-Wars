# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React allows us to create components that have internal state and children that are capable of using and updating that internal state. It also allows us to use JSX to manipulate HTML directly with JavaScript.

React also allows for individual components to reload when their state is changed, without having to reload the entire page.

2. What does it mean to think in react?

Thinking in react means breaking down your app into a hierarchy of components, planning how each of them will receive props and state from their parents, and how the state will be updated. It also means thinking about using programming to manipulate HTML.

3. Describe state.

State is data that is managed within a component. It can be updated using an updater function, passed to children, and manipulated from within children using the updater function. React reloads a component when its state has been updated.

4. Describe props.

Props are parameters on child components, allowing them to be configured and reused. They are objects, allowing their different properties to be referenced using dot notation.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Generally speaking, a side effect is anything a function changes outside its scope and other than its return value. Examples include logging something to the console, causes a change in state, or making getting data from an API.

To sync side effects in a React component to state or prop changes, you use the useEffect hook. You pass a callback to useEffect, which can manipulate state using the state updater function.
