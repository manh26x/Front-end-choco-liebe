var buyList = new Map();
var isShowDialog = false;
buyList.set('strawberry', 0);
buyList.set('orange', 0);
buyList.set('apple', 0);
buyList.set('classic', 0);
var totalMoney = 0;
var listName = ["strawberry", "orange", "apple", "classic"]
var addBoxIdList = ["#strawberryAddBox", "#orangeAddBox",
    "#appleAddBox", "#classicAddBox"];
var buyIdList = ["#buyStrawberry", "#buyOrange", "#buyApple",
    "#buyClassic"];
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
        var strawberryY = $('#strawberry').offset().top;
        var orangeY = $('#orange').offset().top;
        var appleY = $('#apple').offset().top;
        var classicY = $('#classic').offset().top;
        var serviceY = $('#service').offset().top;
        addBoxIdList.forEach(function (item, index, arry) {
            if (buyList.get(listName[index]) == 0) {
                $(item).removeClass('is-hidden');
                $(buyIdList[index]).removeClass('is-showing');
                $(item).addClass('is-showing');
                $(buyIdList[index]).addClass('is-hidden');
            }
        });
        $('.homea').css('background-color', 'white');
        $('.strawa').css('background-color', 'white');
        $('.orangea').css('background-color', 'white');
        $('.applea').css('background-color', 'white');
        $('.classica').css('background-color', 'white');
        $('.servicea').css('background-color', 'white');
        $('.navbar-custom').css('transform', 'translateY(0px)');
        $('#strawberryChoco').removeClass('show-chocolate');
        $('#orangeChoco').removeClass('show-chocolate');
        $('#appleChoco').removeClass('show-chocolate');
        $('#classicChoco').removeClass('show-chocolate');
        if (wScroll < strawberryY- 10) {
            $('.homea').css('background-color', 'red');
        } else {

            if (wScroll >= strawberryY- 10 && wScroll < orangeY- 10) {
                $('.strawa').css('background-color', 'red');
               
                $('#strawberryChoco').addClass('show-chocolate');
                
            } else if (wScroll >= orangeY- 10 && wScroll < appleY- 10) {
                $('.orangea').css('background-color', 'red');
              
                $('#orangeChoco').addClass('show-chocolate');
            } else if (wScroll >= appleY - 10&& wScroll < classicY - 10) {
                $('.applea').css('background-color', 'red');
              
                $('#appleChoco').addClass('show-chocolate');
            } else if (wScroll >= classicY - 10 && wScroll < serviceY - 10) {
                $('.classica').css('background-color', 'red');
               
                $('#classicChoco').addClass('show-chocolate');
            } else if (wScroll >= serviceY - 10) {
                $('.servicea').css('background-color', 'red');
                $('.navbar-custom').css('transform', 'translateY(-200px)');
            }

        }
});

$(window).bind('mousewheel', function (evt) {
    
    if (isShowDialog == false) {
        
    var wScroll = $(this).scrollTop();
    var strawberryY = $('#strawberry').offset().top;
    var orangeY = $('#orange').offset().top;
    var appleY = $('#apple').offset().top;
    var classicY = $('#classic').offset().top;
    var serviceY = $('#service').offset().top;
    $('.img-product').addClass('animation-product');
    setTimeout(function(){
        $('.img-product').removeClass('animation-product');
    },1250);
    if (evt.originalEvent.wheelDelta / 120 < 0) {
        
        
        if (wScroll < strawberryY) {
            
            $('html, body').animate({
                scrollTop: $("#strawberry").offset().top
            }, 100);
            
        } else if (wScroll >= strawberryY && wScroll < orangeY) {
            $('html, body').animate({
                scrollTop: $("#orange").offset().top
            }, 100);
        } else if (wScroll >= orangeY && wScroll < appleY) {
            $('html, body').animate({
                scrollTop: $("#apple").offset().top
            }, 100);
        } else if (wScroll >= appleY && wScroll < classicY) {
            $('html, body').animate({
                scrollTop: $("#classic").offset().top
            }, 100);
        } else if (wScroll >= classicY && wScroll < serviceY - 20) {
            $('html, body').animate({
                scrollTop: $("#service").offset().top
            }, 100);
        }
    } else {
        if (wScroll > serviceY - 20) {
           
            $('html, body').animate({
                scrollTop: $("#classic").offset().top
            }, 100);
        } else if (wScroll >= classicY - 20 && wScroll < serviceY - 20) {
            $('html, body').animate({
                scrollTop: $("#apple").offset().top
            }, 100);
        } else if (wScroll >= appleY - 20 && wScroll < classicY - 20) {
            $('html, body').animate({
                scrollTop: $("#orange").offset().top
            }, 100);
        } else if (wScroll >= orangeY - 20 && wScroll < appleY - 20) {
            $('html, body').animate({
                scrollTop: $("#strawberry").offset().top
            }, 100);
        } else if (wScroll >= strawberryY - 30 && wScroll < orangeY - 20) {
            $('html, body').animate({
                scrollTop: $("#homeVideo").offset().top
            }, 100);
        }
    }
}
});



