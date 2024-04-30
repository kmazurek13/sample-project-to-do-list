# sample-project-to-do-list

A simple to-do list application for demonstrating Vue 3 + TypeScript.

This is step 4.

In this step, we'll keep refining our custom components and adding functionality.

## Step 4: Adding Functionality and Data-Binding To Components

You'll now notice that if you start checking off items in the list, the count of completed items will update.

Here's how we did it:

- I created a Task model in `src/models/Task.ts` to represent a task. This model has an ID, a description, and a boolean
  to represent whether the task is completed.
- I refactored our `TaskList` component to use the `Task` model.
    - The `TaskList` component now has a reactive `tasks` object that is an array of `Task` objects.
    - These tasks are now rendered as `TaskListItems` using a `v-for` directive.
- I added computed properties for how many tasks there are total and how many tasks have been completed.
- In `TaskListItem`, I defined props, emits, and models. This gives this component complete reactivity when tasks are
  marked as complete.
    - Use your debug tool in the browser to see how the complete property in the tasks array changes when you click the
      boxes.

## Next Steps

Now that we have some basic reactive components, we need to figure out how to add and remove tasks from our list!

But wait, if you navigate to the `To-do` page and back to `Home`, you'll notice that the state of the tasks is lost.
There's not much of a point in manipulating the list of tasks if it's not persistent.
This is because we are not persisting the state of the tasks. We'll fix this in the next step.

Checkout step/5.
