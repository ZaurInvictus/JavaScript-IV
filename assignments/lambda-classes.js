class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
};


class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  };



  gradeCounter(student) {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    return {
      increment: () => console.log(`${student.name}'s grade is ${student.grade}. After adding ${randomNum}, points are ${student.grade = student.grade + randomNum}!`),
      decrement: () => console.log(`${student.name}'s grade is ${student.grade}. After subtracting of ${randomNum}, remaining points are ${student.grade = student.grade - randomNum}!`)
    }
  }
};


class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = props.grade;
  }
  listsSubjects() {
    this.favSubjects.forEach((e) => {
      console.log(e);
    });
  }
  PRAssignment(subject) {
    return console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    return console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate(student) {
    if (student.grade >= 70) {
      console.log(`Congratulations! ${student.name}, you've graduated!`);
    } else {
      console.log(`Sorry ${student.name}. You don't have enough points to graduate`);
    }
  }
};


class ProjectManagers extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(channel) {
    return console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }
  debugCode(student, subject) {
    return console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
};


const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const keiran = new Instructor({
  name: 'Keiran',
  location: 'Baku',
  age: 20,
  specialty: 'JavaScript'
});

const zaur = new Student({
  name: 'Zaur',
  favSubjects: ['Html', 'CSS', 'JavaScript'],
  grade: 65
});

const kolyan = new Student({
  name: 'Kolyan',
  favSubjects: ['Node.js', 'LESS', 'Python'],
  grade: 10
});

const abdul = new ProjectManagers({
  name: 'Abdul',
  gradClassName: 'CS1',
  favInstructor: 'Sean',
});

const catlin = new ProjectManagers({
  name: 'Catlin',
  gradClassName: 'CS9',
  favInstructor: 'Den',
});


// INSTRUCTOR LOGS
console.log(`//////////INSTRUCTOR LOGS///////////`)
console.log(fred.name);
console.log(fred.specialty);
console.log(fred.demo('HTML'));
console.log(fred.grade(zaur, 'CSS'));
console.log(`${keiran.name} likes teaching ${keiran.specialty}`);
keiran.gradeCounter(zaur).increment();
keiran.gradeCounter(zaur).decrement();
keiran.gradeCounter(zaur).increment();
keiran.gradeCounter(zaur).increment();

// STUDENT LOGS
console.log(`/////////STUDENT LOGS START//////////`)
console.log(zaur.name);
console.log(zaur.favSubjects);
zaur.listsSubjects();
zaur.PRAssignment('React');
zaur.sprintChallenge('Node.js');
console.log(kolyan.name);
console.log(`Kolyan's favourite subjects are ${kolyan.favSubjects}`);
console.log(`Zaur's grade: ${zaur.grade}, Kolyan's grade: ${kolyan.grade}`)
zaur.graduate(zaur);
kolyan.graduate(kolyan);

// PM LOGS
console.log(`//////////PM LOGS START///////////`)
abdul.standUp('slack');
abdul.debugCode(zaur, 'SQL');
catlin.standUp('slack');
catlin.debugCode(kolyan, 'Python');

abdul.gradeCounter(zaur).increment();
abdul.gradeCounter(zaur).decrement();

catlin.gradeCounter(kolyan).increment();
catlin.gradeCounter(kolyan).decrement();

