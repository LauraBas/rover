export default function(input) {
  let coordenates = input.split('\n');
  let plateau = coordenates[0];
  let plateauDimensions = plateau.split(' ');
  let xPlateau = parseInt(plateauDimensions[0]);
  let yPlateau = parseInt(plateauDimensions[1]);

  let roverPosition = coordenates[1];
  let roverInformation = roverPosition.split(' ');
  let x = parseInt(roverInformation[0]);
  let y = parseInt(roverInformation[1]);
  let roverOrientation = roverInformation[2];

  let commands = coordenates[2].split('');

  if (coordenates[3] == undefined) {
    return rover(xPlateau, yPlateau, x, y, roverOrientation, commands);
  }

  let secondRoverPosition = coordenates[3];
  let secondRoverInformation = secondRoverPosition.split(' ');
  let secondX = parseInt(secondRoverInformation[0]);
  let secondY = parseInt(secondRoverInformation[1]);
  let secondRoverOrientation = secondRoverInformation[2];

  let secondRoverCommands = coordenates[4].split('');

  return (
    rover(xPlateau, yPlateau, x, y, roverOrientation, commands) +
    '\n' +
    rover(xPlateau, yPlateau, secondX, secondY, secondRoverOrientation, secondRoverCommands)
  );
}

function rover(xPlateau, yPlateau, x, y, roverOrientation, commands) {
  function moveRover(c) {
    if (c == 'M') {
      move();
    } else if (c == 'L') {
      turnLeft();
    } else {
      turnRigth();
    }
  }
  function move() {
    switch (roverOrientation) {
      case 'N':
        y += 1;
        break;
      case 'S':
        y -= 1;
        break;
      case 'E':
        x += 1;
        break;
      case 'W':
        x -= 1;
    }
  }
  function turnLeft() {
    switch (roverOrientation) {
      case 'N':
        roverOrientation = 'W';
        break;
      case 'W':
        roverOrientation = 'S';
        break;
      case 'S':
        roverOrientation = 'E';
        break;
      case 'E':
        roverOrientation = 'N';
        break;
    }
  }

  function turnRigth() {
    switch (roverOrientation) {
      case 'N':
        roverOrientation = 'E';
        break;
      case 'E':
        roverOrientation = 'S';
        break;
      case 'S':
        roverOrientation = 'W';
        break;
      case 'W':
        roverOrientation = 'N';
        break;
    }
  }

  for (let i = 0; i < commands.length; i++) {
    moveRover(commands[i]);
    if (x > xPlateau || x < 0) {
      return 'Fall off';
    } else if (y > yPlateau || y < 0) {
      return 'Fall off';
    }
  }
  let roverNewPosition = x + ' ' + y + ' ' + roverOrientation;
  return roverNewPosition;
}
