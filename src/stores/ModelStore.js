import { observable, action } from 'mobx';
import { Tensor, InferenceSession } from 'onnxjs';

class ModelStore {
  session = new InferenceSession({backendHint: 'webgl'});
  logreg = null;

  @observable loading = false;
  @observable predictData = null;
  @abservable error = null;

  @action async loadModel() {
    this.loading = true;
    try {
      this.model = await this.session.loadModel('assets/mobilenet.onnx');
    } catch(e) {
      this.error = e;
    }
    this.loading = false;
  }

  @action async predictData(input) {
    this.loading = true;
    try {
      const inputs = new Tensor(new Array(150528).fill(0), 'float32', [1, 3, 224, 224]);
      const output = yield call(this.session.run, [inputs]);
    } catch(e) {
      this.error = e;
    }
    this.loading = false;
  }
}


export default new ModelStore;
