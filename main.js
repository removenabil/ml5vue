// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('MobileNet', function () {
    console.log('Model Loaded!');
});

var app = new Vue({
    el: ".app",

    data() {
        return {
            imgsrc: "https://i.imgur.com/m4bkC5g.jpg",
            repo:{
                link: "https://github.com/rdhwnsh/ml5vue",
                author: "Nabil Ridhwanshah"
            }

        }
    },

    methods: {
        changeImage() {
            var image = document.getElementById('image');

            image.src = this.imgsrc
            // SET TIMEOUT FOR CALLBACK BECAUSE THE NEW IMAGE WILL NOT BE LOADED YET AND WILL CLASSIFY THE OLD IMAGE INSTEAD OF THE NEW ONE
            setTimeout(() => {
                this.classify_image(image)
            }, 1)
        },

        classify_image(image) {
            classifier.predict(image, function (err, results) {
                
                // Result for default (0)
                var result = results[0].className;
                document.getElementById("result").innerHTML = result
                console.log(results)
                
                // Probability in % for default (0)
                var probability = Math.floor(results[0].probability * 100) + "%";
                console.log(probability)
                document.getElementById("probability").innerHTML = probability

                // =================================================
                
                // Result for 1
                var result = results[1].className;
                document.getElementById("result1").innerHTML = result
                console.log(results)
                
                // Probability in % for 1
                var probability = Math.floor(results[1].probability * 100) + "%";
                console.log(probability)
                document.getElementById("probability1").innerHTML = probability

                // Result for 2
                var result = results[02].className;
                document.getElementById("result2").innerHTML = result
                console.log(results)
                
                // Probability in % for 2
                var probability = Math.floor(results[02].probability * 100) + "%";
                console.log(probability)
                document.getElementById("probability2").innerHTML = probability
            });
        }
    },

    mounted() {
        this.changeImage()
    }
})