export const assert = (actual: any, expected: any) => {
    console.log('.');
    console.assert(actual === expected, '\nactu: ' + actual + '\nexp: ' + expected);
} 