(function($) {
    $.fn.extend({
        slider: function(options) {
            var main = null, //主函数
                that = this, //保存上下文环境
                init = null, //初始化
                stop = null, //停止
                start = null,
                next = null, //下一张
                prev = null, //上一张
                timer = null, //计算器
                elems = {}, //用于选取元素
                defaults = {
                    speed: 600, //动画切换的时间
                    delay: 3000 //banner图展示的时间
                };
            options = $.extend(defaults, options);
            //合并参数

            //初始化
            init = function() {
                elems._index = 1; //初始播放第一张
                elems.sliderDiv = that.children('div');
                elems.btn = that.children('span');
                elems.sliderDiv.append(elems.sliderDiv.children('img').first().clone());

                elems.btn.on('click', function() {
                    if (elems.btn.index($(this))) {
                        next();
                    } else {
                        prev();
                    }
                });

                that.hover(function() {
                    stop();
                }, function() {
                    timer = setInterval(start.bind(null, 1), options.delay + options.speed)
                });
            }

            // 开始动画
            start = function(fx) {
                t = "-=1400px";
                if (!fx) {
                    t = "+=1400px";
                    if (elems._index <= 1) {
                        var divLeft = that.offset().left,
                            imgLeft = elems.sliderDiv.children('img').last().offset().left;
                        elems._index = 4;
                        elems.sliderDiv.css('left', '-' + (imgLeft - divLeft) + 'px');
                    }
                }


                elems.sliderDiv.animate({
                    left: t
                }, options.speed, function() {
                    if (fx) elems._index++;
                    else elems._index--;

                    if (elems._index === 4) {
                        elems._index = 1;
                        elems.sliderDiv.css('left', 0);
                    }
                });

            }


            prev = function() {
                stop();
                start(0);

            };

            next = function() {
                stop();
                start(1);
            };

            stop = function() {
                elems.sliderDiv.stop(true, true);
                clearInterval(timer);
            }

            main = function() {
                init();
                timer = setInterval(start.bind(null, 1), options.delay + options.speed)
            }
            main();
        },
    })
})(jQuery);