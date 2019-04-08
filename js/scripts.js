// Business Logic for ToDo ---------
function ToDo() {
  this.Items = []
}

ToDo.prototype.addItem = function(Item) {
  this.Items.push(Item);
}

// Business Logic for Items ---------
function Item(listItem) {
  this.listItem = listItem
}

console.log(Item)


// User Interface Logic --------

// $(document).ready(function()  {
//   $("form.btn").submit(function(event) {
//     event.preventDefault();
//     var inputtedlistItem = $("input#listItem").val();
//     var newItem = new Item(inputtedlistItem);
//     ToDo.addItem(newItem);
//     console.log(ToDo.Items);
//   });
// });










//
// ToDo.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }
//
// ToDo.prototype.deleteItem = function(id) {
//   for (var i=0; i< this.Items.length; i++) {
//     if (this.Items[i]) {
//       if (this.Items[i].id == id) {
//         delete this.Items[i];
//         return true;
//       }
//     }
//   };
//   return false;
