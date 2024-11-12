// Javascript function to find the type of the angle 

function find_angle(angle){

    // just using if and else statement for getting the type of angle as per the angle.
    if (angle > 0 && angle < 90) {
        return "Acute angle";

      } else if (angle === 90) {
        return "Right angle";

      } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";

      } else if (angle === 180) {
        return "Straight angle";

      } else {
        return "Invalid angle";
      }
    }

console.log(find_angle(47))
console.log(find_angle(90))
console.log(find_angle(145))
console.log(find_angle(180))
