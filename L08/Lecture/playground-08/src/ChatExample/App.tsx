import SendIcon from '@mui/icons-material/Send';
import { Box, Container, IconButton, Tab, Tabs, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import createConnection from './Chat';

const tabs = [
  { id: 'alice', label: 'Alice' },
  { id: 'bob', label: 'Bob' },
  { id: 'charlie', label: 'Charlie' },
]

function ChatApp() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const [inputValue, setInputValue] = useState("");

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    const connection = createConnection(selectedTab);
    connection.connect();

    return () => {
      connection.disconnect();
    }
  }, [selectedTab])

  return (
    <Container>
      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        {tabs.map((tab) => (
          <Tab key={tab.id} label={tab.label} value={tab.id} />
        ))}
      </Tabs>
      {tabs.map((tab) => (
        selectedTab === tab.id && <Box key={tab.id}>Chat with {tab.label}</Box>
      ))}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 2 }}>
        <TextField
          placeholder="Type your message here..."
          sx={{ flexGrow: 1 }}
          value={inputValue}
          onChange={handleInputChange}
        />
        <IconButton aria-label="Send" color="primary">
          <SendIcon />
        </IconButton>
      </Box>
    </Container>
  );
}

export default ChatApp;