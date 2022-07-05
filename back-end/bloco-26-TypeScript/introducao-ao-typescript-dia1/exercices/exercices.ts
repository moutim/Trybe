export function ola(nome: string): string {
  return `Olá ${nome}`;
}

export function idade(nome: string, idade: number): string {
  return `Olá ${nome}, voce tem ${idade} anos`;
}

export function soma(a: number, b: number): number {
  return a + b;
}

export function somaArray(numeros: number[]): number {
  return numeros.reduce((acc, curr) => acc + curr);
}

export function areaTriangulo(a: number, b: number) {
  return (b * a) / 2;
}

export function areaQuadrado(lado: number) {
  return lado ** 2;
}

export function areaRetangulo(a: number, b: number) {
  return a * b;
}