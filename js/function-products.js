var listName = ["strawberry", "orange", "apple", "classic"];
var addBoxIdList = ["#strawberryAddBox", "#orangeAddBox",
    "#appleAddBox", "#classicAddBox"];
    var totalMoney = 0;
    var buyIdList = ["#buyStrawberry", "#buyOrange", "#buyApple",
    "#buyClassic"];
function showMenu() {
    $('.modal-menu').css({
        'animation': 'showMenu 0.8s cubic-bezier(0.08, 1.02, 1, 1) 0.02s  forwards ',
        'z-index':'5'
    });
    $('.list-link li').css({
        'animation': 'showLink 1s ease-in-out 0.82s  forwards '
    });
}
function hiddenMenu() {
    $('.modal-menu').css({
        'animation': 'hiddenMenu 0.8s cubic-bezier(0.94, 0.13, 1, 1) 0.02s  forwards',
        'z-index':'-1'
    });
    $('.list-link li').css({
        'animation': 'hiddenLink 0s ease-in-out 1s  forwards '
    });
}
function calcMoney() {
    totalMoney = 0;
    listName.forEach(function(name) {
        totalMoney += localStorage.getItem(name)*12.99;
    });
}
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
   
    if(wScroll > 2065) {
        $('.navbar-custom').css ({
            
            'animation': 'hiddenBar 1s linear 0.0s forwards'
        });
    } else {
        $('.navbar-custom').css ({
            'animation': 'hiddenBar 1s ease-in 1s forwards reverse',
            
        });
    }
    if(wScroll - 170 < 0) {
        var distance = 30+wScroll*2.3;

        $('.real-product').css({
            'transform':  'translate(70px, -'+ distance +'px)'
        });
    } 
    
    var radian = 1.8*(wScroll-160);
    if(radian > 90) {
        radian = 90;
    } else if(radian < 7) {
        radian = 0;
    }
    
    if(wScroll >= 400) {
        $('.crack-chocolate').css({
            'animation': 'showCrack 1s ease-in-out 0.2s forwards'
        });
    }
    $('.box').css({
        'transform':'rotate(' + radian +'deg)'
    });
    radian=90-radian;
    $('.chocolate').css({
        'transform':'scale(0.9) translate(-170px, -170px) rotate(-' + radian +'deg)'
    });
    
    var gox = wScroll-208;
    if(wScroll >= 1400) {
        var distance=(390-1400+wScroll);
        $('.real-product').css({
            'transform':  'translate(70px, -'+ distance+'px)'
        });
    }
    if(gox > 0) {
        $('.box').css({
            'transform':'translateX(-'+gox*3 + 'px) rotate(90deg)'
        });
        gox = (gox-175)*6;
        if(gox > 630) gox = 630;
        $('.chocolate').css({
            'transform':'scale(0.9) translate('+ gox + 'px, -170px) rotate(0deg)'
        });
        
    }
});


function showBuyBox() {
    isShowDialog = true;
    $('.modal-buy').css({
        'top': '0',
        'animation': 'showBuyBox 0.5s ease-in-out 0.0s forwards',
        'z-index':'5'
    });
    $('.dialog-buy').css({
        'animation': 'showDialog 0.5s ease-in-out 0.5s forwards'
    });

    var buyIdListInBox = [];
    buyIdList.forEach(function(item) {
        buyIdListInBox.push(item + "Box");
    });

    

    buyIdListInBox.forEach(function(element, index) {
        calcMoney();
        if(localStorage.getItem(listName[index]) > 0 ) {
            showElementInBox(element, listName[index], localStorage.getItem(listName[index]));
        } else {
            hiddenElementInBox(element, listName[index]);
        }
    });
    var numberOfProducts = 0;
    buyIdListInBox.forEach(function(element, index) {
        numberOfProducts += localStorage.getItem(listName[index]);
        calcMoney();
        if(localStorage.getItem(listName[index]) > 0 ) {
            showElementInBox(element, listName[index], localStorage.getItem(listName[index]));
        } else {
            hiddenElementInBox(element, listName[index]);
        }
    });
    if(numberOfProducts == 0) {
        $('.buy-body > span > p').css({
            'position': 'relative'
        });
    } else {
        $('.buy-body > span > p').css({
            'position': 'absolute'
        });
    }
    $('.sum').html(totalMoney);
}

