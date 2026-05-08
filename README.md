![cv](/src/images/cv_ss.png)

# Minimalist CV

Simple web app that renders minimalist CV with print-friendly layout.

Built with Next.js and shadcn/ui, deployed on Vercel.

# Features

- Setup only takes a few minutes [single config file](./src/data/resume-data.tsx)
- Built using Next.js 14, React, Typescript, Shadcn/ui, TailwindCss
- Auto generated Layout
- Responsive for different devices
- Optimized for Next.js and Vercel

# Getting Started Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/waqas-334/cv.git
   cd cv
   ```

2. Run the dev script:

   ```bash
   ./scripts/dev.sh
   ```

   Or manually:

   ```bash
   yarn install
   yarn dev
   ```

3. Open the [Config file](./src/data/resume-data.tsx) and make changes

# Deployment

## Build & Push (run on your local machine)

```bash
# Login to DockerHub (one-time)
docker login

# Build for linux/amd64 and push to DockerHub
./scripts/build-and-push.sh
```

## Deploy (run on server)

Copy `scripts/deploy.sh` to your server and run it:

```bash
./deploy.sh
```

The script is self-contained - it pulls the pre-built image from DockerHub and runs it on port 1234. No other files needed.

# License

[MIT](https://choosealicense.com/licenses/mit/)
