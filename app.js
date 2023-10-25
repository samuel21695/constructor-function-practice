// 함수 이름은 주로 대문자로 시작하여 관례적으로 생성자 함수임을 알림
// 생성자 함수 만들기
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 생성자 함수로 객체 만들기
// 'new' 키워드를 사용하면 생성자 함수를 이용, 객체를 만들 수 있다.
const person1 = new Person("John", 30);
const person2 = new Person("Alice, 25");
console.log(person1);
console.log(person2);
