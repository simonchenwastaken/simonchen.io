
class Vector {
  constructor (x, y) {
    this.x = x,
    this.y = y
  }

  magnitude = () => {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  
  add = (v) => {
    return new Vector(v.x + this.x, v.y + this.y);
  }

  difference = (v) => {
    return new Vector(v.x - this.x, v.y - this.y);
  }

  distance = (v) => {
    return this
      .difference(v)
      .magnitude();
  }
  
  scale = (s) => {
    return new Vector(s * x, s * y);
  }
  
  normalize = () => {
    const mag = this.magnitude();
  
    if (mag === 0) {
      return new Vector(0, 0);
    }
  
    return this.scale(1 / mag);
  }
  
  toString = () => {
    return `{x: ${this.x}, y: ${this.y}}`
  }
}