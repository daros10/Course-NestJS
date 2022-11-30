export const TITLE = "Welcome to TS"
export const boolVar: boolean = false;
export const strVar: string = "Hello World!";
export const objVar: object = {keyA: "valueA"};
export const numVar: number = 900;
export const mixedVar: string | undefined = undefined;
export const arrVar: [] = []
export const templateStr: string = `
This is a template string, 
now you can use your local
${boolVar}
${strVar}
${objVar}
${numVar}
${mixedVar}
${arrVar}
`;

console.log("Printed", templateStr);