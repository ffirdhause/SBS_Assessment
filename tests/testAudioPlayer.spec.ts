import { test } from "@playwright/test"
import { AudioPlayer }  from "../pages/audioPlayerPage";
import { CommonStep } from "../common/commonStep";
import URL from "../data/constants";

test("Verify audio player", async ({page}) => {

  const audioPlayer = new AudioPlayer(page);
  const commonFn = new CommonStep(page);

  await commonFn.goToURL(URL.SBSMandarineURL);
  await audioPlayer.verifyPageLaunched();
  await page.mouse.wheel(10, 1000),
  await audioPlayer.verifySubscriptionButtons();
  await audioPlayer.playAudio();
  await audioPlayer.verifyPlayerControl();
  await audioPlayer.checkLanguageList();

})