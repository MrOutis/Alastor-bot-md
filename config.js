const ownerNumber = ["51931263982@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net


var prefixs = ['!', '.', '#', '$', '&', '/', '>', '?']
// prefixos

const OriginalOwner = '51931263982' 
// mude para seu numero

const menuimg = 'https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/xfythzhkmneqaykro9qg.jpg'
// Link da foto do menu

const registeruser = false
// Se é obrigatório o usuário se registrar para usar os comandos

const panelOn = true
// Liga o modo painel do proprietário no bot

const antinewchatmsg = 'El nuevo anti chat está activado y no eres mi dueño, pronto serás bloqueado'
//mensagem do antinewchat

const antipvmsg = '*🚫 PV BLOQUEADO 🚫*'
//mensagem do antipv

const limitqnt = 9999

const delayantispamcmd = 3
//tempo de delay do antispamcmd (medido por segundos)

//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const titlemenumsgimg = 'BIENVENIDO'
//Título no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundwelcomeimg = `https://images.squarespace-cdn.com/content/v1/5da7a0592a4fea6a5c51d653/1571356610593-WTGPUKXI2WJS8T4Q200Q/banner.jpeg?format=1000w`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundbyeimg = `https://i.imgur.com/2TCj9ri.jpg`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const blockedmsg = '🚫 *Estimado señor, ha sido bloqueado por mi jefe, por favor no me envíe más comandos si no quiere tener una visita.* 🚫'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫 Este comando no está disponible actualmente mi amigo 🚫*'
// mensagem quando alguem solicita um comando bloqueado 

const banmsgtype = '*Bueno bueno bueno, alguien envió un mensaje prohibido, hora del castigo.*'
// mensagem de ban no anti tipos de mensagem

const ativohelp = `Veja bem meu caro amigo, a contagem de mensagens é por grupo e consiste em rankear, listar, remover pessoas de acordo
com a frequência de mensagens no grupo, veja abaixo os comandos para administrar as mensagens do grupo:

checkativo (marcar) - lista a frequência de mensagens do membro marcado
rankativo - rankea as pessoas mais ativas do grupo
banativos (num) - remove membros com uma certa qnt de numeros de msg pra baixo
filtroativo (num) - lista membros com uma certa qnt de numeros de msg pra baixo]
atividade - lista a atividade de todos membros do grupo

Obs: O número de mensagens pode estar impreciso devido a contagem ser pelo bot.`

const adminmsgtype = '*Hola estimado administrador, parece que envió un mensaje prohibido, fingiré que no lo vi*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = '*Aquí no se tolerarán actos depravados, nos vemos en el infierno...*'
// mensagem de ban no antiporn

const adminmsgporn = '*Hola querido adm, enviaste cosas sobre la libido en este grupo, solo fingiré que no vi nada*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = '*Los enlaces no serán tolerados aquí, no importa escoria...*'
// mensagem de ban no antilink

const adminmsglink = '*Hola señor adm, envió un enlace a este grupo, pero voy a fingir que no vi nada*'
// mensagem de quando adm manda link

const msgerr = 'FFF ESPERA UN MOMENTO TALVEZ NUNCA'
// mensagem de erro

const notregister = `*Este comando não está registrado senhor, solicito para que veja o menu*`
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: 'UN momento... ⌛',
    error: {
        stick: 'HAY FALLAS ❌',
    },
    only: {
        group: 'Desafortunadamente, este comando solo está disponible para grupos, PUTIN.! 🚫',
        ownerG: 'Este comando solo lo puede usar mi jefe! 🚫',
        ownerB: 'Este comando solo lo puede usar el grupo de mi jefe! 🚫',
        admin: 'Ponte en tu lugar miembro común 🚫',
        Badmin: 'No soy administrador de este grupo, no hay nada que pueda hacer. 🚫',
    }
}

// CONTATO DO CRIADOR
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu Chefe\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=51931263982:+51 931 26982\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde

const gpvotohelp = (prefix) => {
    return `O sistema de voto gp consiste no sistema normal de voto, porém feito somente para grupos
veja abaixo os comandos e suas funções a seguir:

${prefix}gpinitvoto
${prefix}gpvotoinit - Inicia a votação em grupo
Ex: ${prefix}gpvotoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}gpclearvoto
${prefix}gpvotoclear - Limpa todos os votos

${prefix}gpvotostatus
${prefix}gpstatusvoto - Vê o status atual do voto

${prefix}gpvoto - Vota em uma opção
Ex: ${prefix}gpvoto opção1

${prefix}gpvotofinish
${prefix}gpfinishvoto - Encerra a votação

${prefix}gpbroadvoto
${prefix}gpvotobroad - Faz uma transmissão da votação para todos membros do grupo`
}

const votohelp = (prefix) => {
    return `O sistema de voto consistem em todos os usuários do bot poderem votar e para ter uma boa
experiência, há comandos para administrar essa votação. Veja abaixo os comandos e suas funções a seguir:

${prefix}initvoto
${prefix}votoinit - Inicia a votação geral
Ex: ${prefix}votoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}clearvoto
${prefix}votoclear - Limpa todos os votos

${prefix}votostatus
${prefix}statusvoto - Vê o status atual do voto

${prefix}voto - Vota em uma opção
Ex: ${prefix}voto opção1

${prefix}votofinish
${prefix}finishvoto - Encerra a votação

${prefix}broadvoto
${prefix}votobroad - Faz uma transmissão da votação para todos que usam o bot`
}

// Nem ouse mexer aqui se n quiser que de erro
exports.registeruser = registeruser
exports.gpvotohelp = gpvotohelp
exports.votohelp = votohelp
exports.ativohelp = ativohelp
exports.limitqnt = limitqnt
exports.delayantispamcmd = delayantispamcmd
exports.antinewchatmsg = antinewchatmsg
exports.antipvmsg = antipvmsg
exports.backgroundbyeimg = backgroundbyeimg
exports.backgroundwelcomeimg = backgroundwelcomeimg
exports.titlemenumsgimg = titlemenumsgimg
exports.notregister = notregister
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefixs = prefixs
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
exports.menuimg = menuimg
exports.panelOn = panelOn
