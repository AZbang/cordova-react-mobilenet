import { observable, action } from 'mobx';
import { Tensor, InferenceSession } from 'onnxjs';

class ModelStore {
  session = new InferenceSession({backendHint: 'webgl'});
  model = null;

  SIZE = 224;

  @observable loading = false;
  @observable predictData = null;
  @observable error = null;

  @action
  setLoading(loading) {
    this.loading = loading;
  }

  @action
  setPredict(output) {
    this.predictData = output;
  }

  @action
  setError(err) {
    this.error = err;
  }

  loadModel() {
    this.setLoading(true);

    this.session.loadModel('assets/mobilenet.onnx')
      .catch((error) => this.setError(error))
      .finally(() => this.setLoading(false));
  }

  predict(input) {
    this.setLoading(true);

    const inputs = new Tensor(new Array(150528).fill(0), 'float32', [1, 3, 224, 224]);
    this.session.run([inputs])
      .then((out) => this.setPredict(out))
      .catch((error) => this.setError(error))
      .finally(() => this.setLoading(false));
  }
}



export default new ModelStore();
