// 1. Создаем массив с 4 элементами
let fruits = ["Olma", "Banan", "Gilos", "Anor"];

// Показываем длину массива через console.log и alert
console.log("Massiv uzunligi: " + fruits.length);
alert("Massiv uzunligi: " + fruits.length);

// 2. Спрашиваем пользователя, удалить ли элемент
let isDelete = confirm("Massivdan element o'chirishni xohlaysizmi?");

// 3. Если OK — удаляем последний элемент
if (isDelete) {
    fruits.pop(); // удаляет последний элемент
    alert("Element o'chirildi. Yangi massiv: " + fruits);
    console.log("Yangi massiv:", fruits);
} else {
    // 4. Если Отмена — массив не меняется
    alert("Massiv o'zgarmadi: " + fruits);
    console.log("Massiv o'zgarmadi:", fruits);
}