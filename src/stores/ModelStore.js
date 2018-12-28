import { observable, action } from 'mobx';
import { Tensor, InferenceSession } from 'onnxjs';

class ModelStore {
  session = new InferenceSession({backendHint: 'webgl'});
  logreg = null;

  @observable loading = false;
  @observable predictData = null;
  @observable error = null;

  @action
  async loadModel() {
    this.loading = true;
    try {
      this.model = await this.session.loadModel('assets/mobilenet.onnx');
    } catch(e) {
      this.error = e;
    }
    this.loading = false;
  }

  @action
  async predict(input) {
    this.loading = true;
    try {
      const inputs = new Tensor(new Array(150528).fill(0), 'float32', [1, 3, 224, 224]);
      this.predictData = await this.session.run([inputs]);
    } catch(e) {
      this.error = e;
    }
    this.loading = false;
  }
}


export default new ModelStore();
