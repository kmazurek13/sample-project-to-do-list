# sample-project-to-do-list

A simple to-do list application for demonstrating Vue 3 + TypeScript.

This is step 2. If you're stilling running the project, you'll notice our app is looking a little better.

In this step, we'll go over choosing a set of components to start with and applying some of them.

## Step 2: Adding Style and Structure

You can use some of the popular component libraries that exist to give yourself a headstart on building your app.

I've chosen Vuetify for this project. Vuetify is a Material Design component framework for Vue. It aims to provide
clean, semantic and reusable components that make building your application a breeze.

Other popular component libraries include:

- PrimeVue
- Tailwind CSS
- BootstrapVue

You can find the vuetify documentation [here](https://vuetifyjs.com/en/).

I've used a few of their components to start molding our app into something more defined.

Now we have a navigation bar at the top, and our home page content is contained in a card.

If you look at the HTML code in HomeView.vue, you'll see a few Vuetify components at work. You'll notice I've started
overriding some properties in these components to make them look a little more like the design I have in mind.

## Next Steps

Now that our application isn't so ugly, let's abstract the card in our HomeView into several components of our own.
