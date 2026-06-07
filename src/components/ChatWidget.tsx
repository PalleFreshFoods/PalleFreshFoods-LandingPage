import { useState } from 'react';

type Message = { role: 'user' | 'support'; text: string };

const SCRIPTED: Message[] = [
  { role: 'support', text: 'Hi there! Welcome to PalleFreshFoods. How can we help you grow today?' },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(SCRIPTED);
  const [draft, setDraft] = useState('');

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: 'user', text }]);
    setDraft('');
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: 'support',
          text: 'Thanks for reaching out! A real human cultivator will reply within an hour. In the meantime, feel free to explore the harvest.',
        },
      ]);
    }, 700);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-tertiary text-tertiary-fixed-dim shadow-elevated transition hover:scale-110"
      >
        <span className="material-symbols-outlined text-[26px]">
          {open ? 'close' : 'chat_bubble'}
        </span>
      </button>

      {open && (
        <div className="fixed bottom-24 left-6 z-40 flex h-[480px] w-[min(360px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl bg-surface-container-lowest shadow-elevated animate-scale-in">
          <header className="flex items-center gap-3 bg-tertiary px-5 py-4 text-tertiary-fixed-dim">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary-fixed-dim text-tertiary">
              <span className="material-symbols-outlined text-[22px]">support_agent</span>
            </div>
            <div className="leading-tight">
              <p className="font-display text-body-lg font-semibold">Farm Concierge</p>
              <p className="text-label-sm opacity-80">Online · Usually replies in minutes</p>
            </div>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-surface-container-low p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <p
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-body-md ${
                    m.role === 'user'
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-lowest text-on-surface shadow-soft'
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 border-t border-outline-variant/30 bg-surface-container-lowest p-3"
          >
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-full bg-surface-container-low px-4 py-2.5 text-body-md text-on-surface outline-none placeholder:text-on-surface-variant/60 focus:bg-white"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary transition hover:scale-110"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
