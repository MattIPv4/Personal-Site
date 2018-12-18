// Constants for pixels
var pixelVwWidth = 1.5; // Measured in vw
var pixelVwHeight = pixelVwWidth; // Measured in vw
var pixelAnimate = false; // Lag-inducing
var pixelColor = "#4FC1E9"; // Base color for pixels

// Default BG
document.getElementById("background").style.background = pixelColor;

// Func to generate pixels
function generateBg() {
    // Get document size
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // Get one vw unit and calculate the pixel size in px
    var vw = w / 100;
    var pixelWidth = vw * pixelVwWidth;
    var pixelHeight = vw * pixelVwHeight;

    // Calculate pixels per row and rows in height
    var pixelsW = Math.ceil(w / pixelWidth);
    var pixelsH = Math.ceil(h / pixelHeight);
    console.log(pixelsW * pixelsH);

    // Clear any old
    document.getElementById("background").innerHTML = "";
    // Iterate over each row
    for (var i = 0; i <= pixelsH; i++) {
        // Create row
        var thisRow = document.createElement("div");
        thisRow.className = "row";
        thisRow.style.background = pixelColor;

        // Set height (don't allow to be squished)
        thisRow.style.height = pixelVwHeight.toString(10) + "vw";
        thisRow.style.minHeight = pixelVwHeight.toString(10) + "vw";

        // Iterate over each pixel in row
        for (var j = 0; j <= pixelsW; j++) {
            // Create pixel
            var thisPixel = document.createElement("div");
            thisPixel.className = "pixel";
            thisPixel.style.background = pixelColor;

            // Set width and height (don't allow to be squished)
            thisPixel.style.width = pixelVwWidth.toString(10) + "vw";
            thisPixel.style.minWidth = pixelVwWidth.toString(10) + "vw";
            thisPixel.style.height = pixelVwHeight.toString(10) + "vw";
            thisPixel.style.minHeight = pixelVwHeight.toString(10) + "vw";

            // Animation
            if (pixelAnimate) {
                thisPixel.className += " anim";
                thisPixel.style.animationDelay = (Math.random() * 10).toString(10) + "s";
            } else {
                thisPixel.style.filter = "brightness(" + ((Math.random() * 0.75) + 0.5).toString(10) + ")";
            }
            thisRow.appendChild(thisPixel);
        }

        // Send to document
        document.getElementById("background").appendChild(thisRow);
    }
}

// Do it
(function () {
    generateBg();
    window.onresize = generateBg;
}());