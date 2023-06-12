# Sam's Machine Learning Hackathon: a neural network from scratch

### Getting started
- Clone the repository into your code editor using a git-ready terminal as usual.
- You will want to have some kind of Live Server extension or similar way of displaying index.html quickly when making changes, because we are doing this on a static site to hopefully make it a bit simpler for you.
- About the files: the logic flows from data.js, where some starting data is to neuralNetwork.js, where the learning happens to plotBoundary.js, which controls what happens to the webpage.
- Look at index.html - you will notice that there are two script tags in the file. The top one is to load the external graphing module plotly.js, while the bottom one is to take in the logic that we need to plot our processed data.
- The plotBoundary.js file turns the data and your trained neural network into a graph. While most of the time you should just change the import file at the top depending on what you want to display, there may be helpful improvements to make further down the file too.
- plotBoundary.js is expecting an object containing the data required to draw a scatter graph and a line, including the title, and axis labels. The example is from [W3 Schools](https://www.w3schools.com/js/js_graphics_plotly.asp).

### The neural network
This task is going to get you to make a neural network from scratch. The objective here is not to try to make the most advanced thing in the world for solving real problems, but instead to learn what the fundamentals are, so that you understand how best to make the powerful ML packages work properly. If you really don't like calculus, you can skip to the next task after step 8. However, I would advise you to persist if you can, and check out the video above for an explanation that is among the clearest I have seen.

1. Make a function that figures out the output node values from the input node values and the weights.
2. Add bias values to allow moving the boundary above the origin
3. This can create a straight line boundary, but not any other shape. Change your code so that you can have a hidden layer in the code, with weights between the input and the hidden layer, as well as between the hidden layer and output.
4. You may not have realised, but we already have an activation function applied to our nodes. If the contribution of input 0 is greater than that of input 1, then we return 0, otherwise we return 1. Now you should make a function that can change this logic to a exp(1/(1+exp(-x))) form, which is a bit more nuanced.
5. Make a cost function, to calculate how 'wrong' the classifications are currently, summing the distance squared of all modes that are not correctly classified.
6. Now the goal of the learning algorithm is to reduce this number, to 0 if possible. We do this by descending down the gradient of the cost (against the weights). Introduce a learn rate - a small change used to determine how fast to move down the gradient, and multiply the gradient of the graph by this learn rate. The result should be subtracted from the current input to find the new input. 
7. In a larger network, it can be slow if we only wait until all the weights and biases are used. Instead, we should only use a small percentage of weights each time we update the graph. This seems a bit counterintuitive - isn't it going to be very inaccurate? It is going to be inaccurate on the first few updates, but as long as the learning rate is suitable, the cost can quickly go down to a very small range around the ideal. 
Completing this task will give you a neural network

### Plotting the graph
