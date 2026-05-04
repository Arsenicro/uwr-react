function createConnection(user: string) {
  return {
    connect() {
      console.log(`✅ Connected to chat server with ${user}`);
    },
    disconnect() {
      console.log(`❌ Disconnected from chat server with ${user}`);
    },
  };
}

export default createConnection;
