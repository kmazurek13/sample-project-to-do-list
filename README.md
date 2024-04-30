# sample-project-to-do-list

A simple to-do list application for demonstrating Vue 3 + TypeScript.

This is step 5.

In this step, we'll refactor our application to use Pinia, a simple state management library for Vue 3.

## Step 5: Adding State Management with Pinia

You'll now notice when you check tasks off and navigate between pages, the state of the tasks is persistent.

This is because we've introduced state management. See how the code for `src/stores/todo.ts`
and `src/components/TaskList.vue` have changed.

By offloading reactive elements to the store, we can now access the state of the tasks from anywhere in our application
regardless of the state of individual components.

## Next Steps

Ok. We've added state management to our application. Now we can worry about manipulating our to-do list.

In step/6 we'll bring everything together and add the ability to add, edit, and delete tasks.

Checkout step/6.
