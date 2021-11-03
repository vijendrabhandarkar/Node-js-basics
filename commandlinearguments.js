const args = process.argv;
/* 
Note:
The process. argv property is an inbuilt application programming interface of the process module 
which is used to get the arguments passed to the node. js process when run in the command line.
*/
console.log(args);

if (args[2] === "add") {
  console.log("Adding");
} else if (args[2] === "delete") {
  console.log("Deleting");
}
