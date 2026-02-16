(function () {
  "use strict";

  var timer = setInterval(function () {
    if (typeof Lampa !== "undefined") {
      clearInterval(timer);

      Lampa.Utils.putScriptAsync(
        [
          "https://maxlampatv-max.github.io/max.github.io/buttons.js", // Кнопка 
          "https://lampame.github.io/main/bo.js", // Бандера Онлайн
          "https://вашепосиланние1",
          "https://вашепосиланние2",
          "https://вашепосиланние3",
          "https://icantrytodo.github.io/lampa/torrent_styles_v2.js", // стиль торрентов
          "https://darkestclouds.github.io/plugins/easytorrent/easytorrent.min.js" // рекомендация торрентов
        ],
        function () {}
      );
    }
  }, 200);
})();