function showElementInBox(element, name, countProduct) {
    $('.buy-'+name).css({
        'height': 'auto',
        'opacity': '1',
        'position': 'relative',
        'transform': 'translateX(0px)'
    });
    $(element + " .number-box").html(countProduct);
    var total = countProduct*12.99;
    $(element + " .count-product").html(total);
    var buyIdListInBox = [];
    buyIdList.forEach(function(item) {
        buyIdListInBox.push(item + "Box");
    });
    $(element + " .add-product").click(function () {
        
        countProduct ++;
        $(element + " .number-box").html(countProduct);
        total = countProduct*12.99;
        $(element + " .count-product").html(total);
        calcMoney();
        $('.sum').html(totalMoney);
        var product = -1;
        for(var i = 0; i < 4; i++)
            if(buyIdListInBox[i] == element) {
                product = i;
                localStorage.setItem(listName[i], countProduct);
            }
        showInBox(product);
    });
    $(element + " .sub-product").click(function () {
        countProduct = countProduct > 0 ? countProduct-1: 0;
        $(element + " .number-box").html(countProduct);
        total = countProduct*12.99;
        $(element + " .count-product").html(total);
        calcMoney();
        $('.sum').html(totalMoney);
        var product = -1;
        for(var i = 0; i < 4; i++)
            if(buyIdListInBox[i] == element) {
                product = i;
                localStorage.setItem(listName[i], countProduct);
            }
        showInBoxSub(product);
    });
    
}

function  hiddenElementInBox(element, name) {
    $('.buy-'+name).css({
        'height': '0',
        'opacity': '0',
        'position': 'absolute',
        'transform': 'translateX(200px)'
    });
}
function hiddenBox() {
    $('.dialog-buy').css({
        'animation': 'hiddenDialog 0.1s ease-in-out 0s forwards'
    });
    $('.modal-buy').css({
        'animation': 'hiddenBuyBox 0.5s linear 0.1s forwards',
        'z-index':'-1'
    });
    isShowDialog = false;
}

var nowProduct=0;
function addBox() {
    nowProduct = localStorage.getItem('nowProduct');
    var pro = productList[nowProduct%4];
    localStorage.setItem(pro[6], 1);
    $('.buy-product').removeClass('is-hidden');
    $('.add-box').removeClass('is-showing');
    $('.buy-product').addClass('is-showing');
    $('.add-box').addClass('is-hidden');
    $('#numberStrawberry').html(1);
}
function add(){
    nowProduct = localStorage.getItem('nowProduct');
    var number = localStorage.getItem(productList[nowProduct%4][6])*1 + 1 ;
    localStorage.setItem(productList[nowProduct%4][6], number);
    $('#numberStrawberry').html(number);
}
function showInBox(product) {
    nowProduct = localStorage.getItem('nowProduct') % 4;
    var number = localStorage.getItem(productList[nowProduct%4][6])*1;
   
    if(product == nowProduct) {
        $('#numberStrawberry').html(number);
    }
}
function showInBoxSub(product) {
    nowProduct = localStorage.getItem('nowProduct') % 4;
    var number = localStorage.getItem(productList[nowProduct%4][6])*1;
    if(product == nowProduct) {
        if(number > 0)
            $('#numberStrawberry').html(number);
        else {
            $('.buy-product').addClass('is-hidden');
        $('.add-box').addClass('is-showing');
        $('.buy-product').removeClass('is-showing');
        $('.add-box').removeClass('is-hidden');
        $('#numberStrawberry').html(1);
        }
    }
}



function sub(){
    nowProduct = localStorage.getItem('nowProduct');
    var number = localStorage.getItem(productList[nowProduct%4][6])*1 -1 ;
    if(number > 0) {
        localStorage.setItem(productList[nowProduct%4][6], number);
    $('#numberStrawberry').html(number);
    } else {
        $('.buy-product').addClass('is-hidden');
        $('.add-box').addClass('is-showing');
        $('.buy-product').removeClass('is-showing');
        $('.add-box').removeClass('is-hidden');
        $('#numberStrawberry').html(1);
    }
    
}

