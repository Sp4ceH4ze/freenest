<script lang="ts">
	import { MenuIcon } from '@lucide/svelte';
	import { Menu, Portal } from '@skeletonlabs/skeleton-svelte';
	import { logout } from '$lib/api/auth.remote';
	import { getUser } from '$lib/api/auth.remote';

	const user = await getUser();
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
				{#if !user}
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
				{/if}
				<Menu.Separator />
				{#if user?.role === 'admin'}
					<Menu.Item value="create">
						<Menu.ItemText>
							<a href="/admin/create">Create Post</a>
						</Menu.ItemText>
					</Menu.Item>
				{/if}
				{#if user}
					<Menu.Separator />
					<Menu.Item value="logout">
						<Menu.ItemText>
							<form {...logout}>
								<button type="submit">Logout</button>
							</form>
						</Menu.ItemText>
					</Menu.Item>
					{#if user?.role === 'admin'}
						<Menu.Item value="adminDash">
							<Menu.ItemText>
								<a href="/admin">Admin Dashboard</a>
							</Menu.ItemText>
						</Menu.Item>
					{/if}
				{/if}
			</Menu.Content>
		</Menu.Positioner>
	</Portal>
</Menu>