$(document).ready(function () {
    $('.img-product').mouseenter(function () {
        $('.front-product-img').css({
            'animation': 'flip-hidden 0.2s  ease-in-out 0s forwards'
        });
        $('.back-product-img').css({
            'animation': 'flip-show 0.2s  ease-in-out 0.2s forwards'
        });
    });
    $('.img-product').mouseleave(function () {
        $('.front-product-img').css({
            'transform': 'rotateY(90deg)'
        });
        $('.front-product-img').css({
            'animation': 'flip-show 0.2s ease-in-out 0.2s forwards'
        });
        $('.back-product-img').css({
            'animation': 'flip-hidden 0.2s ease-in-out 0s forwards'
        });

    });
    $('#menuModal').click(function (e) {
        e.preventDefault();
        $('.modal-menu').css({
            'animation': 'showMenu 0.8s cubic-bezier(0.08, 1.02, 1, 1) 0.02s  forwards ',
            'z-index':'5'
        });
        $('.list-link li').css({
            'animation': 'showLink 1s ease-in-out 0.82s  forwards '
        });
    });
    $('.close-menu').click(function (e) {
        e.preventDefault();
        $('.modal-menu').css({
            'animation': 'hiddenMenu 0.8s cubic-bezier(0.94, 0.13, 1, 1) 0.02s  forwards',
            'z-index':'-1'
        });
        $('.list-link li').css({
            'animation': 'hiddenLink 0s ease-in-out 1s  forwards '
        });
    });
    $('#searchIcon').click(function (e) {
        e.preventDefault();
        $('#searchIcon input').removeClass('hidden-input');
        $('#searchIcon').addClass('is-show-input');
        $('.hidden-input').css(
            'width', '300px'
        );
    });
    $('.cover-video').click(function (e) {
        var str = $('#searchIcon input').val().toString().trim();
        if (0 === str.length || !str) {
            console.log("okok");
            $('#searchIcon').removeClass('is-show-input');
            $('#searchIcon input').addClass('hidden-input');
        }
    });
    addBoxIdList.forEach(function (item, index, arry) {
        $(item).click(function () {
            $(item).removeClass('is-showing');
            $(buyIdList[index]).removeClass('is-hidden');
            $(item).addClass('is-hidden');
            $(buyIdList[index]).addClass('is-showing');
            buyList.set(listName[index], 1);
            $('#numberStrawberry').html(buyList.get('strawberry'));
            $('#numberOrange').html(buyList.get('orange'));
            $('#numberApple').html(buyList.get('apple'));
            $('#numberClassic').html(buyList.get('classic'));
        });
        
    });
    
    buyIdList.forEach(function (item, index, arry) {
        $(item + " .add-product").click(function () {

            var count = buyList.get(listName[index]);
            buyList.set(listName[index], count + 1);
            $('#numberStrawberry').html(buyList.get('strawberry'));
            $('#numberOrange').html(buyList.get('orange'));
            $('#numberApple').html(buyList.get('apple'));
            $('#numberClassic').html(buyList.get('classic'));
        });

        $(item + " .sub-product").click(function () {
            var count = buyList.get(listName[index]);
            if (count > 0) {
                buyList.set(listName[index], count - 1);
            }
            if(count == 1) {
                $(addBoxIdList[index]).removeClass('is-hidden');
                $(buyIdList[index]).removeClass('is-showing');
                $(addBoxIdList[index]).addClass('is-showing');
                $(buyIdList[index]).addClass('is-hidden');
            } else {
                $('#numberStrawberry').html(buyList.get('strawberry'));
            $('#numberOrange').html(buyList.get('orange'));
            $('#numberApple').html(buyList.get('apple'));
            $('#numberClassic').html(buyList.get('classic'));
            }


            
        });

    });
});

var checked = false;

