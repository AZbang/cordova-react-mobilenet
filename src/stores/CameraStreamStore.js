import { observable, action } from 'mobx';

class CameraStreamStore {
  @observable loading = false;
  @abservable error = null;
  @observable stream = null;

  @action async getMediaStream(config) {
    this.loading = true;
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { facingMode: 'environment' },
        ...config
      });
    } catch(e) {
      this.error = e;
    }
    this.loading = false;
  }
}


export default new CameraStreamStore;
