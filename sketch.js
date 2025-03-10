let question, options, submitButton, result;

function setup() {
  createCanvas(windowWidth, windowHeight);
  question = createElement('h2', '1 + 1 = ?');
  question.position(width / 2 - 90 / 2, height / 2 - 100);

  options = createRadio();
  options.option('2');
  options.option('3');
  options.option('4');
  options.position(width / 2 - 90 / 2, height / 2 - 50);

  submitButton = createButton('送出');
  submitButton.position(width / 2 - submitButton.width / 2, height / 2);
  submitButton.mousePressed(checkAnswer);

  result = createElement('h2', '');
  result.position(width / 2 - result.width / 2, height / 2 + 50);
}

function draw() {
  background(220);
}

function checkAnswer() {
  const answer = options.value();
  if (answer === '2') {
    result.html('答對了！');
  } else {
    result.html('答錯了！');
  }
}
