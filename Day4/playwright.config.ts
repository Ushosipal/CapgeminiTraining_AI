import { defineConfig, devices } from '@playwright/test';
 
export default defineConfig({
 
    testDir: './tests',
 
    globalSetup: require.resolve('./global-setup'),
 
    globalTeardown: require.resolve('./global-teardown'),
 
    timeout: 30000,
 
    expect: {
        timeout: 5000
    },
 
    fullyParallel: false,
 
    reporter: [
        ['html'],
        ['list'],
        ['allure-playwright']
    ],
 
    use: {
        // baseURL: 'https://www.playwrightpad.in',
 
 
        trace: 'on-first-retry',
 
        screenshot: 'only-on-failure',
 
        video: 'retain-on-failure',
 
        headless: true
    },
 
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        },
 
    ]
});
