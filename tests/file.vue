<template>
  <div class="vue2-syntax-showcase" v-custom-highlight:arg.mod="'yellow'">
    <h1>{{ pageTitle }}</h1>
    <p>Message: {{ message | capitalize }}</p>
    <p>Raw HTML (v-html): <span v-html="rawHtmlContent"></span></p>
    <p v-text="directiveText"></p>
    <img :src="imageUrl" v-bind:alt="altText" />
    <div
      :id="dynamicId"
      :class="['base-class', { active: isActive }, computedClassObj]"
    ></div>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">Style Binding</div>
    <button :disabled="isButtonDisabled">A Button</button>
    <a :[dynamicAttrName]="url">Dynamic Attr Link</a>

    <p>Counter + 1: {{ counter + 1 }}</p>
    <p>Ternary: {{ isActive ? 'ACTIVE' : 'INACTIVE' }}</p>
    <p>Method Call: {{ formatValue(counter) }}</p>

    <div v-if="type === 'A'">Type A Content</div>
    <p v-else-if="type === 'B'">Type B Content</p>
    <template v-else> <p>Fallback Content (Type C)</p> </template>

    <p v-show="showElement">This element uses v-show</p>

    <ul>
      <li v-for="(item, index) in listItems" :key="item.id">
        {{ index }} - {{ item.text }} <span v-if="item.id % 2 === 0"> (Even ID)</span>
      </li>
    </ul>
    <template v-for="n in 5">
      <span :key="'range-' + n">{{ n }} </span>
    </template>
    <ul>
      <li v-for="(value, key, idx) in objectData" :key="key">
        {{ idx }}. {{ key }}: {{ value }}
      </li>
    </ul>

    <div v-pre>{{ This will not be compiled: {{ message }} }}</div>
    <div v-cloak>Content hidden until Vue is ready (requires CSS)</div>
    <p v-once>Initial value (v-once): {{ initialCounter }}</p>
    <button v-on:click="incrementCounter">Increment (Longhand)</button>
    <button @click="counter--">Decrement (Shorthand)</button>
    <button @mouseover="handleMouseOver($event, 'param1')">Hover Me</button>
    <button @click="inlineHandlerMessage = 'Inline handler executed!'">
      Inline Handler
    </button>
    <span>{{ inlineHandlerMessage }}</span>
    <form @submit.prevent="submitForm">
      <input type="text" @keyup.enter="logEnterKey" @keydown.esc.stop="logEscKey" />
      <div @click.self="logSelfClick" style="padding: 20px; background: lightgrey">
        Outer (Click here for self)
        <button @click="logButtonClick">Inner Button (Click here for regular)</button>
      </div>
      <button @click.once="logOnceClick">Click Once</button>
      <button type="submit">Submit (Prevented)</button>
    </form>
    <MyChildComponent @click.native="logNativeClick" />

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
    </select>
    <textarea v-model="textAreaContent" placeholder="Text Area"></textarea>
    <input type="text" v-model.lazy="lazyInput" placeholder="Lazy Input" />
    <input type="text" v-model.number="numericInput" placeholder="Numeric Input" />
    <input type="text" v-model.trim="trimmedInput" placeholder="Trimmed Input" />

    <my-child-component
      :static-prop="'Hello from Parent'"
      :dynamic-prop="counter"
      :object-prop="{ a: 1, b: 'two' }"
      :synced-prop.sync="syncValue"
      required-prop="This is required"
      @custom-event="handleChildEvent"
    ></my-child-component>
    <p>Value synced with child: {{ syncValue }}</p>
    <MyChildComponent />
    <MyLayoutComponent>
      <p>This goes into the default slot.</p>

      <h2 slot="header">Layout Header (Old Syntax)</h2>

      <template slot="item" slot-scope="slotProps">
        <li>Item (Old): {{ slotProps.itemData.name }} - Index: {{ slotProps.index }}</li>
      </template>

      <template v-slot:footer>
        <p>Layout Footer (New Syntax)</p>
      </template>

      <template #item2="{ itemData, index }">
        <li>Item (New): {{ itemData.name }} - Index: {{ index }}</li>
      </template>
    </MyLayoutComponent>

    <input type="text" ref="inputRef" placeholder="Input with Ref" />
    <button @click="focusInput">Focus Input Ref</button>
    <ul>
      <li v-for="i in 3" :key="'ref-' + i" :ref="'loopRef' + i">Loop Ref {{ i }}</li>
    </ul>

    <button @click="showTransition = !showTransition">Toggle Transition</button>
    <transition name="fade">
      <p v-if="showTransition">Fading paragraph</p>
    </transition>

    <transition-group name="list-anim" tag="ul">
      <li v-for="item in animatedList" :key="item.id" class="list-item">
        {{ item.text }} <button @click="removeItem(item.id)">X</button>
      </li>
    </transition-group>
    <button @click="addItem">Add Item</button>

    <keep-alive>
      <component :is="currentComponent" :dynamic-prop="counter"></component>
    </keep-alive>
    <button @click="switchComponent">Switch Component</button>
  </div>
