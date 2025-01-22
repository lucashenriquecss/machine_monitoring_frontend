export interface auth {
    data: {
        accessToken: string,
        refreshToken: string,
        idUser: string,
        role: string,
        username: string
    }
}