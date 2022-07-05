"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaRetangulo = exports.areaQuadrado = exports.areaTriangulo = exports.somaArray = exports.soma = exports.idade = exports.ola = void 0;
function ola(nome) {
    return `Olá ${nome}`;
}
exports.ola = ola;
function idade(nome, idade) {
    return `Olá ${nome}, voce tem ${idade} anos`;
}
exports.idade = idade;
function soma(a, b) {
    return a + b;
}
exports.soma = soma;
function somaArray(numeros) {
    return numeros.reduce((acc, curr) => acc + curr);
}
exports.somaArray = somaArray;
function areaTriangulo(a, b) {
    return (b * a) / 2;
}
exports.areaTriangulo = areaTriangulo;
function areaQuadrado(lado) {
    return lado ** 2;
}
exports.areaQuadrado = areaQuadrado;
function areaRetangulo(a, b) {
    return a * b;
}
exports.areaRetangulo = areaRetangulo;
