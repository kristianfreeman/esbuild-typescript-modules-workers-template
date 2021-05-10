import { capitalize } from 'lodash'

export default {
  async fetch(request: Request, env) {
    const url = new URL(request.url)
    const text = url.searchParams.get("text")
    const respText = text ? capitalize(text) : "OK"
    return new Response(respText)
  }
}