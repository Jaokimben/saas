# My Custom Application

Build your AI SaaS application quickly.

![preview](preview.png)

## Quick Start

1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
```

2. Install dependencies

```bash
pnpm install
```

3. Run the development server

```bash
pnpm dev
```

## Customize

- Set your environment variables

```bash
cp .env.example .env.local
```

- Set your theme in `app/theme.css`

[shadcn-ui-theme-generator](https://zippystarter.com/tools/shadcn-ui-theme-generator)

- Set your landing page content in `i18n/pages/landing`

- Set your i18n messages in `i18n/messages`

## Deploy

- Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fyour-repo-name&project-name=my-custom-app&repository-name=my-custom-app)

- Deploy to Cloudflare

1. Customize your environment variables

```bash
cp .env.example .env.production
cp wrangler.toml.example wrangler.toml
```

edit your environment variables in `.env.production`

and put all the environment variables under `[vars]` in `wrangler.toml`

2. Deploy

```bash
npm run cf:deploy
```

## Community

- [Your Application Website](https://yourdomain.com)
- [Documentation](https://docs.yourdomain.com)
- [Community](https://discord.gg/your-invite-link)

## License

- [ShipAny AI SaaS Boilerplate License Agreement](LICENSE)
