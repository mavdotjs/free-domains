addSubDomain({
  description: 'Minecraft server', // describe your project in this field
  domain: '1bt.uk', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'mayhem', // desired subdomain name
  owner: {
    email: 'ceo@marinadev.xyz',
  },
  record: {
    A: ['65.108.201.14'],
  },
})
