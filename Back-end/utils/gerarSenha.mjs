import bcrypt from 'bcrypt';

export function gerarSenhaAleatoria(length = 10) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let senha = '';
    for (let i = 0; i < length; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
}

export async function gerarHashSenha(senha) {
    const saltRounds = 10;
    const hash = await bcrypt.hash(senha, saltRounds);
    return hash;
}
