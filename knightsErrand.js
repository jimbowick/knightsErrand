var healthView = document.getElementById("healthView");
var equippedView = document.getElementById("equippedView");
healthView.UpdateHealthView(10);
var item1 = new Item("cool sword",-3);
var item2 = new Item("heal stick",1);
equippedView.UpdateEquippedView(item1,item2);