import { Response, Server } from 'miragejs'

type User = {
  name: string
  email: string
  password: string
}

const users: User[] = [
  {
    name: 'Dieferson Soares',
    email: 'diefersonfrontenddeveloper@gmail.com',
    password: '0519Dieferson',
  },
  {
    name: 'Visitante',
    email: 'email@email.com',
    password: '123456',
  },
]

const createServer = () =>
  new Server({
    routes() {
      this.passthrough('https://pokeapi.co/api/v2/***')
      this.passthrough(
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/***',
      )
      this.timing = 1000

      this.post('/api/login', (_schema, request) => {
        let req = JSON.parse(request.requestBody)
        const user = users.find(u => u.email === req.email)

        if (!user || user.password !== req.password) {
          return new Response(400, undefined, {
            message: 'Usuário ou senha incorreto.',
          })
        }

        return new Response(200, undefined, { user })
      })
    },
  })

export default createServer
