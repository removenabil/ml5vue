# Welcome to ml5vue
Incorporating the ml5 into vue.js

# Preview
Website may change into a domain but as of now, it is https://rdhwnsh.github.io/ml5vue

# Abstract
I tried ways to incoporate the ml5 library with jQuery but it always doesn't work, so I tried with Vue and it worked like a charm

# Issues:
- The results and probabilty we get from classifier.predict(), we need to place the results as document.getElementById() [or class] and can't place the value to something like this.results = results[0].className()

- The only data it returns is the image source, there is nothing else