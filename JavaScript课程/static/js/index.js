let main = function () {
    let step = () => {
        $('div').width($('div').width() + 1);
        requestAnimationFrame(step);
    }
    // requestAnimationFrame(step);
    // let $div = $('div');
    // let $btn_hide = $('#hide-btn');
    // let $btn_show = $('#show-btn');
    // $btn_hide.click(function () {
    //     $div.hide();
    // })
    // $btn_show.click(function () {
    //     $div.show();
    // })

    // $div.click(function () {
    //     let $a = $('<a href="https://www.baidu.com">Baidu</a>');
    //     $div.append($a);
    // })
    // let div = document.querySelector('div');
    // console.log(div);

    // let $div = $('.mydiv');
    // console.log($div);
    // let $div = $('div');
    // $div.on("click.name1", function (e) {
    //     console.log("click div");

    //     // $div.off("click.name2");
    // })
    // $('a').on("click", function (e) {
    //     // e.stopPropagation();
    //     e.preventDefault();
    // })
    // $div.on("click.name2", function () {
    //     console.log("click div2");
    //     // $div.off("click");
    // })
}

export {
    main
}