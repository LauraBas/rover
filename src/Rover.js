export default class Rover {
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getOrientation() {
    return this.orientation;
  }
  move() {
    switch (this.orientation) {
      case 'N':
        this.y += 1;
        break;
      case 'S':
        this.y -= 1;
        break;
      case 'E':
        this.x += 1;
        break;
      case 'W':
        this.x -= 1;
    }
  }

  turnRigth() {
    switch (this.orientation) {
      case 'N':
        this.orientation = 'E';
        break;
      case 'E':
        this.orientation = 'S';
        break;
      case 'S':
        this.orientation = 'W';
        break;
      case 'W':
        this.orientation = 'N';
        break;
    }
  }

  turnLeft() {
    switch (this.orientation) {
      case 'N':
        this.orientation = 'W';
        break;
      case 'W':
        this.orientation = 'S';
        break;
      case 'S':
        this.orientation = 'E';
        break;
      case 'E':
        this.orientation = 'N';
        break;
    }
  }
}
