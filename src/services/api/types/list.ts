import api from '@services/api'

const list = async (): Promise<string[]> => {
  return await api.get('type').then(response => {
    return response.data.results.map((type: any) => type.name)
  })
}

export default list
