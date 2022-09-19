// class User {
//     private _username: string;
//     private _password: string;
//     private _id: string;
//     constructor (username, password) {
//         this._username = username;
//         this._password = password;
//     }
//     set password(password) {
//         this._password = password;
//     }
//     set username(username) {
//         this._username = username;
//     }
// }
// class Database {
//   private _url;
//   private _port;
//   private _username;
//   private _password;
//   private _tables;
//   constructor(url, port, username, password) {
//     this._url = url;
//     this._port = port;
//     this._username = username;
//     this._password = password;
//     this._tables = [];
//   }
//   public addNewTable(table) {
//     this._tables.push(table);
//   }
// }
// class Person {
//   name;
//   surname;
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   greeting() {
//     return `Я человек`;
//   }
// }
// class Employee extends Person {
//   inn;
//   snils;
//   constructor(name, surname, inn, snils) {
//     super(name, surname);
//     this.inn = inn;
//     this.snils = snils;
//   }
//   greeting() {
//     return `Я работник`;
//   }
// }
// class Developer extends Employee {
//   level;
//   constructor(name, surname, inn, snils, level) {
//     super(name, surname, inn, snils);
//     this.level = level;
//   }
//   greeting() {
//     return `Я разработчик`;
//   }
// }
// let as = "str";
// let a1 = new Person(as, as);
// let a2 = new Employee(as, as, as, as);
// let a3 = new Developer(as, as, as, as, as);
// let arr: Person[] = [a1, a2, a3];
// for (let el of arr) {
//   console.log(el.greeting());
// }
// пример полиморфизма
// class Book {}
// interface Write<T> {
//   write: (obj: T) => void;
// }
// class FileWriter implements Write<Book> {
//   write(book: Book) {}
// } пример имплементации и обобщения
// dep inj
var User = /** @class */ (function () {
    function User(age, name) {
        this.age = age;
        this.name = name;
    }
    return User;
}());
var MongoUserRepo = /** @class */ (function () {
    function MongoUserRepo() {
    }
    MongoUserRepo.prototype.getUsers = function () {
        return [{ age: 12, name: "vasya" }];
    };
    return MongoUserRepo;
}());
var PostgreeUserRepo = /** @class */ (function () {
    function PostgreeUserRepo() {
    }
    PostgreeUserRepo.prototype.getUsers = function () {
        return [{ age: 11, name: "gtisha" }];
    };
    return PostgreeUserRepo;
}());
var UserService = /** @class */ (function () {
    function UserService(userRepo) {
        this.userRepo = userRepo;
    }
    UserService.prototype.getAllUser = function () {
        return this.userRepo.getUsers();
    };
    return UserService;
}());
var userService = new UserService(new MongoUserRepo());
console.log(userService.getAllUser());
