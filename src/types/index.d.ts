export interface TokenDecoded {
    id: number,
    roleId: number,
    email: string
  }
  
  declare global {
      namespace Express {
          export interface Request {
              tokenData: TokenDecoded;
          }
      }
  }