const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)

    // const socketUrl = 'https://frozen-peak-29019.herokuapp.com/'
    const socketUrl = 'http://localhost:3000'
    const socketBuilder = new SocketBuilder({ socketUrl })
    
    const peerConfig = Object.values({
      id: undefined, 
      config: {
        port: 9000,
        host: 'localhost',
        // secure: true,
        // host: 'evening-retreat-37697.herokuapp.com',
        path: '/'
      }
    })
    const peerBuilder = new PeerBuilder({ peerConfig })
    
    const view = new View()
    const media = new Media()
    const deps = {
      view,
      media,
      room,
      socketBuilder,
      peerBuilder
    }
    
    Business.initialize(deps)
}

window.onload = onload