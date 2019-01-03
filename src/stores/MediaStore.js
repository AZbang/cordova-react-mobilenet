import { observable, action } from 'mobx';

class MediaStore {
  @observable loading = false;
  @observable error = null;
  @observable stream = null;

  @action setLoading(v) {
    this.loading = v;
  }
  @action setStream(stream) {
    this.stream = stream;
  }
  @action setError(err) {
    this.error = err;
  }

  getMediaStream(config) {
    this.setLoading(true);
    const constraints = {
      audio: false,
      video: { facingMode: 'environment' },
      ...config
    }
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => this.setStream(stream))
      .catch((err) => this.setError(err))
      .finally(() => this.setLoading(false));
  }
}


export default new MediaStore();
