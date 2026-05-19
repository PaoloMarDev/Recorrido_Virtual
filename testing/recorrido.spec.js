const { test, expect } = require('@playwright/test')

test.beforeEach(async ({ page }) => { 
    await page.goto('');
    await page.waitForSelector('canvas');
}); 

test('initial scene loads', async ({ page }) => {
    await expect(page.locator('canvas')).toBeVisible();
});

test('checking all UI elements present', async ({ page }) => {
    const elements = [
        { name: 'chatbot toggle', selector: '#chatbot-toggle-btn' },
        { name: 'chatbot user prompt', selector: '#chatbot-trigger-container' },
        { name: 'move view up', selector: '#viewUp' },
        { name: 'move view down', selector: '#viewDown' },
        { name: 'move view left', selector: '#viewLeft' },
        { name: 'move view right', selector: '#viewRight' },
        { name: 'zoom in view', selector: '#viewIn' },
        { name: 'zoom out view', selector: '#viewOut' },
        { name: 'scene title bar', selector: '#titleBar' },
        { name: 'floor meter', selector: '#floor-meter' },
        { name: 'minimap', selector: '#minimap-container' },
        { name: 'auto rotate toggle', selector: '#autorotateToggle' },
        { name: 'fullscreen toggle', selector: '#fullscreenToggle' }
    ]
    
    for ( const { name, selector} of elements ) {
        await expect(page.locator(selector), `${name} should be visible`).toBeVisible();
    }
});

test('checking proper movement function', async ({ page }) => {
    await page.locator('#autorotateToggle').click();
    const idB = await page.locator('.scene.current').getAttribute('data-id');
    const titleB = await page.locator('#titleBar .sceneName').textContent();
    await page.locator('.hotspot.link-hotspot').first().click();
    await page.waitForTimeout(1000);
    const idA = await page.locator('.scene.current').getAttribute('data-id');
    const titleA = await page.locator('#titleBar .sceneName').textContent();
    
    expect(idB, `Scene id did not change, still ${idA}`).not.toBe(idA);
    expect(titleB, `Scene title did not change, still ${titleA}`).not.toBe(titleA);

});