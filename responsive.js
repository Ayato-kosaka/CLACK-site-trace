$(function() {
    //スマホ画面の左上のボタンをクリックしたら
    $("header .menu_icon i").click(function() {
        // リンクのメニューがなければ表示、あれば非表示
        $(".header_left .links").toggleClass("sp_display_none");
        // バーアイコンの表示非表示を交互にする
        $("header .menu_icon .fa-bars").toggleClass("sp_display_none");
        // バツアイコンの表示非表示を交互にする
        $("header .menu_icon .fa-times").toggleClass("sp_display_none");
    });
});