</template>

<script>
// Import Child Components
import MyChildComponent from './MyChildComponent.vue' // Assume these exist
import MyLayoutComponent from './MyLayoutComponent.vue'
import MyOtherComponent from './MyOtherComponent.vue'

// Example Mixin
const myMixin = {
  data: function () {
    return {
      mixinData: 'Data from Mixin!',
    }
  },
  created: function () {
    console.log('Mixin created hook called!')
  },
  methods: {
    mixinMethod: function () {
      console.log('Mixin method executed!')
    },
  },
}

export default {
  // 1. Component Identification
  name: 'Vue2SyntaxShowcase',

  // 2. Child Component Registration
  components: {
    MyChildComponent,
    MyLayoutComponent,
    MyOtherComponent, // Registered but only used in <component :is="">
  },

  // 3. Mixins
  mixins: [myMixin],

  // 4. Props Definition
  props: {
    // Simple prop
    initialCounter: {
      type: Number,
      default: 0,
    },
    // Required prop with multiple types
    configObject: {
      type: [Object, Boolean],
      required: true,
    },
    // Prop with validator
    statusProp: {
      validator: function (value) {
        return ['success', 'warning', 'error'].indexOf(value) !== -1
      },
    },
  },

  // 5. Local State (must be a function)
  data: function () {
    return {
      pageTitle: 'Vue 2 Syntax Showcase (Options API)',
      message: 'hello vue 2 world!',
      counter: this.initialCounter, // Use prop for initial value
      isActive: true,
      activeColor: 'blue',
      fontSize: 16,
      dynamicId: 'my-dynamic-div',
      imageUrl: '/path/to/image.png',
      altText: 'Sample Image',
      isButtonDisabled: false,
      rawHtmlContent: '<span style="color: green;">Green HTML</span>',
      directiveText: 'Text set by v-text',
      type: 'A',
      showElement: true,
      listItems: [
        { id: 1, text: 'Item One' },
        { id: 2, text: 'Item Two' },
        { id: 3, text: 'Item Three' },
      ],
      objectData: { foo: 'bar', baz: 123, qux: true },
      inlineHandlerMessage: '',
      // v-model related data
      inputText: '',
      isChecked: true,
      radioValue: 'one',
      selectedValue: '',
      textAreaContent: 'Default text area content.',
      lazyInput: '',
      numericInput: 0,
      trimmedInput: '',
      // .sync related data
      syncValue: 'Initial Sync Value',
      // Transition related data
      showTransition: false,
      animatedList: [
        { id: 1, text: 'Anim Item 1' },
        { id: 2, text: 'Anim Item 2' },
      ],
      nextItemId: 3,
      // Dynamic component related data
      currentComponent: 'MyChildComponent', // Component name as string
      // Dynamic attribute name
      dynamicAttrName: 'href',
      url: 'https://v2.vuejs.org',
    }
  },

  // 6. Computed Properties
  computed: {
    computedMessage: function () {
      // Dependency on this.message
      return this.message.toUpperCase() + ' (Computed)'
    },
    computedClassObj: function () {
      // Dependency on this.isActive and this.counter
      return {
        highlight: this.counter > 5,
        'error-text': !this.isActive,
      }
    },
    // Example getter/setter computed prop
    counterSquared: {
      get: function () {
        return this.counter * this.counter
      },
      set: function (newValue) {
        // Example: Allow setting the counter via its square root
        this.counter = Math.sqrt(newValue)
      },
    },
  },

  // 7. Watchers
  watch: {
    // Watch a simple data property
    counter: function (newValue, oldValue) {
      console.log('Counter changed from', oldValue, 'to', newValue)
      this.type = newValue < 5 ? 'A' : newValue < 10 ? 'B' : 'C'
    },
    // Watch an object property (needs deep or specific path)
    'objectData.foo': function (newFoo) {
      console.log('objectData.foo changed to:', newFoo)
    },
    // Deep watcher for nested changes
    listItems: {
      handler: function (newList) {
        console.log('listItems array changed (deep watch):', newList)
      },
      deep: true,
    },
    // Immediate watcher (runs once on component creation)
    isActive: {
      handler: function (newVal) {
        console.log('isActive watcher running immediately. Value:', newVal)
        this.activeColor = newVal ? 'blue' : 'grey'
      },
      immediate: true,
    },
  },

  // 8. Methods
  methods: {
    incrementCounter: function () {
      this.counter++
      this.mixinMethod() // Call mixin method
    },
    handleMouseOver: function (event, param) {
      console.log('Mouse over event:', event.target)
      console.log('Extra parameter:', param)
    },
    submitForm: function () {
      console.log('Form submission prevented.')
      alert('Form submitted with data: ' + this.inputText)
    },
    logEnterKey: function () {
      console.log('Enter key pressed in input.')
    },
    logEscKey: function () {
      console.log('Escape key pressed (propagation stopped).')
    },
    logSelfClick: function () {
      console.log('Clicked on the outer div itself (modifier .self)')
    },
    logButtonClick: function () {
      console.log('Clicked on the inner button (regular click)')
    },
    logOnceClick: function () {
      console.log('This message logged only once per element.')
    },
    logNativeClick: function () {
      console.log('Native click detected on child component root element.')
    },
    handleChildEvent: function (payload) {
      console.log('Custom event received from child:', payload)
      this.message = 'Child event payload: ' + payload.data
      // Update prop that child syncs
      // this.syncValue = 'Updated by parent after child event';
    },
    formatValue: function (value) {
      // Example method used in template expression
      return `Formatted: ${value * 10}`
    },
    focusInput: function () {
      // Accessing template refs
      this.$refs.inputRef.focus()
      console.log('Loop Refs:', this.$refs.loopRef1) // Accessing refs in v-for
    },
    // For transition-group
    addItem: function () {
      this.animatedList.push({
        id: this.nextItemId++,
        text: 'Anim Item ' + this.nextItemId,
      })
    },
    removeItem: function (idToRemove) {
      this.animatedList = this.animatedList.filter((item) => item.id !== idToRemove)
    },
    // For dynamic component
    switchComponent: function () {
      this.currentComponent =
        this.currentComponent === 'MyChildComponent'
          ? 'MyOtherComponent'
          : 'MyChildComponent'
      console.log('Switched component to:', this.currentComponent)
    },
    // Method to simulate child updating synced prop
    simulateChildUpdateSync: function () {
      this.$emit('update:syncedProp', 'Value updated by child via $emit')
    },
  },

  // 9. Lifecycle Hooks
  beforeCreate: function () {
    console.log('Lifecycle: beforeCreate - Instance not yet created', this.message) // data not available
  },
  created: function () {
    console.log('Lifecycle: created - Instance created', this.message) // data available
    console.log('Mixin data accessible:', this.mixinData)
  },
  beforeMount: function () {
    console.log('Lifecycle: beforeMount - Template compilation done, before DOM mount')
  },
  mounted: function () {
    console.log('Lifecycle: mounted - Component mounted to DOM')
    this.focusInput() // Example: Interact with DOM refs
    console.log('Accessing ref in mounted:', this.$refs.inputRef)
  },
  beforeUpdate: function () {
    console.log('Lifecycle: beforeUpdate - Data changed, before re-render')
  },
  updated: function () {
    console.log('Lifecycle: updated - Component re-rendered')
  },
  beforeDestroy: function () {
    console.log('Lifecycle: beforeDestroy - Before component is destroyed')
    // Cleanup timers, event listeners etc. here
  },
  destroyed: function () {
    console.log('Lifecycle: destroyed - Component destroyed')
  },
  // Hooks for keep-alive
  activated: function () {
    console.log('Lifecycle: activated - Component activated (keep-alive)')
  },
  deactivated: function () {
    console.log('Lifecycle: deactivated - Component deactivated (keep-alive)')
  },
  // Error capture hook
  errorCaptured: function (err, vm, info) {
    console.error(
      'Lifecycle: errorCaptured - Error caught:',
      err,
      'in component:',
      vm,
      'info:',
      info,
    )
    return false // Prevent error from propagating further
  },

  // 10. Custom Filters
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },

  // 11. Custom Directives
  directives: {
    'custom-highlight': {
      // Example directive hooks (Vue 2 syntax)
      bind: function (el, binding, vnode) {
        console.log('Directive: bind')
        el.style.transition = 'background-color 0.5s'
        // Access arg, modifiers, value
        const color = binding.value || 'lightblue' // Default color
        const arg = binding.arg // e.g., 'arg'
        const modifiers = binding.modifiers // e.g., { mod: true }
        console.log('Directive args/mods/value:', arg, modifiers, color)
        el.__highlightColor = color // Store color for update
        el.style.backgroundColor = color
      },
      inserted: function (el) {
        console.log('Directive: inserted')
      },
      update: function (el, binding) {
        console.log('Directive: update')
        // Update color if binding value changes
        const newColor = binding.value || 'lightblue'
        if (newColor !== el.__highlightColor) {
          el.__highlightColor = newColor
          el.style.backgroundColor = newColor
        }
      },
      componentUpdated: function (el) {
        console.log('Directive: componentUpdated')
      },
      unbind: function (el) {
        console.log('Directive: unbind')
        // Cleanup
        el.style.backgroundColor = ''
        delete el.__highlightColor
      },
    },
  },

  // 12. Provide/Inject (Provide part)
  provide: function () {
    // Use function form to provide instance data/methods
    return {
      theme: 'dark',
      getCounterValue: () => this.counter, // Provide reactive data via function
    }
  },
}
</script>

