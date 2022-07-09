// console.log()是控制台列印語法
// 最新年份日期函數 Date 產生每年都會自動更新的年份
// 宣告變數 year 來承接 new Date()
// 寫成函式要用時呼叫 "function Name()"即可自動執行，例：NewYear();

NewYear();
function NewYear() {
    var year = new Date().getFullYear();
    document.getElementById('Year').textContent = year;
    // console.log(year);
}
