import { EaglerProxy } from 'eaglerproxy';

const proxy = new EaglerProxy({
    host: '0.0.0.0',
    port: process.env.PORT || 8080, // Render provides the port automatically
    motd: 'My Render Proxy',
    maxPlayers: 500,
    server: {
        host: 'stealthcraft.godsaveme', 
        port: 25565                 
    }
});

proxy.on('listening', () => {
    console.log('Proxy is active on Render!');
});
