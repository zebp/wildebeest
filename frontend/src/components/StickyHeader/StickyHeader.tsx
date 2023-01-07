import { component$, Slot } from '@builder.io/qwik'
import { useStylesScoped$ } from '@builder.io/qwik'
import styles from './StickyHeader.scss?inline'

export default component$(() => {
	useStylesScoped$(styles)

	return (
		<header class="bg-slate-900 sticky top-[4.5rem] xl:top-[0]">
			<Slot />
		</header>
	)
})
