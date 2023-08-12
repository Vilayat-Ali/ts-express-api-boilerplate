// middlewares

export class MiddleWare {
    private AuthGuardMiddleware: any;

    constructor() {
        this.AuthGuardMiddleware = {};
    }

    public getAuthGuardMiddleware() {
        return this.AuthGuardMiddleware;
    }
}