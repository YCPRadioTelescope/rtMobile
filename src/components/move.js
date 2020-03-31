import TcpSocket from 'react-native-tcp-socket';

  export const move = (elevation, azimuth) =>{


    let options = {
      host: '34.197.102.80',
      port: 25565
    };

    let client = TcpSocket.createConnection(options);
    client.write('COORDINATE_MOVE ELEV:' + elevation + 'AZIM:' + azimuth + 'ID:todd');
    client.on('data', function(data) {
      console.log('Received: ', data);
    });

    client.on('error', function(error) {
      console.log('Error: ', error);
    });

    client.on('close', function() {
      console.log('Connection closed!');
    });




    // Close socket
    client.destroy();
  };
