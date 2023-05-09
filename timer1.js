const args = process.argv.slice(2);

for (const arg of args) {
  if (!isNaN(arg) && arg >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg * 1000);
  }
}
