// MenuNavOpenShow();
// function MenuNavOpenShow() {
//     let Menu = document.getElementById('MenuNavOpen');
//     Menu.style.display = 'none';
// }

MenuNavOpenShow();
function MenuNavOpenShow() {
    // $ jQuery的變數前綴詞
    // 隱藏選單
    $('#MenuNavOpen').hide();

    // 開啟選單
    $('#MenuBtn').click( function() {
        $('#MenuNavOpen').show();
        $('#MainNav').hide();
        $('#Main').hide();
        $('#Footer').hide();
    })

    // 關閉選單
    $('#Close').click( function() {
        $('#MenuNavOpen').hide();
        $('#MainNav').show();
        $('#Main').show();
        $('#Footer').show();
    })
}