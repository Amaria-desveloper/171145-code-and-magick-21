'use strict';

const CLOUD_SIZE = {
  Width: 420,
  Height: 270
};

const CLOUD_COORDINATE = {
  X: 100,
  Y: 10
};

const FONT = {
  Size: 16,
};

const GAP = {
  Horizontal: 40,
};

const BAR = {
  Width: 40,
  MaxHeight: 150,
};

const BAR_HEIGHT = CLOUD_SIZE.Height - BAR.MaxHeight;

const createCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_SIZE.Width, CLOUD_SIZE.Height);
};


const createCloudHeadline = function (ctx) {
  ctx.fillStyle = `#000000`;
  ctx.font = `16px PT Mono`;
  ctx.fillText(`Ура вы победили!`, CLOUD_COORDINATE.X + 50, CLOUD_COORDINATE.Y + 20);
  ctx.fillText(`Список результатов:`, CLOUD_COORDINATE.X + 20, CLOUD_COORDINATE.Y + FONT.Size * 2.5);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

const getNameText = function (ctx, names, x, y) {
  ctx.fillStyle = `#000000`;
  ctx.fillText(names, x, y);
};

const getTimeText = function (ctx, times, x, y) {
  ctx.fillStyle = `#000000`;
  ctx.fillText(times, x, y);
};


window.renderStatistics = function (ctx, names, times) {
  createCloud(
      ctx,
      CLOUD_COORDINATE.X + 10,
      CLOUD_COORDINATE.Y + 10,
      `rgba(0, 0, 0, 0.3)`
  );

  createCloud(
      ctx,
      CLOUD_COORDINATE.X,
      CLOUD_COORDINATE.Y,
      `#ffffff`
  );

  createCloudHeadline(ctx);
  const maxTime = getMaxElement(times);
  for (let i = 0; i < names.length; i++) {
    getNameText(
        ctx,
        names[i],
        CLOUD_COORDINATE.X + GAP.Horizontal + (BAR.Width + GAP.Horizontal) * i,
        CLOUD_COORDINATE.Y + FONT.Size * 5
    );

    getTimeText(
        ctx,
        Math.round(times[i]),
        CLOUD_COORDINATE.X + GAP.Horizontal + (BAR.Width + GAP.Horizontal) * i,
        CLOUD_SIZE.Height - times[i] / maxTime
    );

    ctx.fillStyle = `hsl(240, ` + Math.floor(Math.random() * 100) + `%, 50%)`;
    if (names[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    }

    ctx.fillRect(
        CLOUD_COORDINATE.X + GAP.Horizontal + (BAR.Width + GAP.Horizontal) * i,
        CLOUD_SIZE.Height - (BAR_HEIGHT * times[i] / maxTime) - FONT.Size * 3,
        BAR.Width,
        BAR_HEIGHT * times[i] / maxTime
    );
  }
};
