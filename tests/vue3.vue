<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a target="_blank" href="https://vuejs.org/">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>.
    The recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>.
    If you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank">Cypress</a> and
    <a
      href="https://docs.cypress.io/guides/component-testing/introduction"
      target="_blank"
      >Cypress Component Testing</a
    >.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a>,
    <a target="_blank" href="https://router.vuejs.org/">Vue Router</a>,
    <a target="_blank" href="https://test-utils.vuejs.org/">Vue Test Utils</a>,
    and
    <a target="_blank" href="https://github.com/vuejs/devtools">Vue Dev Tools</a
    >. If you need more resources, we suggest paying
    <a target="_blank" href="https://github.com/vuejs/awesome-vue"
      >Awesome Vue</a
    >
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a target="_blank" href="https://chat.vuejs.org">Vue Land</a>, our official
    Discord server, or
    <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js"
      >StackOverflow</a
    >. You should also subscribe to
    <a target="_blank" href="https://news.vuejs.org">our mailing list</a> and
    follow the official
    <a target="_blank" href="https://twitter.com/vuejs">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its
    sustainability. You can help us by
    <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
  </WelcomeItem>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
let y = { name: 'test', maoma: 321 } // y is of type Entity
const anchor = document.querySelector('a')!;
if(anchor) {
  console.log(anchor.href);
}
console.log(anchor.href);

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value, 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber
  );
});


import { BlankNode } from '../Nodes/BlankNode'
import { CommandNode } from '../Nodes/CommandNode'
import { IGlsNode } from '../Nodes/IGlsNode'
import { TextNode } from '../Nodes/TextNode'
import { TextParsing } from './TextParsing'

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
    rawLine = rawLine.trim()
    if (rawLine === '') {
      return new BlankNode()
    }

    const colonIndex: number = rawLine.indexOf(':')
    if (colonIndex === -1) {
      return new CommandNode(rawLine.trim(), [])
    }

    const command: string = rawLine.substring(0, colonIndex).trim()
    const args: IGlsNode[] = []

    this.parseCommandArgs(rawLine, colonIndex + 1, args)

    return new CommandNode(command, args)
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
  private parseCommandArgs(
    rawLine: string,
    start: number,
    nodes: IGlsNode[],
  ): number {
    for (let i = start; i < rawLine.length; i += 1) {
      // Sub-command start
      if (rawLine[i] === '{') {
        i = this.parseSubCommand(rawLine, i, nodes)
        continue
      }

      // Sub-command end
      if (rawLine[i] === '}') {
        return i + 1
      }

      // Parenthesis start
      if (rawLine[i] === '(') {
        i = this.parseParenthesis(rawLine, i + 1, nodes)
        continue
      }

      // Space (do nothing)
      if (rawLine[i] === ' ') {
        continue
      }

      // Regular text start
      i = this.parseTextCommand(rawLine, i, nodes)
    }

    return rawLine.length
  }

  /**
   * Recurses into a command-within-a-command.
   *
   * @param rawLine   Raw line containing the command.
   * @param start   Starting index of the args within the line.
   * @param nodes   Collection of nodes to add the command to.
   * @returns Next starting index after the last added node.
   */
  private parseSubCommand(
    rawLine: string,
    i: number,
    nodes: IGlsNode[],
  ): number {
    // Move past the starting "{" or "{ "
    i = TextParsing.getNextStartOfWordIndex(rawLine, i + 1)

    // Command name
    const commandNameEnd: number = TextParsing.getNextEndOfCommandNameIndex(
      rawLine,
      i,
    )
    const commandNameRaw: string = rawLine.substring(i, commandNameEnd)
    const commandName: string = commandNameRaw.trim()

    // Either "}" (command end) or ":" (command args start)
    i = TextParsing.getNextNonSpaceIndex(rawLine, commandNameEnd)

    // "}" (command end)
    if (rawLine[i] === '}') {
      nodes.push(new CommandNode(commandName, []))
      return i + 1
    }

    // ":" (command args start)
    const commandArgs: IGlsNode[] = []
    i = this.parseCommandArgs(rawLine, i + 1, commandArgs)

    nodes.push(new CommandNode(commandName, commandArgs))

    return i
  }

  /**
   * Collects the text contents between parenthesis.
   *
   * @param rawLine   Raw line containing the command.
   * @param start   Starting index of the args within the line.
   * @param nodes   Collection of nodes to add the command to.
   * @returns Next starting index after the last added node.
   */
  private parseParenthesis(
    rawLine: string,
    i: number,
    nodes: IGlsNode[],
  ): number {
    const nextEndOfWordIndex = TextParsing.getNextEndOfParenthesisWordIndex(
      rawLine,
      i,
    )
    const textRaw = rawLine.substring(i, nextEndOfWordIndex)
    const text = TextParsing.removeBackslashesFromWord(textRaw)

    nodes.push(new TextNode(text))

    return nextEndOfWordIndex
  }

  /**
   * Parses raw text.
   *
   * @param rawLine   Raw line containing the command.
   * @param start   Starting index of the args within the line.
   * @param nodes   Collection of nodes to add the command to.
   * @returns Next starting index after the last added node.
   */
  private parseTextCommand(
    rawArgs: string,
    i: number,
    nodes: IGlsNode[],
  ): number {
    const nextEndOfWordIndex = TextParsing.getNextEndOfWordIndex(rawArgs, i)
    const text = rawArgs.substring(i, nextEndOfWordIndex)

    nodes.push(new TextNode(text))

    return nextEndOfWordIndex
  }
}

@decorator()
class NameClass {}
declare module name {}

interface MyInterface {}
type FooBarAlias = string
var x: MyInterface, y: string, z: FooBarAlias

for (let index = 0; index < array.length; index++) {
  const element = array[index]
}

if (constant.parameterA[0] === 3 && variable <= 550) {
} else {
}

interface Entity {
  name: string
}
const constant = {
  propertyA: [2, 'variable'],
  propertyB: 'some string',
  propertyC: 2019,
  propertyD: {
    subPropertyA: true,
    subPropertyB: false,
    subPropertyC: null,
    subPropertyD: undefined,
    subPropertyE: {
      subSubPropertyA: 'string',
    },
  },
  methodA: (parameterA, parameterB) => {
    console.log(parameterA, parameterB)
  },
}
let x: Entity | null
let s = x && x.name // s is of type string | null

function validateEntity(e?: Entity) {
  // Throw exception if e is null or invalid entity
}
</script>