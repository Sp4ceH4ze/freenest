<script lang="ts">
	const btnStyle = {
		primary_filled: 'btn preset-filled-primary-500',
		primary_tonal: 'btn preset-tonal-primary',
		primary_outlined: 'btn preset-outlined-primary-500',
		secondary_filled: 'btn preset-filled-secondary-500',
		secondary_tonal: 'btn preset-tonal-secondary',
		secondary_outlined: 'btn preset-outlined-secondary-500',
		tertiary_filled: 'btn preset-filled-tertiary-500',
		tertiary_tonal: 'btn preset-tonal-tertiary',
		tertiary_outlined: 'btn preset-outlined-tertiary-500',
		success_filled: 'btn preset-filled-success-500',
		success_tonal: 'btn preset-tonal-success',
		success_outlined: 'btn preset-outlined-success-500',
		warning_filled: 'btn preset-filled-warning-500',
		warning_tonal: 'btn preset-tonal-warning',
		warning_outlined: 'btn preset-outlined-warning-500',
		error_filled: 'btn preset-filled-error-500',
		error_tonal: 'btn preset-tonal-error',
		error_outlined: 'btn preset-outlined-error-500',
		surface_filled: 'btn preset-filled-surface-500',
		surface_tonal: 'btn preset-tonal-surface',
		surface_outlined: 'btn preset-outlined-surface-500'
	};

	export let btnClass = btnStyle.primary_outlined;
	export let btnLink = '/default';
	export let btnAria = 'default';
	export let btnText = 'default';
</script>

<button type="button" class={btnClass} aria-label={btnAria}>
	<a href={btnLink} aria-label={btnAria}>{btnText}</a>
</button>
