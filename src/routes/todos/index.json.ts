import type { RequestHandler } from "@sveltejs/kit"
import { api } from "./_api"

export const get: RequestHandler = (request) => {
  return api(request)
}

export const post: RequestHandler<{}, FormData> = (request) => {
  const todo = {
    created_at: new Date(),
    text: request.body.get("text"),
    done: false
  }
  return api(request, todo)
}
