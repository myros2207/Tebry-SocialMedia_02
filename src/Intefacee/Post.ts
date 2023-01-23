export interface IPost {
    postId?: number,
    postTitle?: string,
    postContent? : string
    postAuthor?: {
        userFirstName: string,
        userId: number,
        userLogin: string,
        userSecondName: string
    },
    whoLikesCount?: string[],
    comments?: string[],
    images?: {
        imageId: number,
        image: string
    }
}

// export interface IUserPost {
//     postId?: number,
//     postTitle?: string,
//     PostAuthor?: string,
//     whoLikesCount?: string[],
//     comments?: string[],
//     images?: any
// }

export interface IAccountInfo {
    accountId?: number,
    accountLogin?: string,
    accountFirstName?: string,
    accountSecondName?: string,
    accountDescription?: string,
    accountProfileImage?: string,
    accountCountPost? : number
}