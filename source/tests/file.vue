<template lang="pug">
	.fmly-row
		.fmly(v-if='datos', v-for='family in datos')
			.couple
				.ref(:class="parentsFlag(family.couple)")
				.person(v-for='(person,index) in family.couple', :key='person+index', :class="'a' + person")
					.person-item
						.person-item__img(:style="{'background-image': 'url('+personas[person].img+')'}")
							router-link.person-item__edit(:to="{name: 'edit' , params: { id: person }}")
						.person-item__info+
							.person-item__info__name
								span {{personas[person].name}}
							.person-item__info__others
								span.person-item__info__nickname {{personas[person].nickname}}
								span.person-item__info__year(v-if="personas[person].dates.birth") {{dateTransform(personas[person].dates.birth.seconds)}}
						.person-item__action
							router-link(:to="{name:'add'}").person-item__add
			vfamilynode(v-if='family.relatives', :datos='family.relatives', :personas="personas")
</template>

<script>
export default {  
	name: "vfamilynode",
	props: ["datos","personas"],
	data() {
	  return {
		};
	},
	watch: {},
	methods: {
		parentsFlag(couple){
			let classNames = ""
			if(couple.length > 1){
				let cl1 = "a"
				let cl2 = "a"
				for (let i = 0; i < couple.length; i++){
					cl1 = cl1 + couple[i]
				}
				for (let i = couple.length - 1; i >= 0; i--){
					cl2 = cl2 + couple[i]
				}
				return classNames = cl1 + " " + cl2
			}else{
				return null
			}
		},
		dateTransform(timestamp){
			var a = new Date(0);
			a.setUTCSeconds(timestamp);
			var months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
			var year = a.getUTCFullYear();
			var month = months[a.getUTCMonth()];
			var date = a.getUTCDate();
			var time = date + ' ' + month + ' ' + year ;
			return time;
		},
		makeLines(){
			const app = this
			const svg_id = 'linea-1'
			// cual es el row <
			const lowestRow = app.personas[Object.keys(app.personas)[0]].row
			// console.log(lowestRow)
			// este es el current Row
			let currentPerson = app.datos[Object.keys(app.datos)[0]].couple[0]
			let currentRow = app.personas[currentPerson].row
			// console.log(currentRow)
			// esto es porque el ultimo componente en terminar es el primero
			if(currentRow == lowestRow){
				// SCROLLING LEFT START
				const fmly_wrapper = document.querySelector("#app")
				let fmly_wrapper_bcr = fmly_wrapper.getBoundingClientRect()
				const $fmly_row = document.querySelector('.fmly-row')
				let $family_row_bcr = $fmly_row.getBoundingClientRect()
				
				fmly_wrapper.scrollLeft += ($family_row_bcr.width / 2) - (fmly_wrapper_bcr.width / 2)
				// SCROLLING LEFT END
				// old line
				let $oldLine = document.getElementById(svg_id)
				// if there's a old line remove
				if ($oldLine) $oldLine.remove()
				// provitional cords
				let cords = {}
				// line object
				const $line = document.getElementById('line')
				// console.log($line)
				let svg_width =	$line.offsetWidth
				let svg_height = $line.offsetHeight
				// console.log(svg_width + '-' + svg_height)
				// creacion de svg
				let $svg = fnCreateSvg($line,svg_id,svg_width,svg_height)
				// loop in $store.lines
				for (let key in app.lines){
					
					// if $store.lines[key] has data
					if(app.lines[key]){
						// console.log(app.personas[key].name)
						
						const $lineCords = $line.getBoundingClientRect()
						// person object and cords
						const $person = document.querySelector("." + 'a' + key)
						const $personCords = $person.getBoundingClientRect()
						// console.log($personCords)
						// parent of person object and cords
						const $parent = document.querySelector("." + app.lines[key])
						const $parentCords = $parent.getBoundingClientRect()
						// console.log($parentCords)
						// create line between person and parent
						createPolyLine($svg, $parentCords.x - $lineCords.x + ($parentCords.width /2), $parentCords.bottom - $lineCords.y - 10, $personCords.x - $lineCords.x + ($personCords.width /2), $personCords.y - $lineCords.y + 10)
						// console.log("--------------------");
					}
					
				}
				
			}
			// CREAR SVG EN EL DOM
			function fnCreateSvg(csctnr,csid,cswidth,csheight){
				var NS = "http://www.w3.org/2000/svg"
				var svg = document.createElementNS(NS, "svg")
				svg.setAttribute("id",csid)
				svg.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink")
				svg.setAttribute("viewBox", "0 0 " + cswidth + " " + csheight)
				
				csctnr.appendChild(svg)
				return svg
			}
			// CREAR LINEA DENTRO DEL SVG
			function createLine(clctnr,clx1,cly1,clx2,cly2){
				var NS = "http://www.w3.org/2000/svg"
				var line = document.createElementNS(NS, "line")
				line.setAttribute("x1",clx1)
				line.setAttribute("y1",cly1)
				line.setAttribute("x2",clx2)
				line.setAttribute("y2",cly2)
				
				clctnr.appendChild(line)
			}
			// CREAR POLYLINEA DENTRO DEL SVG
			function createPolyLine(clctnr,clx1,cly1,clx2,cly2){
				var NS = "http://www.w3.org/2000/svg"
				var line = document.createElementNS(NS, "polyline")
				var hWay =  cly2 - 35 
				var cords = clx1 + "," + cly1 + " " + clx1 + "," + hWay + " " + clx2 + "," + hWay + " " + clx2 + "," + cly2
				line.setAttribute("points",cords)
				
				clctnr.appendChild(line)
			}
			// console.log("triguer________")
		}
	},
	computed:{
		lines(){
			return this.$store.state.lines
		}
	},
	created() {},
	mounted() {
		this.$nextTick(function () {
			this.makeLines()
  	})
	},
	updated() {
		this.makeLines()
	}
}
</script>

<style lang="sass">
</style>