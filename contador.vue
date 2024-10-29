<template>
	<div>
		<button @click="contagem--">
      -
    </button>
		<p><span>{{contagem}}</span></p>
		<button @click="contagem++">
      +
    </button>
	</div>
</template>

<script>
	export default {
		tag: 'app-contador',
		name: 'AppContador',
		data() {
			return { contagem: 0 }
		},
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
