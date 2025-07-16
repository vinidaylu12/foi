// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
// Evento de login
document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            throw new Error("Usuário ou senha incorretos.");
        }

        // Define o role manualmente para o admin
        const role = username === "admin" ? "admin" : "user";
        const user = { username, role };

        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "./news.html";
    } catch (err) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = err.message;
    }
});

// Verifica sessão ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});

    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    const isProtectedPage = window.location.pathname.includes("news.html");

    if (isProtectedPage && !user) {
        window.location.href = "index.html";
    }

    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});

// Funções do Modal
function openModal() {
    document.getElementById("registerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("registerModal").style.display = "none";
    document.getElementById("registerError").style.display = "none";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

// Evento do botão Cadastrar
document.getElementById("submitRegister").addEventListener("click", async () => {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const errorBox = document.getElementById("registerError");

    if (!username || !password) {
        errorBox.textContent = "Preencha todos os campos.";
        errorBox.style.display = "block";
        return;
    }

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (res.status === 409) {
            errorBox.textContent = "Usuário já existe.";
            errorBox.style.display = "block";
        } else if (!res.ok) {
            errorBox.textContent = "Erro ao cadastrar.";
            errorBox.style.display = "block";
        } else {
            closeModal();
            alert("Cadastro realizado com sucesso! Faça login.");
        }
    } catch (err) {
        errorBox.textContent = "Erro na conexão.";
        errorBox.style.display = "block";
    }
});
