import Plateau from './Plateau';
import Rover from './Rover';

export default function(input) {
  let data = input.split('\n');
  let plateau = data.shift();
  let plateauDimensions = plateau.split(' ');
  let xPlateau = parseInt(plateauDimensions[0]);
  let yPlateau = parseInt(plateauDimensions[1]);
  const mars = new Plateau(xPlateau, yPlateau);

  const roverInstructions = [];
  for (let i = 0; i < data.length; i += 2) {
    roverInstructions.push([data[i], data[i + 1]]);
  }

  return roverInstructions
    .map(instructions => {
      let roverPosition = instructions[0];
      let roverInformation = roverPosition.split(' ');
      let x = parseInt(roverInformation[0]);
      let y = parseInt(roverInformation[1]);
      let roverOrientation = roverInformation[2];
      const r = new Rover(x, y, roverOrientation);

      let commands = instructions[1].split('');

      return rover(commands, mars, r);
    })
    .join('\n');
}

function rover(commands, mars, rover) {
  function moveRover(c) {
    if (c == 'M') {
      rover.move();
    } else if (c == 'L') {
      rover.turnLeft();
    } else {
      rover.turnRigth();
    }
  }

  for (let i = 0; i < commands.length; i++) {
    moveRover(commands[i]);
    if (mars.isOutsideLimits(rover.getX(), rover.getY())) {
      return 'Fall off';
    }
  }

  let roverNewPosition = rover.getX() + ' ' + rover.getY() + ' ' + rover.getOrientation();
  return roverNewPosition;
}
