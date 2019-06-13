<template>
  <rs-dialog
    v-model="showDialog"
    persistent
    max-width="700px"
    :fullscreen="$vuetify.breakpoint.xsOnly"
  >
    <rs-card>
      <rs-card-title class="justify-center">
        <h3 class="headline font-weight-medium ma-0">{{ dialogTitle }}</h3>
        <rs-btn
          :block="false"
          borderless
          absolute
          right
          icon
          @click="closeDialog"
        >
          <rs-icon>clear</rs-icon>
        </rs-btn>
      </rs-card-title>
      <rs-divider/>
      <rs-layout column pa-5>
        <rs-flex
          class="dropzone-container"
          ref="imgContainer"
        >
          <croppa
            v-model="croppa"
            :width="dropzone.width"
            :height="dropzone.height"
            :show-remove-button="false"
            accept="image/*"
            initial-position="center"
            prevent-white-space
            placeholder=""
            @new-image-drawn="imageLoaded"
            @zoom="onZoom"
          >
            <div
              class="mask"
              v-if="edit && circleMask"
            ></div>
          </croppa>

          <rs-layout
            v-if="!edit"
            class="dropzone-placeholder"
            justify-center
            align-center
            fill-height
            column
          >
            <rs-icon size="80">cloud_upload</rs-icon>
            <span>Add Image</span>
          </rs-layout>

        </rs-flex>
        <rs-layout
            column
            align-center
            v-if="edit"
          >
            <rs-slider
              class="mt-5"
              v-model="slider.val"
              :min="slider.min"
              :max="slider.max"
              step=".001"
              append-icon="add_circle_outline"
              prepend-icon="remove_circle_outline"
              hide-details
              @input="onSlideChange"
              @click:append="zoomInOut(.1)"
              @click:prepend="zoomInOut(-0.1)"
            ></rs-slider>
            <rs-card-actions
              class="mt-5"
            >
              <rs-btn
                :block="false"
                borderless
                class="px-5"
                @click="croppa.chooseFile()"
              >
                <span class="title"> Change </span>
              </rs-btn>
              <rs-btn
<<<<<<< HEAD
                :block="false"
                inverted
                class="px-5"
                @click="saveImage"
                @click:append="zoomInOut(.1)"
                @click:prepend="zoomInOut(-0.1)"
=======
                @click="onSave"
                append-icon="add_circle_outline"
                prepend-icon="remove_circle_outline"
                v-model="slider.val"
                :min="slider.min"
                :max="slider.max"
                step=".001"
>>>>>>> [RSCOM-486] brand logo image cropper ready
              >
                <span class="title"> Save </span>
              </rs-btn>
            </rs-card-actions>
          </rs-layout>
      </rs-layout>
    </rs-card>
  </rs-dialog>
</template>

<script>
export default {
  name: 'DialogImage',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
<<<<<<< HEAD
    dialogTitle: {
      type: String,
      default: ''
    },
    accountId: {
      type: String
    },
    imageUpload: {
      type: Function,
      default: () => {}
=======
    dimensions: {
      type: Object,
      default: () => ({
        w: 0,
        h: 0
      })
    },
    circleMask: {
      type: Boolean,
      default: false
>>>>>>> [RSCOM-486] brand logo image cropper ready
    }
  },
  data () {
    return {
      croppa: {},
      quality: 1,
      dropzone: {
        width: 600,
        height: 250
      },
      slider: {
        val: 0,
        min: 0,
        max: 0
      },
      edit: false
    }
  },
  methods: {
    async saveImage () {
      this.currentBlob = await this.croppa.generateBlob(
        async blob => {
          await this.imageUpload(blob)
        }
      )

      this.closeDialog()
    },
    imageLoaded () {
      // dropzone dimentions to the cover image aspect ratio
      this.dropzone.width = (this.dimensions.w > this.$refs.imgContainer.clientWidth)
        ? this.$refs.imgContainer.clientWidth
        : this.dimensions.w
      this.dropzone.height = this.dropzone.width * this.dimensions.h / this.dimensions.w

      // calculate the output dimentions
      this.quality = this.dimensions.w / this.dropzone.width

      // calculate zoom min and max
      this.slider.val = this.croppa.scaleRatio
      this.slider.min = this.croppa.scaleRatio / 2
      this.slider.max = this.croppa.scaleRatio * 2

      // show the edit controls
      this.edit = true
    },
    onSlideChange (evt) {
      this.croppa.scaleRatio = evt
    },
    onZoom () {
      this.slider.val = this.croppa.scaleRatio
    },
    zoomInOut (num) {
      this.slider.val += (num)
      this.croppa.scaleRatio = this.slider.val
    },
    onSave () {
      this.$emit('save', this.croppa.generateDataUrl('image/jpeg', 0.8))
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
      this.resetDropzone()
    },
    resetDropzone () {
      this.croppa.remove()
      this.edit = false
      this.dropzone.width = 600
      this.dropzone.height = 250
    }
  }
}
</script>

<style lang="sass">
.v-card__title
  position: relative

.croppa-container
  cursor: pointer
  border: 2px dashed #C0C0C0
  transition: background-color 0.3s ease-in-out
  position: relative

  &:hover
    background-color: #FCFCFC

  canvas
    display: block

.croppa--has-target
  border: 1px solid #e6eaee
  background-color: #FCFCFC
  cursor: move

.dropzone-container
  display: flex
  justify-content: center
  position: relative

.dropzone-placeholder
  pointer-events: none
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0

  i
    opacity: 0.3

  span
    font-size: 14px
    color: #808080

.mask
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  opacity: 0.5
  background-size: cover
  background-image: url("data:image/svg+xml;utf8,<svg version='1.0' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve'><g><path fill='white' d='M50,100h50V50C100,77.6,77.6,100,50,100z'/><path fill='white' d='M50,0c27.6,0,50,22.4,50,50V0H50z'/><path fill='white' d='M0,50v50h50C22.4,100,0,77.6,0,50z'/><path fill='white' d='M50,0H0v50C0,22.4,22.4,0,50,0z'/></g></svg>")
  pointer-events: none
</style>
