import type { RequestHandler } from "@sveltejs/kit"
import { api } from "./_api"

export const del: RequestHandler = (request) => {
    return api(request)
  }

export const patch: RequestHandler<{}, FormData> = (request) => {
  const todo = {text: request.body.get("text")}
  return api(request, todo)
} 
  