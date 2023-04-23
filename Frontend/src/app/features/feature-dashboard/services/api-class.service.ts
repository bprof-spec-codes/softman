import { Config } from 'src/app/core'

export const getAllClassesApi = async () => {
    const data = await (await fetch(`${Config['base-url']}/Class`)).json()
    console.log(data)
}