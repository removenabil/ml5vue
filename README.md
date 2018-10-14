# Welcome to ml5vue
Incorporating the ml5 into vue.js

# Preview
WEBSITE IS AT THE TOP OF THE PAGE (Its a link)

# Abstract
I tried ways to incoporate the ml5 library with jQuery but it always doesn't work, so I tried with Vue and it worked like a charm
- The only data it returns is the image source repo link & author and thats all.

# Issues:
- The results and probabilty we get from classifier.predict(), we need to place the results as document.getElementById() [or class] and can't place the value to something like this.results = results[0].className()
