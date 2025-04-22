<template>
  <div class="comprehensive-example" :id="componentId">
    <h1>{{ reactiveState.title }} - {{ simpleRef }}</h1>
    <p>Static text alongside {{ dynamicText }}.</p>

    <img
      :src="imageUrl"
      :alt="altText"
      :class="{ active: isActive, 'text-danger': hasError }"
      :style="styleObject"
    />
    <button :disabled="isDisabled">Dynamic Disable</button>
    <a :href="url">Link</a>
    <input type="checkbox" :checked="isChecked" />

    <button v-on:click="handleSimpleClick">Click Me (Longhand)</button>
    <button @click="counter++">Increment Counter</button>
    <button @mouseover="handleMouseOver">Hover Me</button>
    <form @submit.prevent="handleSubmit">
      <input @keyup.enter="submitForm" @keydown.esc.stop="cancelAction" />
      <button type="submit">Submit (Prevent Default)</button>
    </form>

    <input type="text" v-model="inputText" placeholder="Text Input" />
    <input type="checkbox" v-model="isChecked" id="checkbox1" />
    <label for="checkbox1">Is Checked: {{ isChecked }}</label>
    <input type="radio" v-model="radioValue" value="one" id="radio1" />
    <label for="radio1">One</label>
    <input type="radio" v-model="radioValue" value="two" id="radio2" />
    <label for="radio2">Two</label>
    <select v-model="selectedValue">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <textarea v-model="textAreaContent" placeholder="Text Area"></textarea>
    <input type="text" v-model.lazy="lazyInput" placeholder="Lazy Input" />
    <input type="text" v-model.number="numericInput" placeholder="Numeric Input" />
    <input type="text" v-model.trim="trimmedInput" placeholder="Trimmed Input" />

    <div v-if="type === 'A'">Type A Content</div>
    <div v-else-if="type === 'B'">Type B Content</div>
    <div v-else>Fallback Content</div>
    <template v-if="showGroup">
      <p>Group Paragraph 1</p>
      <p>Group Paragraph 2</p>
    </template>

    <ul>
      <li v-for="item in listItems" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
    <ul>
      <li v-for="(value, key, index) in objectItems" :key="key">
        {{ index }}. {{ key }}: {{ value }}
      </li>
    </ul>
    <span v-for="n in 5" :key="n">{{ n }} </span>
    <template v-for="item in listItems" :key="'tpl-' + item.id">
      <div>{{ item.text }}</div>
      <hr />
    </template>
    <div v-for="item in listItems" :key="'cond-' + item.id">
      <span v-if="item.id % 2 === 0">{{ item.text }} (Even ID)</span>
    </div>

    <p v-show="isVisible">This paragraph is controlled by v-show.</p>

    <div v-html="rawHtmlContent"></div>

    <div v-pre>{{ This will not be compiled }}</div>

    <div v-once>This content will only render once: {{ initialValue }}</div>

    <div v-cloak>This is hidden until Vue is ready.</div>

    <input type="text" ref="inputRef" placeholder="Template Ref Input" />
    <button @click="focusInput">Focus Input Ref</button>

    <MyChildComponent
      :prop-a="someData"
      :prop-b="123"
      boolean-prop
      @custom-event="handleCustomEvent"
    />
    <my-child-component />
    <MyChildComponent />

    <MyLayoutComponent>
      <p>This goes into the default slot.</p>

      <template v-slot:header>
        <h2>Layout Header</h2>
      </template>

      <template #footer>
        <p>Layout Footer - Year {{ currentYear }}</p>
      </template>

      <template #item="{ itemData, itemIndex }">
        <li>Item {{ itemIndex }}: {{ itemData.name }}</li>
      </template>
    </MyLayoutComponent>

    <keep-alive>
      <component :is="currentComponent" :some-prop="dynamicProp"></component>
    </keep-alive>
    <button @click="switchComponent">Switch Component</button>

    <Transition name="fade">
      <p v-if="showTransition">Fading paragraph</p>
    </Transition>
    <button @click="showTransition = !showTransition">Toggle Transition</button>

    <Teleport to="body">
      <div class="modal" v-if="showModal">Modal Content Teleported to Body</div>
    </Teleport>
    <button @click="showModal = !showModal">Toggle Modal</button>

    <Suspense>
      <template #default>
        <AsyncComponent />
      </template>
      <template #fallback>
        <div>Loading asynchronous component...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
// 1. Imports
import {
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
  onMounted,
  onUnmounted,
  provide,
  inject,
  nextTick,
  defineAsyncComponent,
  type Ref,
} from 'vue'
import MyChildComponent from './MyChildComponent.vue' // Assuming a child component exists
import MyLayoutComponent from './MyLayoutComponent.vue' // Assuming a layout component exists
import type { PropType } from 'vue' // Type import

