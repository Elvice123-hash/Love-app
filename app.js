const messages = {
  morning: [
    "Good morning to the person who makes every sunrise worth watching.",
    "Waking up is easier knowing I get to talk to you today.",
    "Hope your coffee is as sweet as your smile. Morning, love."
  ],
  night: [
    "Sleep tight. Dream of me, because I'll be dreaming of you.",
    "The stars are jealous tonight — you're shining brighter in my mind.",
    "End your day knowing you're loved more than yesterday."
  ],
  miss: [
    "Missing you is my heart's way of reminding me I love you.",
    "The space between us is just room for me to love you more.",
    "If I had a flower for every time I thought of you, I'd walk in a garden forever."
  ],
  appreciation: [
    "Thank you for being my calm in every storm.",
    "You don't just add to my life. You are my life.",
    "Loving you is the easiest thing I've ever done."
  ]
};

function getAllMessages() {
  return Object.values(messages).flat();
}

function newMessage() {
  const category = document.getElementById('category').value;
  const pool = category === 'all'? getAllMessages() : messages[category];
  const random = pool[Math.floor(Math.random() * pool.length)];
  document.getElementById('message').textContent = random;
}

function copyMessage() {
  const text = document.getElementById('message').textContent;
  navigator.clipboard.writeText(text);
  alert('Copied to clipboard 💕');
}

// Show first message on load
newMessage();

