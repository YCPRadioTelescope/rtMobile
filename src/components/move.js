import TcpSocket from 'react-native-tcp-socket';

  export const move = (keyword) =>{


  let options = {
    host: '34.197.102.80',
    port: 25565,
    reuseAddress: true,
  };

  let client = TcpSocket.createConnection(options, (address) => {
    console.log(address);
      console.log('Connection made! Sending ', keyword );
      client.write(keyword);
  });

  //console.log('client:',client);

  client.on('data', (data) => {
      console.log('Received: ', data);
      client.destroy(); // kill client after server's response
  });

  client.on('error', (error)=>{
    console.log('Error: ', error);
  });

  client.on('close', ()=>{
    console.log('Connection closed!');
  });




  // Close socket
  client.destroy();
};
