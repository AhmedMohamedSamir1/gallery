
function ahmedMohamedSamir(){

    $(this).css({
        'display': 'flex',
        'flex-wrap': 'wrap',
        'justify-content': 'flex-start',
        'box-shadow':'5px 5px 10px #546,-5px -5px 10px #546',	
        'padding': '5px 5px 0 5px',
        'border-radius':' 5px',
        'margin-bottom':'25px',
    });


    $(this).children("img") .css({
        'height': '200px',
        'margin-bottom': '5px',
        'border-radius': '5px',
        'object-fit': 'cover',
        'transition':' all .3s ease',
        'cursor':'pointer',
        'margin-right':'2px',
        'margin-left':'2px',
    }).hover(hoverInImg, hoverOutImg)
    .on("click", imgClick);
}


function hoverOutImg(){
    $(this).css("transform", "");
}

function hoverInImg(){
    $(this).css(
        'transform', 'perspective(1000px) translateZ(140px)')
}

function imgClick(){

    var imgSrcs = [];
    let curSrcIndex = 0;
    let i = 0;
    let curSrc = $(this).attr("src");
    $("#gallery img").each(function(){
        imgSrcs.push($(this).attr("src"));
        if(curSrc == imgSrcs[i])
            curSrcIndex = i;
        i++;
    });

    let element = $("<div class='view'></div>");
    element.css({
        'width': '100%',
        'height': '100vh',
        'position':'absolute',
        'background-color': 'rgb(19 20 20 / 85%)',
        'left': '0',
        'top': '0',
        'display':' flex',
        'justify-content': 'center',
        'align-items': 'center',
    });

    let leftArrow = $('<span style="font-size: 60px;font-weight: bolder;cursor:pointer;  font-family:monospace;'
        +'position:relative; z-index:5; transform:translate(50%); background-color:#ffffff7a; color:#121111"> &lt;&lt; </span>');
    let rightArrow = $('<span style="font-size: 60px;font-weight: bolder;font-family:monospace;'
        +'cursor:pointer; position:relative; z-index:5; transform:translate(-50%); background-color:#ffffff7a; color:#121111"> &gt;&gt; </span>');
    let imgDiv = $('<div style="width: 75%; height: 75vh; position: relative;"></div>');
    let image = $(`<img src="${curSrc}" style="width: 100%; height: 80vh; object-fit: cover;">`);


    let closeBtn = $('<span style="font-size: 40px; font-weight: bold; position: absolute; top: 0; right: 5px; color: red; cursor: pointer;">X</span>');
    
    imgDiv.append(image,closeBtn);
    element.append(leftArrow, imgDiv, rightArrow);

    $("body").append(element);
   


    closeBtn.on("click", function(){
        $('.view').remove();
    });

    leftArrow.on("click", function(){
        curSrcIndex--;
        if(curSrcIndex==-1)
            curSrcIndex = imgSrcs.length-1;
        image.fadeOut(0);
        image.attr("src", `${imgSrcs[curSrcIndex]}`);
        image.fadeIn(700);
    
    });

    rightArrow.on("click", function(){
        curSrcIndex = (curSrcIndex+1)%imgSrcs.length;
        image.fadeOut(0);
        image.attr("src", `${imgSrcs[curSrcIndex]}`);
        image.fadeIn(700);
    });

}
$.fn.galleryPlugIn = ahmedMohamedSamir;




$("#gallery").galleryPlugIn();