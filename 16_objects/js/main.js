const obj = { name: "annonyousAsquare" };
console.log(obj.name);

let ob2 = {
    name: "Alainengiya",
    Dept: "Mechatronics",
    Fav_num: [1, 2, 3, 4, 5],
    inner_obj: {
        sex: "Male"
    },
    details: function () {
        return `my name is ${this.name}`
    }
}

console.log(ob2.inner_obj.sex);
console.log(ob2.Fav_num[0]);
console.log(Object.keys(ob2));
console.log(Object.values(ob2));
console.log(ob2.details());
console.log(ob2["Dept"]);

let details = {
    name: "Alas",
    Dept: "MCE",
    level: 400
};

student1 = Object.create(details);
student1.name = "Jonah";
console.log(student1.name);

for (key in student1) {
    console.log(student1[key]);
}

const { name, Dept, level } = student1;
console.log(name);

your_name = ({ name }) => {
    return `my name is ${name}`
};
console.log(your_name(student1));