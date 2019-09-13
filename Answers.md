1. What problem does the context API help solve?

Context API solves the problem of having to pass state via props down from parent to children several levels deep to get it to the right components (prop drilling).

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are state changes, reducers update state based on those changes, and the store is the final stop for state updates, meaning once there is a state change somewhere in an app the store is always updated with the most recent state. This excludes components’ local state but local state changes usually have a hand in changing global state in some other form. The store is the single source of all truth in that all data updating UI comes from the store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global in that it applies to the entire app and local state applies to the component. Local state is useful when you need to capture data that only affects the component, such as input data in a form.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware which intercepts actions in our Redux flow. Rather than return an action in a function we can return a function. This is a thunk. Thunks can be used to delay the dispatch of an action, thus making flow asynchronous.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux. In all its complexity redux is pretty elegant once you know how it works. I find regular state props clunky compared to redux props.