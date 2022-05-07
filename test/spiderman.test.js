const Spiderman = require('../app/spiderman');

describe("Unit Tests for Spiderman class", () => {
    test("1) Create an Spiderman Object", () => {
        const amdrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony");

        expect(amdrewGarfield.name).toBe("Spiderman Sony");
        expect(amdrewGarfield.age).toBe(31);
        expect(amdrewGarfield.actor).toBe("Andrew Garfield");
        expect(amdrewGarfield.movies).toBe(2);
        expect(amdrewGarfield.studio).toBe("Sony");
    });

    test("2) Use a method getInfo()", () => {
        const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel");
        
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
    });
});