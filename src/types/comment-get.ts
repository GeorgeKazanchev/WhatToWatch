export type CommentGet = {
    id: number,
    user: CommentAuthor,
    rating: number,
    comment: string,
    date: Date,
};

export type CommentAuthor = {
    id: number,
    name: string,
};
