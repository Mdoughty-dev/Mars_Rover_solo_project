import { Instruction } from "./instruction.js";
import { Direction } from "./direction.js";
import { Position } from "./position.js";
import { PlateauSize } from "./plateauSize.js";

describe("Input Layer types", () => {
  test("Instruction enum contains valid instructions", () => {
    expect(Instruction.LEFT).toBe("L");
    expect(Instruction.RIGHT).toBe("R");
    expect(Instruction.MOVE).toBe("M");
  });

  test("Direction enum contains valid compass directions", () => {
    expect(Direction.NORTH).toBe("N");
    expect(Direction.EAST).toBe("E");
    expect(Direction.SOUTH).toBe("S");
    expect(Direction.WEST).toBe("W");
  });

  test("Position stores x, y, and direction", () => {
    const position = new Position(1, 2, Direction.NORTH);

    expect(position.x).toBe(1);
    expect(position.y).toBe(2);
    expect(position.direction).toBe(Direction.NORTH);
  });

  test("PlateauSize stores plateau boundaries", () => {
    const plateauSize = new PlateauSize(5, 5);

    expect(plateauSize.maxX).toBe(5);
    expect(plateauSize.maxY).toBe(5);
  });
});

