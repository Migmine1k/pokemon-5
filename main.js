var canvas = new fabric.Canvas('myCanvas');
block_y = 50;
block_x = 1;

block_image_width = 200 ;
block_image_height = 200;

var block_image_object = "";

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: block_y,
            left: block_x
        });
        canvas.add(block_image_object);

    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '49') {
        block_image_width = 200 ;
        block_image_height = 200;
        block_x = 50;
        block_y = 10;
        new_image('um.png');
        console.log("1");
    }
    if (keyPressed == '50') {
        block_image_width = 200 ;
        block_image_height = 200;
        block_x = 200;
        block_y = 10;
        new_image('dois.png');
        console.log("2");
    }

    if (keyPressed == '51') {
        block_x = 360;
        block_y = 10;
        block_image_width = 400 ;
        block_image_height = 400;
        new_image('tres.png');
        console.log("3");
    }
    if (keyPressed == '52') {
        block_image_width = 200 ;
        block_image_height = 200;
        block_y = 300;
        block_x = 50;
        new_image('quatro.png');
        console.log("4");
    }
    if (keyPressed == '53') {
        block_image_width = 200 ;
        block_image_height = 200;
        block_y = 300;
        block_x = 300;
        new_image('cinco.png');
        console.log("5");
    }
    if (keyPressed == '54') {
        block_image_width = 200 ;
        block_image_height = 200;
        block_y = 300;
        block_x = 500;
        new_image('seis.png');
        console.log("6");
    }

}

