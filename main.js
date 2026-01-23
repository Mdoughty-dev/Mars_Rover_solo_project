import { PlateauParser } from "./parsers/plateauParser.js";
import { ParseError } from "./parsers/ParseError.js";
import { RoverParser }from "./parsers/roverParser.js";
import { InstructionParser } from "./parsers/instructionParser.js"

function main(raw) {
  if (typeof raw !== "string") {
    throw new ParseError("not a string");
  }

  const lines = raw.trim().split(/\r?\n/);

  const plateauLine = lines[0];
  const remainingLines = lines.slice(1);
	if (remainingLines.length % 2 !== 0)
		throw new ParseError("Not enough arguements for rover or rovers should be landing and movement controls");


const plateauParser = new PlateauParser();
const  roverParser = new RoverParser();
const  instructionParser = new InstructionParser();

  const plateauSize = plateauParser.parse(plateauLine);
  const rovers = [];
  for (let i = 0; i < remainingLines.length; i += 2)
	{
		const startPosition = roverParser.parse(remainingLines[i]);
		const movement =  instructionParser.parse(remainingLines[i+1]);
		rovers.push({startPosition, movement})
	}
  console.log("Parsed plateau:", plateauSize);
  console.log("rovers" , rovers);
}

console.log("Enter data, press enter for new line, Ctrl+D to send data");

let data = "";
process.stdin.setEncoding("utf8");

process.stdin.on("data", (chunk) => (data += chunk));
process.stdin.on("end", () => main(data.trimEnd()));

