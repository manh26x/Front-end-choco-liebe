var listName = ["strawberry", "orange", "apple", "classic"];
var totalMoney = 0;
var addBoxIdList = ["#strawberryAddBox", "#orangeAddBox",
    "#appleAddBox", "#classicAddBox"];
var buyIdList = ["#buyStrawberry", "#buyOrange", "#buyApple",
    "#buyClassic"];
$(document).ready(function () {
    
    listName.forEach(function(name) {
        if(localStorage.getItem(name) > 0) {
            var className = '.column-'+name;
            $(className).removeClass("column-hidden");
            $(className +" .quantity-pay").html(localStorage.getItem(name));
            var money = 12.99*localStorage.getItem(name);
            $(className +" .total-price-pay").html(money);
            calcMoney();
        $('.count-product').html(totalMoney);
        $('#totalPrice').html(totalMoney);
        totalMoney+=5;
        $('#totalMoney').html(totalMoney);
        totalMoney-=5;
        }

        $('.column-'+name+' .ease-item').click(function(){
            $('.column-'+name).addClass('column-hidden');
            localStorage.setItem(name, 0);
            calcMoney();
        $('.count-product').html(totalMoney);
        $('#totalPrice').html(totalMoney);
        totalMoney+=5;
        $('#totalMoney').html(totalMoney);
        totalMoney-=5;
        });
    });
    calcMoney();
    $('.count-product').html(totalMoney);
});
function calcMoney() {
    totalMoney = 0;
    listName.forEach(function(name) {
        totalMoney += localStorage.getItem(name)*12.99;
    });
}
function showSuccess() {
        $('.modal-success').css({
            'top':'0',
            'animation': 'showSuccess 0.5s linear 0.02s  forwards',
            'z-index':'6'
        });
}
function closeSuccess() {
    var url = "";
    url = location.pathname.replace('payment.html', 'index.html#strawberry');
    location.replace(url);
}
function showCreditMethod(){
    $('.method-delivery').addClass('is-hidden-credit');
    $('.method-credit').removeClass('is-hidden-credit');
    $('.show-credit-form').removeClass('is-hidden-credit');
    $('.btn-credit-card').css('color', '#FF902C');
    $('.btn-card-delivery').css('color', '#000');
}
function hiddenCreditMethod() {
    $('.method-delivery').removeClass('is-hidden-credit');
    $('.method-credit').addClass('is-hidden-credit');
    $('.show-credit-form').addClass('is-hidden-credit');
    $('.btn-card-delivery').css('color', '#FF902C');
    $('.btn-credit-card').css('color', '#000');
}
function showMenu() {
    $('#modalMenuPay').css({
        'animation': 'showMenu 0.8s cubic-bezier(0.08, 1.02, 1, 1) 0.02s forwards',
        'z-index':'6'
    });
    $('.list-link li').css({
        'animation': 'showLink 1s ease-in-out 0.82s  forwards '
    });
}
function hiddenMenu() {
    $('#modalMenuPay').css('animation', 'hiddenMenu 0.8s cubic-bezier(0.08, 1.02, 1, 1) 0.02s forwards');
    $('.list-link li').css({
        'animation': 'hiddenLink 0s ease-in-out 1s  forwards ',
        'z-index':'-2'
    });
}



function showBuyBox() {
    isShowDialog = true;
    $('.modal-buy').css({
        'top': '0',
        'animation': 'showBuyBox 0.5s ease-in-out 0.0s forwards',
        'z-index':'6'
    });
    $('.dialog-buy').css({
        'animation': 'showDialog 0.5s ease-in-out 0.5s forwards'
    });

    var buyIdListInBox = [];
    buyIdList.forEach(function(item) {
        buyIdListInBox.push(item + "Box");
    });

    

    buyIdListInBox.forEach(function(element, index) {
        console.log((index + " " + localStorage.getItem(listName[index])));
        calcMoney();
        if(localStorage.getItem(listName[index]) > 0 ) {
            showElementInBox(element, listName[index], localStorage.getItem(listName[index]));
        } else {
            hiddenElementInBox(element, listName[index]);
        }
    });
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

    $(element + " .add-product").click(function () {
        countProduct ++;
        $(element + " .number-box").html(countProduct);
        total = countProduct*12.99;
        localStorage.setItem(name, countProduct);
        $(element + " .count-product").html(total);
        calcMoney();
        $('.column-'+name+' .quantity-pay').html(countProduct);
        $('.column-'+name+' .total-price-pay').html(total);
        $('#numberStrawberry').html(localStorage.getItem('strawberry'));
        $('#numberOrange').html(localStorage.getItem('orange'));
        $('#numberApple').html(localStorage.getItem('apple'));
        $('#numberClassic').html(localStorage.getItem('classic'));
        $('.sum').html(totalMoney);
    });
    $(element + " .sub-product").click(function () {
        countProduct = countProduct > 0 ? countProduct-1: 0;
        $(element + " .number-box").html(countProduct);
        total = countProduct*12.99;
        $(element + " .count-product").html(total);
        calcMoney();
        localStorage.setItem(name, countProduct);
        $('.sum').html(totalMoney);
        $('#numberStrawberry').html(localStorage.getItem('strawberry'));
        $('#numberOrange').html(localStorage.getItem('orange'));
        $('#numberApple').html(localStorage.getItem('apple'));
        $('#numberClassic').html(localStorage.getItem('classic'));
        $('.column-'+name+' .quantity-pay').html(countProduct);
        $('.column-'+name+' .total-price-pay').html(total);
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
        'animation': 'hiddenBuyBox 0.5s linear 0.1s forwards'
    });
    isShowDialog = false;
}


$(window).bind('mousewheel', function (evt) {

    if (evt.originalEvent.wheelDelta / 120 < 0) {
        
        $('.navbar-custom').css ({
            
            'animation': 'hiddenBar 1s linear 0.0s forwards'
        });
    } else {
        $('.navbar-custom').css ({
            'animation': 'hiddenBar 1s ease-in 1s forwards reverse',
            
        });
    }
});
function goProducts() {
    location.replace(location.pathname.replace('payment.html', 'index.html#strawberry'));
}
function goOurStory() {
    location.replace(location.pathname.replace('payment.html', 'our-story.html'));
}
function goContact() {
    $('.modal-menu').css({
        'animation': 'hiddenMenu 0.8s cubic-bezier(0.94, 0.13, 1, 1) 0.02s  forwards',
        'z-index':'-1'
    });
    $('.list-link li').css({
        'animation': 'hiddenLink 0s ease-in-out 1s  forwards '
    });
    setTimeout(function() {
        location.replace(location.pathname + "#footer");
    }, 1000);
}
