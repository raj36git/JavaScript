// //callback function : function passed as arguement of another function
// const greet = ()=>{
//     console.log("Hello");
// }
// setTimeout(greet,2000);

//callback hell : Nested callabck function
// // get data
// function getData(dataId) {
//   setTimeout(() => {
//     console.log("data", dataId);
//   }, 2000);
// }
// getData(33);

//// get data1,data2,data3 in order after some delay
// function getData(dataId) {
//   setTimeout(() => {
//     console.log("data1", dataId);
//     setTimeout(() => {
//       console.log("data2", dataId);
//       setTimeout(() => {
//         console.log("data3", dataId);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }
// getData(33);
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
// getData(1, function() {
//   getData(2, function() {
//     getData(3, function() {
//       getData(4);
//     });
//   });
// });
getData(1, () => {
  console.log("getting data2...");
  getData(2, () => {
    console.log("getting data3...");
    getData(3, () => {
      console.log("getting data4...");
      getData(4);
    });
  });
});
