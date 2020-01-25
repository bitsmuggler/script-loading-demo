let asyncStart = Date.now();
while (Date.now() < asyncStart + 5000) {}
console.log('hello from async');