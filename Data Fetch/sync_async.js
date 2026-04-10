//1. Synchronous (Sync)
//Code runs line by line, one after another
// Next line waits until the previous line finishes

// 2. Asynchronous (Async)
// Code does NOT wait -it moves to next line while task runs in background

// await tells JavaScript:
// Pause here until this async task finishes, then continue.
// It only pauses inside that function, not the whole program
//Makes async look sync

//Without await in fetch it returns Promise { pending }
// You don’t get actual data

//What is a Promise?
//A Promise is an object that represents:
//A value that will be available now, later, or maybe never.
//A Promise is a future result of an async operation
