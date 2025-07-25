<div className="assistant-container">
    <div className="assistant-header">
        <div>
          <h2>AI Assistant & Messaging</h2>
          <p>All your appointments and orders in one place.</p>
        </div>
        <div className="sync-buttons">
          <button className="btn green">Resend Failed Messages</button>
          <button className="btn green-outline">Re-sync WhatsApp</button>
        </div>
    </div>
    <div className="assistant-body">
        <div className="left-panel">
              <div className="status-section">
                <div className="status-label">
                  <span className="dot green"></span> Active
                  <span className="last-sync">Last Sync 2h ago</span>
                </div>
                <div className="metrics">
                  <div><strong>3</strong><span>INTERACTIONS</span></div>
                  <div><strong>12</strong><span>BOOKINGS</span></div>
                  <div><strong>5</strong><span>INVOICES</span></div>
                </div>
              </div>
              {/* Message search + tabs */}
              <div className="message-section">
                <h4>Message</h4>
                <input type="text" placeholder="Search message..." className="search-input" />
                <div className="tabs">
                  <button className="active">All (Primary)</button>
                  <button>Unread</button>
                  <button>Pinned</button>
                </div>
                {/* Message list */}
                <div className="message-list">
                  {[
                    { name: "Uzo E.", message: "Can I reschedule my order?", date: "July 18" },
                    { name: "Chidera M.", message: "Hi, I want to book a session", date: "July 18" },
                    { name: "Amaka O.", message: "How much for...", date: "July 18" },
                    { name: "Amaka O.", message: "How much for...", date: "July 18" },
                    { name: "Asaba Q.", message: "Okay, sound good", date: "July 18" },
                  ].map((msg, idx) => (
                    <div className="message-item" key={idx}>
                      <div className="avatar-circle" />
                      <div className="message-details">
                        <div className="name">{msg.name}</div>
                        <div className="preview">{msg.message}</div>
                      </div>
                      <div className="date">{msg.date}</div>
                    </div>
                  ))}
                </div>
              </div>
          </div>
                
          {/* Right panel - Chat */}
          <div className="right-panel">
            <div className="chat-header">
              <h4>New Chat</h4>
              <div className="chat-actions">
                <button title="Upload"><i className="icon">📎</i></button>
                <button title="Call"><i className="icon">📞</i></button>
              </div>
            </div>
                
            <div className="chat-body">
              {/* Messages will appear here */}
            </div>
                
            <div className="chat-input">
              <input type="text" placeholder="Chat" />
              <button className="send-btn">Send</button>
            </div>
          </div>
        </div>
    </div>