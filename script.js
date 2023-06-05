var weekday = new Date().toLocaleString("en-US", { weekday: "long" });
// Your code here
//console.log(weekday);
if (weekday === "Monday") {
  console.log(`Let's get this week started!`);
} else if (weekday === "Tuesday") {
  console.log(`Worky work!`);
} else if (weekday === "Wednesday") {
  console.log(`Happy humpday!`);
} else if (weekday === "Thursday") {
  console.log(`It's thirsty thursday!`);
} else if (weekday === "Friday") {
  console.log(`Weekend's almost here!`);
} else {
  console.log(`IT'S THE WEEKEND! YAY!`);
}