// 2. Async Component Definition
const AsyncComponent = defineAsyncComponent(
  () => import('./MyAsyncComponent.vue'), // Assuming an async component
)

// 3. Props Definition (Example - this component doesn't actually receive props here)
interface ComplexProp {
  id: number
  label?: string
  tags: string[]
}
const props = defineProps({
  initialCounter: {
    type: Number,
    required: false,
    default: 0,
  },
  message: String, // Simple type
  complexProp: Object as PropType<ComplexProp>,
  validatorProp: {
    validator: (value: unknown) =>
      typeof value === 'string' &&
      ['success', 'warning', 'error'].includes(value as string),
  },
})

// 4. Emits Definition
const emit = defineEmits<{
  (e: 'customEvent', payload: { data: string; timestamp: number }): void
  (e: 'update:modelValue', value: string): void // For v-model usage on the component itself
}>()

// 5. Reactive State
const simpleRef = ref<string>('Simple Ref Text') // Ref with type argument
const counter = ref(props.initialCounter)
const isChecked = ref(true)
const inputText = ref('')
const lazyInput = ref('')
const numericInput = ref<number | null>(null) // Allow null for empty input
const trimmedInput = ref('')
const radioValue = ref('one')
const selectedValue = ref('')
const textAreaContent = ref(`Multiline content here.`)
const isVisible = ref(true)
const showGroup = ref(false)
const showTransition = ref(false)
const showModal = ref(false)
const currentComponent = ref('MyChildComponent') // For dynamic component
const dynamicProp = ref('hello')
const reactiveState = reactive({
  title: 'Vue 3 Syntax Showcase',
  nested: {
    count: 0,
    flag: true,
  },
  list: ['apple', 'banana', 'cherry'],
})

// 6. Constants and Static Data
const componentId = 'main-component'
const imageUrl = '/path/to/image.jpg' // Example path
const altText = 'Descriptive alt text'
const url = 'https://vuejs.org'
const rawHtmlContent = '<span style="color: red;">This is raw HTML</span>' // Caution!
const initialValue = Date.now()
const listItems = ref([
  { id: 1, text: 'Learn Vue' },
  { id: 2, text: 'Build Something' },
  { id: 3, text: 'Test Theme' },
])
const objectItems = reactive({
  propA: 'Value A',
  propB: 100,
  propC: false,
})
const someData = 'Data for child'
const currentYear = new Date().getFullYear()

// 7. Computed Properties
const dynamicText = computed(() => `Counter is ${counter.value}`)
const styleObject = computed(() => ({
  color: hasError.value ? 'red' : 'blue',
  fontSize: `${12 + counter.value}px`,
}))
const isActive = computed(() => counter.value > 5)
const hasError = computed(() => counter.value < 0)
const isDisabled = computed(() => !inputText.value)
const type = computed(() => {
  if (counter.value < 3) return 'A'
  if (counter.value < 7) return 'B'
  return 'C'
})

// 8. Methods / Functions
const handleSimpleClick = () => {
  console.log('Button clicked!')
  alert('Simple Click Handler Triggered!')
}

function handleMouseOver(event: MouseEvent): void {
  console.log('Mouse over event:', event.target)
}

const handleSubmit = async () => {
  console.log('Form submitted (default prevented)')
  // Example async operation
  try {
    await new Promise((resolve) => setTimeout(resolve, 500))
    console.log('Fake async operation complete')
  } catch (error) {
    console.error('Error during submit:', error)
  } finally {
    console.log('Submit handler finished.')
  }
}

const submitForm = () => {
  console.log('Submitting via Enter key')
  emit('customEvent', { data: inputText.value, timestamp: Date.now() })
}

const cancelAction = () => {
  console.log('Action cancelled via Escape key')
}

const handleCustomEvent = (payload: { data: string; timestamp: number }) => {
  console.log('Received custom event from child:', payload)
  alert(`Child event received: ${payload.data}`)
}

const switchComponent = () => {
  currentComponent.value =
    currentComponent.value === 'MyChildComponent'
      ? 'MyOtherComponent'
      : 'MyChildComponent'
  dynamicProp.value = currentComponent.value === 'MyChildComponent' ? 'hello' : 'world'
  // Assume MyOtherComponent is globally registered or imported if used
}

// 9. Template Refs Access
const inputRef: Ref<HTMLInputElement | null> = ref(null) // Typed template ref

const focusInput = () => {
  inputRef.value?.focus() // Optional chaining
}

// 10. Watchers
watch(counter, (newValue, oldValue) => {
  console.log(`Counter changed from ${oldValue} to ${newValue}`)
})

