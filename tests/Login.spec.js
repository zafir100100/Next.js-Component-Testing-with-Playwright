import { test, expect } from '@playwright/experimental-ct-react';
import Login from '@/app/login/page';

test('renders login form correctly', async ({ mount }) => {
    const component = await mount(<Login />);
    await expect(component.getByRole('textbox', { name: /username/i })).toBeVisible();
    await expect(component.getByRole('textbox', { name: /password/i })).toBeVisible();
    await expect(component.getByRole('button', { name: /login/i })).toBeVisible();
});

test('disables login button when inputs are empty', async ({ mount }) => {
    const component = await mount(<Login />);
    const button = component.getByRole('button', { name: /login/i });
    await expect(button).toBeDisabled();
});

test('enables login button when inputs are filled', async ({ mount }) => {
    const component = await mount(<Login />);
    await component.getByRole('textbox', { name: /username/i }).fill('test');
    await component.getByRole('textbox', { name: /password/i }).fill('password');
    const button = component.getByRole('button', { name: /login/i });
    await expect(button).toBeEnabled();
});

test('shows error alert for invalid credentials', async ({ mount, page }) => {
    const component = await mount(<Login />);
    await component.getByRole('textbox', { name: /username/i }).fill('wronguser');
    await component.getByRole('textbox', { name: /password/i }).fill('wrongpass');
    await component.getByRole('button', { name: /login/i }).click();
    await expect(page.locator('div.swal2-popup')).toContainText('incorrect');
});

test('shows success alert for valid credentials', async ({ mount, page }) => {
    const component = await mount(<Login />);
    await component.getByRole('textbox', { name: /username/i }).fill('test');
    await component.getByRole('textbox', { name: /password/i }).fill('password');
    await component.getByRole('button', { name: /login/i }).click();
    await expect(page.locator('h2')).toContainText('Successful');
});
