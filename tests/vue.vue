<template>
  <div>
    <!-- v-text -->
    <p v-text="message"></p>

    <!-- v-html -->
    <div v-html="htmlContent"></div>

    <!-- v-show -->
    <div v-show="isVisible">This element is shown/hidden based on 'isVisible'.</div>

    <!-- v-if, v-else, v-else-if -->
    <div v-if="conditionA">Condition A is true.</div>
    <div v-else-if="conditionB">Condition B is true.</div>
    <div v-else>Neither condition A nor B is true.</div>

    <!-- v-for -->
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>

    <!-- v-on -->
    <button @click="handleClick">Click me!</button>

    <!-- v-bind -->
    <input :value="inputValue" @input="updateInputValue" />

    <!-- v-model -->
    <input v-model="inputText" />

    <!-- v-slot -->
    <template v-slot:header>
      <h1>Header Slot Content</h1>
    </template>

    <!-- Other attributes -->
    <div :key="uniqueKey" ref="myRef" :is="dynamicComponent"></div>

    <!-- Built-in components -->
    <component :is="dynamicComponent"></component>
    <transition name="fade">
      <div v-if="showComponent">Component will transition in/out.</div>
    </transition>
    <transition-group name="list" tag="ul">
      <li v-for="item in listItems" :key="item.id">{{ item.text }}</li>
    </transition-group>
    <keep-alive>
      <component :is="dynamicComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, Vue!",
      htmlContent: "<strong>Rendered HTML content</strong>",
      isVisible: true,
      conditionA: true,
      conditionB: false,
      items: ["Item 1", "Item 2", "Item 3"],
      inputValue: "",
      inputText: "",
      uniqueKey: "my-unique-key",
      dynamicComponent: "my-component",
      showComponent: true,
      listItems: [
        { id: 1, text: "Item A" },
        { id: 2, text: "Item B" },
        { id: 3, text: "Item C" },
      ],
    };
  },
  methods: {
    handleClick() {
      // Handle button click
    },
    updateInputValue(event) {
      this.inputValue = event.target.value;
    },
  },
};
</script>

<style>
/* Add your custom styles here */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active in <2.1.8 */ {
  transform: translateY(30px);
  opacity: 0;
}
</style>
