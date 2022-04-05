import { CommandResult } from "../Rendering/Commands/CommandResult";
import { LineResults } from "../Rendering/LineResults";

/**
 * Generates language output by merging line results.
 */


 var globalVar = Number;
 let variable = 324;
 const constant = {
   propertyA: [2, 'variable'],
   propertyB: "some string",
   propertyC: 2019,
   propertyD: {
     subPropertyA: true,
     subPropertyB: false,
     subPropertyC: null,
     subPropertyD: undefined,
     subPropertyE: {
       subSubPropertyA: "string"
     }
   },
   methodA: (parameterA, parameterB) => {
     console.log(parameterA, parameterB)
   }
 }
 console.log(constant.propertyD.subPropertyE.subSubPropertyA)
 
 constant.methodA(25, 35)
 

export class OutputMerger {
    /**
     * Characters to output for semicolon-ended lines.
     */
    private semicolon: string;

    /**
     * Initializes a new instance of the OutputMerger class.
     *
     * @param semicolon   Characters to output for semicolon-ended lines.
     */
    public constructor(semicolon: string) {
        this.semicolon = semicolon;
    }

    /**
     * Generates language output by merging a file's line results.
     *
     * @param fileLineResults   GLS line results from a file.
     * @return Language output from the line results.
     */
    public mergeFileLineResults(fileLineResults: LineResults[]): string[] {
        const output: string[] = [];
        let indentation = 0;

        for (const lineResults of fileLineResults) {
            const commandResults: CommandResult[] = lineResults.commandResults;

            for (const result of commandResults) {
                if (result.indentation < 0) {
                    indentation += result.indentation;
                }

                if (result.text === "") {
                    output.push("");
                } else if (result.text !== "\0") {
                    output.push(this.generateTabs(indentation) + result.text);
                }

                if (result.indentation > 0) {
                    indentation += result.indentation;
                }
            }

            if (lineResults.addSemicolon) {
                output[output.length - 1] += this.semicolon;
            }
        }

        return output;
    }

    /**
     * Generates spaces equivalent to 4-space code tabbing.
     *
     * @param amount   How many tabs should be added.
     * @returns An all-spaces String of length = amount * 4.
     */
    private generateTabs(amount: number): string {
        let output = "";

        for (let i = 0; i < amount; i += 1) {
            output += "    ";
        }

        return output;
    }
}

import { BlankNode } from "../Nodes/BlankNode";
import { CommandNode } from "../Nodes/CommandNode";
import { IGlsNode } from "../Nodes/IGlsNode";
import { TextNode } from "../Nodes/TextNode";
import { TextParsing } from "./TextParsing";

/**
 * Parses individual lines of raw syntax into GLS nodes.
 */
export class SourceLineParser {
    /**
     * Parses a line of raw source syntax into a GLS nodes.
     *
     * @param rawLine   Raw line of source syntax.
     */
    public parseLine(rawLine: string): IGlsNode {
        rawLine = rawLine.trim();
        if (rawLine === "") {
            return new BlankNode();
        }

        const colonIndex: number = rawLine.indexOf(":");
        if (colonIndex === -1) {
            return new CommandNode(rawLine.trim(), []);
        }

        const command: string = rawLine.substring(0, colonIndex).trim();
        const args: IGlsNode[] = [];

        this.parseCommandArgs(rawLine, colonIndex + 1, args);

        return new CommandNode(command, args);
    }

    /**
     * Parses the args for a command.
     *
     * @param rawLine   Raw line containing the command.
     * @param start   Starting index of the args within the line.
     * @param nodes   Collection of nodes to add the command to.
     * @param withinParenthesis   Whether this is within a ( parenthesis ) section
     * @returns Next starting index after the last added node.
     */
    private parseCommandArgs(rawLine: string, start: number, nodes: IGlsNode[]): number {
        for (let i = start; i < rawLine.length; i += 1) {
            // Sub-command start
            if (rawLine[i] === "{") {
                i = this.parseSubCommand(rawLine, i, nodes);
                continue;
            }

            // Sub-command end
            if (rawLine[i] === "}") {
                return i + 1;
            }

            // Parenthesis start
            if (rawLine[i] === "(") {
                i = this.parseParenthesis(rawLine, i + 1, nodes);
                continue;
            }

            // Space (do nothing)
            if (rawLine[i] === " ") {
                continue;
            }

            // Regular text start
            i = this.parseTextCommand(rawLine, i, nodes);
        }

        return rawLine.length;
    }

    /**
     * Recurses into a command-within-a-command.
     *
     * @param rawLine   Raw line containing the command.
     * @param start   Starting index of the args within the line.
     * @param nodes   Collection of nodes to add the command to.
     * @returns Next starting index after the last added node.
     */
    private parseSubCommand(rawLine: string, i: number, nodes: IGlsNode[]): number {
        // Move past the starting "{" or "{ "
        i = TextParsing.getNextStartOfWordIndex(rawLine, i + 1);

        // Command name
        const commandNameEnd: number = TextParsing.getNextEndOfCommandNameIndex(rawLine, i);
        const commandNameRaw: string = rawLine.substring(i, commandNameEnd);
        const commandName: string = commandNameRaw.trim();

        // Either "}" (command end) or ":" (command args start)
        i = TextParsing.getNextNonSpaceIndex(rawLine, commandNameEnd);

        // "}" (command end)
        if (rawLine[i] === "}") {
            nodes.push(new CommandNode(commandName, []));
            return i + 1;
        }

        // ":" (command args start)
        const commandArgs: IGlsNode[] = [];
        i = this.parseCommandArgs(rawLine, i + 1, commandArgs);

        nodes.push(new CommandNode(commandName, commandArgs));

        return i;
    }

    /**
     * Collects the text contents between parenthesis.
     *
     * @param rawLine   Raw line containing the command.
     * @param start   Starting index of the args within the line.
     * @param nodes   Collection of nodes to add the command to.
     * @returns Next starting index after the last added node.
     */
    private parseParenthesis(rawLine: string, i: number, nodes: IGlsNode[]): number {
        const nextEndOfWordIndex = TextParsing.getNextEndOfParenthesisWordIndex(rawLine, i);
        const textRaw = rawLine.substring(i, nextEndOfWordIndex);
        const text = TextParsing.removeBackslashesFromWord(textRaw);

        nodes.push(new TextNode(text));

        return nextEndOfWordIndex;
    }

    /**
     * Parses raw text.
     *
     * @param rawLine   Raw line containing the command.
     * @param start   Starting index of the args within the line.
     * @param nodes   Collection of nodes to add the command to.
     * @returns Next starting index after the last added node.
     */
    private parseTextCommand(rawArgs: string, i: number, nodes: IGlsNode[]): number {
        const nextEndOfWordIndex = TextParsing.getNextEndOfWordIndex(rawArgs, i);
        const text = rawArgs.substring(i, nextEndOfWordIndex);

        nodes.push(new TextNode(text));

        return nextEndOfWordIndex;
    }
}



interface Entity {
    name: string;
}
let x: Entity | null;
let s = x && x.name;  // s is of type string | null
let y = x || { name: "test" };  // y is of type Entity

function validateEntity(e?: Entity) {
    // Throw exception if e is null or invalid entity
}