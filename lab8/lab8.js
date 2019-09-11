// Exercise 1:
const myString = new String('ahmed not ossama');
myString.filter = function (banned) {
    let stringWithoutBanned = '';
    let words = this.split(' ');
    for (let i in words) {
        let flag = false;
        for (let j in banned) {
            if (words[i] !== banned[j]) {
                continue;
            } else {
                flag = true;
            }
        }
        if (!flag) {
            stringWithoutBanned = stringWithoutBanned + words[i] + ' ';
        }
    }
    return stringWithoutBanned.substring(0, stringWithoutBanned.length - 1);
}
console.log(myString.filter(['not', 'me']));

// Exercise 2:
function bubble(arr) {
    let chek = true;
    while (chek) {
        chek = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                chek = true;
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
    return arr;
}
console.log(bubble([6, 4, 0, 3, -2, 1]));    // [ -2, 0, 1, 3, 4, 6 ]

// Exercise 3-a:
function Person(name) {
    this.name = name;
}

const teacher = new Person('Tina');
Person.prototype.teach = function (subject) {
    console.log(this.name + ' is teaching now ' + subject);
};
console.log(teacher.teach('WAP'));

//Exercise 3-b:
const person = {
    name: '',
    setName: function (name) {
        this.name = name;
    }
};

const teacher = Object.create(person);
teacher.setName('Tina!');
teacher.teach = function (subject) {
    console.log(this.name + ' is teaching now ' + subject);
}
teacher.teach('WAA!');


// exercise 4
const person = {
    name: 'ossama',
    age: 29,
    greetings: function () {
        return 'Greetings, my name is ' + this.name + ' and I am ' + this.age + ' years old';
    },
    sault: function () {
        return 'Good morning!, and in case I dont see you, good afternoon, good evening and good night!';
    }
};

const student = Object.create(person);
student.major = 'CS';
student.greetings = function () {
    return 'Hey, my name is ' + this.name + ' and I am studying ' + this.major;
}

const professor = Object.create(person);
professor.department = 'Computer Science';
professor.sault = function () {
    return 'Good day, my name is ' + this.name + ' and I am in the ' + this.department + ' department';
}

console.log('Student greetings: ' + student.greetings());
console.log('Student sault: ' + student.sault());
console.log('professor greetings: ' + professor.greetings());
console.log('professor sault: ' + professor.sault());



// Exercise 4 with 
function person() {
    this.name = 'ossama';
    this.age = 29;
}
person.prototype.greetings = function () {
    return 'Greetings, my name is ' + this.name + ' and I am ' + this.age + ' years old';
}
person.prototype.sault = function () {
    return 'Good morning!, and in case I dont see you, good afternoon, good evening and good night!';
}

const student = new person();
student.major = 'CS';
student.greetings = function () {
    return 'Hey, my name is ' + this.name + ' and I am studying ' + this.major;
}
console.log('Student greetings: ' + student.greetings());
console.log('Student sault: ' + student.sault());

const professor = new person();
professor.department = 'Computer Science';
professor.sault = function () {
    return 'Good day, my name is prof. ' + this.name + ' and I am in the ' + this.department + ' department';
}
console.log('professor greetings: ' + professor.greetings());
console.log('professor sault: ' + professor.sault());