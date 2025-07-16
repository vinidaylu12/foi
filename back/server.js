const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080;

// Caminho para a pasta 'src' onde estão seus arquivos front-end e json
const SRC_DIR = path.join(__dirname, "..", "src");

// Middleware para servir arquivos estáticos da pasta src
app.use(express.static(SRC_DIR));
app.use(express.json());
app.use("/scripts", express.static(path.join(__dirname, "scripts")));

// Arquivos JSON agora na pasta src
const IMAGES_FILE = path.join(SRC_DIR, "images.json");
const CHAT_FILE = path.join(SRC_DIR, "chat.json");
const USERS_FILE = path.join(SRC_DIR, "users.json");
const CURTIDAS_FILE = path.join(SRC_DIR, "curtidas.json");

// Funções auxiliares para ler e salvar arquivos JSON na pasta src
const readJSON = (filepath, defaultValue) => {
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, JSON.stringify(defaultValue), "utf-8");
  }
  const data = fs.readFileSync(filepath, "utf-8");
  return JSON.parse(data);
};

const saveJSON = (filepath, data) => {
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2), "utf-8");
};

// Funções específicas usando readJSON e saveJSON
const readImages = () => readJSON(IMAGES_FILE, []);
const saveImages = (images) => saveJSON(IMAGES_FILE, images);

const readCurtidas = () => readJSON(CURTIDAS_FILE, {});
const saveCurtidas = (curtidas) => saveJSON(CURTIDAS_FILE, curtidas);

const readChat = () => readJSON(CHAT_FILE, { adm: [], coordenacao: [], gremio: [] });
const saveChat = (chat) => saveJSON(CHAT_FILE, chat);

const readUsers = () => readJSON(USERS_FILE, []);
const saveUsers = (users) => saveJSON(USERS_FILE, users);

// Rotas para servir arquivos HTML da pasta src
app.get("/", (req, res) => {
  res.sendFile(path.join(SRC_DIR, "news.html"));
});

app.get("/chat", (req, res) => {
  res.sendFile(path.join(SRC_DIR, "chat.html"));
});

app.get("/contato", (req, res) => {
  res.sendFile(path.join(SRC_DIR, "contato.html"));
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(SRC_DIR, "index.html"));
});

// Rotas de imagens
app.get("/images", (req, res) => {
  res.json(readImages());
});

app.post("/save-image", (req, res) => {
  const { url, title, caption } = req.body;
  if (!url || !title || !caption) {
    return res.status(400).send("Todos os campos são obrigatórios.");
  }

  const images = readImages();
  const newImage = { id: Date.now(), url, title, caption };
  images.push(newImage);
  saveImages(images);

  res.status(201).json(newImage);
});

app.delete("/delete-image/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let images = readImages();
  const imageIndex = images.findIndex(img => img.id === id);

  if (imageIndex === -1) {
    return res.status(404).send("Imagem não encontrada.");
  }

  images.splice(imageIndex, 1);
  saveImages(images);

  res.send("Imagem removida com sucesso.");
});

// Rotas de curtidas
app.get("/curtidas", (req, res) => {
  res.json(readCurtidas());
});

app.post("/like-post/:postId", (req, res) => {
  const { postId } = req.params;
  const { userId, like } = req.body;
  
  const curtidas = readCurtidas();
  
  // Inicializa o contador se não existir
  if (!curtidas[postId]) {
    curtidas[postId] = 0;
  }
  
  // Atualiza a contagem baseada na ação (like/unlike)
  if (like) {
    curtidas[postId]++;
  } else if (curtidas[postId] > 0) {
    curtidas[postId]--;
  }
  
  saveCurtidas(curtidas);
  res.json({ success: true, likes: curtidas[postId] });
});

// Rotas do chat
app.get("/messages/:channel", (req, res) => {
  const { channel } = req.params;
  const chat = readChat();
  if (!(channel in chat)) {
    return res.status(404).send("Canal não encontrado");
  }
  res.json(chat[channel]);
});

app.post("/messages/:channel", (req, res) => {
  const { channel } = req.params;
  const { username, text } = req.body;

  if (!username || !text) {
    return res.status(400).send("username e text são obrigatórios");
  }

  const chat = readChat();
  if (!(channel in chat)) {
    chat[channel] = [];
  }

  chat[channel].push({ username, text });
  saveChat(chat);
  res.status(201).send("Mensagem salva");
});

app.delete("/messages/:channel/:index", (req, res) => {
  const { channel, index } = req.params;
  const idx = parseInt(index);

  const chat = readChat();
  if (!(channel in chat) || isNaN(idx) || idx < 0 || idx >= chat[channel].length) {
    return res.status(404).send("Mensagem não encontrada");
  }

  chat[channel].splice(idx, 1);
  saveChat(chat);
  res.send("Mensagem excluída");
});

// Rotas de usuários
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Campos obrigatórios" });

  const users = readUsers();
  const exists = users.find(u => u.username === username);
  if (exists) return res.status(409).json({ message: "Usuário já existe" });

  users.push({ username, password });
  saveUsers(users);

  res.status(201).json({ message: "Usuário cadastrado com sucesso" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (user || (username === "admin" && password === "admin")) {
    return res.status(200).json({ message: "Login bem-sucedido" });
  } else {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }
});

// Iniciar servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.on("error", (err) => {
  console.error("Erro ao iniciar o servidor:", err);
});