watch(
  () => reactiveState.nested.count,
  (newCount) => {
    console.log(`Nested count changed: ${newCount}`)
  },
)

// Watch multiple sources
watch(
  [inputText, isChecked],
  ([newText, newChecked], [oldText, oldChecked]) => {
    console.log(
      `Input text or checkbox changed. Text: ${newText}, Checked: ${newChecked}`,
    )
  },
  { deep: false },
) // `deep` option example

watchEffect(() => {
  // Runs immediately and tracks dependencies automatically
  console.log(
    `WatchEffect: Current counter is ${counter.value} and input is ${inputText.value}`,
  )
})

// 11. Lifecycle Hooks
onMounted(() => {
  console.log('Component has been mounted.')
  focusInput() // Example: focus input on mount
  // Accessing DOM element directly (use template refs preferably)
  const rootEl = document.getElementById(componentId)
  console.log('Root Element:', rootEl)
  nextTick(() => {
    console.log('DOM updated after mount (using nextTick)')
  })
})

onUnmounted(() => {
  console.log('Component is about to be unmounted.')
  // Cleanup logic here (e.g., remove event listeners)
})

// onErrorCaptured((err, instance, info) => { ... }); // Example error capture

// 12. Provide / Inject (Example)
provide('theme', {
  color: 'dark',
  fontSize: ref(14), // Provided ref
})
// In a child component, you would use: const theme = inject('theme');

// 13. TypeScript Specific Syntax
enum Status {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failed = 'FAILED',
}
let currentStatus: Status = Status.Pending

type UserID = string | number
let userId: UserID = 'user-123'
userId = 456

// Optional Chaining and Nullish Coalescing
const potentialNull = ref<{ detail?: { value: number } } | null>(null)
const detailValue = computed(() => potentialNull.value?.detail?.value ?? 'Not Available')

// Regular Expression
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isValidEmail = computed(() => emailRegex.test(inputText.value))

// Template Literal Type (less common in components, more in lib definitions)
type Position = `${'top' | 'bottom'}-${'left' | 'right'}`
let menuPosition: Position = 'top-left'

// 14. Expose (Optional - if this component needed to expose methods/props to parent via template ref)
// defineExpose({
//   focusInput,
//   counterValue: counter
// });

// Final setup log
console.log('Script setup executed.')
</script>

<style lang="scss">
/* Global styles (not scoped) */
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

/* v-cloak directive styling */
[v-cloak] {
  display: none;
}
</style>

<style lang="scss" scoped>
/* Scoped styles specific to this component */
$primary-color: #42b983; // SCSS variable
$danger-color: #dc3545;
$font-stack: Helvetica, sans-serif;

.comprehensive-example {
  padding: 20px;
  border: 1px solid #ccc;
  max-width: 800px;
  margin: 20px auto;
  font-family: $font-stack; // Use SCSS variable

  h1 {
    color: $primary-color; // Use SCSS variable
    text-align: center;
  }

  button {
    margin: 5px;
    padding: 8px 15px;
    cursor: pointer;
    border: 1px solid $primary-color;
    background-color: white;
    color: $primary-color;
    transition: all 0.3s ease; // SCSS nesting & transitions

    &:hover {
      background-color: $primary-color;
      color: white;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: #eee;
      border-color: #ccc;
      color: #999;
    }
  }

  input[type='text'],
  input[type='checkbox'],
  input[type='radio'],
  select,
  textarea {
    margin: 5px;
    padding: 8px;
    border: 1px solid #ccc;
  }

  .text-danger {
    color: $danger-color; // Use SCSS variable
  }

  ul {
    list-style: square; // Different list style
    padding-left: 30px;
  }

  /* Deep selector for child components */
  :deep(.child-component-class) {
    border: 1px dashed blue;
  }

  /* Slotted content selector */
  :slotted(h2) {
    color: purple;
  }

  /* Global selector within scoped style */
  :global(.modal) {
    position: fixed;
    top: 10px;
    right: 10px;
    background: lightyellow;
    padding: 10px;
    border: 1px solid gold;
    z-index: 9999;
  }

  /* Transitions */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  /* v-bind in CSS */
  .dynamic-style-via-v-bind {
    // Note: v-bind() is experimental and syntax might evolve slightly
    // color: v-bind(dynamicColor); // Requires dynamicColor ref/prop in <script>
    font-size: v-bind('styleObject.fontSize'); // Accessing nested reactive property
  }
}
</style>

<style module>
/* CSS Modules example */
.moduleClass {
  background-color: lightblue;
  padding: 5px;
  border: 1px solid blue;
}
</style>
