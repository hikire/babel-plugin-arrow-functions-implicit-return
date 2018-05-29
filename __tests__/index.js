const { transform } = require("babel-core");
const arrowImplicitReturn = require("../lib/index").default;

console.log(arrowImplicitReturn);

describe("transform arrow functions", () => {
    test("works like do expressions", () => {
        const source = `
            const fn = (x) => {
                if(x>0){
                    "x>0";
                } else {
                    "x<=0";
                }
            };
        `;
        const { code } = transform(source, { plugins: [arrowImplicitReturn] });
        expect(code).toMatchSnapshot();
    });

    test("returns last directive if body is empty", () => {
        const source = `
            const fn = (x) => {
                "foo";
                "bar";
            };
        `;
        const { code } = transform(source, { plugins: [arrowImplicitReturn] });
        expect(code).toMatchSnapshot();
    });

    test("empty block returns undefined", () => {
        const source = `
            const fn = (x) => {};
        `;
        const { code } = transform(source, { plugins: [arrowImplicitReturn] });
        expect(code).toMatchSnapshot();
    });
    test("expressions transforms correctly", () => {
        const source = `
            const fn = (x) => x+1;
        `;
        const { code } = transform(source, { plugins: [arrowImplicitReturn] });
        expect(code).toMatchSnapshot();
    });
});