var productList = [
    [
        'SWEET STRAWBERRY',
        'SWEET<br>STRAWBERRY',
        '#EE2D31', //  text header
        '#221F73', // background taste
        '#EE2D31', // color taste title
        'images/Strawberry 5.png',
        'strawberry',
        "This edition of the standard chocolate Liebe bar has a creamy centre made with real strawberries, giving it an unparalleled vividly fruity flavour, rich pink centre colouring and charming speckled texture.",
        "Vietnamese cacao beans, organic cacao butter, essence, organic sugar, organic strawberry."
    ],
    [
        'SOUR ORANGE',
        'SOUR<br>ORANGE',
        '#FF902C',
        '#FF902C',
        '#EE2D31',
        'images/Orange-sour.png',
        'orange',
        "Tangy orange marmalade notes mix with deep intense cocoa flavours to strike a refreshing chord. A smooth, sweet and intense fine dark chocolate experience, with tiny orange pieces and slivers of almond, for those who like a little zest in their life.",
        'Vietnamese cacao beans, organic cacao butter, essence, organic sugar, organic orange.'
    ],
    [
        'GRAND APPLE',
        'GRAND<br>APPLE',
        '#0F5C57',
        '#0F5C57',
        '#FF902C',
        'images/Applegrand.png',
        'apple',
        'Irresistibly smooth and creamy milk chocolate with apple pieces and a crunch topping. Our ethos is simple high cocoa content and a dedication to quality. We only use the finest.',
        'Vietnamese cacao beans, organic cacao butter, essence, organic sugar, organic apple.'
    ],
    [
        'CLASSIC PREMIUM',
       'CLASSIC<br>PREMIUM',
        '#1C0D0A',
        '#1C0D0A',
        '#FF902C',
        'images/classic-img.png',
        'classic',
        'Using 60-70% dark chocolate of the best quality — all you need to add to that is milk, and if you have it, milk powder and cornstarch.',
        'Vietnamese cacao beans, milk powder, organic cacao butter, essence, organic sugar.'
    ]
];
var numItem = 0;
$(document).ready(function () {
    nowProduct = localStorage.getItem('nowProduct');
    var product = productList[nowProduct%4];
    $('.text-product-header').html(product[1]);
    $('.text-product-header').css('color', product[2]);
    $('.box').attr('src',product[5]);
    $('.detail-product #titleName').html(product[0]);
    $('.detail-product #detailPro').html(product[7]);
    $('.detail-product #detailIngre').html(product[8]);
    $('.detail-product h1').css('color', product[2]);
    $('.taste-it h1').css('color', product[4]);
    $('.taste-it').css('background', product[3]);
    numItem = localStorage.getItem(product[6]);
    if(numItem > 0) {
        $('.buy-product').removeClass('is-hidden');
        $('.add-box').removeClass('is-showing');
        $('.buy-product').addClass('is-showing');
        $('.add-box').addClass('is-hidden');
        $('#numberStrawberry').html(1);
        $('#numberStrawberry').html(numItem);
    }
  
});

function nextProduct() {
    nowProduct++;
    localStorage.setItem('nowProduct', nowProduct);
    location.replace(location.pathname);

    
}
function goProducts(){
    location.replace(location.pathname.replace('products.html', 'index.html#strawberry'));
}
function gotoPayment() {
    var numberOfProducts = 0;
    listName.forEach(function(name) {
        numberOfProducts += localStorage.getItem(name);
    });
    if(numberOfProducts > 0) {
    location.replace(location.pathname.replace('products', 'payment'));
    }
}
function goHome() {
    location.replace(location.pathname.replace('products', 'index'));
}
function goOurStory() {
    location.replace(location.pathname.replace('products', 'our-story'));
}
function goFooter() {
    $('.modal-menu').css({
        'animation': 'hiddenMenu 0.8s cubic-bezier(0.94, 0.13, 1, 1) 0.02s  forwards'
    });
    $('.list-link li').css({
        'animation': 'hiddenLink 0s ease-in-out 1s  forwards '
    });
    setTimeout(function() {
        location.replace(location.pathname + "#footer");
    }, 1000);
}