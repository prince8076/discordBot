const { REST, Routes } =require ('discord.js');

const commands = [
  {
    name: 'create',
    description: 'Creates a new short URL',
  },
];

const rest = new REST({ version: '10' }).setToken('MTI0MjgxMjk1NDgzMTg4MDM5Ng.GmLFtv.TDtCO7EZl01FxYuCOlE4CQW6gSJJ3Ho_bo4SAE');

(async() =>{
try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands('1242812954831880396'), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
})();

