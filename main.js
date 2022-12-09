var tv5 = ["Adventure Time",
    "Avatar the Last Airbender",
    "Nathan For You",
    "Neon Genesis Evangelion",
    "American Vandal"
];

for (var num1 = 1000; num1 >= 0; num1 -= 2) {
    console.log(num1);
}

for (var num2 = 0; num2 <= 10000; num2++) {
    if (num2 == 2500) {
        // console.log(num2);
        alert("A quarter of the way there!");
    } else if (num2 == 5000) {
        // console.log(num2);
        alert("Halfway there!");
    } else if (num2 ==10000) {
        // console.log(num2);
        alert("The loop is done!");
    }
}

for (var i = 0; i < tv5.length; i++) {
   console.log("My #" + [i + 1] + " favorite TV show is " + tv5[i] + ".")
}