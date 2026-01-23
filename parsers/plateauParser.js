import {ParseError} from "./ParseError.js"
import {PlateauSize} from "../objects/plateauSize.js"

export class PlateauParser
{
	parse(raw)
	{
		if (typeof raw !== "string") throw new ParseError("Plateau must be a string");
		const parts = raw.trim().split(/\s+/);
		if (parts.length !== 2)throw new ParseError(`invalid format ${raw}`);
		const [x, y] = parts;
		const width = Number(x);
		const height = Number(y);
		if (!Number.isInteger(width) || !Number.isInteger(height))
			throw new ParseError("not numbers");
		if (width < 0 || height < 0)
			throw new ParseError("coordinates must be greater than 0");
		return new PlateauSize(width, height);
	}
}
