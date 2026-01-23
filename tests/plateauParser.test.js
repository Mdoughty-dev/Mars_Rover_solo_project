import { PlateauParser } from "../parsers/plateauParser.js";
import { ParseError } from "../parsers/ParseError.js";

describe("PlateauParser", () => {
  test("parses plateau size", () => {
    const parser = new PlateauParser();
    const plateau = parser.parse("5 5");
    expect(plateau.maxX).toBe(5);
    expect(plateau.maxY).toBe(5);
  });

  test("throws on invalid plateau format", () => {
    const parser = new PlateauParser();
    expect(() => parser.parse("5")).toThrow(ParseError);
    expect(() => parser.parse("5 5 5")).toThrow(ParseError);
  });

  test("throws on non-integer plateau values", () => {
    const parser = new PlateauParser();
    expect(() => parser.parse("A 5")).toThrow(ParseError);
  });
});

