<template>
  <div v-text="'Hello World'"></div>
  <div v-html="'<strong>Hello World</strong>'"></div>
  <div v-show="true">Hello World</div>
  <div v-if="true">Hello World</div>
  <div v-else-if="false">Hello World</div>
  <div v-else>Hello World</div>
  <div v-for="(item, index) in ['Hello', 'World']" :key="index">{{ item }}</div>
  <button v-on:click="() => {}">Click me</button>
  <div v-bind:id="'example'">Hello World</div>
  <input v-model="exampleRef" />
  <template v-slot:default>Default slot content</template>
  <div v-pre>{{ 'Hello World' }}</div>
  <div v-once>{{ 'Hello World' }}</div>
  <div v-memo="[exampleRef]">{{ exampleRef }}</div>
  <div v-cloak>{{ 'Hello World' }}</div>
  <Transition name="fade">
    <div v-if="show">Hello World</div>
  </Transition>
  <TransitionGroup name="list">
    <div v-for="(item, index) in ['Hello', 'World']" :key="index">{{ item }}</div>
  </TransitionGroup>
  <KeepAlive>
    <component :is="ExampleComponent" />
  </KeepAlive>
  <Teleport to="#end">
    <div>Hello World</div>
  </Teleport>
  <Suspense>
    <template #default>
      <component :is="ExampleComponent" />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
  <component :is="ExampleComponent" />
  <slot></slot>
  <template v-if="true">
    <div>Hello World</div>
  </template>
</template>

<script lang="ts">
import { ref, computed, reactive, readonly, watchEffect, watchPostEffect, watchSyncEffect, watch, isRef, unref, toRef, toValue, toRefs, isProxy, isReactive, isReadonly, shallowRef, triggerRef, customRef, shallowReactive, shallowReadonly, toRaw, markRaw, effectScope, getCurrentScope, onScopeDispose, onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount, onErrorCaptured, onRenderTracked, onRenderTriggered, onActivated, onDeactivated, onServerPrefetch } from 'vue'
const exampleRef = ref(0)
const exampleComputed = computed(() => exampleRef.value * 2)
const exampleReactive = reactive({ count: 0 })
const exampleReadonly = readonly(exampleReactive)
const exampleShallowRef = shallowRef({ count: 0 })
const exampleCustomRef = customRef((track, trigger) => {
  return {
    get() {
      track()
      return exampleRef.value
    },
    set(newValue) {
      exampleRef.value = newValue
      trigger()
    },
  }
})
const exampleShallowReactive = shallowReactive({ count: 0 })
const exampleShallowReadonly = shallowReadonly(exampleShallowReactive)
const exampleToRaw = toRaw(exampleReactive)
const exampleMarkRaw = markRaw({ count: 0 })

watchEffect(() => console.log(exampleRef.value))
watchPostEffect(() => console.log('post effect'))
watchSyncEffect(() => console.log('sync effect'))
watch(exampleRef, (newValue, oldValue) => console.log(newValue, oldValue))

onMounted(() => console.log('onMounted'))
onUpdated(() => console.log('onUpdated'))
onUnmounted(() => console.log('onUnmounted'))
onBeforeMount(() => console.log('onBeforeMount'))
onBeforeUpdate(() => console.log('onBeforeUpdate'))
onBeforeUnmount(() => console.log('onBeforeUnmount'))
onErrorCaptured((error, instance, info) => {
  console.error(error, instance, info)
  return false
})
onRenderTracked((event) => console.log('onRenderTracked', event))
onRenderTriggered((event) => console.log('onRenderTriggered', event))
onActivated(() => console.log('onActivated'))
onDeactivated(() => console.log('onDeactivated'))
onServerPrefetch(async () => {
  // fetch data here
  console.log('onServerPrefetch')
})

const scope = effectScope(() => {
  watchEffect(() => console.log('effect in scope'))
})
onScopeDispose(() => {
  scope.stop()
})
</script>
