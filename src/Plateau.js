export default class Plateau {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }

  isOutsideLimits(objectX, objectY) {
    if (objectX > this.x || objectX < 0) {
      return true;
    } else if (objectY > this.y || objectY < 0) {
      return true;
    }
    return false;
  }
}
