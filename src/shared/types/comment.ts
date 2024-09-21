export type Comment = {
    id: number,
    author: CommentAuthor,
    rating: number,
    text: string,
    date: Date,
};

export type CommentAuthor = {
    id: number,
    name: string,
};
