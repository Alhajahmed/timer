let alarm = process.argv.slice(2);
console.log(alarm);
for (let sec of alarm) {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, sec * 1000);
}
// process.stdout.write("\x07");
// node timer1.js 10 3 5 15 9
