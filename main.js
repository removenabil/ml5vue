// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('MobileNet', function () {
    console.log('Model Loaded!');
});

var app = new Vue({
    el: ".app",

    data() {
        return {
            imgsrc: "https://i.imgur.com/m4bkC5g.jpg",

            classification: "",

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
                
                // Result
                var result = results[0].className;
                document.getElementById("result").innerHTML = result
                console.log(results)
                
                // Probability in %
                var probability = Math.floor(results[0].probability * 100) + "%";
                console.log(probability)
                document.getElementById("probability").innerHTML = probability
            });
        }
    },

    mounted() {
        this.changeImage()
    }
})