<style>
/* Global (non-scoped) styles */
[v-cloak] {
  display: none; /* Style for v-cloak */
}
body {
  font-family: sans-serif;
}
</style>

<style lang="scss" scoped>
/* Scoped styles using SCSS */
$primary-color: #41b883; // Vue Green
$secondary-color: #35495e; // Vue Blue
$padding: 15px;

.vue2-syntax-showcase {
  border: 1px solid #ccc;
  padding: $padding;
  margin: 20px;
  max-width: 900px;

  h1 {
    color: $secondary-color;
    text-align: center;
    border-bottom: 2px solid $primary-color;
  }

  button,
  input,
  select,
  textarea {
    margin: 5px;
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    background-color: $primary-color;
    color: white;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  ul {
    padding-left: 25px;
    list-style-type: disc;
  }

  /* Class bindings examples */
  .base-class {
    padding: 10px;
    border: 1px dashed $secondary-color;
    margin-top: 10px;
  }
  .active {
    font-weight: bold;
  }
  .highlight {
    background-color: lightyellow;
  }
  .error-text {
    color: red;
    border-color: red;
  }

  /* Transition classes */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .list-anim-enter-active,
  .list-anim-leave-active {
    transition: all 0.5s;
  }
  .list-anim-enter,
  .list-anim-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }

  /* Deep selector for child components (syntax may vary slightly based on setup) */
  /* >>> .child-class, /deep/ .child-class, ::v-deep .child-class are alternatives */
  ::v-deep .child-specific-class {
    font-style: italic;
    color: $secondary-color;
  }

  /* Example targeting slotted content */
  ::v-slotted(h2) {
    color: purple !important; // Style slotted h2
  }
}
</style>
