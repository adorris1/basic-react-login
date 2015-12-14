# react-app
Learning React, Flux, and Webpack.

Following along Tyler Mcginnis's tutorial here:
http://tylermcginnis.com/reactjs-tutorial-pt-2-building-react-applications-with-gulp-and-browserify/

###Getting Started###

```
git clone https://github.com/ammarm08/react-app
cd react-app
npm install

// this command will build public/bundle.js w/ webpack, then fire up the server on localhost:8000
npm start  
```

###Basics###

Here's a (very crude) picture what's going on here b/t React & Flux.

Flux sits in with React to outsource data management. The key idea w/ Flux is that it keeps data flowing unidirectionally. This means that a view (in this case, a React component) cannot and should not be modifying the data. 

If you've worked with Backbone before, this is sorta kinda similar to the distinction between Views and Models/Collections -- what you see on the screen is simply a visual representation of the data in models/collections. A view shouldn't be able to modify this data, but it *can* send a message along to someone who can (in Backbone, the Models/Collections; in React + Flux, to a Flux Dispatcher).

So when adding an item to the to-do list:

1. Before a React component renders, it communicates with the Flux Dispatcher about what needs to happen when there's a Change. ("Dude, if anything changes, please send me any updates you have." "Ok. Just let me know what's going on on your end.") 
2. User adds item to the to-do list. The React component fires out an instruction ("I need to add an item. Here's the item")
2. The Flux Dispatcher tells its Store to deal with it ("Okay, Store, React wanted to add an item. Here.")
3. The Flux Store adds the item to its collection.
4. The Store then emits a message to the Dispatcher ("Yo Flux, there's been a CHANGE!")
5. The Dispatcher, remembering the agreement in step 1, does what React component wanted. ("Alright, I've got an updated list of to-do items for you. Here, take them.")
6. The React component updates its state, which triggers a re-rendering of the page. 
7. The user is super stoked that he has one more fucking thing to finish before the day is over.

To reiterate: What we see on the screen only changes when the data underlying the view somehow changes.

Managing the client-side this way maintains a very pleasant separation of concerns. The View only handles what's being seen on the screen. It communicates with a Dispatcher, whose job is to just relay messages between the View and the Store. The Store is what actually handles all the business logic (aka the BIG DATA). Now when we have to make API requests to a remote server, we know who should be taking care of that (hint: not the View).
