<template>
  <div
    :id="mainId"
    class="vue-syntax-test"
    :class="[componentClasses, { active: isActive }]"
  >
    <h1>{{ pageTitle }} - <span v-text="frameworkVersion"></span></h1>
    <p v-html="rawHtmlContent"></p>
    <p v-once>This content is rendered once: {{ initialValue }}</p>
    <p v-pre>{{ This will not be compiled: use v-pre }}</p>

    <img :src="imageUrl" :alt="altText" v-bind="imageAttributes" />
    <a :[dynamicAttributeName]="dynamicUrl" :title="linkTitle" target="_blank"
      >Dynamic Link</a
    >
    <button :disabled="isButtonDisabled" @click="toggleActivity">
      Toggle Active State
    </button>

    <div v-if="userLoggedIn && userType === 'admin'">Welcome Admin!</div>
    <div v-else-if="userLoggedIn">Welcome User!</div>
    <div v-else>Please Log In</div>
    <p v-show="showDetails">Details are visible (v-show toggles display:none)</p>

    <h3>Items List:</h3>
    <ul>
      <li v-for="(item, index) in items" :key="item.id" class="list-item">
        {{ index + 1 }}. {{ item.name }} - Stock:
        {{ item.stock > 0 ? 'Available' : 'Out' }}
        <button @click="removeItem(item.id)">Remove</button>
      </li>
    </ul>
    <h3>User Object:</h3>
    <ul>
      <li v-for="(value, key, index) in userProfile" :key="key">
        {{ index }}. {{ key }}: {{ value }}
      </li>
    </ul>
    <h3>Range Iteration:</h3>
    <span v-for="n in 5" :key="n">{{ n }} </span>

    <div class="event-section">
      <button @click="handleSimpleClick('Argument 1', $event)">Simple Click</button>
      <button @click.stop="stopPropagation">Click with .stop modifier</button>
      <form @submit.prevent="submitForm">
        <input
          type="text"
          @keyup.enter="logMessage('Enter pressed!')"
          placeholder="Type and press Enter"
        />
        <button type="submit">Submit Form (prevented)</button>
      </form>
      <div class="hover-area" @mouseover.once="handleMouseOverOnce">Hover me once!</div>
    </div>

    <form class="form-binding">
      <h4>v-model Examples</h4>
      <label for="text-input">Text:</label>
      <input
        type="text"
        id="text-input"
        v-model.lazy="textInput"
        placeholder="Lazy update"
      />
      <label for="trimmed-input">Trimmed:</label>
      <input
        type="text"
        id="trimmed-input"
        v-model.trim="trimmedInput"
        placeholder="Trimmed input"
      />
      <p>Text Input Value: {{ textInput }}</p>
      <p>Trimmed Input Value: {{ trimmedInput }}</p>

      <label>
        <input type="checkbox" v-model="isChecked" /> Is Checked? {{ isChecked }}
      </label>
      <br />
      <label>Toggle Multiple:</label>
      <input type="checkbox" id="cb1" value="A" v-model="checkedItems" />
      <label for="cb1">A</label>
      <input type="checkbox" id="cb2" value="B" v-model="checkedItems" />
      <label for="cb2">B</label>
      <input type="checkbox" id="cb3" value="C" v-model="checkedItems" />
      <label for="cb3">C</label>
      <p>Checked Items: {{ checkedItems }}</p>

      <label>Pick One:</label>
      <input type="radio" id="radioA" value="Option A" v-model="pickedOption" />
      <label for="radioA">Option A</label>
      <input type="radio" id="radioB" value="Option B" v-model="pickedOption" />
      <label for="radioB">Option B</label>
      <p>Picked Option: {{ pickedOption }}</p>

      <label for="select-input">Select:</label>
      <select id="select-input" v-model="selectedOption">
        <option disabled value="">Please select one</option>
        <option v-for="option in selectOptions" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <p>Selected Option: {{ selectedOption }}</p>

      <label for="textarea-input">Textarea:</label>
      <textarea
        id="textarea-input"
        v-model="textAreaContent"
        rows="3"
        placeholder="Enter multi-line text"
      ></textarea>
      <p style="white-space: pre-line">Textarea Content: {{ textAreaContent }}</p>

      <label for="number-input">Number:</label>
      <input type="number" id="number-input" v-model.number="numericInput" />
      <p>Numeric Input Type: {{ typeof numericInput }} Value: {{ numericInput }}</p>
    </form>

    <ChildComponent
      ref="childCompRef"
      :message-prop="computedMessage"
      :count-prop="numericInput"
      :user-prop="userProfile"
      :is-active-prop="isActive"
      required-prop="This is required"
      @child-event="handleChildEvent"
      @hook:mounted="childMountedHook"
    >
      <p>This content goes into the <em>default</em> slot of the child component.</p>

      <template slot="header">
        <h2>Child Component Header Slot</h2>
      </template>

      <div slot="footer">
        <p>Child Component Footer Slot &copy; {{ new Date().getFullYear() }}</p>
      </div>

      <template slot="item" slot-scope="slotProps">
        <div class="scoped-slot-item">
          Item from parent: {{ slotProps.itemData.name }} (ID:
          {{ slotProps.itemData.id }})
          <span v-if="slotProps.isEven"> - Even Index</span>
        </div>
      </template>
    </ChildComponent>
    <button @click="callChildMethod">Call Child Method via $refs</button>

    <h3>Dynamic Component:</h3>
    <button @click="currentComponent = 'ComponentA'">Load A</button>
    <button @click="currentComponent = 'ComponentB'">Load B</button>
    <keep-alive>
      <component :is="currentComponent" :dynamic-prop="textInput"></component>
    </keep-alive>

    <p v-custom-highlight:foo.bar="'yellow'" v-if="isActive">
      This text is highlighted by a custom directive.
    </p>

    <p>Filtered Date: {{ currentDate | formatDate('YYYY-MM-DD') }}</p>
    <p>Chained Filters: {{ textInput | uppercase | reverseString }}</p>
    <section id="entities">
      <h2>HTML Entities &amp; Special Characters</h2>
      <p>Less than: &lt; (or &#60; or &#x3C;)</p>
      <p>Greater than: &gt; (or &#62;)</p>
      <p>Ampersand: &amp; (or &#38;)</p>
      <p>Double quote: &quot; (or &#34;)</p>
      <p>Single quote: &apos; (or &#39;)</p>
      <p>Non-breaking space:&nbsp;&nbsp;&nbsp;here.</p>
      <p>
        Copyright: &copy; (or &#169;), Registered: &reg; (or &#174;), Trademark: &trade;
        (or &#8482;)
      </p>
    </section>
  </div>
</template>

<script>
// Import components, libraries, etc.
import ChildComponent from './ChildComponent.vue'; // Assume ChildComponent exists
// Fake components for dynamic example
const ComponentA = { template: '<div>Component A Loaded. Prop: {{ dynamicProp }}</div>', props: ['dynamicProp'] };
const ComponentB = { template: '<div>Component B Loaded. Prop: {{ dynamicProp }}</div>', props: ['dynamicProp'] };
// Fake library for filter example
const moment = { format: (date, format) => `FormattedDate(${format})` }; // Mock moment.js

/**
 * JSDoc comment for the Vue component.
 * This component demonstrates various Vue 2 syntax elements.
 */
export default {
  name: 'Vue2SyntaxTest',

  // Register components
  components: {
    ChildComponent,
    ComponentA,
    ComponentB
  },

  // Register custom directives
  directives: {
    'custom-highlight': { // Note: camelCase directive name 'customHighlight' becomes 'v-custom-highlight'
      bind(el, binding, vnode) {
        // binding.value = color (e.g., 'yellow')
        // binding.arg = argument (e.g., 'foo')
        // binding.modifiers = { bar: true }
        el.style.backgroundColor = binding.value || 'lightblue';
        console.log('Custom directive bound:', binding);
      },
      update(el, binding) {
        el.style.backgroundColor = binding.value || 'lightblue';
        console.log('Custom directive updated:', binding);
      },
      unbind(el) {
        el.style.backgroundColor = null;
        console.log('Custom directive unbound');
      }
    }
  },

  // Register filters
  filters: {
    formatDate(value, formatString) {
      if (!value) return '';
      // In a real app, use a date formatting library like moment.js or date-fns
      // return moment(value).format(formatString);
      return moment.format(value, formatString); // Using mock
    },
    uppercase(value) {
      if (!value) return '';
      return value.toString().toUpperCase();
    },
    reverseString(value) {
      if (!value) return '';
      return value.toString().split('').reverse().join('');
    }
  },

  // Props definition
  props: {
    initialCounter: {
      type: Number,
      default: 0,
      required: false,
      validator: function(value) {
        // Custom validation logic
        return value >= 0;
      }
    },
    configObject: {
      type: Object,
      // Object or array defaults must be returned from a factory function
      default: () => ({ theme: 'light', notifications: true })
    }
  },

  // Component data function
  data() {
    return {
      frameworkVersion: 2, // Added for v-text example
      pageTitle: 'Vue 2 Syntax Test',
      message: 'Hello from Vue 2 Data!',
      rawHtmlContent: '<span style="color: red;">Raw HTML Content</span>',
      initialValue: 'Loaded Initially',
      imageUrl: 'https://via.placeholder.com/150',
      altText: 'Placeholder Image',
      linkTitle: 'Visit Example.com',
      dynamicUrl: 'https://example.com',
      dynamicAttributeName: 'href', // Used in :[dynamicAttributeName]
      imageAttributes: { // Bound using v-bind object syntax
        'data-info': 'Image Data Attribute',
        'aria-label': 'Accessible placeholder image'
      },
      mainId: 'main-app-container',
      isActive: true,
      isButtonDisabled: false,
      userLoggedIn: true,
      userType: 'user', // 'admin' or 'user'
      showDetails: true,
      items: [
        { id: 1, name: 'Apple', stock: 10 },
        { id: 2, name: 'Banana', stock: 0 },
        { id: 3, name: 'Cherry', stock: 5 }
      ],
      userProfile: {
        name: 'Alice',
        age: 30,
        email: 'alice@example.com'
      },
      textInput: '',
      trimmedInput: '',
      isChecked: true,
      checkedItems: ['A', 'C'],
      pickedOption: 'Option A',
      selectedOption: '',
      selectOptions: [
        { text: 'One', value: '1' },
        { text: 'Two', value: '2' },
        { text: 'Three', value: '3' }
      ],
      textAreaContent: 'Initial textarea\ncontent.',
      numericInput: 0,
      currentComponent: 'ComponentA',
      currentDate: new Date(),
    };
  },

  // Computed properties
  computed: {
    // Simple getter
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
    // Getter accessing props and data
    computedMessage() {
      return `Initial Counter: ${this.initialCounter}. Active: ${this.isActive}. Theme: ${this.configObject.theme}`;
    },
    // Getter and Setter
    fullName: {
      get() {
        return `${this.userProfile.name} (Age: ${this.userProfile.age})`;
      },
      set(newValue) {
        // Example: Expecting "FirstName LastName"
        const names = newValue.split(' ');
        // Note: Modifying object properties directly might be better in methods/watchers
        // This is just to show the setter syntax
        this.userProfile.name = names[0];
        // this.userProfile.lastName = names[1]; // Assuming lastName exists
      }
    },
    componentClasses() {
      return ['base-class', this.configObject.theme + '-theme'];
    }
  },

  // Watchers
  watch: {
    // Watching a data property, calls method
    isActive(newValue, oldValue) {
      console.log(`isActive changed from ${oldValue} to ${newValue}`);
      this.logMessage(`Activity toggled to: ${newValue}`);
    },
    // Watching a data property, calls method name string
    textInput: 'handleTextInputChange',
    // Watching nested properties requires 'deep'
    userProfile: {
      handler(newProfile, oldProfile) {
        console.log('User profile changed (deep watch):', newProfile);
      },
      deep: true
    },
    // Immediate watcher: runs handler immediately on component load
    initialCounter: {
      handler(newVal) {
        console.log(`Watcher: initialCounter is now ${newVal} (immediate run)`);
      },
      immediate: true
    },
    // Watching a computed property
    reversedMessage(newVal) {
      console.log(`Reversed message updated: ${newVal}`);
    }
  },

  // Methods
  methods: {
    toggleActivity() {
      this.isActive = !this.isActive;
      this.isButtonDisabled = true;
      // Use $nextTick to wait for DOM update
      this.$nextTick(() => {
        console.log('DOM updated after activity toggle.');
        this.isButtonDisabled = false; // Re-enable after DOM update cycle
      });
    },
    handleSimpleClick(arg1, event) {
      console.log('Simple click handled!', arg1, event.target);
      this.message += '!'; // Modify data property
    },
    stopPropagation() {
      console.log('Click event propagation stopped.');
    },
    submitForm() {
      console.log('Form submit intercepted (default prevented).');
      console.log('Form Data:', {
        text: this.textInput,
        trimmed: this.trimmedInput,
        checked: this.isChecked,
        picked: this.pickedOption,
        selected: this.selectedOption,
        textarea: this.textAreaContent,
        numeric: this.numericInput
      });
    },
    logMessage(message) {
      console.log(`LOG: ${message}`);
    },
    averageAge(persons) {
    let sum = 0
    for (let person of persons) {
      sum += person.age
    }
    return sum / persons.length
  }
    handleMouseOverOnce() {
      console.log('Mouse over event fired (once).');
      alert('You hovered me for the first and only time!');
    },
    removeItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
      console.log(`Removed item with id: ${itemId}`);
    },
    handleTextInputChange(newValue, oldValue) {
        console.log(`textInput changed via watcher method: '${oldValue}' -> '${newValue}'`);
    },
    handleChildEvent(payload) {
      console.log('Received custom event "child-event" from child component:', payload);
      alert(`Received from child: ${payload}`);
    },
    callChildMethod() {
      if (this.$refs.childCompRef && typeof this.$refs.childCompRef.publicMethod === 'function') {
        this.$refs.childCompRef.publicMethod('Data from Parent');
      } else {
        console.error('Could not call publicMethod on child component.');
      }
    },
    // Example async method
    async fetchData() {
      this.logMessage('Fetching data...');
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Example API
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.logMessage('Data fetched successfully:');
        console.log(data);
        // Example: Update component data with fetched data
        this.userProfile.name = data.title || 'Fetched User';
      } catch (error) {
        console.error('Error fetching data:', error);
        this.logMessage('Failed to fetch data.');
      }
    },
    childMountedHook() {
      console.log('Child component mounted! (Detected via @hook:mounted)');
    }
  },

  // Lifecycle Hooks
  beforeCreate() {
    console.log('Lifecycle: beforeCreate - Data/props not available yet.', this.message); // undefined
  },
  created() {
    console.log('Lifecycle: created - Data/props available, DOM not mounted.', this.message);
    // Good place for API calls that don't rely on DOM
    this.fetchData();
    // Example using $watch programmatically
    this.unwatch = this.$watch('numericInput', (newVal) => {
        console.log(`Programmatic watch: numericInput is ${newVal}`);
    });
  },
  beforeMount() {
    console.log('Lifecycle: beforeMount - Template compiled, about to mount to DOM.');
  },
  mounted() {
    console.log('Lifecycle: mounted - Component mounted to DOM.');
    console.log('Accessing ref:', this.$refs.childCompRef);
    // Good place for DOM manipulations or integrating non-Vue libraries
    this.$nextTick(() => {
      console.log('Mounted $nextTick: DOM is fully ready.');
    });
  },
  beforeUpdate() {
    console.log('Lifecycle: beforeUpdate - Data changed, before DOM re-render.');
    // Can inspect state before update here
  },
  updated() {
    console.log('Lifecycle: updated - DOM re-rendered due to data change.');
  },
  beforeDestroy() {
    console.log('Lifecycle: beforeDestroy - Component instance about to be destroyed.');
    // Clean up listeners, timers, etc.
    if (this.unwatch) {
      this.unwatch(); // Stop programmatic watcher
      console.log('Programmatic watcher stopped.');
    }
  },
  destroyed() {
    console.log('Lifecycle: destroyed - Component instance destroyed.');
  },
  // Hooks for <keep-alive>
  activated() {
    console.log('Lifecycle: activated - Component activated (keep-alive).');
  },
  deactivated() {
    console.log('Lifecycle: deactivated - Component deactivated (keep-alive).');
  }
}
</script>

<style>
/* Global (unscoped) styles */
body {
  /* This won't affect the component directly unless it's the root element */
  margin: 0; /* Example */
}

.global-utility-class {
  font-weight: bold;
  color: darkmagenta;
}
</style>

<style scoped>
/* Scoped styles: Only apply to elements within this component */
.vue-syntax-test {
  border: 2px solid #42b983; /* Vue green :) */
  padding: 15px;
  margin: 10px;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  color: #2c3e50; /* Vue dark */
  border-bottom: 1px solid #eee;
}

/* Selectors target elements in the template */
.list-item {
  margin-bottom: 5px;
  padding: 5px;
  background-color: #f9f9f9;
}

.list-item button {
  margin-left: 10px;
  cursor: pointer;
  color: red;
}

.event-section button,
.form-binding button[type='submit'] {
  padding: 8px 15px;
  margin: 5px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
}

.event-section button:hover {
  background-color: #36a374;
}

.hover-area {
  padding: 20px;
  background-color: lightgoldenrodyellow;
  border: 1px dashed gray;
  margin-top: 10px;
  text-align: center;
}

.form-binding label {
  margin-right: 5px;
  font-weight: bold;
}
.form-binding input[type='text'],
.form-binding input[type='number'],
.form-binding select,
.form-binding textarea {
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

/* Deep selector for styling child component content from parent (use with caution) */
.vue-syntax-test >>> .child-component-internal-class {
  /* This targets .child-component-internal-class even if ChildComponent has scoped styles */
  /* Deprecated syntax: /deep/, ::v-deep */
  font-style: italic;
}

/* Style scoped slot content */
.scoped-slot-item {
  border: 1px dotted blue;
  padding: 5px;
  margin: 2px 0;
  background-color: #eef;
}
</style>

<style lang="scss" scoped>
/* Scoped SCSS/Sass styles */
/* Requires node-sass or dart-sass installed: npm install -D sass */

// SCSS Variables
$primary-color: #3498db; // A blue color
$secondary-color: darken($primary-color, 15%);
$text-color: #333;
$border-radius: 5px;
$spacing-unit: 8px;

// SCSS Mixin
@mixin flex-center($direction: row) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}

// SCSS Nesting and Parent Selector (&)
.form-binding {
  border: 1px solid $primary-color;
  padding: $spacing-unit * 2;
  margin-top: $spacing-unit * 3;
  border-radius: $border-radius;

  h4 {
    color: $secondary-color;
    margin-top: 0;
    border-bottom: 1px dashed $primary-color;
  }

  label {
    display: inline-block;
    margin-bottom: $spacing-unit / 2;

    // Nested rules
    & + input[type='text'] {
      // Target input directly following label
      margin-left: $spacing-unit;
    }
  }

  // Use mixin
  .submit-container {
    @include flex-center;
    margin-top: $spacing-unit * 2;
  }
}

// Extend placeholder selector (optional)
%message-base {
  padding: $spacing-unit;
  border: 1px solid;
  border-radius: $border-radius / 2;
}

.success-message {
  @extend %message-base;
  color: green;
  border-color: green;
  background-color: lighten(green, 50%);
}

/* SCSS Comment */
// Single line SCSS comment
</style>
