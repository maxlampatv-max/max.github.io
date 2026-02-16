(function () {
  "use strict";

  var timer = setInterval(function () {
    if (typeof Lampa !== "undefined") {
      clearInterval(timer);

      Lampa.Utils.putScriptAsync(
        [
          "https://maxlampatv-max.github.io/max.github.io/buttons.js", // Кнопка 
          "https://maxlampatv-max.github.io/max.github.io/top_bar.js", //топ бар
          "https://maxlampatv-max.github.io/max.github.io/111.js", //онлайн 
          "https:// maxlampatv-max.github.io/max.github.io/rating_year.js",
          "https://maxlampatv-max.github.io/max.github.io/themes-alex.js",
          "https://icantrytodo.github.io/lampa/torrent_styles_v2.js", // стиль торрентов
          "https://darkestclouds.github.io/plugins/easytorrent/easytorrent.min.js" // рекомендация торрентов
        ],
        function () {}
      );
    }
  }, 200);
})();