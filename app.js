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

// 생성자 함수 활용
function User(username, email) {
  this.username = username;
  this.email = email;
  this.isAdmin = false; // 기본적으로 관리자가 아님
}

const user1 = new User("jslover", "jslover@example.com");
const user2 = new User("webmaster", "webmaster@example.com")

// 객체의 속성에 접근
console.log(user1.username); // "jslover"
console.log(user2.email); // "webmaster@example.com"
console.log(user1.isAdmin); // "false"
