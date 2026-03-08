export const setAuthCookies = (
    res: any,
    accessToken: string,
    refreshToken: string
) => {
    res.cookies("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        maxAge: 15 * 60 * 100,
    });

    res.cookies("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 15 * 60 * 1000,
    })
}