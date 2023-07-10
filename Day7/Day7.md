# Custom Cursor

## What is custom Cursor?

A custom cursor refers to a user interface feature that allows you to change the appearance of the mouse pointer on a computer screen.

## Explaination

The code begins by creating a position object that has initial x and y coordinates set to 0. It selects all elements with the class "circle" and stores them in the circles variable. It also defines an array of colors.

Then, it goes through each circle element using a loop. For each circle, it sets the x and y properties to 0 and assigns a background color based on its position in the colors array. The colors repeat when there are more circles than colors.

After that, it adds an event listener to the window object for the "mousemove" event. Whenever the mouse is moved, the position object is updated with the current mouse coordinates.

Next, the code defines a function called animateCircles. It starts by assigning the current x and y coordinates from the position object to local variables. Then, it goes through each circle element using another loop.

Inside the loop, it positions each circle relative to the mouse cursor by setting the left and top CSS properties. The scale CSS property is also adjusted based on the circle's position in the list, making closer circles appear smaller.

The x and y properties of each circle are updated with the current x and y coordinates.

Lastly, the code uses the next circle's x and y coordinates to interpolate and update the x and y variables, creating a smooth movement effect. The requestAnimationFrame function is called to continuously update the circle positions, resulting in an animation loop.

Finally, the animateCircles function is invoked to start the animation.
