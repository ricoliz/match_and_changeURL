<script>
$(function() {

var newURL = "";
var host = "";
host = window.location.host;
if((host == 'ここと') || (host == 'ここに特定のドメインを入れる')){
}else{

		$(".js_replace").each(function(i, e){
		　//取得する：　ahrefとimgを取得
			var $a = $(this).find("a");
			var $img = $(this).find("img");

			//★該当するahrefをすべて探す。
			$a.each(function(i) {
				//パフォーマンス上げるため、入れとく。a⇒this
				var $this = $(this);
				//stringに直さないと、matchは文字列でないとできない
				var srcNow = String($this.attr('href'));
				replacePath(srcNow, $this, 'a');
			})
			//★該当するimgをすべて探す。
			$img.each(function(i) {
				var $this = $(this);
				var srcNow = String($this.attr('src'));
				replacePath(srcNow, $this, 'img');
			})
			//aとimgの取得したいkey情報を入れておく
			function replacePath(path, element, tag) {
				var data = {
					a: "href",
					img: "src"
				}
				var $element = element;
				//　　　先頭を表す⇒　^/ ←　スラッシュが先頭の時。
				var checkHref = /^\//;

				// スラッシュが先頭の時に、/aaaとパスをくっつける。←こうしたいパス
				if(path.match(checkHref)) {
					var newHref = "/aaa" + path;
					//key情報を
					$element.attr(data[tag], newHref);
				}
			}

	});

}
});


</script>