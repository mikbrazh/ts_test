var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Types
// ==============================
var num = 0.222;
console.log(num);
var str = '11';
console.log(str);
var isValid = true;
var isInvalid = true;
console.log(isValid);
var two = '2';
two = 2;
console.log(two);
var go;
go = 'qwe';
go = 123;
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ['1', '2', '3', '4', '5'];
var arr3 = [1, 2, 3, 4, 5];
var arr4 = ['1', '2', '3', '4', '5'];
// Tuple
var contact = ['Name', 123];
function sayMyName(name) {
    console.log(name);
}
sayMyName('Big Cat');
// Never
function throwError(msg) {
    throw new Error(msg);
}
var admin = 'Mike';
var w = 123;
w = '123';
function noReturn() {
    console.log('noReturn');
}
noReturn();
var rect1 = {
    id: '123',
    color: 'yellow',
    size: {
        width: 1,
        height: 2
    }
};
console.log(rect1.id);
console.log(rect1.color);
var rect2 = {
    id: '555',
    color: 'red',
    size: {
        width: 10,
        height: 25
    }
};
console.log(rect2.id);
console.log(rect2.color);
rect2.color = 'black';
console.log(rect2.color);
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '1000',
    size: {
        width: 100,
        height: 100
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
console.log(rect5.getArea());
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '20px',
    borderRadius: '10px'
};
// Enum
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Premium;
var membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
console.log(SocialMedia.VK);
// Functions
// ==============================
function add(a, b) {
    return a + b;
}
function toAppercase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty ', position());
console.log('One param ', position(42));
console.log('Two params ', position(10, 15));
// Classes
// ==============================
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: Typescript version is " + this.version;
    };
    return Typescript;
}());
var ts = new Typescript('8');
console.log(ts.info('Mike'));
// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4
//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }
// The same notation
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car;
}());
// Protected, private, public
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'black';
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice('mur-mur');
console.log(cat.color);
// Abstract classes
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component on render');
    };
    AppComponent.prototype.info = function () {
        return 'This is info';
    };
    return AppComponent;
}(Component));
