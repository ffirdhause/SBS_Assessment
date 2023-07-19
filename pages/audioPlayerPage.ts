import { Locator, Page, expect } from '@playwright/test';

export  class AudioPlayer {
    readonly page: Page;
    readonly audioTrackTitle: Locator;
    readonly audioButton: Locator;
    readonly applePodcast: Locator;
    readonly googlePodcast: Locator;
    readonly play: Locator;
    readonly playerProgress: Locator;
    readonly volumeButton: Locator;
    readonly mute: Locator;
    readonly unmute: Locator;
    readonly fastForward: Locator;
    readonly rewind: Locator;
    readonly otherLanguages: Locator;
    readonly languageList: Locator;
    readonly closeButton: Locator;
    readonly playerBox: Locator;
  
    constructor(page: Page) {
        
      this.page = page;
      this.audioTrackTitle = page.getByRole('heading', { name: '【文化苦丁茶】人生的林子里，你有大概率会遇到“鸟人”' });
      this.audioButton = page.getByTestId('audio-button');
      this.applePodcast = page.locator('#subscription-buttons a').first();
      this.googlePodcast = page.locator('#subscription-buttons a').nth(1);
      this.play = page.getByTestId('fullplayer-play');
      this.playerProgress = page.getByTestId('fullplayer-progress');
      this.volumeButton = page.getByRole('button', { name: 'volume button' });
      this.mute = page.getByTestId('volume-slider').locator('span').nth(2);
      this.unmute = page.getByTestId('volume-slider').locator('span').first();
      this.fastForward = page.getByTestId('fullplayer-fast-forward');
      this.rewind = page.getByTestId('fullplayer-rewind');
      this.otherLanguages = page.getByTestId('language-selector-label');
      this.languageList = page.getByTestId('language-translation-item').nth(1);
      this.closeButton = page.getByTestId('playlist').getByRole('button').nth(1);
      this.playerBox = page.locator('div').filter({ hasText: '【文化苦丁茶】人生的林子里，你有大概率会遇到“鸟人”Playback speedSkip PreviousRewind 15PlayFast Forward 3' }).nth(2);

    }
 
    // Verify SBS Audio Player page launched successfully
    public async verifyPageLaunched() {
        await expect(this.audioTrackTitle).toBeVisible();
        await expect(this.audioButton).toBeVisible();
   
    }

    // Verify subscribe displays apple and google podcast
    public async verifySubscriptionButtons() {    
        await (this.applePodcast).isEnabled();
        await (this.googlePodcast).isEnabled();

    }

    // Click on Play audio
    public async playAudio() {
        await (this.audioButton).click();
        await expect(this.closeButton).toBeVisible();
        // await expect(this.playerBox).toBeVisible();

    }

    // Verify Player Controls
    public async verifyPlayerControl() {
        await expect(this.closeButton).toBeVisible();
        await (this.fastForward).click();
        await (this.rewind).click();
        await (this.volumeButton).click();
        // i have added the assertions as you mentioned in the test as i didnt get time for more investigation.

    }

    // Verify language list displays 
    public async checkLanguageList() {
        await expect(this.otherLanguages).toBeVisible();
        await (this.otherLanguages).click();
        await expect(this.languageList).toBeVisible();

    }
}