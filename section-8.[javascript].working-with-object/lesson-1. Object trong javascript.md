# OBJECT TRONG JAVASCRIPT.
- Trong javascript có khai khái niệm quan trọng là Properties, và Methods.

## Một vài cách khai báo phổ biến
```bash
// C1
var person = {
    name: 'Hùng', // property
    age: 18, // property,
    run: function() { // method
        console.log('Chaỵ bộ');
    }
}
// C2
var person2 = new Object({
    name: 'Hùng', // property
    age: 18, // property,
    run: function() { // method
        console.log('Chaỵ bộ');
    }
});

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.run());

console.log(person2);
console.log(person2['name']);
console.log(person2['age']);
console.log(person2.run());
```

## 3. Set property or method cho object.
```md
<!-- Set những properties và methods này cho object student. -->
properties:
    name, age, teacher, className, year
methods:
    learn, comunication
```

```bash
var student = new Object();

console.log(student);

student.name = 'Nguyễn Văn A';
student.age = 18;
student.teacher = 'Co Lan';
student['className'] = 'C205';
student['year'] = 1;

student.learn = function() {
    console.log('learn javascript');
}

student.comunication = function() {
    console.log('Comunication with friends');
}

console.log(student.comunication());

```

## 4. Xóa properties hoặc methods
```bash
var person = {
    name: 'Hùng', // property
    age: 18, // property,
    run: function() { // method
        console.log('Chaỵ bộ');
    }
}
console.log(person);
delete person.name;
delete person.age;
delete person.run;
console.log(person);
```

## 5. Từ khóa 'this' trong javascript
- Xem xét vd dưới
```bash
var person = {
    firstName: 'Hung', // property
    lastName: 'Pham', // property
    getFullName: function() {
        // nếu this ở trong function mà có chữ function thì This đại diện cho chính object đó
        return this.lastName + ' ' + this.firstName;
        // return person.lastName + ' ' + person.firstName;
    },
    myClass: {
        name: 'C102',
        teacher: 'Co Thu',
        majorOfTeacher: 'CNTT',
        getMajorOfTeacher: function () {
            // return person.myClass.teacher + ' day ' + person.myClass.majorOfTeacher
            return this.teacher + ' day ' + this.majorOfTeacher;
        }
    }
};

console.log(person.myClass.getMajorOfTeacher());
```
