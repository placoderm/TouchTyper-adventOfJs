Project From https://www.adventofjs.com/

# How I made it

Because I'm learning React, that's what I used to build it, although I'm sure it's not necessary.

I created an array of the keyboard keys. This was then used to create the keys with a .map(). Each key has an id the same as the text of the key. Because many of the key button texts don't work as class names, I created a function to replace those that weren't legal. **I'm sure that is not the best way to do this challenge, but I tried it anyway.** I liked the idea of using a simple array to build the keyboard, but it probably would have been better to have the class names included in the array. 

The CSS of the keyboard is a single flexbox. The keyboard container is a fixed width. I created special key sizes for the non-square keys and using their ids. **This doesn't feel like a great way to do this, so I'm open to feedback**. 

I then ran into a problem because the names that the borwser was returning for the keys didn't match the names in the case of CapsLock and Backspace. In fact, I'm not sure my code will work on a a device that uses a different name for these keys.

# Enhancements
* I added a counter to keep track of correct/incorrect as well as the Esc key to reset it.
* I used a snackbar to allert when a wrong key is pressed

# Problems

* In FireFox, the ' key is a shortcut for `quick find`. So when the user hits that key, the browser grabs focus.
* When a key is held down, it regesters multiple key presses. Because of the snackbar allert, this can cause numerous allerts. 

# Future enhancements
* I'd like to add some customizations so users could pick the colour for the active key, etc



# Live Version

https://gifted-wiles-aaa459.netlify.app/