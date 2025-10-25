$(function () {
  // id属性change-colorの要素がクリックされたら
  $('#change-color').on('click', function() {
    // 文字色を変更する
    $('#target').css('color', 'orange');
  });
  // id属性change-textの要素がクリックされたら
  $('#change-text').on('click', function() {
    // 文字内容を変更する（イタリア語）
    $('#target').text('Ciao！');
  });
  // id属性fade-outの要素がクリックされたら
  $('#fade-out').on('click', function() {
    // フェードアウトで文字が消える
    $('#target').fadeOut();
  }); 
  // id属性fade-inの要素がクリックされたら
  $('#fade-in').on('click', function() {
    // フェードインで文字が現れる
    $('#target').fadeIn();
  }); 
});