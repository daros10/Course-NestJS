"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let CarsService = class CarsService {
    constructor() {
        this.cars = [
            {
                id: (0, uuid_1.v4)(),
                brand: "Kia",
                model: "Picanto"
            },
            {
                id: (0, uuid_1.v4)(),
                brand: "Toyota",
                model: "Corolla"
            },
            {
                id: (0, uuid_1.v4)(),
                brand: "Hyundai",
                model: "Accent"
            },
        ];
    }
    findAll() {
        return this.cars;
    }
    findById(id) {
        return this.cars.filter((data) => data['id'] === id);
    }
    addCar(car) {
        this.cars.push(Object.assign(Object.assign({}, car), { id: (0, uuid_1.v4)() }));
        return {
            response: "Car added successful"
        };
    }
    updateCar(id, car) {
        return this.cars.map((data) => (data['id'] === id ? Object.assign(Object.assign({}, data), car) : data));
    }
    deleteCar(_id) {
        return {
            response: "Car deleted successful"
        };
    }
};
CarsService = __decorate([
    (0, common_1.Injectable)()
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map