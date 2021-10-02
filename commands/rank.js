const Discord = require("discord.js-12")
const RankController = require('../api/rankController.js')
const arrayIds = [
  {
    nome: 'Julin',
    id: '0x84d390b825644adfedd3f04213e0880cf27f2060'
  },
  {
    nome: 'Fernandes',
    id: '0xae8314f118366d72fbd06caf6e80e872c16acc80'
  },
  {
    nome: 'Trild',
    id: '0x9e9703a54df984c5b64db4ddf68c35b90151ed97'
  }
]

module.exports.run = async(client, message, args) => {
  message.channel.send('processando...')
  let sayMessage = ''
  let listaRank = []
  for (const player of arrayIds) {
    let data = await getRank(player.id)
    listaRank.push(data)
  }
  listaRank = listaRank.sort((a, b) => {
    return b.elo - a.elo
  })
  message.channel.send('-------------------------Rank Axie Infinity-----------------------------')
  listaRank.forEach((player, index) => {
    switch(index) {
      case 0:
        sayMessage += `O Quente: **${player.name}** - ${player.elo} (#${player.rank})\n`
        break
      case 1:
        sayMessage += `Vascão: **${player.name}** - ${player.elo} (#${player.rank})\n`
        break
      case listaRank.length - 1:
        sayMessage += `O Mamador: **${player.name}** - ${player.elo} (#${player.rank})\n`
        break
      default:
        sayMessage += `${index+1}°: **${player.name}** - ${player.elo} (#${player.rank})\n`
        break;
    }
  })
  sayMessage += '-------------------------Boa Sorte a Todos-----------------------------'
  message.delete().catch( O_o => {})
  message.channel.send(sayMessage)
};

async function getRank (id) {
  try {
    const response = await RankController.getRank(id)
    return response.data.leaderboard
  } catch {
    return null
  }
}
