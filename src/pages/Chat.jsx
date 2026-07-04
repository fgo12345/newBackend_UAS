import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import { Send, Activity, User } from 'lucide-react';

const socket = io.connect("https://new-backend-jqswx0z94-fgo12345s-projects.vercel.app");

const Chat = () => {
  const navigate = useNavigate();
  const [myUsername, setMyUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [activeChatUser, setActiveChatUser] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("");

  const chatEndRef = useRef(null);

 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/auth');
      return;
    }

   
    try {
      const payloadBase64 = token.split('.')[1];
      const decodedPayload = JSON.parse(window.atob(payloadBase64));
      setMyUsername(decodedPayload.username);
    } catch (err) {
      console.error("Token error:", err);
    }

    
    fetch("https://uasbackend-production-3bed.up.railway.app/api/auth/users", {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => {
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log("Users fetched successfully:", data);
        setUsers(data);
      })
      .catch(err => console.error("CRITICAL ERROR fetching users:", err));
  }, [navigate]); 


  useEffect(() => {
    const receiveMessageHandler = (data) => {
      setMessages((prev) => [...prev, data]);
    };

    socket.on("receive_private_message", receiveMessageHandler);
    return () => socket.off("receive_private_message", receiveMessageHandler);
  }, []);

 
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

 
  const selectUserToChat = (targetUsername) => {
    setActiveChatUser(targetUsername);
    const newRoomName = [myUsername, targetUsername].sort().join('_');
    setRoom(newRoomName);
    
    setMessages([]); 
    socket.emit('join_private_room', newRoomName);
  };

 
  const sendMessage = async () => {
    if (currentMessage !== "" && room !== "") {
      const messageData = {
        room: room,
        author: myUsername,
        message: currentMessage,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };

      await socket.emit("send_private_message", messageData);
      setMessages((prev) => [...prev, messageData]);
      setCurrentMessage("");
    }
  };

 
  const shareHealthData = async () => {
    if (!room) return;
    try {
      const token = localStorage.getItem('token');
      const response = await fetch("https://uasbackend-production-3bed.up.railway.app/api/health-summary", {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      
      const healthString = `📊 Laporan Medis Saya:\nTekanan Darah: ${data.bloodPressure || '-'}\nBerat Badan: ${data.weight || 0}kg\nGula Darah: ${data.bloodSugar || 0} mg/dL`;
      
      const messageData = {
        room: room,
        author: myUsername,
        message: healthString,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };

      await socket.emit("send_private_message", messageData);
      setMessages((prev) => [...prev, messageData]);
    } catch (err) {
      console.error("Error fetching health data for chat:", err);
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)] bg-gray-50 border-t border-gray-200">
      
      {/* Sidebar: User List */}
      <div className="w-1/3 md:w-1/4 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4 bg-blue-600 text-white sticky top-0 font-bold shadow-md">
          Kontak Pasien / Dokter
        </div>
        <div className="p-2 space-y-2">
          {users.map((user) => (
            <div 
              key={user.id} 
              onClick={() => selectUserToChat(user.username)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                activeChatUser === user.username ? 'bg-blue-100 border-l-4 border-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              <div className="bg-blue-200 p-2 rounded-full text-blue-700">
                <User size={20} />
              </div>
              <span className="font-semibold text-gray-700">{user.username.split('@')[0]}</span>
            </div>
          ))}
          {users.length === 0 && <p className="text-center text-gray-400 mt-4 text-sm">Tidak ada pengguna lain.</p>}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {activeChatUser ? (
          <>
            {/* Chat Header */}
            <div className="bg-white p-4 shadow-sm border-b border-gray-200 flex justify-between items-center z-10">
              <h2 className="text-lg font-bold text-gray-800">
                Chat dengan {activeChatUser.split('@')[0]}
              </h2>
              <button 
                onClick={shareHealthData}
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm"
              >
                <Activity size={16} />
                Share Data Medis
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, index) => (
                <div key={index} className={`flex flex-col ${msg.author === myUsername ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[70%] p-3 rounded-2xl shadow-sm whitespace-pre-wrap ${
                    msg.author === myUsername 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none'
                  }`}>
                    {msg.message}
                  </div>
                  <span className="text-xs text-gray-400 mt-1 mx-1">{msg.time}</span>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Message Input Footer */}
            <div className="bg-white p-4 border-t border-gray-200 flex gap-2">
              <input
                type="text"
                value={currentMessage}
                placeholder="Ketik pesan Anda di sini..."
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 bg-gray-100 border-none px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                onClick={sendMessage} 
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all shadow-md flex items-center justify-center"
              >
                <Send size={20} />
              </button>
            </div>
          </>
        ) : (
          /* Empty State if no user selected */
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 bg-slate-50">
            <User size={64} className="mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold">Pilih kontak untuk mulai chat</h3>
            <p className="text-sm">Anda dapat berbagi laporan medis secara real-time.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;