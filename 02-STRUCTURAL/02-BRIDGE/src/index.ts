import IPlatform from './platforms/interfaces/IPlatform';
import Live from './transmissions/Live';
import YouTube from './platforms/YouTube';
import Twitch from './platforms/Twitch';
import Facebook from './platforms/Facebook';
import AdvancedLive from './transmissions/AdvancedLive';

function startLive(platform: IPlatform) {

    console.log('Aguarde...');

    const live = new Live(platform);

    live.broadcasting();
    live.result();


}

function startAdvancedLive(platform: IPlatform) {

    console.log('Aguarde...');

    const live = new AdvancedLive(platform);

    live.broadcasting();
    live.result();
    live.comments();
    live.subtitles();

}

// startLive(new YouTube());
// startLive(new Twitch());
// startLive(new Facebook());
startAdvancedLive(new YouTube());
startAdvancedLive(new Twitch());
startAdvancedLive(new Facebook());