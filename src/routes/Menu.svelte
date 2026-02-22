<script lang="ts">
	import { MenuIcon } from '@lucide/svelte';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
</script>

<Menu>
	<Menu.Trigger class="btn-icon btn-icon-lg hover:preset-tonal"><MenuIcon /></Menu.Trigger>
	<Portal>
		<Menu.Positioner>
			<Menu.Content>
				<Menu.Item value="home">
					<Menu.ItemText>
						<a href="/">Home</a>
					</Menu.ItemText>
				</Menu.Item>
				<Menu.Item value="about">
					<Menu.ItemText>
						<a href="/about">About</a>
					</Menu.ItemText>
				</Menu.Item>
				<Menu.Item value="contact">
					<Menu.ItemText>
						<a href="/contact">Contact</a>
					</Menu.ItemText>
				</Menu.Item>
				<Menu.Separator />
				<Menu.Item value="login">
					<Menu.ItemText>
						<a href="/auth/login">Login</a>
					</Menu.ItemText>
				</Menu.Item>
				<Menu.Item value="signup">
					<Menu.ItemText>
						<a href="/auth/signup">Sign Up</a>
					</Menu.ItemText>
				</Menu.Item>
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
