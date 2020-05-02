import React, { useState } from 'react';

import { Container, Card } from './style';

function App() {
  const [calls, setCalls] = useState(16);
  const [length, setLength] = useState(2.4);

  const lambda = calls / 60;
  const frequency = 1 / length;

  const declineRate = (lambda / (lambda + frequency)).toFixed(2);
  const relativeBandwidth = (frequency / (lambda + frequency)).toFixed(2);
  const absoluteBandwidth = (relativeBandwidth * lambda).toFixed(3);

  return (
    <Container>
      <Card>
        <h4 style={{ textAlign: 'center' }}>Агентство по заказу железнодорожных билетов</h4>
        <div>
          Количество звонков за один час: 
          
          <input
            type="number"
            step={1}
            value={calls}
            onChange={event => setCalls(parseInt(event.target.value, 10))}
            min={1}
            max={1000}
          />
        </div>
        
        <br />

        <div>
          Продолжительность звонка в минутах: 

          <input
            type="number"
            step={0.1}
            value={length}
            onChange={event => setLength(parseFloat(event.target.value))}
            min={0.5}
            max={60}
          />
        </div>

        <p>Вероятность отказа (телефон занят): {declineRate}</p> 
        <p>Относительная пропускная способность {relativeBandwidth}</p>
        <p>Абсолютная пропускная способность {absoluteBandwidth}</p>
      </Card>
    </Container>
  );
}

export default App;
