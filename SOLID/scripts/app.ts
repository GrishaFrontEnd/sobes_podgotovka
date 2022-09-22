"use strict";

// Single Responsibilty

// class HttpClient {
//     get(){}
//     post(){}
//     put(){}
//     delete(){}
// }

// class UserService {
//     client: HttpClient;
//     constructor(client) {
//         this.client = client;
//     }
//     getUsers() {
//         return this.client.get();
//     }
// }

// class BookService {
//     book: HttpClient;
//     constructor(book) {
//         this.book=book;
//     }
//     deleteBook() {
//         return this.book.delete();
//     }
// }

// 2. Open closed principle
// interface Attacker {
//   attack: () => void;
// }

// class Weapon implements Attacker {
//   damage: number;
//   range: number;
//   constructor(damage, range) {
//     this.damage = damage;
//     this.range = range;
//   }
//   attack() {}
// }

// class Sword extends Weapon {
//   attack() {
//     console.log(`Attack sword with dmg - ${this.damage}`);
//   }
// }

// class Bow extends Weapon {
//   attack() {
//     console.log(`Attack bow with dmg - ${this.damage}`);
//   }
// }

// class Character {
//   name: string;
//   weapon: Weapon;
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   changeWeapon(newWeapon: Weapon) {
//     this.weapon = newWeapon;
//   }
//   attack() {
//     this.weapon.attack();
//   }
// }

// const sword = new Sword(5, 15);
// const character = new Character("ivan", sword);
// character.attack();

// const bow = new Sword(3, 235);
// character.changeWeapon(bow);
// character.attack();

// 3 Liskov Substitution Principle

// class DataBase {
//   connect() {}
//   write() {}
//   read() {}
// }

// class SQLDataBase extends DataBase {
//   connect() {}
//   write() {}
//   read() {}
//   joinTables() {}
// }

// class NoSQLDataBase extends DataBase {
//   connect() {}
//   write() {}
//   read() {}
//   createIndex() {}
// }

// class MySQLDataBase extends SQLDataBase {
//   connect() {}
//   write() {}
//   read() {}
//   joinTables() {}
// }

// class MongoDataBase extends NoSQLDataBase {
//   connect() {}
//   write() {}
//   read() {}
//   createIndex() {}
//   mergeDocuments() {}
// }

// function startApp(database: DataBase) {
//   database.connect();
// }

// startApp(new MongoDataBase());
// startApp(new MySQLDataBase());

// 4. Interface swgregation principle.

// interface Router {
//   parseUrl: (url) => void;
//   addQueryParams: (params: Record<string, string>) => void;
// }

// interface HttpRequest {
//   get: () => void;
//   post: () => void;
//   put: () => void;
//   delete: () => void;
// }

// interface TokenStorage {
//   addToken: () => void;
//   getToken: () => void;
// }

// class ServerHttp implements HttpRequest {
//   get(): void {}
//   post(): void {}
//   put(): void {}
//   delete(): void {}
// }

// class ClientHttp implements HttpRequest, TokenStorage {
//   get(): void {}
//   post(): void {}
//   put(): void {}
//   delete(): void {}
//   addToken(): void {}
//   getToken(): void {}
// }

// const createDependencyContainer = (
//   router: Router,
//   store,
//   httpRequest: HttpRequest
// ) => {
//   return {
//     getRouter: () => router,
//     getStore: () => store,
//     getRequest: () => httpRequest,
//   };
// };

// 5. Dependency inversion principle.

// interface MusicAPI {
//     getTracks: () => void;
// }

// class YandexMusicApi implements MusicApi {
//     getTracks(): void {}
//   }

//   class SpotifyApi implements MusicApi {
//     getTracks(): void {}
//   }

//   class VKMusicApi implements MusicApi {
//     getTracks(): void {}
//   }

//   class MusicClient implements MusicApi {
//     client: MusicApi;

//     constructor(client: MusicApi) {
//       this.client = client;
//     }

//     getTracks() {
//       this.client.getTracks();
//     }
//   }

//   const MusicApp = () => {
//     const API = new MusicClient(new SpotifyApi())

//     API.getTracks()
//   }

//   interface HttpClient {

//   }

//   class Axios implements HttpClient {
//     request() {
//       fetch
//       XMLHttpRequest()
//       node-fetch
//       node http module
//     }
//   }
