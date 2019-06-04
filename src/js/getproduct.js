$(function() {
    $.ajax({
        type: "get",
        url: "../lib/getproduct.php",
        dataType: "json",
        success: function(response) {
            //此时的response是数组
            // console.log(response);
            var prolist = $('.prolist');
            var template = '';
            response.forEach(function(elm, i) {
                // 此时的elm是对象
                var pic = JSON.parse(elm.pic);
                // console.log(pic);
                template = `
                <li class="item">
        <a href="../html/commodity.html?id=${elm.id}">
            <div class="p-img">
                <img src="../imgs/${pic[0].src}" alt="${pic[0].title}">
            </div>
            <div class="p-title">
                ${elm.title}
            </div>
            <div class="p-price">
                <span class="rmb">￥${elm.price}</span>
                <span class="rmb-before">￥299.00</span>
            </div>
        </a>
    </li>

    <li class="item">
    <a href="../html/commodity.html?id=${elm.id}">
        <div class="p-img">
            <img src="../imgs/${pic[0].src}" alt="${pic[0].title}">
        </div>
        <div class="p-title">
            ${elm.title}
        </div>
        <div class="p-price">
            <span class="rmb">￥${elm.price}</span>
            <span class="rmb-before">￥299.00</span>
        </div>
    </a>
</li>
        `;
                // 加入到html中，循环一次放一次

                // prolist.append(template);
                $('.prolist').prepend(template);
            });

        }
    });
})