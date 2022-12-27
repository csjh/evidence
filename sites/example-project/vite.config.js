import { sveltekit } from "@sveltejs/kit/vite";

const config = {
    plugins: [sveltekit()],
    optimizeDeps: {
        include: ['echarts-stat'],
        exclude: ['@evidence-dev/components']
    },
    ssr: {
        format: "cjs"
    }
}

export default config;