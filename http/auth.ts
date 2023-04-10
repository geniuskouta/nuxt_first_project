
type SessionInfo = {
  sessionId: string
}

export const getSessionInfo = async (): Promise<SessionInfo> => {
  return await new Promise((resolve) => {
    const id = ['tesst', 'tet', 'test'][Math.round(Math.random() * 2)]
    setTimeout(() => resolve({ sessionId: id }), 300)
  })
}
