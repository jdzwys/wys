$(function() {
    var id = location.search.split('=')[1];
    $.ajax({
        type: "get",
        url: "../lib/getItem.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function(response) {
            // console.log(response);
            var pic = JSON.parse(response.pic);
            var temp = `
            <div class="introduce">
            <div class="introduce-t area">
                <p><a href="#">上装&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;<span>T桖</span></a></p>
            </div>
            <div class="message clear area">
                <div class="mes-l clear">
                    <div class="s-pg">
                        <div class="s-t">
                            <img src="../imgs/s-t.jpg" alt="">
                        </div>
                        <div class="s-b">
                            <img src="../imgs/s-b.jpg" alt="" >
                        </div>
                    </div>
                    <div class="b-pg">
                        <div class="clear">
                            <img src="../imgs/${pic[0].src}" alt="${pic[0].title}" class="b-one">
                            <img src="../imgs/${pic[0].src}" alt="${pic[0].title}" class="b-two">
                        </div>

                    </div>
                </div>
                <div class="mes-r">
                    <div class="mes-r-t">
                        <p class="id">商品编码：NNKB1900403630</p>
                        <h1>${response.title}</h1>
                        <p class="price-"><span>￥239.00</span><span>${response.price}</span></p>
                        <p class="color">颜色：<img src="../imgs/red.jpg" alt=""></p>
                        <p class="size">
                            尺寸：
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                            <span style=" border-color: #b4b4b4;
                            background-color: #b4b4b4;
                            color: #e0e3e9;">2XL</span>
                            <i>查看尺码表</i>
                        </p>
                        <p class="number-">数量：
                            <span class="remo">-</span>
                            <span style="color: #333" class="num-val">1</span>
                            <span class="addn">+</span>
                        </p>
                        <p class="btn-">
                            <input type="button" class="shop" value="立即购买" 
                            style="            margin-right: 12px;
                            background-color: #ec003d;
                            color: #fff;
                            min-width: 143px;
                            height: 40px;
                            border: 0;
                            border-radius: 3px;">
                            <a href ="../html/ShoppingCart.html">
                            <input type="button" class="join" value="加入购物车"
                            style="        border-radius: 3px;
                            border: 0;
                            background-color: #00559a;
                            min-width: 143px;
                            height: 40px;">
                            </a>
                            
                        </p>
                        <div class="tell">
                            <h6>加入我的心愿单</h6>
                            <p>价格说明</p>
                            <p>划线价格：划线的价格可能是商品的专柜价吊牌价或正品零售价指导价或该商品的曾经展示过的销售价等，仅供您参考</p>
                            <p>未划线价格：未划线的价格是商品在本平台上的销售标价，具体的成交价格可能因顾客使用优惠券等情况发生变化，最终以订单结算页价格为准。</p>
                            <p>（*此说明仅当出现价格比较时有效）。</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="s-title">
                <h5>商品描述</h5>
                <p>${response.details}</p>
            </div>
        </div>
            
            
            
            `;
            $('#main').prepend(temp).find('.join').on('click', function() {
                addCar(response.id, response.price, $('.num-val').text());
            })

        }
    });

    function addCar(id, price, num) {
        var shop = cookie.get('shop');
        var product = {
            "id": id,
            "price": price,
            "num": num
        };
        if (shop) {
            shop = JSON.parse(shop);

            if (shop.some(elm => elm.id == id)) {
                shop.forEach(function(elm, i) {
                    elm.id == id ? elm.num = num : null;
                });
            } else {
                shop.push(product);
            }
            cookie.set('shop', product);
        } else {
            shop = [];
            shop.push(product);
            cookie.set('shop', JSON.stringify(shop), 1)
        }

        // product = JSON.stringify(product);

        // cookie.set('shop', product);
    }
})