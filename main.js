function masuk(num) {
  $(".calc-display").val($(".calc-display").val() + num);
}
function hasil() {
  $(".calc-display").val(eval($(".calc-display").val()));
}
function hapus() {
  $(".calc-display").val("");
}
function del() {
  value = $(".calc-display").val();
  $(".calc-display").val(value.substring(0, value.length - 1));
}
