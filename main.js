var loading = document.getElementsByClassName("loading")[0]

// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('MobileNet', function () {
    console.log('Model Loaded!');
});

var app = new Vue({
    el: ".app",

    data() {
        return {

            // MY FACE!!!
            imgsrc: "http://2.bp.blogspot.com/_pVSSnrgAXPY/TGDYQlH1_XI/AAAAAAAAAA4/qHZk2bd8gi0/s1600/Photo-0189.jpg",
            
            repo: {
                link: "https://github.com/rdhwnsh/ml5vue",
                author: "Nabil Ridhwanshah"
            }

        }
    },

    methods: {
        changeImage() {


            if (this.imgsrc.indexOf("jpg") > 0 || this.imgsrc.indexOf("png") > 0) {
                // Change the not valid image file to none
                document.getElementsByClassName("notvalidimage")[0].style.display = "none";

                var image = document.getElementById('image');

                image.src = this.imgsrc
                // SET TIMEOUT FOR CALLBACK BECAUSE THE NEW IMAGE WILL NOT BE LOADED YET AND WILL CLASSIFY THE OLD IMAGE INSTEAD OF THE NEW ONE
                setTimeout(() => {
                    this.classify_image(image)
                }, 1)
            } else {

                // DISPLAY THE NOT VALID IMAGE
                document.getElementsByClassName("notvalidimage")[0].style.display = "initial";
                console.log("error")
            }

        },

        classify_image(image) {

            // Change the loading display to none
            document.getElementsByClassName("loading")[0].style.display = "none"

            classifier.predict(image, function (err, results) {

                if (err) {
                    console.log(err);
                }

                // Result for default (0)
                var result = results[0].className;
                document.getElementById("result").innerHTML = result

                // Probability in % for default (0)
                var probability = Math.floor(results[0].probability * 100) + "%";
                document.getElementById("probability").innerHTML = probability

                // =================================================

                // Result for 1
                var result1 = results[1].className;
                document.getElementById("result1").innerHTML = result1

                // Probability in % for 1
                var probability1 = Math.floor(results[1].probability * 100) + "%";
                document.getElementById("probability1").innerHTML = probability1

                // Result for 2
                var result2 = results[02].className;
                document.getElementById("result2").innerHTML = result2

                // Probability in % for 2
                var probability2 = Math.floor(results[02].probability * 100) + "%";
                document.getElementById("probability2").innerHTML = probability2
            });
        }
    },

    mounted() {
        this.changeImage()

        // Change the loading display to none
        document.getElementsByClassName("loading")[0].style.display = "none";

        // Change the not valid image file to none
        document.getElementsByClassName("notvalidimage")[0].style.display = "none";
    }
})