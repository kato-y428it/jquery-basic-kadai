$(function (){
  // class属性がbtnの要素がクリックされたら
  $('.btn').on('click', function (){
  // テキストボックス内にテキストを表示する(value属性の値を変更する)
  $('.text-box').val('クリックしました！');
  });
});
