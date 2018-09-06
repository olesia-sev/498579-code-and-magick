'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var CLOUD_BOTTOM = 250;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var TEXT_HEIGHT = 16;
var TEXT_GAP = 50;

var drawCloud = function (ctx, x, y, cloudColor) {
  ctx.fillStyle = cloudColor;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  drawCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  drawCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 230, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', 220, CLOUD_Y + GAP + TEXT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle =
      names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 51, 102, 0.' + Math.ceil(Math.random() * 9) + '';

    var BAR_HEIGHT_RESULT = BAR_HEIGHT * Math.round(times[i]) / maxTime;

    // столбцы
    ctx.fillRect(
        CLOUD_X + TEXT_GAP + (BAR_WIDTH + TEXT_GAP) * i,
        CLOUD_HEIGHT - GAP - TEXT_HEIGHT - BAR_HEIGHT_RESULT,
        BAR_WIDTH,
        BAR_HEIGHT_RESULT);
    // цвет текста
    ctx.fillStyle = '#000';
    // вывод времени прохождения
    ctx.fillText(
        Math.round(times[i]) + '',
        CLOUD_X + TEXT_GAP + (BAR_WIDTH + TEXT_GAP) * i,
        CLOUD_HEIGHT - GAP - TEXT_HEIGHT - BAR_HEIGHT_RESULT - TEXT_HEIGHT);
    // вывод имен игроков
    ctx.fillText(names[i],
        CLOUD_X + TEXT_GAP + (BAR_WIDTH + TEXT_GAP) * i,
        CLOUD_BOTTOM + GAP);
  }
};
