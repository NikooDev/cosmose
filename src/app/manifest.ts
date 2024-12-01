import type { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => {
	return {
		name: 'Cosmose',
		short_name: 'Cosmose',
		description: 'Brisez la barrière du distanciel. Découvrez nos activités de team building en ligne : jeux collaboratifs, blind tests, serious games et animations en visioconférence pour booster l’engagement et la cohésion d’équipe.',
		start_url: '/',
		display: 'standalone',
		background_color: '#ffffff',
		theme_color: '#000000',
		icons: [
			{
				src: '/favicon/web-app-manifest-192x192.png',
				sizes: '192x192',
				type: 'image/png'
			},
			{
				src: '/favicon/web-app-manifest-512x512.png',
				sizes: '512x512',
				type: 'image/png'
			},
		],
	}
}

export default manifest;
