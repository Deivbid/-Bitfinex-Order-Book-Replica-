import { createAsyncThunk } from '@reduxjs/toolkit';
import { addOrUpdateBid, addOrUpdateAsk, OrderBookEntry } from './orderBookSlice';


export const startWebSocketConnection = createAsyncThunk(
    'orderBook/startWebSocketConnection',
    async (arg, { dispatch }) => {
      const socket = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
  
      socket.onopen = () => {
        const msg = JSON.stringify({
          event: 'subscribe',
          channel: 'book',
          symbol: 'tBTCUSD',
          prec: 'P0',
          freq: 'F0',
          len: '25',
        });
        socket.send(msg);
      };
  
      socket.onmessage = (message) => {
        const payload = JSON.parse(message.data);
        if (payload.event && payload.event === 'subscribed') {
          console.log('IM SUBSCRIBED', payload);
        } else if (Array.isArray(payload)) {
          // Update the Redux state with the parsed data
          parseOrderBookData(payload, dispatch);
        }
      };
      return socket;
    }
);

const parseOrderBookData = (data: any[], dispatch: any) => {
    if (data[1] === 'hb') {
        // It's a heartbeat message, do nothing
        return;
    }
    
    const [channelId, orderData] = data;
    if (Array.isArray(orderData[0])) {
        orderData.forEach((update: [number, number, number]) => {
          const [price, count, amount] = update;
          handleUpdate({ price, count, amount }, dispatch);
        });
      } else {
        const [price, count, amount] = orderData;
        handleUpdate({ price, count, amount }, dispatch);
      }
  };

  const handleUpdate = (
    { price, count, amount }: OrderBookEntry,
    dispatch: any
  ) => {
    const entry: OrderBookEntry = { price, count, amount: Math.abs(amount) };
    if (count > 0) {
      if (amount > 0) {
        dispatch(addOrUpdateBid(entry));
      } else {
        dispatch(addOrUpdateAsk({ ...entry, amount: -entry.amount }));
      }
    } else {
      // count === 0 indicates to remove the price level
      if (amount === 1) {
        dispatch(addOrUpdateBid({ ...entry, count: 0 }));
      } else if (amount === -1) {
        dispatch(addOrUpdateAsk({ ...entry, count: 0, amount: -entry.amount }));
      }
    }
  };

