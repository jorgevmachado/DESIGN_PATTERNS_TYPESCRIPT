import Live from './Live';
import IPlatform from '../platforms/interfaces/IPlatform';

export default class AdvancedLive extends  Live {

    constructor(platform: IPlatform) {
        super(platform);
    }

    subtitles(): void {
        console.log("Legendas ativadas na transmissão!.");
    }

    comments(): void {
        console.log("Comentários liberados na transmissão!.");
    }

}