// Project: Write a code that will return a random letter from your name

const my_name = "ALAINENGIYA";
length_of_my_name = my_name.length 
my_name_idx = Math.floor(Math.random() * length_of_my_name)
console.log(my_name.charAt(my_name_idx))