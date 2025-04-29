import React, { useState } from 'react';
import "../styles/rightBar.scss";
import LeftSide from './LeftSide';

const RightBar = () => {
  const [selectedModel, setSelectedModel] = useState("");
  const [layer, setLayer] = useState("");
  const [layerActivition1, setLayerActivition1] = useState();
  const [layerActivition2, setLayerActivition2] = useState();
  const [layerActivition3, setLayerActivition3] = useState();
  const [units, setUnits] = useState()

  const selectedValue = {
    selectedModel,
    layer,
    layerActivition1,
    layerActivition2,
    layerActivition3,
    units
  }

  console.log(selectedModel)
  console.log(layer)
  console.log(layerActivition1)
  console.log(layerActivition2)
  console.log(layerActivition3)
  console.log(units)


  return (
    <div className='container'>
      <div className='right-container'>
        <div className='select-model'>
          <label className='header'>Model Seçiniz:</label>
          <div className="radio-input">
            <label>
              <input
                type="radio"
                name="model"
                value="rnn"
                checked={selectedModel === "rnn"}
                onChange={(e) => setSelectedModel(e.target.value)}
              />
              <span>RNN</span>
            </label>
            <label>
              <input
                type="radio"
                name="model"
                value="lstm"
                checked={selectedModel === "lstm"}
                onChange={(e) => setSelectedModel(e.target.value)}
              />
              <span>LSTM</span>
            </label>
            <label>
              <input
                type="radio"
                name="model"
                value="guru"
                checked={selectedModel === "guru"}
                onChange={(e) => setSelectedModel(e.target.value)}
              />
              <span>Guru</span>
            </label>
            <span className="selection"></span>
          </div>
        </div>
        {selectedModel && (
          <div className='selectLayer'>
            <label className='header'>Units değeri belirleyiniz :</label>
            <div className="radio-input">
              <label>
                <input
                  type="radio"
                  name="units"
                  value="1"
                  onChange={(e) => setUnits(e.target.value)}
                />
                <span>1</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="units"
                  value="2"
                  onChange={(e) => setUnits(e.target.value)}
                />
                <span>2</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="units"
                  value="3"
                  onChange={(e) => setUnits(e.target.value)}
                />
                <span>3</span>
              </label>
              <span className="selection"></span>
            </div>
          </div>
        )}
        {selectedModel && (
          <div className='selectLayer'>
            <label className='header'>Katman Sayısını Belirleyiniz:</label>
            <div className="radio-input">
              <label>
                <input
                  type="radio"
                  name="layer"
                  value="1"
                  checked={layer === "1"}
                  onChange={(e) => setLayer(e.target.value)}
                />
                <span>1</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="layer"
                  value="2"
                  checked={layer === "2"}
                  onChange={(e) => setLayer(e.target.value)}
                />
                <span>2</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="layer"
                  value="3"
                  checked={layer === "3"}
                  onChange={(e) => setLayer(e.target.value)}
                />
                <span>3</span>
              </label>
              <span className="selection"></span>
            </div>
          </div>
        )}

        {layer === "1" && (
          <div className="layers">
            <div className="layer">
              <label className='header'>1.Katman İçin Aktivasyon Fonksiyonu:</label>
              <div className="radio-input">
                <label>
                  <input
                    type="radio"
                    name="activation1"
                    value="tanh"
                    checked={layerActivition1 === "tanh"}
                    onChange={(e) => setLayerActivition1(e.target.value)}
                  />
                  <span>tanh</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="activation1"
                    value="sigmoid"
                    checked={layerActivition1 === "sigmoid"}
                    onChange={(e) => setLayerActivition1(e.target.value)}
                  />
                  <span>sigmoid</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="activation1"
                    value="relu"
                    checked={layerActivition1 === "relu"}
                    onChange={(e) => setLayerActivition1(e.target.value)}
                  />
                  <span>relu</span>
                </label>
                <span className="selection"></span>
              </div>
            </div>
          </div>
        )}

        {layer === "2" && (
          <div className="layers">
            <div className="layer">
              <label className='header'>1.Katman İçin Aktivasyon Fonksiyonu:</label>
              <div className="radio-input">
                <label>
                  <input
                    type="radio"
                    name="activation1"
                    value="tanh"
                    checked={layerActivition1 === "tanh"}
                    onChange={(e) => setLayerActivition1(e.target.value)}
                  />
                  <span>tanh</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="activation1"
                    value="sigmoid"
                    checked={layerActivition1 === "sigmoid"}
                    onChange={(e) => setLayerActivition1(e.target.value)}
                  />
                  <span>sigmoid</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="activation1"
                    value="relu"
                    checked={layerActivition1 === "relu"}
                    onChange={(e) => setLayerActivition1(e.target.value)}
                  />
                  <span>relu</span>
                </label>
                <span className="selection"></span>
              </div>
            </div>
            <div className="layer">
              <label className='header'>2.Katman İçin Aktivasyon Fonksiyonu:</label>
              <div className="radio-input">
                <label>
                  <input
                    type="radio"
                    name="activation2"
                    value="tanh"
                    checked={layerActivition2 === "tanh"}
                    onChange={(e) => setLayerActivition2(e.target.value)}
                  />
                  <span>tanh</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="activation2"
                    value="sigmoid"
                    checked={layerActivition2 === "sigmoid"}
                    onChange={(e) => setLayerActivition2(e.target.value)}
                  />
                  <span>sigmoid</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="activation2"
                    value="relu"
                    checked={layerActivition2 === "relu"}
                    onChange={(e) => setLayerActivition2(e.target.value)}
                  />
                  <span>relu</span>
                </label>
                <span className="selection"></span>
              </div>
            </div>
          </div>
        )}

        {layer === "3" && (
          <div className="layers">
            <div className="layer">
              <label className='header'>1.Katman İçin Aktivasyon Fonksiyonu:</label>
              <div className="radio-input">
                <label>
                  <input
                    type="radio"
                    name="activation1"
                    value="tanh"
                    checked={layerActivition1 === "tanh"}
                    onChange={(e) => setLayerActivition1(e.target.value)}
                  />
                  <span>tanh</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="activation1"
                    value="sigmoid"
                    checked={layerActivition1 === "sigmoid"}
                    onChange={(e) => setLayerActivition1(e.target.value)}
                  />
                  <span>sigmoid</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="activation1"
                    value="relu"
                    checked={layerActivition1 === "relu"}
                    onChange={(e) => setLayerActivition1(e.target.value)}
                  />
                  <span>relu</span>
                </label>
                <span className="selection"></span>
              </div>
            </div>
            <div className="layer">
              <label className='header'>2.Katman İçin Aktivasyon Fonksiyonu:</label>
              <div className="radio-input">
                <label>
                  <input
                    type="radio"
                    name="activation2"
                    value="tanh"
                    checked={layerActivition2 === "tanh"}
                    onChange={(e) => setLayerActivition2(e.target.value)}
                  />
                  <span>tanh</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="activation2"
                    value="sigmoid"
                    checked={layerActivition2 === "sigmoid"}
                    onChange={(e) => setLayerActivition2(e.target.value)}
                  />
                  <span>sigmoid</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="activation2"
                    value="relu"
                    checked={layerActivition2 === "relu"}
                    onChange={(e) => setLayerActivition2(e.target.value)}
                  />
                  <span>relu</span>
                </label>
                <span className="selection"></span>
              </div>
            </div>
            <div className="layer">
              <label className='header'>3.Katman İçin Aktivasyon Fonksiyonu:</label>
              <div className="radio-input">
                <label>
                  <input
                    type="radio"
                    name="activation3"
                    value="tanh"
                    checked={layerActivition3 === "tanh"}
                    onChange={(e) => setLayerActivition3(e.target.value)}
                  />
                  <span>tanh</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="activation3"
                    value="sigmoid"
                    checked={layerActivition3 === "sigmoid"}
                    onChange={(e) => setLayerActivition3(e.target.value)}
                  />
                  <span>sigmoid</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="activation3"
                    value="relu"
                    checked={layerActivition3 === "relu"}
                    onChange={(e) => setLayerActivition3(e.target.value)}
                  />
                  <span>relu</span>
                </label>
                <span className="selection"></span>
              </div>
            </div>
          </div>
        )}
      </div>
      <LeftSide value={selectedValue} />
    </div>

  );
};

export default RightBar;
