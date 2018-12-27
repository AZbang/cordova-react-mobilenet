import { observable, action } from 'mobx';

class MediaStore {
  @observable loading = false;
  @observable error = null;
  @observable stream = null;

  @action setLoading(v) {
    this.loading = v;
  }
  @action setStream(v) {
    if(v instanceof Error) {
      this.error = v;
    } else {
      this.stream = v;
    }
  }

  async getMediaStream(config) {
    this.setLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { facingMode: 'environment' },
        ...config
      });
      this.setStream(stream);
    } catch(err) {
      this.setStream(err);
    }
    this.setLoading(false);
  }
}


export default new MediaStore();
