let asyncStart = Date.now();
while (Date.now() < asyncStart + 3000) {}
console.log('hello from async');