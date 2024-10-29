<template>
	<div>
		<button @click="this.dec">
          -
    </button>
		<span>{{count}}</span>
		<button @click="this.inc">
          +
    </button>
	</div>
</template>

<script>
	export default {
		tag: 'my-counter',
		name: 'MyCounter',
		data() {
			return { count: 0 }
		},
		methods: {
			inc: function() {
				this.count++;
			},
			dec: function() {
				this.count--;
			}
		}
	};
</script>

<style scoped>
	span,
	button {
		font-size: 200%;
	}

	span {
		width: 4rem;
		display: inline-block;
		text-align: center;
	}

	button {
		width: 4rem;
		height: 4rem;
		border: none;
		border-radius: 10px;
		background-color: seagreen;
		color: white;
	}
</style>