function clickCheck() {
    if (checked) {
        $('.checked-box').css({
            'opacity': '0'
        });
        $('.checked-box').css({
            'z-index': '0'
        });
        checked = false;
    } else {
        $('.checked-box').css({
            'opacity': '1'
        });
        $('.checked-box').css({
            'z-index': '2'
        });
        checked = true;
    }

}

function hiddenBox() {
    $('.dialog-buy').css({
        'animation': 'hiddenDialog 0.1s ease-in-out 0s forwards'
    });
    $('.modal-buy').css({
        'animation': 'hiddenBuyBox 0.5s linear 0.1s forwards',
        'z-index':'-1'
    });
    $('html, body').animate({
        'position':'absolute'
    });
    isShowDialog = false;
}
function showBuyBox() {
    isShowDialog = true;
   
    $('.modal-buy').css({
        'animation': 'showBuyBox 0.5s ease-in-out 0.0s forwards',
        'z-index':'5'
    });
    $('.dialog-buy').css({
        'animation': 'showDialog 0.5s ease-in-out 0.5s forwards'
    });
    $('html, body').animate({
        'position':'fixed'
    });
    var buyIdListInBox = [];
    buyIdList.forEach(function(item) {
        buyIdListInBox.push(item + "Box");
    });

    
    var numberOfProducts = 0;
    buyIdListInBox.forEach(function(element, index) {
        console.log((index + " " + buyList.get(listName[index])));
        numberOfProducts += buyList.get(listName[index]);
        calTotal();
        if(buyList.get(listName[index]) > 0 ) {
            showElementInBox(element, listName[index], buyList.get(listName[index]));
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

    $(element + " .add-product").click(function () {
        countProduct ++;
        $(element + " .number-box").html(countProduct);
        total = countProduct*12.99;
        buyList.set(name, countProduct);
        $(element + " .count-product").html(total);
        calTotal();
        $('#numberStrawberry').html(buyList.get('strawberry'));
        $('#numberOrange').html(buyList.get('orange'));
        $('#numberApple').html(buyList.get('apple'));
        $('#numberClassic').html(buyList.get('classic'));
        $('.sum').html(totalMoney);
    });
    $(element + " .sub-product").click(function () {
        countProduct = countProduct > 0 ? countProduct-1: 0;
        $(element + " .number-box").html(countProduct);
        total = countProduct*12.99;
        $(element + " .count-product").html(total);
        calTotal();
        buyList.set(name, countProduct);
        $('.sum').html(totalMoney);
        $('#numberStrawberry').html(buyList.get('strawberry'));
        $('#numberOrange').html(buyList.get('orange'));
        $('#numberApple').html(buyList.get('apple'));
        $('#numberClassic').html(buyList.get('classic'));
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

function saveFile() {
    JSON.parse(buyList)
}
function calTotal() {
    totalMoney=0;
    listName.forEach(function(name) {
        totalMoney+=buyList.get(name)*12.99;
    });
}
var hashURL = location.pathname;
function gotoPayment() {

    var numberOfProducts = 0;
    listName.forEach(function(name) {
        numberOfProducts += buyList.get(name);
    });
    if(numberOfProducts > 0) {
        listName.forEach(function(item) {
            localStorage.setItem(item, buyList.get(item));
        });
        location.replace(hashURL.replace('index', 'payment'));
    }
}

function goToID(id) {
    location.replace(hashURL.replace('index.html', 'index.html'+id));
}
function goToProducts() {
    $('.modal-menu').css({
        'animation': 'hiddenMenu 0.8s cubic-bezier(0.94, 0.13, 1, 1) 0.02s  forwards'
    });
    $('.list-link li').css({
        'animation': 'hiddenLink 0s ease-in-out 1s  forwards '
    });
    setTimeout(function() {
        location.replace(location.pathname.replace('index.html', 'index.html'+ "#strawberry"));
    }, 500);
}
function goHome() {
    location.replace(location.pathname);
}
function goFooter(){
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
function goToProductsFromUs() {
    location.replace(hashURL.replace('our-story.html', 'index.html#strawberry'));
}
function goHomeFromUs() {
    location.replace(hashURL.replace('our-story.html', 'index.html'));
}
function goOurStoryFromSelf() {
    location.replace(location.pathname);
}
function goOurStory() {
        location.replace(hashURL.replace('index.html', 'our-story.html' ));
    
}
function goProductAt(nowProduct) {
    nowProduct = nowProduct*1;
    localStorage.setItem('nowProduct', nowProduct);
    listName.forEach(function(name) {
        localStorage.setItem(name, buyList.get(name));
    });
    location.replace(location.pathname.replace('index.html', 'products.html'));
} 